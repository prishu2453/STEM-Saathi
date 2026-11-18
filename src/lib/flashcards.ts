import type { RichChapterData } from '../../shared/syllabus/types';
import { resolveLocalizedList, resolveLocalizedText } from '../data/curriculumCatalogue';
import type { Language } from '../types/stem';

export type CardKind = 'definition' | 'formula' | 'concept' | 'question' | 'quiz';

export interface Flashcard {
  id: string;
  kind: CardKind;
  chapterId: string;
  chapterTitle: string;
  front: string;
  frontExtra?: string[];
  back: string;
  backExtra?: string;
  mono?: boolean;
}

/** Cards come only from the chapter's own definitions, formulas, topics, questions and quiz — nothing invented. */
export function buildDeck(chapters: RichChapterData[], language: Language): Flashcard[] {
  const out: Flashcard[] = [];
  for (const ch of chapters) {
    const chapterTitle = resolveLocalizedText(ch.title, language).text;
    const base = { chapterId: ch.id, chapterTitle };
    for (const d of ch.definitions) {
      out.push({ ...base, id: `${ch.id}::def::${d.id}`, kind: 'definition', front: resolveLocalizedText(d.term, language).text, back: resolveLocalizedText(d.definition, language).text });
    }
    for (const f of ch.formulas) {
      const unit = f.unit && f.unit !== '—' ? ` · ${f.unit}` : '';
      out.push({
        ...base,
        id: `${ch.id}::formula::${f.id}`,
        kind: 'formula',
        front: resolveLocalizedText(f.name, language).text,
        back: f.formula,
        backExtra: resolveLocalizedText(f.variables, language).text + unit,
        mono: true,
      });
    }
    for (const t of ch.topics) {
      const subs = resolveLocalizedList(t.subtopics, language).items;
      out.push({
        ...base,
        id: `${ch.id}::topic::${t.id}`,
        kind: 'concept',
        front: resolveLocalizedText(t.title, language).text,
        back: resolveLocalizedText(t.explanation, language).text,
        backExtra: subs.join(' • '),
      });
    }
    for (const q of ch.chapterQuestions) {
      out.push({ ...base, id: `${ch.id}::q::${q.id}`, kind: 'question', front: resolveLocalizedText(q.question, language).text, back: resolveLocalizedText(q.answer, language).text });
    }
    for (const m of ch.mcqs) {
      const opts = resolveLocalizedList(m.options, language).items;
      out.push({
        ...base,
        id: `${ch.id}::mcq::${m.id}`,
        kind: 'quiz',
        front: resolveLocalizedText(m.question, language).text,
        frontExtra: opts.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`),
        back: `${String.fromCharCode(65 + m.correctIndex)}. ${opts[m.correctIndex] ?? ''}`,
        backExtra: resolveLocalizedText(m.explanation, language).text,
      });
    }
  }
  return out;
}

/* ---------- Progress: Leitner boxes (1–5), XP, levels, daily streak ---------- */

export interface CardState {
  box: number;
  due: number; // epoch ms
  reps: number;
  lapses: number;
}
export interface FlashcardProgress {
  xp: number;
  streak: number;
  lastDay: string; // YYYY-MM-DD
  cards: Record<string, CardState>;
}

const KEY = 'stem-saathi-flashcards-v1';
const DAY = 86_400_000;
export const BOX_DAYS = [0, 1, 3, 7, 14]; // review gaps for boxes 1..5
export type Rating = 'again' | 'good' | 'easy';
export const XP_FOR: Record<Rating, number> = { again: 2, good: 10, easy: 15 };

const EMPTY: FlashcardProgress = { xp: 0, streak: 0, lastDay: '', cards: {} };

export function loadFlashProgress(): FlashcardProgress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY, cards: {} };
    const p = JSON.parse(raw) as FlashcardProgress;
    return { ...EMPTY, ...p, cards: p.cards ?? {} };
  } catch {
    return { ...EMPTY, cards: {} };
  }
}
export function saveFlashProgress(p: FlashcardProgress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // storage unavailable — progress lasts for this session only
  }
}

const dayStr = (t: number) => new Date(t).toISOString().slice(0, 10);

export function levelFromXp(xp: number): { level: number; into: number; needed: number } {
  const level = Math.floor(Math.sqrt(xp / 40)) + 1;
  const base = 40 * (level - 1) ** 2;
  const next = 40 * level ** 2;
  return { level, into: xp - base, needed: next - base };
}

/** Apply a rating and return the updated progress (does not mutate the input). */
export function applyRating(p: FlashcardProgress, cardId: string, rating: Rating, now = Date.now()): FlashcardProgress {
  const prev = p.cards[cardId] ?? { box: 1, due: 0, reps: 0, lapses: 0 };
  const box = rating === 'again' ? 1 : Math.min(5, prev.box + (rating === 'easy' ? 2 : 1));
  const due = rating === 'again' ? now : now + BOX_DAYS[box - 1] * DAY;
  let xp = p.xp + XP_FOR[rating];
  let streak = p.streak;
  const today = dayStr(now);
  if (p.lastDay !== today) {
    streak = p.lastDay === dayStr(now - DAY) ? p.streak + 1 : 1;
    xp += 5; // first review of the day
  }
  return {
    xp,
    streak,
    lastDay: today,
    cards: { ...p.cards, [cardId]: { box, due, reps: prev.reps + 1, lapses: prev.lapses + (rating === 'again' ? 1 : 0) } },
  };
}

export function isDue(p: FlashcardProgress, id: string, now = Date.now()): boolean {
  const s = p.cards[id];
  return !s || s.due <= now;
}
export function countDue(p: FlashcardProgress, deck: Flashcard[], now = Date.now()): number {
  return deck.filter((c) => isDue(p, c.id, now)).length;
}
export function countMastered(p: FlashcardProgress, deck: Flashcard[]): number {
  return deck.filter((c) => (p.cards[c.id]?.box ?? 0) >= 4).length;
}
