import type {
  AcademicSession,
  EducationBoard,
  Language,
  LearningPathPreference,
  PartialLocalizedList,
  PartialLocalizedText,
  SchoolClass,
} from '../types/stem';

/** Small, dependency-free helpers. Kept apart from the big syllabus data so the home page loads fast. */
export const SCHOOL_CLASSES: SchoolClass[] = [6, 7, 8, 9, 10, 11, 12];

export const EDUCATION_BOARDS: { id: EducationBoard; label: PartialLocalizedText }[] = [
  { id: 'cbse', label: { en: 'CBSE (NCERT)', hi: 'CBSE (NCERT)', kn: 'CBSE (NCERT)' } },
  { id: 'cisce', label: { en: 'CISCE (ICSE)', hi: 'CISCE (ICSE)', kn: 'CISCE (ICSE)' } },
  { id: 'state', label: { en: 'State Board', hi: 'राज्य बोर्ड', kn: 'ರಾಜ್ಯ ಮಂಡಳಿ' } },
  { id: 'other', label: { en: 'Other / Not sure', hi: 'अन्य / निश्चित नहीं', kn: 'ಇತರೆ / ಖಚಿತವಿಲ್ಲ' } },
];

export const STATE_BOARD_STATES: string[] = [
  'Karnataka',
  'Maharashtra',
  'Bihar',
  'Telangana',
  'Andhra Pradesh',
  'Tamil Nadu',
  'Kerala',
  'Uttar Pradesh',
  'West Bengal',
  'Madhya Pradesh',
  'Rajasthan',
  'Gujarat',
  'Other Indian State / Board',
];

export const ACADEMIC_SESSIONS: { id: AcademicSession; label: PartialLocalizedText }[] = [
  {
    id: '2025-26',
    label: {
      en: '2025–26 (Current — NCERT Curiosity)',
      hi: '2025–26 (नवीनतम — NCERT Curiosity)',
      kn: '2025–26 (ಪ್ರಸ್ತುತ — NCERT Curiosity)',
    },
  },
  {
    id: '2024-25',
    label: {
      en: '2024–25 / Earlier edition',
      hi: '2024–25 / पिछला संस्करण',
      kn: '2024–25 / ಹಿಂದಿನ ಆವೃತ್ತಿ',
    },
  },
];

export const DEFAULT_LEARNING_PATH: LearningPathPreference = {
  classLevel: 8,
  board: 'cbse',
  stateName: '',
  session: '2025-26',
  subject: 'physics',
  configured: false,
};

export function resolveLocalizedText(
  value: PartialLocalizedText,
  language: Language
): { text: string; isFallbackEnglish: boolean } {
  const candidate = value[language]?.trim();
  if (candidate) {
    return { text: candidate, isFallbackEnglish: false };
  }
  return { text: value.en, isFallbackEnglish: language !== 'en' };
}

export function resolveLocalizedList(
  value: PartialLocalizedList,
  language: Language
): { items: string[]; isFallbackEnglish: boolean } {
  const candidate = value[language];
  if (candidate && candidate.length > 0) {
    return { items: candidate, isFallbackEnglish: false };
  }
  return { items: value.en, isFallbackEnglish: language !== 'en' };
}

export function getCurriculumPackId(params: {
  board: EducationBoard;
  stateName?: string;
  classLevel: SchoolClass;
  session: AcademicSession;
  chapterId: string;
  language: Language;
}): string {
  const stateSlug =
    params.board === 'state' && params.stateName
      ? params.stateName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      : 'all';
  return `pack-curr-${params.board}-${stateSlug}-c${params.classLevel}-${params.session}-${params.chapterId}-${params.language}`;
}

export function formatLearningPathSummary(
  path: LearningPathPreference,
  language: Language
): string {
  const boardEntry = EDUCATION_BOARDS.find((b) => b.id === path.board);
  const boardLabel = boardEntry ? resolveLocalizedText(boardEntry.label, language).text : path.board.toUpperCase();
  const statePart = path.board === 'state' && path.stateName ? ` (${path.stateName})` : '';
  const classPrefix = language === 'hi' ? 'कक्षा' : language === 'kn' ? 'ತರಗತಿ' : 'Class';
  return `${classPrefix} ${path.classLevel} · ${boardLabel}${statePart} · ${path.session}`;
}

