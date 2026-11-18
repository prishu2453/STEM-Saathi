import type { ExperimentId } from '../../src/data/physicsExperiments';
import type { SchoolClass } from '../../src/types/stem';
import { buildChapter } from './meta';
import type { DiagramKind, RichChapterData } from './types';

/** [English, Hindi, Kannada]. Hindi/Kannada need native-speaker teacher review. */
export type T3 = [string, string, string];
/** [English list, Hindi list, Kannada list] */
export type L3 = [string[], string[], string[]];

const t = (a: T3) => ({ en: a[0], hi: a[1], kn: a[2] });
const l = (a: L3) => ({ en: a[0], hi: a[1], kn: a[2] });

export interface ChapterSpec {
  id: string;
  no: number;
  cls: SchoolClass;
  title: T3;
  tag: T3;
  summary: T3;
  diagram: DiagramKind;
  diagCap: T3;
  topicTitle: T3;
  subtopics: L3;
  topicExpl: T3;
  defs: { term: T3; def: T3 }[];
  concepts: L3;
  formulas: { name: T3; f: string; vars: T3; unit: string }[];
  num: { p: T3; given: string[]; f: string; steps: string[]; ans: string };
  apps: L3;
  notes: L3;
  q: { q: T3; a: T3 };
  mcq: { q: T3; opts: L3; ok: number; why: T3 };
  exp: {
    mode: 'home-safe' | 'school-lab' | 'virtual-sim';
    sim?: ExperimentId;
    title: T3;
    obj: T3;
    mats: L3;
    prin: T3;
    steps: L3;
    cols: string[];
    rows: string[][];
    expect: T3;
    concl: T3;
    safety: T3;
    predQ: T3;
    predOpts: L3;
    predOk: number;
    hint: L3;
    why: T3;
  };
}

export interface ChapterOpts {
  board?: 'cbse' | 'cisce';
  textbook?: string;
  /** Replaces the leading id prefix, e.g. 'cbse11' -> 'isc11' */
  idFrom?: string;
  idTo?: string;
}

export function makeChapter(spec: ChapterSpec, opts: ChapterOpts = {}): RichChapterData {
  const s = opts.idFrom && opts.idTo ? { ...spec, id: spec.id.replace(opts.idFrom, opts.idTo) } : spec;
  const cls = s.cls;
  return buildChapter({
    id: s.id,
    chapterNumber: s.no,
    title: t(s.title),
    primarySubject: 'physics',
    topicTag: t(s.tag),
    textbookName: opts.textbook ?? `NCERT Physics — Class ${s.cls}`,
    board: opts.board ?? 'cbse',
    classLevel: cls,
    session: '2025-26',
    conceptSummary: t(s.summary),
    topics: [{ id: `${s.id}-t1`, title: t(s.topicTitle), subtopics: l(s.subtopics), explanation: t(s.topicExpl) }],
    definitions: s.defs.map((d, i) => ({ id: `${s.id}-d${i + 1}`, term: t(d.term), definition: t(d.def) })),
    keyConcepts: l(s.concepts),
    diagramKind: s.diagram,
    diagramCaption: t(s.diagCap),
    formulas: s.formulas.map((f, i) => ({ id: `${s.id}-f${i + 1}`, name: t(f.name), formula: f.f, variables: t(f.vars), unit: f.unit })),
    solvedNumericals: [
      { id: `${s.id}-n1`, problem: t(s.num.p), given: s.num.given, formulaUsed: s.num.f, solutionSteps: s.num.steps, finalAnswer: s.num.ans },
    ],
    realLifeApplications: l(s.apps),
    revisionNotes: l(s.notes),
    chapterQuestions: [{ id: `${s.id}-q1`, type: 'short', question: t(s.q.q), answer: t(s.q.a) }],
    mcqs: [{ id: `${s.id}-m1`, question: t(s.mcq.q), options: l(s.mcq.opts), correctIndex: s.mcq.ok, explanation: t(s.mcq.why) }],
    experiments: [
      {
        id: `${s.id}-exp1`,
        relationType: s.exp.mode === 'school-lab' ? 'official-practical' : 'in-chapter',
        activityMode: s.exp.mode,
        linkedSimExperiment: s.exp.sim,
        title: t(s.exp.title),
        objective: t(s.exp.obj),
        materials: l(s.exp.mats),
        scientificPrinciple: t(s.exp.prin),
        steps: l(s.exp.steps),
        observationTable: { columns: { en: s.exp.cols }, sampleRows: s.exp.rows },
        expectedResult: t(s.exp.expect),
        conclusion: t(s.exp.concl),
        safetyNote: t(s.exp.safety),
        predictionQuestion: t(s.exp.predQ),
        predictionOptions: l(s.exp.predOpts),
        predictionCorrectIndex: s.exp.predOk,
        hints: l(s.exp.hint),
        whyItHappens: t(s.exp.why),
      },
    ],
  });
}
