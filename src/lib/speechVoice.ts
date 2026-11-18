import { SPEECH_LANG_CODES } from '../data/i18n';
import type { Language } from '../types/stem';

const STORAGE_KEY = 'stem-saathi-speech-voices-v2';

type VoicePreferences = Partial<Record<Language, string>>;

function readPreferences(): VoicePreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as VoicePreferences) : {};
  } catch {
    return {};
  }
}

export function getSpeechVoiceChoices(
  language: Language,
  voices: SpeechSynthesisVoice[] = typeof window === 'undefined' ? [] : window.speechSynthesis.getVoices()
): SpeechSynthesisVoice[] {
  const primaryLanguage = language.toLowerCase();
  return voices
    .filter((voice) => voice.lang.toLowerCase().startsWith(primaryLanguage))
    .sort((a, b) => {
      const target = SPEECH_LANG_CODES[language].toLowerCase();
      const score = (voice: SpeechSynthesisVoice) => {
        const locale = voice.lang.toLowerCase();
        const name = `${voice.name} ${voice.voiceURI}`.toLowerCase();
        let result = locale === target ? 100 : 0;
        if (language === 'en' && /(^|\s)samantha(\s|$)/i.test(voice.name)) result += 200;
        if (/natural|neural|enhanced|premium/.test(name)) result += 30;
        if (/google|microsoft/.test(name)) result += 10;
        if (voice.default) result += 5;
        // Prefer a voice that can also work offline when quality signals are equal.
        if (voice.localService) result += 2;
        return result;
      };
      return score(b) - score(a) || a.name.localeCompare(b.name);
    });
}

export function getPreferredSpeechVoice(
  language: Language,
  voices: SpeechSynthesisVoice[] = typeof window === 'undefined' ? [] : window.speechSynthesis.getVoices()
): SpeechSynthesisVoice | undefined {
  const choices = getSpeechVoiceChoices(language, voices);
  const preferredURI = readPreferences()[language];
  return choices.find((voice) => voice.voiceURI === preferredURI) ?? choices[0];
}

export function getSavedSpeechVoiceURI(language: Language): string {
  return readPreferences()[language] ?? '';
}

export function savePreferredSpeechVoice(language: Language, voiceURI: string): void {
  const preferences = readPreferences();
  if (voiceURI) preferences[language] = voiceURI;
  else delete preferences[language];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Voice selection still works for the current page if storage is unavailable.
  }
}
