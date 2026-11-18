/**
 * Real, local-only engagement signals: study days, streak, badges and share helpers.
 * Nothing here is invented — every badge is computed from what the student actually
 * did on this device (progress state + flashcard log + study days).
 */
import type { StudentProgress } from '../types/stem';
import type { FlashcardProgress } from './flashcards';

const DAYS_KEY = 'stem-saathi-activity-days-v1';
export const ACTIVITY_EVENT = 'stem-saathi-activity';

/** Local calendar date (not UTC) so a streak follows the student's own day. */
export function localDay(t = Date.now()): string {
  const d = new Date(t);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

export function loadActivityDays(): string[] {
  try {
    const raw = localStorage.getItem(DAYS_KEY);
    const arr = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(arr) ? arr.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

/** Consecutive study days ending today (or yesterday, so the streak survives until tonight). */
export function computeStreak(days: string[], now = Date.now()): number {
  const set = new Set(days);
  const DAY = 86_400_000;
  let cursor = now;
  if (!set.has(localDay(cursor))) {
    cursor -= DAY;
    if (!set.has(localDay(cursor))) return 0;
  }
  let streak = 0;
  while (set.has(localDay(cursor))) {
    streak += 1;
    cursor -= DAY;
  }
  return streak;
}

/** Record that the student learned something today; returns the current streak. Idempotent per day. */
export function markActiveToday(): number {
  const days = loadActivityDays();
  const today = localDay();
  if (!days.includes(today)) {
    days.push(today);
    try {
      localStorage.setItem(DAYS_KEY, JSON.stringify(days.slice(-400)));
    } catch {
      // storage unavailable — streak lasts for this session only
    }
    try {
      window.dispatchEvent(new Event(ACTIVITY_EVENT));
    } catch {
      // non-browser environment
    }
  }
  return computeStreak(days);
}

export interface Badge {
  id: string;
  icon: string;
  title: { en: string; hi: string; kn: string };
  how: { en: string; hi: string; kn: string };
  current: number;
  target: number;
}

export function computeBadges(
  progress: StudentProgress,
  flash: FlashcardProgress,
  streak: number,
  offlinePacks: number
): Badge[] {
  const exps = progress.completedExperimentIds?.length ?? 0;
  const chapters = progress.completedChapterIds?.length ?? 0;
  const bestQuiz = Math.max(0, ...Object.values(progress.chapterQuizScores ?? {}));
  return [
    {
      id: 'first-exp',
      icon: '🧪',
      title: { en: 'Young Scientist', hi: 'युवा वैज्ञानिक', kn: 'ಯುವ ವಿಜ್ಞಾನಿ' },
      how: { en: 'Finish 1 experiment', hi: '1 प्रयोग पूरा करें', kn: '1 ಪ್ರಯೋಗ ಮುಗಿಸಿ' },
      current: exps,
      target: 1,
    },
    {
      id: 'five-exp',
      icon: '🔬',
      title: { en: 'Lab Explorer', hi: 'लैब खोजी', kn: 'ಪ್ರಯೋಗಾಲಯ ಅನ್ವೇಷಕ' },
      how: { en: 'Finish 5 experiments', hi: '5 प्रयोग पूरे करें', kn: '5 ಪ್ರಯೋಗಗಳನ್ನು ಮುಗಿಸಿ' },
      current: exps,
      target: 5,
    },
    {
      id: 'chapter',
      icon: '📘',
      title: { en: 'Chapter Champion', hi: 'अध्याय चैंपियन', kn: 'ಅಧ್ಯಾಯ ಚಾಂಪಿಯನ್' },
      how: { en: 'Mark 1 chapter complete', hi: '1 अध्याय पूरा करें', kn: '1 ಅಧ್ಯಾಯ ಪೂರ್ಣಗೊಳಿಸಿ' },
      current: chapters,
      target: 1,
    },
    {
      id: 'quiz',
      icon: '⭐',
      title: { en: 'Quiz Star', hi: 'क्विज़ स्टार', kn: 'ರಸಪ್ರಶ್ನೆ ತಾರೆ' },
      how: { en: 'Score 80% in a chapter quiz', hi: 'अध्याय क्विज़ में 80% लाएँ', kn: 'ಅಧ್ಯಾಯ ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ 80% ಪಡೆಯಿರಿ' },
      current: bestQuiz,
      target: 80,
    },
    {
      id: 'flash',
      icon: '🃏',
      title: { en: 'Memory Master', hi: 'याददाश्त मास्टर', kn: 'ಸ್ಮರಣೆ ಮಾಸ್ಟರ್' },
      how: { en: 'Earn 100 flashcard XP', hi: '100 फ्लैशकार्ड XP कमाएँ', kn: '100 ಫ್ಲ್ಯಾಶ್‌ಕಾರ್ಡ್ XP ಗಳಿಸಿ' },
      current: flash.xp,
      target: 100,
    },
    {
      id: 'streak3',
      icon: '🔥',
      title: { en: '3-Day Streak', hi: '3 दिन लगातार', kn: '3 ದಿನ ನಿರಂತರ' },
      how: { en: 'Study 3 days in a row', hi: 'लगातार 3 दिन पढ़ें', kn: 'ಸತತ 3 ದಿನ ಓದಿ' },
      current: streak,
      target: 3,
    },
    {
      id: 'streak7',
      icon: '🏆',
      title: { en: 'Week Warrior', hi: 'सप्ताह योद्धा', kn: 'ವಾರದ ಯೋಧ' },
      how: { en: 'Study 7 days in a row', hi: 'लगातार 7 दिन पढ़ें', kn: 'ಸತತ 7 ದಿನ ಓದಿ' },
      current: streak,
      target: 7,
    },
    {
      id: 'offline',
      icon: '📥',
      title: { en: 'Ready Offline', hi: 'ऑफ़लाइन तैयार', kn: 'ಆಫ್‌ಲೈನ್ ಸಿದ್ಧ' },
      how: { en: 'Save 1 chapter for offline', hi: '1 अध्याय ऑफ़लाइन सेव करें', kn: '1 ಅಧ್ಯಾಯ ಆಫ್‌ಲೈನ್ ಉಳಿಸಿ' },
      current: offlinePacks,
      target: 1,
    },
  ];
}

/** Pick one item per calendar day, stable for the whole day. */
export function pickForToday<T>(items: T[], now = Date.now()): T | undefined {
  if (items.length === 0) return undefined;
  const d = localDay(now);
  let h = 0;
  for (const ch of d) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return items[h % items.length];
}

/**
 * Share text with a friend or family group. Uses the phone's share sheet when present,
 * otherwise opens WhatsApp's own share page (the student picks who gets it).
 */
export async function shareText(text: string): Promise<'shared' | 'whatsapp' | 'cancelled'> {
  const nav = navigator as Navigator & { share?: (d: { text: string }) => Promise<void> };
  if (typeof nav.share === 'function') {
    try {
      await nav.share({ text });
      return 'shared';
    } catch {
      return 'cancelled';
    }
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  return 'whatsapp';
}
