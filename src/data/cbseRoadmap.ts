/**
 * NCERT chapter titles (CBSE, Physics & Chemistry, classes 9-12) used only as a
 * "lessons coming soon" roadmap. Titles only — no lesson content is claimed.
 * `key` is a lowercase word matched against already-built chapter titles so
 * finished chapters are not repeated. Re-check titles against the current
 * NCERT book each session before relying on them.
 */
export interface RoadmapChapter {
  no: number;
  title: string;
  key: string;
}
type Subj = 'physics' | 'chemistry';
const c = (no: number, title: string, key: string): RoadmapChapter => ({ no, title, key });

export const CBSE_ROADMAP: Record<number, Partial<Record<Subj, RoadmapChapter[]>>> = {
  9: {
    physics: [c(7, 'Motion', 'motion'), c(8, 'Force and Laws of Motion', 'laws of motion'), c(9, 'Gravitation', 'gravitation'), c(10, 'Work and Energy', 'work and energy'), c(11, 'Sound', 'sound')],
    chemistry: [c(1, 'Matter in Our Surroundings', 'surroundings'), c(2, 'Is Matter Around Us Pure?', 'pure'), c(3, 'Atoms and Molecules', 'atoms'), c(4, 'Structure of the Atom', 'structure of the atom')],
  },
  10: {
    physics: [c(9, 'Light – Reflection and Refraction', 'light'), c(10, 'The Human Eye and the Colourful World', 'human eye'), c(11, 'Electricity', 'electricity'), c(12, 'Magnetic Effects of Electric Current', 'magnetic effects')],
    chemistry: [c(1, 'Chemical Reactions and Equations', 'chemical reactions'), c(2, 'Acids, Bases and Salts', 'acids'), c(3, 'Metals and Non-metals', 'metals'), c(4, 'Carbon and its Compounds', 'carbon')],
  },
  11: {
    physics: [c(1, 'Units and Measurements', 'units'), c(2, 'Motion in a Straight Line', 'straight line'), c(3, 'Motion in a Plane', 'plane'), c(4, 'Laws of Motion', 'laws of motion'), c(5, 'Work, Energy and Power', 'work, energy'), c(6, 'System of Particles and Rotational Motion', 'rotational'), c(7, 'Gravitation', 'gravitation'), c(8, 'Mechanical Properties of Solids', 'solids'), c(9, 'Mechanical Properties of Fluids', 'fluids'), c(10, 'Thermal Properties of Matter', 'thermal properties'), c(11, 'Thermodynamics', 'thermodynamics'), c(12, 'Kinetic Theory', 'kinetic theory'), c(13, 'Oscillations', 'oscillations'), c(14, 'Waves', 'waves')],
    chemistry: [c(1, 'Some Basic Concepts of Chemistry', 'basic concepts'), c(2, 'Structure of Atom', 'structure of atom'), c(3, 'Classification of Elements and Periodicity in Properties', 'periodicity'), c(4, 'Chemical Bonding and Molecular Structure', 'bonding'), c(5, 'Thermodynamics', 'thermodynamics'), c(6, 'Equilibrium', 'equilibrium'), c(7, 'Redox Reactions', 'redox'), c(8, 'Organic Chemistry – Some Basic Principles and Techniques', 'organic'), c(9, 'Hydrocarbons', 'hydrocarbons')],
  },
  12: {
    physics: [c(1, 'Electric Charges and Fields', 'electric charges'), c(2, 'Electrostatic Potential and Capacitance', 'capacitance'), c(3, 'Current Electricity', 'current electricity'), c(4, 'Moving Charges and Magnetism', 'moving charges'), c(5, 'Magnetism and Matter', 'magnetism and matter'), c(6, 'Electromagnetic Induction', 'induction'), c(7, 'Alternating Current', 'alternating'), c(8, 'Electromagnetic Waves', 'electromagnetic waves'), c(9, 'Ray Optics and Optical Instruments', 'ray optics'), c(10, 'Wave Optics', 'wave optics'), c(11, 'Dual Nature of Radiation and Matter', 'dual nature'), c(12, 'Atoms', 'bohr'), c(13, 'Nuclei', 'nuclei'), c(14, 'Semiconductor Electronics', 'semiconductor')],
    chemistry: [c(1, 'Solutions', 'solutions'), c(2, 'Electrochemistry', 'electrochemistry'), c(3, 'Chemical Kinetics', 'kinetics'), c(4, 'd- and f-Block Elements', 'block'), c(5, 'Coordination Compounds', 'coordination'), c(6, 'Haloalkanes and Haloarenes', 'haloalkanes'), c(7, 'Alcohols, Phenols and Ethers', 'alcohols'), c(8, 'Aldehydes, Ketones and Carboxylic Acids', 'aldehydes'), c(9, 'Amines', 'amines'), c(10, 'Biomolecules', 'biomolecules')],
  },
};

export function pendingRoadmap(classLevel: number, subject: string, builtTitles: string[]): RoadmapChapter[] {
  const list = CBSE_ROADMAP[classLevel]?.[subject as Subj] ?? [];
  const joined = builtTitles.join(' | ').toLowerCase();
  return list.filter((r) => !joined.includes(r.key));
}
