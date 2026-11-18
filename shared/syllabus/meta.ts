import type {
  AcademicSession,
  EducationBoard,
  PartialLocalizedText,
  SchoolClass,
} from '../../src/types/stem';
import type {
  BiologyProcessItem,
  ChapterDefinitionItem,
  ChapterFormulaItem,
  ChapterMcqItem,
  ChapterQuestionItem,
  ChapterTopicItem,
  ChemicalEquationItem,
  DiagramKind,
  RichChapterData,
  SolvedNumericalItem,
  StructuredExperiment,
} from './types';

export const SCHOOL_CLASSES: SchoolClass[] = [6, 7, 8, 9, 10, 11, 12];

export const EDUCATION_BOARDS: { id: EducationBoard; label: PartialLocalizedText }[] = [
  {
    id: 'cbse',
    label: { en: 'CBSE', hi: 'CBSE (सीबीएसई)', kn: 'CBSE (ಸಿಬಿಎಸ್‌ಇ)' },
  },
  {
    id: 'cisce',
    label: { en: 'ICSE (CISCE)', hi: 'ICSE (आईसीएसई)', kn: 'ICSE (ಐಸಿಎಸ್‌ಇ)' },
  },
  {
    id: 'state',
    label: { en: 'State Board', hi: 'राज्य बोर्ड', kn: 'ರಾಜ್ಯ ಮಂಡಳಿ' },
  },
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
    label: { en: '2025–26 (Latest)', hi: '2025–26 (नवीनतम)', kn: '2025–26 (ಇತ್ತೀಚಿನ)' },
  },
  {
    id: '2024-25',
    label: { en: '2024–25', hi: '2024–25', kn: '2024–25' },
  },
];

export interface ChapterBuilderInput {
  id: string;
  chapterNumber: number;
  title: PartialLocalizedText;
  primarySubject: 'physics' | 'chemistry' | 'biology';
  topicTag: PartialLocalizedText;
  textbookName: string;
  board: EducationBoard;
  stateName?: string;
  classLevel: SchoolClass;
  session: AcademicSession;
  conceptSummary: PartialLocalizedText;
  topics: ChapterTopicItem[];
  definitions: ChapterDefinitionItem[];
  keyConcepts: { en: string[]; hi?: string[]; kn?: string[] };
  diagramKind: DiagramKind;
  diagramCaption: PartialLocalizedText;
  formulas?: ChapterFormulaItem[];
  solvedNumericals?: SolvedNumericalItem[];
  chemicalEquations?: ChemicalEquationItem[];
  biologyProcesses?: BiologyProcessItem[];
  realLifeApplications: { en: string[]; hi?: string[]; kn?: string[] };
  revisionNotes: { en: string[]; hi?: string[]; kn?: string[] };
  chapterQuestions: ChapterQuestionItem[];
  mcqs: ChapterMcqItem[];
  experiments: Omit<
    StructuredExperiment,
    'chapterId' | 'chapterNumber' | 'chapterTitle' | 'subject' | 'classLevel' | 'board' | 'stateName'
  >[];
}

export function buildChapter(input: ChapterBuilderInput): RichChapterData {
  return {
    id: input.id,
    chapterNumber: input.chapterNumber,
    title: input.title,
    primarySubject: input.primarySubject,
    topicTag: input.topicTag,
    textbookName: input.textbookName,
    board: input.board,
    stateName: input.stateName,
    classLevel: input.classLevel,
    session: input.session,
    conceptSummary: input.conceptSummary,
    topics: input.topics,
    definitions: input.definitions,
    keyConcepts: input.keyConcepts,
    diagramKind: input.diagramKind,
    diagramCaption: input.diagramCaption,
    formulas: input.formulas ?? [],
    solvedNumericals: input.solvedNumericals ?? [],
    chemicalEquations: input.chemicalEquations,
    biologyProcesses: input.biologyProcesses,
    realLifeApplications: input.realLifeApplications,
    revisionNotes: input.revisionNotes,
    chapterQuestions: input.chapterQuestions,
    mcqs: input.mcqs,
    experiments: input.experiments.map((exp) => ({
      ...exp,
      chapterId: input.id,
      chapterNumber: input.chapterNumber,
      chapterTitle: input.title,
      subject: input.primarySubject,
      classLevel: input.classLevel,
      board: input.board,
      stateName: input.stateName,
    })),
  };
}
