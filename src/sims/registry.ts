import type { ExperimentId } from '../data/physicsExperiments';
import { MECHANICS_SIMS } from './mechanicsSims';
import { MORE_SIMS } from './moreSims';
import type { SimDef } from './simTypes';

export const ALL_LAB_SIMS: SimDef[] = [...MECHANICS_SIMS, ...MORE_SIMS];
export const getLabSim = (id: string) => ALL_LAB_SIMS.find((s) => s.id === id);

export type SimRef = { kind: 'lab'; id: string } | { kind: 'legacy'; id: ExperimentId };

/**
 * [pattern on the lower-cased English chapter title, simulations to show, optional pattern that blocks the rule].
 * Rules are listed most-specific first; at most four simulations are shown per chapter.
 */
const RULES: [RegExp, SimRef[], RegExp?][] = [
  // Modern physics & advanced topics first (specific)
  [/radioactiv|nuclei|nuclear|decay/, [{ kind: 'lab', id: 'decay' }]],
  [/dual nature|photoelectric/, [{ kind: 'legacy', id: 'photoelectric' }, { kind: 'legacy', id: 'de-broglie' }]],
  [/\batoms?\b|bohr|quantum/, [{ kind: 'legacy', id: 'bohr-atom' }], /dual nature|photoelectric/],
  [/semiconductor|diode|electronic devices/, [{ kind: 'lab', id: 'diode' }]],
  [/interference|double.?slit|wave optics/, [{ kind: 'legacy', id: 'double-slit' }]],
  [/electromagnetic waves|em waves|spectrum|dispersion/, [{ kind: 'lab', id: 'spectrum' }]],
  [/electric charges|charges and fields|electrostatic|coulomb|static electricity/, [{ kind: 'lab', id: 'coulomb' }]],
  [/capacit|potential/, [{ kind: 'lab', id: 'rc' }]],
  [/moving charges|magnetic effects?/, [{ kind: 'lab', id: 'magforce' }]],
  [/\bmagnet|magnetism/, [{ kind: 'lab', id: 'dipole' }]],
  [/induction|electro-?magnet|generator|motor|alternating/, [{ kind: 'legacy', id: 'magnetism' }], /waves/],
  [/transformer|alternating|electro-?magnetism/, [{ kind: 'lab', id: 'transformer' }]],
  [/current|ohm|resist|circuit|electricity|household/, [{ kind: 'legacy', id: 'electricity' }], /semiconductor|diode|capacit/],
  // Light
  [/reflection|mirror/, [{ kind: 'lab', id: 'mirror' }, { kind: 'lab', id: 'twomirrors' }], /sound/],
  [/light|lens|refraction|prism|optic|\beye\b|pinhole/, [{ kind: 'lab', id: 'lens' }, { kind: 'legacy', id: 'optics' }], /^(?!.*ray optics).*(wave optics|interference|double)/],
  // Sound & waves
  [/sound|echo|acoustic|pitch|vibration/, [{ kind: 'lab', id: 'echo' }, { kind: 'legacy', id: 'waves' }]],
  [/\bwaves?\b|beats|resonance/, [{ kind: 'legacy', id: 'waves' }, { kind: 'lab', id: 'echo' }], /electromagnetic|dual nature|matter waves|wave optics|sound/],
  // Heat
  [/thermodynam|kinetic theory|\bgas/, [{ kind: 'legacy', id: 'thermodynamics' }]],
  [/heat|thermal|calorimet|temperature|thermometer/, [{ kind: 'lab', id: 'calorimetry' }], /electricity|electric/],
  // Mechanics
  [/collision|momentum|impulse/, [{ kind: 'lab', id: 'collision' }]],
  [/laws? of motion|force and laws/, [{ kind: 'lab', id: 'collision' }, { kind: 'lab', id: 'incline' }]],
  [/motion in a plane|projectile|trajectory/, [{ kind: 'legacy', id: 'mechanics' }, { kind: 'lab', id: 'kinematics' }]],
  [/straight line|one dimension|kinemat|equations? of motion|^motion\b|\bmotion,|measurement of .*motion|speed|velocity/, [{ kind: 'lab', id: 'kinematics' }]],
  [/friction|incline/, [{ kind: 'lab', id: 'incline' }]],
  [/gravitation|gravity|planet|satellite|kepler|solar system|stars/, [{ kind: 'lab', id: 'orbit' }, { kind: 'legacy', id: 'mechanics' }]],
  [/\bwork\b|energy/, [{ kind: 'lab', id: 'workenergy' }], /electri|household|current/],
  [/circular|centripetal/, [{ kind: 'lab', id: 'circular' }]],
  [/exploring forces|\bforces?\b|moment|lever|machine|rotational|torque|system of particles|equilibrium/, [{ kind: 'lab', id: 'lever' }, { kind: 'lab', id: 'incline' }]],
  [/pendulum|oscillation|harmonic|measurements?\b|units|keeping time/, [{ kind: 'lab', id: 'pendulum' }, { kind: 'lab', id: 'springmass' }], /plane|projectile/],
  [/solid|elastic|young'?s? modulus|\bstress|hooke/, [{ kind: 'lab', id: 'hooke' }, { kind: 'lab', id: 'springmass' }]],
  [/fluid/, [{ kind: 'lab', id: 'pressure' }, { kind: 'lab', id: 'buoyancy' }]],
  [/pressure|\bdam\b/, [{ kind: 'lab', id: 'pressure' }], /fluid/],
  [/upthrust|buoyan|floatation|density|archimedes/, [{ kind: 'lab', id: 'buoyancy' }]],
];

export function simsForChapter(titleEn: string, chapterId = ''): SimRef[] {
  const text = `${titleEn} ${chapterId.replace(/[-_]/g, ' ')}`.toLowerCase();
  const out: SimRef[] = [];
  for (const [re, refs, block] of RULES) {
    if (re.test(text) && !(block && block.test(text))) for (const r of refs) if (!out.some((o) => o.kind === r.kind && o.id === r.id)) out.push(r);
  }
  return out.slice(0, 4);
}
