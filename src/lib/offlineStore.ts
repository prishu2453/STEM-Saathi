import { getCurriculumPackId, resolveLocalizedList, resolveLocalizedText } from '../data/learningPathCore';
import type { CurriculumChapter } from '../data/curriculumCatalogue';
import { RESOURCE_PACKS } from '../data/curriculum';
import {
  PROJECTILE_EXPERIMENT_NOTES,
  PROJECTILE_MISSIONS,
  PROJECTILE_QUIZ,
  PROJECTILE_SCIENCE_NOTES,
} from '../data/projectileMission';
import type {
  AcademicSession,
  EducationBoard,
  Language,
  OfflinePackCurriculumInfo,
  OfflinePackMeta,
  ProjectileAttemptRecord,
  ResourcePack,
  SchoolClass,
  StudentProgress,
} from '../types/stem';

const DB_NAME = 'stem-saathi-offline-v1';
const DB_VERSION = 1;
const LESSON_CACHE_NAME = 'stem-saathi-lessons-v1';
const MEDIA_CACHE_NAME = 'stem-saathi-media-v1';

export const PROJECTILE_PACK_ID = 'pack-projectile-lesson';
export const PROJECTILE_MEDIA_URL = '/src/assets/images/physics_world_hero_1794896377515.jpg';
export const PROJECTILE_MEDIA_SIZE_BYTES = 728000; // ~711 KB

interface SyncQueueItem {
  id: string;
  type: 'progress' | 'attempt';
  createdAt: string;
}

function isIndexedDbAvailable(): boolean {
  return typeof window !== 'undefined' && 'indexedDB' in window;
}

function openOfflineDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!isIndexedDbAvailable()) {
      reject(new Error('IndexedDB is unavailable in this browser.'));
      return;
    }
    const req = window.indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('lessonPacks')) {
        db.createObjectStore('lessonPacks', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('attempts')) {
        db.createObjectStore('attempts', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('syncQueue')) {
        db.createObjectStore('syncQueue', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('progress')) {
        db.createObjectStore('progress', { keyPath: 'key' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('Failed to open offline database.'));
  });
}

async function idbPut<T>(storeName: string, value: T): Promise<void> {
  const db = await openOfflineDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(value);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error ?? new Error(`Failed writing to ${storeName}`));
    };
  });
}

async function idbGet<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
  const db = await openOfflineDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const req = tx.objectStore(storeName).get(key);
    req.onsuccess = () => {
      db.close();
      resolve(req.result as T | undefined);
    };
    req.onerror = () => {
      db.close();
      reject(req.error ?? new Error(`Failed reading ${storeName}`));
    };
  });
}

async function idbGetAll<T>(storeName: string): Promise<T[]> {
  if (!isIndexedDbAvailable()) return [];
  const db = await openOfflineDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const req = tx.objectStore(storeName).getAll();
    req.onsuccess = () => {
      db.close();
      resolve((req.result as T[]) ?? []);
    };
    req.onerror = () => {
      db.close();
      reject(req.error ?? new Error(`Failed listing ${storeName}`));
    };
  });
}

async function idbDelete(storeName: string, key: IDBValidKey): Promise<void> {
  if (!isIndexedDbAvailable()) return;
  const db = await openOfflineDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).delete(key);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error ?? new Error(`Failed deleting from ${storeName}`));
    };
  });
}

async function idbClear(storeName: string): Promise<void> {
  if (!isIndexedDbAvailable()) return;
  const db = await openOfflineDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).clear();
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error ?? new Error(`Failed clearing ${storeName}`));
    };
  });
}

export interface ServiceWorkerEnvironmentStatus {
  supported: boolean;
  registered: boolean;
  controlling: boolean;
  cacheApiAvailable: boolean;
}

export async function getOfflineCapabilities(): Promise<ServiceWorkerEnvironmentStatus> {
  const cacheApiAvailable = typeof window !== 'undefined' && 'caches' in window;
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
    return { supported: false, registered: false, controlling: false, cacheApiAvailable };
  }
  try {
    const reg = await navigator.serviceWorker.getRegistration();
    return {
      supported: true,
      registered: Boolean(reg && (reg.active || reg.installing || reg.waiting)),
      controlling: Boolean(navigator.serviceWorker.controller),
      cacheApiAvailable,
    };
  } catch {
    return { supported: true, registered: false, controlling: false, cacheApiAvailable };
  }
}

export async function saveOfflineProgressRecord(progress: StudentProgress): Promise<void> {
  if (!isIndexedDbAvailable()) return;
  await idbPut('progress', {
    key: 'main',
    progress,
    updatedAt: new Date().toISOString(),
  });
}

export async function loadOfflineProgressRecord(): Promise<StudentProgress | null> {
  if (!isIndexedDbAvailable()) return null;
  try {
    const row = await idbGet<{ key: string; progress: StudentProgress }>('progress', 'main');
    return row?.progress ?? null;
  } catch {
    return null;
  }
}

export async function queuePendingSync(type: 'progress' | 'attempt'): Promise<number> {
  if (!isIndexedDbAvailable()) return 0;
  await idbPut<SyncQueueItem>('syncQueue', {
    id: `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type,
    createdAt: new Date().toISOString(),
  });
  return getPendingSyncCount();
}

export async function getPendingSyncCount(): Promise<number> {
  try {
    const items = await idbGetAll<SyncQueueItem>('syncQueue');
    return items.length;
  } catch {
    return 0;
  }
}

export async function clearPendingSyncQueue(): Promise<void> {
  await idbClear('syncQueue');
  try {
    const attempts = await idbGetAll<ProjectileAttemptRecord>('attempts');
    await Promise.all(
      attempts
        .filter((a) => !a.synced)
        .map((a) => idbPut('attempts', { ...a, synced: true }))
    );
  } catch {
    // ignore attempt sync flag update failure
  }
}

export async function recordProjectileAttempt(
  attempt: ProjectileAttemptRecord
): Promise<ProjectileAttemptRecord[]> {
  if (isIndexedDbAvailable()) {
    await idbPut('attempts', attempt);
    if (!attempt.synced) {
      await queuePendingSync('attempt');
    }
    return getProjectileAttempts();
  }
  return [attempt];
}

export async function getProjectileAttempts(): Promise<ProjectileAttemptRecord[]> {
  try {
    const list = await idbGetAll<ProjectileAttemptRecord>('attempts');
    return list.sort((a, b) => b.timestamp.localeCompare(a.timestamp)).slice(0, 25);
  } catch {
    return [];
  }
}

export interface StoredLessonRecord {
  id: string;
  meta: OfflinePackMeta;
  payload: unknown;
}

export async function getDownloadedPackMetas(): Promise<OfflinePackMeta[]> {
  try {
    const records = await idbGetAll<StoredLessonRecord>('lessonPacks');
    return records.map((r) => r.meta);
  } catch {
    return [];
  }
}

export async function getOfflinePackMeta(packId: string): Promise<OfflinePackMeta | null> {
  try {
    const rec = await idbGet<StoredLessonRecord>('lessonPacks', packId);
    if (!rec) return null;
    // Verify Cache Storage presence if Cache API is supported
    if (typeof window !== 'undefined' && 'caches' in window) {
      const cache = await caches.open(LESSON_CACHE_NAME);
      const match = await cache.match(`/offline-packs/${packId}.json`);
      if (!match) {
        return null;
      }
    }
    return rec.meta;
  } catch {
    return null;
  }
}

export async function downloadProjectileLessonPack(options: {
  includeMedia: boolean;
  onStep?: (label: string) => void;
}): Promise<OfflinePackMeta> {
  options.onStep?.('Packaging lesson, quiz & offline hints...');

  const packPayload = {
    id: PROJECTILE_PACK_ID,
    version: '1.0.0',
    downloadedAt: new Date().toISOString(),
    missions: PROJECTILE_MISSIONS,
    scienceNotes: PROJECTILE_SCIENCE_NOTES,
    experimentNotes: PROJECTILE_EXPERIMENT_NOTES,
    quiz: PROJECTILE_QUIZ,
    formulas: RESOURCE_PACKS.find((p) => p.id === 'pack-physics-formulas')?.content ?? '',
  };

  const json = JSON.stringify(packPayload);
  const coreBlob = new Blob([json], { type: 'application/json' });
  const cacheUrls = [`/offline-packs/${PROJECTILE_PACK_ID}.json`];

  if (typeof window !== 'undefined' && 'caches' in window) {
    options.onStep?.('Saving lesson bundle to browser Cache Storage...');
    const lessonCache = await caches.open(LESSON_CACHE_NAME);
    await lessonCache.put(
      `/offline-packs/${PROJECTILE_PACK_ID}.json`,
      new Response(coreBlob, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': String(coreBlob.size),
        },
      })
    );

    // Warm essential shell routes so reload works cleanly when SW is active
    for (const url of ['/', '/index.html', '/icon.svg']) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          await lessonCache.put(url, res);
          cacheUrls.push(url);
        }
      } catch {
        // Ignore if currently offline while repacking local payload
      }
    }
  }

  let mediaSizeBytes = 0;
  let mediaCached = false;
  if (options.includeMedia) {
    options.onStep?.('Downloading optional physics diagram (~711 KB)...');
    try {
      const res = await fetch(PROJECTILE_MEDIA_URL);
      if (!res.ok) {
        throw new Error('Could not fetch illustration image.');
      }
      const blob = await res.blob();
      mediaSizeBytes = blob.size;
      if (typeof window !== 'undefined' && 'caches' in window) {
        const mediaCache = await caches.open(MEDIA_CACHE_NAME);
        await mediaCache.put(
          PROJECTILE_MEDIA_URL,
          new Response(blob, {
            headers: {
              'Content-Type': blob.type || 'image/jpeg',
              'Content-Length': String(blob.size),
            },
          })
        );
      }
      cacheUrls.push(PROJECTILE_MEDIA_URL);
      mediaCached = true;
    } catch {
      mediaCached = false;
      mediaSizeBytes = 0;
    }
  }

  const meta: OfflinePackMeta = {
    id: PROJECTILE_PACK_ID,
    title: 'Projectile Motion Interactive Lesson Pack',
    version: '1.0.0',
    downloadedAt: new Date().toISOString(),
    coreSizeBytes: coreBlob.size,
    mediaSizeBytes,
    includesMedia: mediaCached,
    cacheUrls,
  };

  options.onStep?.('Saving structured lesson to IndexedDB...');
  await idbPut<StoredLessonRecord>('lessonPacks', {
    id: PROJECTILE_PACK_ID,
    meta,
    payload: packPayload,
  });

  // Verify read-back before returning
  const verified = await getOfflinePackMeta(PROJECTILE_PACK_ID);
  if (!verified) {
    throw new Error('Could not verify saved offline lesson in browser storage.');
  }
  return verified;
}

export async function downloadResourceStudyPack(pack: ResourcePack): Promise<OfflinePackMeta> {
  const json = JSON.stringify({
    id: pack.id,
    domain: pack.domain,
    title: pack.title,
    format: pack.format,
    content: pack.content,
    downloadedAt: new Date().toISOString(),
  });
  const blob = new Blob([json], { type: 'application/json' });
  const cacheUrl = `/offline-packs/${pack.id}.json`;

  if (typeof window !== 'undefined' && 'caches' in window) {
    const cache = await caches.open(LESSON_CACHE_NAME);
    await cache.put(
      cacheUrl,
      new Response(blob, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': String(blob.size),
        },
      })
    );
  }

  const meta: OfflinePackMeta = {
    id: pack.id,
    title: pack.title.en,
    version: '1.0.0',
    downloadedAt: new Date().toISOString(),
    coreSizeBytes: blob.size,
    mediaSizeBytes: 0,
    includesMedia: false,
    cacheUrls: [cacheUrl],
  };

  await idbPut<StoredLessonRecord>('lessonPacks', {
    id: pack.id,
    meta,
    payload: { content: pack.content, title: pack.title },
  });

  return meta;
}

export function buildCurriculumChapterPayload(params: {
  chapter: CurriculumChapter;
  classLevel: SchoolClass;
  board: EducationBoard;
  stateName?: string;
  session: AcademicSession;
  language: Language;
  sourceTitle: string;
  sourceUrl: string;
}) {
  const { chapter, classLevel, board, stateName, session, language, sourceTitle, sourceUrl } = params;
  const chapterTitle = resolveLocalizedText(chapter.title, language);
  const conceptSummary = resolveLocalizedText(chapter.conceptSummary, language);
  return {
    id: getCurriculumPackId({
      board,
      stateName,
      classLevel,
      session,
      chapterId: chapter.id,
      language,
    }),
    classLevel,
    board,
    stateName: board === 'state' ? stateName : undefined,
    session,
    language,
    textbookName: chapter.textbookName,
    sourceTitle,
    sourceUrl,
    chapterNumber: chapter.chapterNumber,
    chapterTitle: chapterTitle.text,
    conceptSummary: conceptSummary.text,
    experiments: chapter.experiments.map((exp) => ({
      id: exp.id,
      relationType: exp.relationType,
      activityMode: exp.activityMode,
      title: resolveLocalizedText(exp.title, language).text,
      objective: resolveLocalizedText(exp.objective, language).text,
      materials: resolveLocalizedList(exp.materials, language).items,
      safetyNote: resolveLocalizedText(exp.safetyNote, language).text,
      steps: resolveLocalizedList(exp.steps, language).items,
      observationColumns: resolveLocalizedList(exp.observationTable.columns, language).items,
      observationRows: exp.observationTable.sampleRows,
      predictionQuestion: resolveLocalizedText(exp.predictionQuestion, language).text,
      predictionOptions: resolveLocalizedList(exp.predictionOptions, language).items,
      hints: resolveLocalizedList(exp.hints, language).items,
      whyItHappens: resolveLocalizedText(exp.whyItHappens, language).text,
    })),
    downloadedAt: new Date().toISOString(),
  };
}

export function estimateCurriculumChapterPackBytes(params: {
  chapter: CurriculumChapter;
  classLevel: SchoolClass;
  board: EducationBoard;
  stateName?: string;
  session: AcademicSession;
  language: Language;
  sourceTitle: string;
  sourceUrl: string;
}): number {
  const payload = buildCurriculumChapterPayload(params);
  return new Blob([JSON.stringify(payload)], { type: 'application/json' }).size;
}

export async function downloadCurriculumChapterPack(params: {
  chapter: CurriculumChapter;
  classLevel: SchoolClass;
  board: EducationBoard;
  stateName?: string;
  session: AcademicSession;
  language: Language;
  sourceTitle: string;
  sourceUrl: string;
}): Promise<OfflinePackMeta> {
  const payload = buildCurriculumChapterPayload(params);
  const packId = payload.id;
  const json = JSON.stringify(payload);
  const blob = new Blob([json], { type: 'application/json' });
  const cacheUrl = `/offline-packs/${packId}.json`;

  if (typeof window !== 'undefined' && 'caches' in window) {
    const cache = await caches.open(LESSON_CACHE_NAME);
    await cache.put(
      cacheUrl,
      new Response(blob, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': String(blob.size),
        },
      })
    );
  }

  const curriculumInfo: OfflinePackCurriculumInfo = {
    classLevel: params.classLevel,
    board: params.board,
    stateName: params.board === 'state' ? params.stateName : undefined,
    session: params.session,
    chapterId: params.chapter.id,
    chapterNumber: params.chapter.chapterNumber,
    chapterTitle: payload.chapterTitle,
    language: params.language,
  };

  const boardTag =
    params.board === 'state' && params.stateName
      ? `${params.stateName} State Board`
      : params.board.toUpperCase();

  const meta: OfflinePackMeta = {
    id: packId,
    title: `Class ${params.classLevel} ${boardTag} · Ch ${params.chapter.chapterNumber}: ${payload.chapterTitle} (${params.language.toUpperCase()})`,
    version: '1.0.0',
    downloadedAt: payload.downloadedAt,
    coreSizeBytes: blob.size,
    mediaSizeBytes: 0,
    includesMedia: false,
    cacheUrls: [cacheUrl],
    curriculum: curriculumInfo,
  };

  await idbPut<StoredLessonRecord>('lessonPacks', {
    id: packId,
    meta,
    payload,
  });

  const verified = await getOfflinePackMeta(packId);
  if (!verified) {
    throw new Error('Could not verify saved chapter pack in offline storage.');
  }
  return verified;
}

export async function removeOfflinePack(packId: string): Promise<void> {
  await idbDelete('lessonPacks', packId);
  if (typeof window !== 'undefined' && 'caches' in window) {
    const lessonCache = await caches.open(LESSON_CACHE_NAME);
    await lessonCache.delete(`/offline-packs/${packId}.json`);
    if (packId === PROJECTILE_PACK_ID) {
      const mediaCache = await caches.open(MEDIA_CACHE_NAME);
      await mediaCache.delete(PROJECTILE_MEDIA_URL);
    }
  }
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}
