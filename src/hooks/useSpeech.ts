import { useCallback, useEffect, useRef, useState } from 'react';
import { SPEECH_LANG_CODES } from '../data/i18n';
import { getPreferredSpeechVoice } from '../lib/speechVoice';
import type { Language } from '../types/stem';

interface SpeechRecognitionInstance {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
}

export function useSpeech(language: Language) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        setVoiceError('Text-to-speech is not supported in this browser.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const targetLang = SPEECH_LANG_CODES[language];
      utterance.lang = targetLang;
      const matched = getPreferredSpeechVoice(language);
      if (matched) utterance.voice = matched;
      utterance.rate = 0.96;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    },
    [language]
  );

  const startListening = useCallback(
    (onTranscript: (text: string) => void) => {
      setVoiceError(null);
      if (typeof window === 'undefined') return;
      const win = window as unknown as {
        SpeechRecognition?: new () => SpeechRecognitionInstance;
        webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
      };
      const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;
      if (!SpeechRec) {
        setVoiceError('Voice recognition requires Chrome, Edge, or Android WebView.');
        return;
      }

      try {
        const rec = new SpeechRec();
        rec.lang = SPEECH_LANG_CODES[language];
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        rec.onresult = (event) => {
          const transcript = event.results?.[0]?.[0]?.transcript ?? '';
          if (transcript) {
            onTranscript(transcript);
          }
        };
        rec.onerror = (event) => {
          setVoiceError(`Microphone input unavailable (${event.error}).`);
          setIsListening(false);
        };
        rec.onend = () => {
          setIsListening(false);
        };
        recognitionRef.current = rec;
        setIsListening(true);
        rec.start();
      } catch {
        setVoiceError('Could not start voice recognition.');
        setIsListening(false);
      }
    },
    [language]
  );

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  useEffect(() => {
    return () => {
      stopSpeaking();
      recognitionRef.current?.stop();
    };
  }, [stopSpeaking]);

  return {
    isSpeaking,
    isListening,
    voiceError,
    speak,
    stopSpeaking,
    startListening,
    stopListening,
  };
}
