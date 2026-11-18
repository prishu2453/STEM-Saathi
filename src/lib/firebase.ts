import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocs,
  getFirestore,
  limit,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import type {
  AcademicSession,
  EducationBoard,
  Language,
  LearningPathPreference,
  SchoolClass,
  StudentProgress,
  TeacherAssignment,
  UserRole,
} from '../types/stem';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection(): Promise<void> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

void testConnection();

export { onAuthStateChanged, type User };

export async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function signOutUser(): Promise<void> {
  await signOut(auth);
}

const VALID_ID_REGEX = /^[a-zA-Z0-9_-]+$/;

function clampId(raw: string): string {
  const cleaned = raw.replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 128);
  return cleaned.length > 0 && VALID_ID_REGEX.test(cleaned) ? cleaned : `id-${Date.now()}`;
}

export async function syncUserRecord(
  user: User,
  language: Language,
  role: UserRole,
  fallbackProgress: StudentProgress
): Promise<StudentProgress> {
  const safeUid = clampId(user.uid);
  const profilePath = `users/${safeUid}/public/profile`;
  const privatePath = `users/${safeUid}/private/info`;
  const progressPath = `users/${safeUid}/progress/main`;

  const persistedRole: 'student' | 'teacher' = role === 'teacher' ? 'teacher' : 'student';
  const safeName = (user.displayName || 'STEM Learner').trim().slice(0, 80) || 'STEM Learner';
  const safeEmail = (user.email || 'learner@stemsaathi.edu').trim().slice(0, 160);

  try {
    await setDoc(
      doc(db, 'users', safeUid, 'public', 'profile'),
      {
        uid: safeUid,
        displayName: safeName,
        preferredLanguage: language,
        role: persistedRole,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, profilePath);
  }

  try {
    await setDoc(
      doc(db, 'users', safeUid, 'private', 'info'),
      {
        uid: safeUid,
        email: safeEmail,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, privatePath);
  }

  try {
    const snap = await getDoc(doc(db, 'users', safeUid, 'progress', 'main'));
    if (snap.exists()) {
      const data = snap.data();
      return {
        streakDays: typeof data.streakDays === 'number' ? data.streakDays : fallbackProgress.streakDays,
        completedModules: Array.isArray(data.completedModules)
          ? data.completedModules.slice(0, 50)
          : fallbackProgress.completedModules,
        quizScores:
          data.quizScores && typeof data.quizScores === 'object'
            ? (data.quizScores as Record<string, number>)
            : fallbackProgress.quizScores,
        savedOfflineIds: Array.isArray(data.savedOfflineIds)
          ? data.savedOfflineIds.slice(0, 20)
          : fallbackProgress.savedOfflineIds,
        dailyChallengeDone: Boolean(data.dailyChallengeDone),
        labReadingsCount:
          typeof data.labReadingsCount === 'number'
            ? data.labReadingsCount
            : fallbackProgress.labReadingsCount,
      };
    }

    await setDoc(doc(db, 'users', safeUid, 'progress', 'main'), {
      uid: safeUid,
      xp: 0,
      streakDays: Math.min(Math.max(0, fallbackProgress.streakDays), 3650),
      completedModules: fallbackProgress.completedModules.slice(0, 50).map((s) => s.slice(0, 64)),
      quizScores: fallbackProgress.quizScores,
      savedOfflineIds: fallbackProgress.savedOfflineIds.slice(0, 20).map((s) => s.slice(0, 64)),
      dailyChallengeDone: Boolean(fallbackProgress.dailyChallengeDone),
      labReadingsCount: Math.min(Math.max(0, fallbackProgress.labReadingsCount), 100000),
      gameHighScore: 0,
      updatedAt: serverTimestamp(),
    });
    return fallbackProgress;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, progressPath);
  }
}

export async function saveProgressToFirestore(
  user: User,
  progress: StudentProgress
): Promise<void> {
  const safeUid = clampId(user.uid);
  const progressPath = `users/${safeUid}/progress/main`;

  // Enforce blueprint volumetric constraints before write
  const boundedModules = progress.completedModules.slice(0, 50).map((m) => m.slice(0, 64));
  const boundedOffline = progress.savedOfflineIds.slice(0, 20).map((id) => id.slice(0, 64));
  const boundedQuizEntries = Object.entries(progress.quizScores).slice(0, 20);
  const boundedQuizzes = Object.fromEntries(boundedQuizEntries);

  try {
    await setDoc(
      doc(db, 'users', safeUid, 'progress', 'main'),
      {
        uid: safeUid,
        xp: 0,
        streakDays: Math.min(Math.max(0, Math.round(progress.streakDays)), 3650),
        completedModules: boundedModules,
        quizScores: boundedQuizzes,
        savedOfflineIds: boundedOffline,
        dailyChallengeDone: Boolean(progress.dailyChallengeDone),
        labReadingsCount: Math.min(Math.max(0, Math.round(progress.labReadingsCount)), 100000),
        gameHighScore: 0,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, progressPath);
  }
}

export async function fetchUserAssignments(user: User): Promise<TeacherAssignment[]> {
  const path = 'assignments';
  try {
    const q = query(
      collection(db, 'assignments'),
      where('authorUid', '==', user.uid),
      limit(25)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => {
      const data = d.data();
      return {
        id: String(data.id ?? d.id),
        title: String(data.title ?? ''),
        subject: (data.subject as TeacherAssignment['subject']) || 'Physics',
        targetGrade: String(data.targetGrade ?? 'Grade 11-A'),
        dueDate: String(data.dueDate ?? '2026-11-28'),
        completionRate: typeof data.completionRate === 'number' ? data.completionRate : 0,
      };
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
}

export async function createAssignmentInFirestore(
  user: User,
  input: Omit<TeacherAssignment, 'id'>
): Promise<TeacherAssignment> {
  const safeId = clampId(`asgn-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
  const path = `assignments/${safeId}`;
  const cleanTitle = input.title.trim().slice(0, 140);
  const cleanGrade = input.targetGrade.trim().slice(0, 40) || 'Grade 11-A';
  const cleanDue = input.dueDate.trim().slice(0, 20) || '2026-11-28';

  try {
    await setDoc(doc(db, 'assignments', safeId), {
      id: safeId,
      authorUid: user.uid,
      title: cleanTitle.length >= 2 ? cleanTitle : 'STEM Activity',
      subject: input.subject,
      targetGrade: cleanGrade.length >= 2 ? cleanGrade : 'Grade 11-A',
      dueDate: cleanDue.length >= 8 ? cleanDue : '2026-11-28',
      completionRate: Math.min(100, Math.max(0, input.completionRate)),
      createdAt: serverTimestamp(),
    });
    return {
      id: safeId,
      title: cleanTitle,
      subject: input.subject,
      targetGrade: cleanGrade,
      dueDate: cleanDue,
      completionRate: input.completionRate,
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export interface PersistedMyLearningState {
  learningPath: LearningPathPreference;
  completedChapterIds: string[];
  studiedTopicIds: string[];
  completedExperimentIds: string[];
  bookmarkedTopicIds: string[];
  recentChapterIds: string[];
  chapterQuizScores: Record<string, number>;
  learningTimeSeconds: number;
}

export async function loadMyLearningStateFromFirestore(
  user: User
): Promise<PersistedMyLearningState | null> {
  const safeUid = clampId(user.uid);
  const path = `users/${safeUid}/learning/state`;
  try {
    const snap = await getDoc(doc(db, 'users', safeUid, 'learning', 'state'));
    if (!snap.exists()) return null;
    const d = snap.data();
    const rawClass = typeof d.classLevel === 'number' ? Math.round(d.classLevel) : 8;
    const classLevel: SchoolClass =
      rawClass >= 6 && rawClass <= 12 ? (rawClass as SchoolClass) : 8;
    const board: EducationBoard =
      d.board === 'cbse' || d.board === 'cisce' || d.board === 'state' || d.board === 'other'
        ? d.board
        : 'cbse';
    const session: AcademicSession = d.session === '2024-25' ? '2024-25' : '2025-26';

    return {
      learningPath: {
        classLevel,
        board,
        stateName: typeof d.stateName === 'string' ? d.stateName.slice(0, 64) : '',
        session,
        subject: 'physics',
        configured: Boolean(d.configured),
      },
      completedChapterIds: Array.isArray(d.completedChapterIds)
        ? d.completedChapterIds.slice(0, 100).map((s) => String(s).slice(0, 80))
        : [],
      studiedTopicIds: Array.isArray(d.studiedTopicIds)
        ? d.studiedTopicIds.slice(0, 250).map((s) => String(s).slice(0, 80))
        : [],
      completedExperimentIds: Array.isArray(d.completedExperimentIds)
        ? d.completedExperimentIds.slice(0, 120).map((s) => String(s).slice(0, 80))
        : [],
      bookmarkedTopicIds: Array.isArray(d.bookmarkedTopicIds)
        ? d.bookmarkedTopicIds.slice(0, 100).map((s) => String(s).slice(0, 120))
        : [],
      recentChapterIds: Array.isArray(d.recentChapterIds)
        ? d.recentChapterIds.slice(0, 20).map((s) => String(s).slice(0, 80))
        : [],
      chapterQuizScores:
        d.chapterQuizScores && typeof d.chapterQuizScores === 'object'
          ? Object.fromEntries(
              Object.entries(d.chapterQuizScores as Record<string, unknown>)
                .slice(0, 60)
                .map(([k, v]) => [
                  k.slice(0, 80),
                  typeof v === 'number' ? Math.min(100, Math.max(0, Math.round(v))) : 0,
                ])
            )
          : {},
      learningTimeSeconds:
        typeof d.learningTimeSeconds === 'number'
          ? Math.min(36000000, Math.max(0, Math.round(d.learningTimeSeconds)))
          : 0,
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function saveMyLearningStateToFirestore(
  user: User,
  learningPath: LearningPathPreference,
  progress: StudentProgress
): Promise<void> {
  const safeUid = clampId(user.uid);
  const path = `users/${safeUid}/learning/state`;

  const rawClass = Math.round(learningPath.classLevel || 8);
  const clampedClass = Math.min(12, Math.max(6, rawClass));
  const safeBoard: EducationBoard =
    learningPath.board === 'cbse' ||
    learningPath.board === 'cisce' ||
    learningPath.board === 'state' ||
    learningPath.board === 'other'
      ? learningPath.board
      : 'cbse';
  const safeSession: AcademicSession = learningPath.session === '2024-25' ? '2024-25' : '2025-26';

  const boundedQuizzes = Object.fromEntries(
    Object.entries(progress.chapterQuizScores ?? {})
      .slice(0, 60)
      .map(([k, v]) => [k.slice(0, 80), Math.min(100, Math.max(0, Math.round(Number(v) || 0)))])
  );

  try {
    await setDoc(
      doc(db, 'users', safeUid, 'learning', 'state'),
      {
        uid: safeUid,
        classLevel: clampedClass,
        board: safeBoard,
        stateName: (learningPath.stateName ?? '').slice(0, 64),
        session: safeSession,
        configured: Boolean(learningPath.configured),
        completedChapterIds: (progress.completedChapterIds ?? [])
          .slice(0, 100)
          .map((s) => String(s).slice(0, 80)),
        studiedTopicIds: (progress.studiedTopicIds ?? [])
          .slice(0, 250)
          .map((s) => String(s).slice(0, 80)),
        completedExperimentIds: (progress.completedExperimentIds ?? [])
          .slice(0, 120)
          .map((s) => String(s).slice(0, 80)),
        bookmarkedTopicIds: (progress.bookmarkedTopicIds ?? [])
          .slice(0, 100)
          .map((s) => String(s).slice(0, 120)),
        recentChapterIds: (progress.recentChapterIds ?? [])
          .slice(0, 20)
          .map((s) => String(s).slice(0, 80)),
        chapterQuizScores: boundedQuizzes,
        learningTimeSeconds: Math.min(
          36000000,
          Math.max(0, Math.round(progress.learningTimeSeconds ?? 0))
        ),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}
