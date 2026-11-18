import type { ExperimentId } from '../../src/data/physicsExperiments';
import type {
  AcademicSession,
  ActivityModeFilter,
  CurriculumSubjectFilter,
  EducationBoard,
  ExperimentRelationType,
  PartialLocalizedList,
  PartialLocalizedText,
  SchoolClass,
  SupportingWorldId,
} from '../../src/types/stem';

export type SyllabusSubject = 'physics' | 'chemistry' | 'biology';

export type DiagramKind =
  | 'projectile-motion'
  | 'force-friction'
  | 'pressure-depth'
  | 'electric-circuit'
  | 'magnet-induction'
  | 'optics-lens-mirror'
  | 'waves-sound'
  | 'gas-particles'
  | 'solar-shadows'
  | 'chemical-reaction'
  | 'acids-bases-ph'
  | 'states-of-matter'
  | 'cell-osmosis'
  | 'photosynthesis-stomata'
  | 'human-circulatory'
  | 'ecosystem-web'
  | 'quantum-photoelectric';

export interface ChapterTopicItem {
  id: string;
  title: PartialLocalizedText;
  subtopics: PartialLocalizedList;
  explanation: PartialLocalizedText;
}

export interface ChapterDefinitionItem {
  id: string;
  term: PartialLocalizedText;
  definition: PartialLocalizedText;
}

export interface ChapterFormulaItem {
  id: string;
  name: PartialLocalizedText;
  formula: string;
  variables: PartialLocalizedText;
  unit: string;
}

export interface SolvedNumericalItem {
  id: string;
  problem: PartialLocalizedText;
  given: string[];
  formulaUsed: string;
  solutionSteps: string[];
  finalAnswer: string;
}

export interface ChemicalEquationItem {
  id: string;
  title: PartialLocalizedText;
  equation: string;
  reactionType: string;
  explanation: PartialLocalizedText;
}

export interface BiologyProcessItem {
  id: string;
  title: PartialLocalizedText;
  steps: PartialLocalizedList;
  microscopeNote?: PartialLocalizedText;
}

export interface ChapterQuestionItem {
  id: string;
  type: 'short' | 'long' | 'conceptual';
  question: PartialLocalizedText;
  answer: PartialLocalizedText;
}

export interface ChapterMcqItem {
  id: string;
  question: PartialLocalizedText;
  options: PartialLocalizedList;
  correctIndex: number;
  explanation: PartialLocalizedText;
  isPracticeTest?: boolean;
}

export interface StructuredExperiment {
  id: string;
  chapterId: string;
  chapterNumber: number;
  chapterTitle: PartialLocalizedText;
  subject: SyllabusSubject;
  classLevel: SchoolClass;
  board: EducationBoard;
  stateName?: string;
  relationType: ExperimentRelationType;
  activityMode: Exclude<ActivityModeFilter, 'all' | 'offline-saved'>;
  linkedSimExperiment?: ExperimentId;
  linkedSupportingWorld?: SupportingWorldId;
  title: PartialLocalizedText;
  objective: PartialLocalizedText;
  materials: PartialLocalizedList;
  scientificPrinciple: PartialLocalizedText;
  steps: PartialLocalizedList;
  observationTable: {
    columns: PartialLocalizedList;
    sampleRows: string[][];
  };
  expectedResult: PartialLocalizedText;
  conclusion: PartialLocalizedText;
  safetyNote: PartialLocalizedText;
  predictionQuestion: PartialLocalizedText;
  predictionOptions: PartialLocalizedList;
  predictionCorrectIndex: number;
  hints: PartialLocalizedList;
  whyItHappens: PartialLocalizedText;
}

export interface RichChapterData {
  id: string;
  chapterNumber: number;
  title: PartialLocalizedText;
  primarySubject: CurriculumSubjectFilter;
  topicTag: PartialLocalizedText;
  textbookName: string;
  board: EducationBoard;
  stateName?: string;
  classLevel: SchoolClass;
  session: AcademicSession;
  conceptSummary: PartialLocalizedText;
  topics: ChapterTopicItem[];
  definitions: ChapterDefinitionItem[];
  keyConcepts: PartialLocalizedList;
  diagramKind: DiagramKind;
  diagramCaption: PartialLocalizedText;
  formulas: ChapterFormulaItem[];
  solvedNumericals: SolvedNumericalItem[];
  chemicalEquations?: ChemicalEquationItem[];
  biologyProcesses?: BiologyProcessItem[];
  realLifeApplications: PartialLocalizedList;
  revisionNotes: PartialLocalizedList;
  chapterQuestions: ChapterQuestionItem[];
  mcqs: ChapterMcqItem[];
  experiments: StructuredExperiment[];
}

export interface BoardSyllabusRecord {
  id: string;
  classLevel: SchoolClass;
  board: EducationBoard;
  stateName?: string;
  session: AcademicSession;
  academicYearLabel: string;
  syllabusVersionLabel: string;
  textbookName: string;
  sourceTitle: string;
  sourceUrl: string;
  secondarySourceTitle?: string;
  secondarySourceUrl?: string;
  lastVerified: string;
  coverageNote: PartialLocalizedText;
  availableSubjects: SyllabusSubject[];
  chapters: RichChapterData[];
}

export interface SyllabusApiResponse {
  available: boolean;
  classLevel: SchoolClass;
  board: EducationBoard;
  stateName?: string;
  session: AcademicSession;
  subject: SyllabusSubject | 'all';
  academicYearLabel?: string;
  syllabusVersionLabel?: string;
  textbookName?: string;
  sourceTitle?: string;
  sourceUrl?: string;
  secondarySourceTitle?: string;
  secondarySourceUrl?: string;
  lastVerified?: string;
  coverageNote?: PartialLocalizedText;
  availableSubjects?: SyllabusSubject[];
  chapters: RichChapterData[];
  unavailableReason?: string;
}

export interface SyllabusMetaResponse {
  classes: SchoolClass[];
  boards: { id: EducationBoard; label: PartialLocalizedText }[];
  states: string[];
  sessions: { id: AcademicSession; label: PartialLocalizedText }[];
  verifiedCombinations: {
    id: string;
    classLevel: SchoolClass;
    board: EducationBoard;
    stateName?: string;
    session: AcademicSession;
    textbookName: string;
    availableSubjects: SyllabusSubject[];
    chapterCount: number;
  }[];
}
