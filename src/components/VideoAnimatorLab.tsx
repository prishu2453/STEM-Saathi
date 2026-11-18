import React, { useEffect, useRef, useState } from 'react';
import { Mic, Square, Upload, WifiOff } from 'lucide-react';
import { UI_TEXT } from '../data/i18n';
import { useAudioTranscriber } from '../hooks/useAudioTranscriber';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import type { Language } from '../types/stem';

interface VideoAnimatorLabProps {
  language: Language;
  focusTool?: 'video' | 'audio' | null;
}

export const VideoAnimatorLab: React.FC<VideoAnimatorLabProps> = ({ language, focusTool }) => {
  const t = UI_TEXT[language];
  const isOnline = useOnlineStatus();
  const audioFileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!focusTool) return;
    const id = 'audio-transcriber-card';
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [focusTool]);

  // Audio Lab Transcriber state
  const [transcriptText, setTranscriptText] = useState('');
  const {
    isRecording,
    isTranscribing,
    transcribeError,
    startRecording,
    stopRecording,
    transcribeAudioFile,
  } = useAudioTranscriber(language);

  return (
    <section
      aria-labelledby="media-studio-heading"
      className="mx-auto max-w-7xl px-4 sm:px-6 py-10 border-t border-[#E6DEC8] dark:border-[#284766] space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-[#0B5F58] dark:text-[#4AD1C6]">
            Voice notes · {t.requiresInternetNotice}
          </p>
          <h2
            id="media-studio-heading"
            className="text-2xl sm:text-3xl font-semibold text-[#17324D] dark:text-[#F6F1E3] mt-1"
          >
            Transcribe Lab Audio
          </h2>
          <p className="text-sm text-[#1A262C] dark:text-[#DCE5EC] mt-1 max-w-2xl">
            Transcribe spoken classroom questions or experiment notes in English, Hindi, or Kannada.
          </p>
        </div>

        {!isOnline && (
          <div className="inline-flex items-center gap-2 rounded-xl border border-[#F2B544]/50 bg-[#F2B544]/15 px-3.5 py-2 text-xs font-medium text-[#9A6100] dark:text-[#F2B544] shrink-0">
            <WifiOff className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.offlineStatus}: {t.requiresInternetNotice}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Right: Audio Lab Notes Transcriber (5 cols) */}
        <div
          id="audio-transcriber-card"
          className={`animate-panel-reveal lg:col-span-7 a11y-surface rounded-2xl border bg-white dark:bg-[#152A40] p-5 space-y-4 ${
            focusTool === 'audio'
              ? 'border-[#0F766E] ring-2 ring-[#0F766E]/20'
              : 'border-[#E6DEC8] dark:border-[#284766]'
          }`}
        >
          <div>
            <h3 className="text-base font-semibold text-[#17324D] dark:text-[#F6F1E3] flex items-center gap-2">
              <Mic className="w-4 h-4 text-[#9A6100] dark:text-[#F2B544]" aria-hidden="true" />
              <span>Spoken Lab Audio Transcriber</span>
            </h3>
            <p className="text-xs text-[#1A262C] dark:text-[#B4C5D4] mt-1">
              Record microphone observations or upload an audio clip to convert spoken physics formulas and notes into clean text.
            </p>
          </div>

          <input
            ref={audioFileRef}
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                void transcribeAudioFile(file, (txt) =>
                  setTranscriptText((prev) => (prev ? `${prev}\n${txt}` : txt))
                );
              }
            }}
          />

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              disabled={isTranscribing || !isOnline}
              onClick={() =>
                isRecording
                  ? stopRecording()
                  : void startRecording((txt) =>
                      setTranscriptText((prev) => (prev ? `${prev}\n${txt}` : txt))
                    )
              }
              className={`min-h-[42px] inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50 ${
                isRecording
                  ? 'bg-red-600 text-white hover:bg-red-500'
                  : 'bg-[#0F766E] text-white hover:bg-[#0B5F58]'
              }`}
            >
              {isRecording ? <Square className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
              <span>
                {!isOnline
                  ? t.requiresInternetNotice
                  : isRecording
                  ? 'Stop & Transcribe'
                  : isTranscribing
                  ? 'Transcribing...'
                  : 'Record Mic Audio'}
              </span>
            </button>

            <button
              type="button"
              disabled={isRecording || isTranscribing || !isOnline}
              onClick={() => audioFileRef.current?.click()}
              className="min-h-[42px] inline-flex items-center gap-1.5 rounded-lg border border-[#E6DEC8] dark:border-[#284766] px-3 py-2 text-xs font-medium text-[#17324D] dark:text-[#DCE5EC] hover:bg-[#F6F1E3] dark:hover:bg-[#1C3652] cursor-pointer disabled:opacity-50"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Audio</span>
            </button>
          </div>

          {transcribeError && (
            <div className="rounded-xl border border-[#F2B544]/50 bg-[#F2B544]/15 p-3 text-xs text-[#9A6100] dark:text-[#F2B544]">
              {transcribeError}
            </div>
          )}

          <textarea
            rows={7}
            value={transcriptText}
            onChange={(e) => setTranscriptText(e.target.value)}
            placeholder="Your transcribed physics equations, lab observations, or multilingual voice notes will appear here..."
            className="w-full rounded-xl border border-[#E6DEC8] dark:border-[#284766] bg-[#F6F1E3] dark:bg-[#1C3652] px-3.5 py-2.5 text-xs text-[#17324D] dark:text-[#F6F1E3] focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <div className="flex items-center justify-between text-[11px] text-[#3D4A50] dark:text-[#B4C5D4]">
            <span>Supports English, हिन्दी &amp; ಕನ್ನಡ</span>
            {transcriptText && (
              <button
                type="button"
                onClick={() => setTranscriptText('')}
                className="text-[#0B5F58] dark:text-[#4AD1C6] hover:underline cursor-pointer"
              >
                Clear Transcript
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
