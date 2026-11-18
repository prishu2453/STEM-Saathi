import { makeChapter } from './chapterKit';
import { SPECS_ICSE_9 } from './icsePhysics9';
import { SPECS_ICSE_10_A } from './icsePhysics10a';
import { SPECS_ICSE_10_B } from './icsePhysics10b';
import { SPECS_XI_A } from './cbsePhysicsXIa';
import { SPECS_XI_B } from './cbsePhysicsXIb';
import { SPECS_XII } from './cbsePhysicsXII';
import type { RichChapterData } from './types';

/**
 * Extra ICSE / ISC Physics chapters, keyed by syllabus record id.
 * - ICSE 9/10: written against the CISCE unit list (see shared/syllabus/icsePhysics*.ts).
 * - ISC 11/12: the CISCE unit titles match the NCERT chapter topics, so the same lessons are reused with
 *   ISC ids and labels. ISC-specific extras (practical syllabus, derivations) are NOT included.
 */
const isc = (cls: 11 | 12, specs: typeof SPECS_XI_A) =>
  specs.map((s) =>
    makeChapter(s, {
      board: 'cisce',
      textbook: `ISC Physics — Class ${cls === 11 ? 'XI' : 'XII'} (CISCE units; lessons shared with NCERT topics)`,
      idFrom: cls === 11 ? 'cbse11' : 'cbse12',
      idTo: cls === 11 ? 'isc11' : 'isc12',
    })
  );

export const ICSE_EXTRA_PHYSICS: Record<string, RichChapterData[]> = {
  'icse-c9-2025-26': SPECS_ICSE_9.map((s) => makeChapter(s, { board: 'cisce', textbook: 'ICSE Physics — Class 9 (CISCE)' })),
  'icse-c10-2025-26': [...SPECS_ICSE_10_A, ...SPECS_ICSE_10_B].map((s) => makeChapter(s, { board: 'cisce', textbook: 'ICSE Physics — Class 10 (CISCE)' })),
  'icse-c11-2025-26': isc(11, [...SPECS_XI_A, ...SPECS_XI_B]),
  'icse-c12-2025-26': isc(12, SPECS_XII),
};
