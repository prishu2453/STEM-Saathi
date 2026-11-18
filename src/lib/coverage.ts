import { ALL_SYLLABUS_RECORDS } from '../../shared/syllabus/index';
import type { BoardSyllabusRecord, SyllabusSubject } from '../../shared/syllabus/types';
import { CBSE_ROADMAP, pendingRoadmap } from '../data/cbseRoadmap';
import { VERIFIED_SYLLABUS, verificationKey, type SyllabusVerification } from '../data/verification';
import type { EducationBoard, SchoolClass } from '../types/stem';

export type CoverageStatus = 'verified' | 'list-covered' | 'partial' | 'preparing';
export type CoverageSubject = SyllabusSubject | 'mathematics';

export interface Coverage {
  status: CoverageStatus;
  chaptersCovered: number;
  /** Official chapter count, only where the project holds an official chapter list */
  chaptersOfficial?: number;
  missingTitles: string[];
  source?: { title: string; url: string };
  session?: string;
  dataDate?: string;
  textbook?: string;
  verification?: SyllabusVerification;
}

export const STATUS_TEXT: Record<CoverageStatus, { en: string; hi: string; kn: string }> = {
  verified: { en: 'Verified by a teacher', hi: 'शिक्षक द्वारा सत्यापित', kn: 'ಶಿಕ್ಷಕರಿಂದ ಪರಿಶೀಲಿತ' },
  'list-covered': { en: 'Chapter list covered · not yet teacher-checked', hi: 'अध्याय सूची पूरी · शिक्षक की जाँच बाकी', kn: 'ಅಧ್ಯಾಯ ಪಟ್ಟಿ ಪೂರ್ಣ · ಶಿಕ್ಷಕರ ಪರಿಶೀಲನೆ ಬಾಕಿ' },
  partial: { en: 'Partly covered', hi: 'आंशिक रूप से उपलब्ध', kn: 'ಭಾಗಶಃ ಲಭ್ಯ' },
  preparing: { en: 'Being prepared', hi: 'तैयारी में', kn: 'ತಯಾರಿಯಲ್ಲಿದೆ' },
};
export const STATUS_EXPLAIN: Record<CoverageStatus, { en: string; hi: string; kn: string }> = {
  verified: { en: 'A named teacher checked this against the official syllabus.', hi: 'एक नामित शिक्षक ने इसे आधिकारिक पाठ्यक्रम से मिलाया है।', kn: 'ಹೆಸರಿಸಿದ ಶಿಕ್ಷಕರು ಇದನ್ನು ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮದೊಂದಿಗೆ ಹೋಲಿಸಿದ್ದಾರೆ.' },
  'list-covered': { en: 'Every chapter in the official list held by this project has a lesson. A teacher has not yet checked the lessons.', hi: 'इस परियोजना में रखी आधिकारिक सूची के हर अध्याय का पाठ है। शिक्षक ने अभी पाठों की जाँच नहीं की।', kn: 'ಈ ಯೋಜನೆಯಲ್ಲಿರುವ ಅಧಿಕೃತ ಪಟ್ಟಿಯ ಪ್ರತಿ ಅಧ್ಯಾಯಕ್ಕೂ ಪಾಠ ಇದೆ. ಶಿಕ್ಷಕರು ಇನ್ನೂ ಪಾಠಗಳನ್ನು ಪರಿಶೀಲಿಸಿಲ್ಲ.' },
  partial: { en: 'Some chapters are available. The rest of the official list is still to be added. Do not treat this as the full syllabus.', hi: 'कुछ अध्याय उपलब्ध हैं। आधिकारिक सूची के बाकी अध्याय जोड़ने हैं। इसे पूरा पाठ्यक्रम न समझें।', kn: 'ಕೆಲವು ಅಧ್ಯಾಯಗಳು ಲಭ್ಯ. ಅಧಿಕೃತ ಪಟ್ಟಿಯ ಉಳಿದವನ್ನು ಸೇರಿಸಬೇಕಿದೆ. ಇದನ್ನು ಪೂರ್ಣ ಪಠ್ಯಕ್ರಮ ಎಂದು ಭಾವಿಸಬೇಡಿ.' },
  preparing: { en: 'No lessons yet for this selection.', hi: 'इस चयन के लिए अभी कोई पाठ नहीं।', kn: 'ಈ ಆಯ್ಕೆಗೆ ಇನ್ನೂ ಪಾಠಗಳಿಲ್ಲ.' },
};

function findRecord(classLevel: SchoolClass, board: EducationBoard, stateName: string | undefined): BoardSyllabusRecord | undefined {
  const eff = board === 'other' ? 'cbse' : board;
  const want = (stateName ?? '').trim().toLowerCase();
  return ALL_SYLLABUS_RECORDS.find(
    (r) => r.classLevel === classLevel && r.board === eff && (eff !== 'state' || (r.stateName ?? '').trim().toLowerCase() === want)
  );
}

export function getCoverage(classLevel: SchoolClass, board: EducationBoard, stateName: string | undefined, subject: CoverageSubject): Coverage {
  const rec = findRecord(classLevel, board, stateName);
  const chapters = rec && subject !== 'mathematics' ? rec.chapters.filter((c) => c.primarySubject === subject) : [];
  const base: Coverage = {
    status: 'preparing',
    chaptersCovered: chapters.length,
    missingTitles: [],
    source: rec ? { title: rec.sourceTitle, url: rec.sourceUrl } : undefined,
    session: rec?.session,
    dataDate: rec?.lastVerified,
    textbook: rec?.textbookName,
  };
  if (!rec || chapters.length === 0) return base;

  const human = VERIFIED_SYLLABUS[verificationKey(board === 'other' ? 'cbse' : board, stateName, classLevel, subject)];
  let status: CoverageStatus = 'partial';
  let official: number | undefined;
  let missing: string[] = [];
  const road = rec.board === 'cbse' ? CBSE_ROADMAP[classLevel]?.[subject as 'physics' | 'chemistry'] : undefined;
  if (road) {
    official = road.length;
    missing = pendingRoadmap(classLevel, subject, chapters.map((c) => c.title.en)).map((r) => `Ch ${r.no}: ${r.title}`);
    if (missing.length === 0) status = 'list-covered';
  }
  const covered = official !== undefined ? official - missing.length : chapters.length;
  if (human) status = 'verified';
  return { ...base, status, chaptersCovered: covered, chaptersOfficial: official, missingTitles: missing, verification: human };
}

export const COVERAGE_SUBJECTS: CoverageSubject[] = ['physics', 'chemistry', 'biology', 'mathematics'];
export const COVERAGE_CLASSES: SchoolClass[] = [6, 7, 8, 9, 10, 11, 12];

export function coverageSummary(): Record<CoverageStatus, number> {
  const out: Record<CoverageStatus, number> = { verified: 0, 'list-covered': 0, partial: 0, preparing: 0 };
  const boards: { board: EducationBoard; state?: string }[] = [
    { board: 'cbse' },
    { board: 'cisce' },
    ...Array.from(new Set(ALL_SYLLABUS_RECORDS.filter((r) => r.board === 'state').map((r) => r.stateName!))).map((s) => ({ board: 'state' as const, state: s })),
  ];
  for (const b of boards) for (const c of COVERAGE_CLASSES) for (const s of COVERAGE_SUBJECTS) out[getCoverage(c, b.board, b.state, s).status]++;
  return out;
}
