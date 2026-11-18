/**
 * Verified experiment videos, keyed by StructuredExperiment.id.
 *
 * RULES (enforced by `npm run check:videos` and again at runtime — an entry that fails is NOT shown):
 *  1. Someone has actually watched the video and confirmed it shows THIS experiment.
 *  2. It suits the class and board it is attached to (`verifiedFor` must equal the experiment's class/board/state).
 *  3. The entry names who verified it, when, and what they checked it against.
 *
 * No video has been verified yet, so this list is intentionally empty. Experiments without an entry show a
 * clear "no verified video yet" message and still offer the written steps and any simulation.
 */
export interface ExperimentVideo {
  /** YouTube video id (the part after v=) — exactly 11 characters */
  youtubeId: string;
  title: string;
  channel: string;
  /** Spoken language of the video */
  language: 'en' | 'hi' | 'kn';
  /** The class / board this video was checked for */
  verifiedFor: { classLevel: number; board: 'cbse' | 'cisce' | 'state' | 'other'; stateName?: string };
  verifiedBy: string;
  /** YYYY-MM-DD */
  verifiedOn: string;
  /** What the checker compared it with, e.g. "NCERT Class 9 Science, Ch 8 activity 8.1" */
  checkedAgainst: string;
  notes?: string;
}

export const EXPERIMENT_VIDEOS: Record<string, ExperimentVideo> = {
  /*
  'cbse9-phy-force-exp1': {
    youtubeId: 'XXXXXXXXXXX',
    title: '…',
    channel: '…',
    language: 'en',
    verifiedFor: { classLevel: 9, board: 'cbse' },
    verifiedBy: 'Name, role',
    verifiedOn: '2026-12-01',
    checkedAgainst: 'NCERT Class 9 Science, Chapter 8',
  },
  */
};
