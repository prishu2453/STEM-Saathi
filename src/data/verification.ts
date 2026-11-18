/**
 * Human verification register.
 *
 * A syllabus scope may be marked "verified" ONLY after a named teacher or subject expert has checked it
 * against the board's official document. Nothing has been verified by a human yet, so this list is empty —
 * the app therefore never shows the word "verified" for a syllabus.
 *
 * Key format: `${board}|${stateName or ''}|${classLevel}|${subject}`, e.g. 'cbse||9|physics'.
 */
export interface SyllabusVerification {
  by: string;
  role: string;
  on: string; // YYYY-MM-DD
  checkedAgainst: string; // e.g. "NCERT Class 9 Science, 2025-26 edition"
  note?: string;
}
export const VERIFIED_SYLLABUS: Record<string, SyllabusVerification> = {
  // 'cbse||9|physics': { by: 'A. Teacher', role: 'Physics teacher', on: '2026-12-01', checkedAgainst: 'NCERT Class 9 Science' },
};
export const verificationKey = (board: string, stateName: string | undefined, classLevel: number, subject: string) =>
  `${board}|${board === 'state' ? stateName ?? '' : ''}|${classLevel}|${subject}`;
