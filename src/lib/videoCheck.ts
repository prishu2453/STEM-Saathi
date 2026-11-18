import { ALL_SYLLABUS_RECORDS } from '../../shared/syllabus/index';
import type { ExperimentVideo } from '../data/experimentVideos';

export interface VideoProblem {
  experimentId: string;
  problem: string;
}

const ID_RE = /^[A-Za-z0-9_-]{11}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** experiment id → where it lives in the syllabus */
export function experimentIndex() {
  const map = new Map<string, { classLevel: number; board: string; stateName?: string; title: string }>();
  for (const r of ALL_SYLLABUS_RECORDS) {
    for (const c of r.chapters) {
      for (const e of c.experiments) map.set(e.id, { classLevel: r.classLevel, board: r.board, stateName: r.stateName, title: e.title.en });
    }
  }
  return map;
}

export function validateVideo(id: string, v: ExperimentVideo, index = experimentIndex()): string | null {
  const exp = index.get(id);
  if (!exp) return 'there is no experiment with this id in the syllabus data';
  if (!ID_RE.test(v.youtubeId)) return 'youtubeId must be exactly 11 characters (letters, digits, - or _)';
  if (!v.title?.trim() || !v.channel?.trim()) return 'title and channel are required';
  if (!['en', 'hi', 'kn'].includes(v.language)) return 'language must be en, hi or kn';
  if (!v.verifiedBy?.trim()) return 'verifiedBy (who watched it) is required';
  if (!DATE_RE.test(v.verifiedOn)) return 'verifiedOn must be a date like 2026-12-01';
  if (!v.checkedAgainst?.trim()) return 'checkedAgainst (what it was compared with) is required';
  if (v.verifiedFor.classLevel !== exp.classLevel) return `verified for class ${v.verifiedFor.classLevel} but the experiment is in class ${exp.classLevel}`;
  if (v.verifiedFor.board !== exp.board) return `verified for board "${v.verifiedFor.board}" but the experiment belongs to "${exp.board}"`;
  if (exp.board === 'state' && (v.verifiedFor.stateName ?? '').toLowerCase() !== (exp.stateName ?? '').toLowerCase()) return `verified for state "${v.verifiedFor.stateName}" but the experiment belongs to "${exp.stateName}"`;
  return null;
}

export function validateRegistry(reg: Record<string, ExperimentVideo>): VideoProblem[] {
  const index = experimentIndex();
  const out: VideoProblem[] = [];
  for (const [id, v] of Object.entries(reg)) {
    const p = validateVideo(id, v, index);
    if (p) out.push({ experimentId: id, problem: p });
  }
  return out;
}

export function videoStats(reg: Record<string, ExperimentVideo>) {
  const index = experimentIndex();
  const total = index.size;
  const valid = Object.entries(reg).filter(([id, v]) => !validateVideo(id, v, index)).length;
  return { totalExperiments: total, verifiedVideos: valid, withoutVideo: total - valid };
}
