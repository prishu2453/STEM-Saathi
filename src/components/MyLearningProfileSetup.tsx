import React, { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, GraduationCap, Info } from 'lucide-react';
import {
  ACADEMIC_SESSIONS,
  EDUCATION_BOARDS,
  SCHOOL_CLASSES,
  STATE_BOARD_STATES,
} from '../../shared/syllabus/meta';
import type { SyllabusMetaResponse } from '../../shared/syllabus/types';
import type {
  AcademicSession,
  EducationBoard,
  Language,
  LearningPathPreference,
  SchoolClass,
} from '../types/stem';

interface MyLearningProfileSetupProps {
  language: Language;
  initialPath: LearningPathPreference;
  meta: SyllabusMetaResponse | null;
  onApply: (next: LearningPathPreference) => void;
  onCancel?: () => void;
}

export const MyLearningProfileSetup: React.FC<MyLearningProfileSetupProps> = ({
  initialPath,
  meta,
  onApply,
  onCancel,
}) => {
  const [classLevel, setClassLevel] = useState<SchoolClass>(initialPath.classLevel || 8);
  const [board, setBoard] = useState<EducationBoard>(
    initialPath.board === 'other' ? 'cbse' : initialPath.board || 'cbse'
  );
  const [stateName, setStateName] = useState<string>(initialPath.stateName || 'Karnataka');
  const [session, setSession] = useState<AcademicSession>(initialPath.session || '2025-26');

  const states = meta?.states ?? STATE_BOARD_STATES;
  const classes = meta?.classes ?? SCHOOL_CLASSES;
  const boards = meta?.boards ?? EDUCATION_BOARDS;
  const sessions = meta?.sessions ?? ACADEMIC_SESSIONS;

  const verifiedMatch = useMemo(() => {
    if (!meta?.verifiedCombinations) return null;
    return (
      meta.verifiedCombinations.find((c) => {
        if (c.classLevel !== classLevel || c.board !== board) return false;
        if (board === 'state') {
          return (c.stateName ?? '').toLowerCase() === stateName.trim().toLowerCase();
        }
        return true;
      }) ?? null
    );
  }, [meta, classLevel, board, stateName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply({
      classLevel,
      board,
      stateName: board === 'state' ? stateName : '',
      session,
      subject: initialPath.subject || 'physics',
      configured: true,
    });
  };

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
      <form
        onSubmit={handleSubmit}
        className="a11y-surface rounded-2xl border border-[#E6DEC8] dark:border-[#284766] bg-white dark:bg-[#152A40] p-5 sm:p-8 space-y-6"
      >
        <div className="space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-wide text-[#0B5F58] dark:text-[#4AD1C6] flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Personalise My Learning · Student Profile</span>
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17324D] dark:text-white tracking-tight">
            Choose Your Class &amp; Education Board
          </h1>
          <p className="text-xs sm:text-sm text-[#3D4A50] dark:text-[#B4C5D4]">
            STEM Saathi saves your class and board right on this device so your Physics, Chemistry,
            and Biology syllabus loads automatically every time—no login required.
          </p>
        </div>

        {/* 1. Select Class 6-12 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#17324D] dark:text-white">
            1. Select Class (6 to 12)
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
            {classes.map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setClassLevel(cls)}
                aria-pressed={classLevel === cls}
                className={`min-h-[46px] rounded-xl border text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  classLevel === cls
                    ? 'border-[#0F766E] bg-[#0F766E] text-white'
                    : 'border-[#E6DEC8] dark:border-[#284766] bg-[#F6F1E3] dark:bg-[#1C3652] text-[#17324D] dark:text-[#F6F1E3] hover:border-[#0F766E]'
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Select Education Board */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#17324D] dark:text-white">
            2. Select Education Board
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {boards.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBoard(b.id)}
                aria-pressed={board === b.id}
                className={`min-h-[48px] rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
                  board === b.id
                    ? 'border-[#0F766E] bg-[#0F766E] text-white'
                    : 'border-[#E6DEC8] dark:border-[#284766] bg-[#F6F1E3] dark:bg-[#1C3652] text-[#17324D] dark:text-[#F6F1E3] hover:border-[#0F766E]'
                }`}
              >
                {b.id === 'cbse' ? 'CBSE' : b.id === 'cisce' ? 'ICSE' : 'State Board'}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Conditional State Selector */}
        {board === 'state' && (
          <div className="space-y-2">
            <label
              htmlFor="my-learning-state-select"
              className="block text-sm font-bold text-[#17324D] dark:text-white"
            >
              3. Select Your State Board
            </label>
            <select
              id="my-learning-state-select"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              className="w-full min-h-[48px] rounded-xl border border-[#E6DEC8] dark:border-[#284766] bg-[#F6F1E3] dark:bg-[#1C3652] px-4 py-2.5 text-sm font-semibold text-[#17324D] dark:text-white focus:outline-none focus:border-[#0F766E]"
            >
              {states.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Academic Year */}
        <div className="space-y-2">
          <label
            htmlFor="my-learning-session-select"
            className="block text-sm font-bold text-[#17324D] dark:text-white"
          >
            Academic Year / Syllabus Edition
          </label>
          <select
            id="my-learning-session-select"
            value={session}
            onChange={(e) => setSession(e.target.value as AcademicSession)}
            className="w-full min-h-[46px] rounded-xl border border-[#E6DEC8] dark:border-[#284766] bg-[#F6F1E3] dark:bg-[#1C3652] px-4 py-2 text-sm font-semibold text-[#17324D] dark:text-white"
          >
            {sessions.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label.en}
              </option>
            ))}
          </select>
        </div>

        {/* Verification preview */}
        {verifiedMatch ? (
          <div className="rounded-xl border border-[#0F766E]/40 bg-[#E3F5F3]/70 dark:bg-[#0F766E]/15 p-3.5 flex items-start gap-2.5 text-xs">
            <CheckCircle2 className="w-4 h-4 text-[#0B5F58] dark:text-[#4AD1C6] shrink-0 mt-0.5" />
            <div className="text-[#17324D] dark:text-[#E7F4F2]">
              <p className="font-bold">
                Verified Textbook Syllabus Ready ({verifiedMatch.chapterCount} deep chapters)
              </p>
              <p>{verifiedMatch.textbookName} · Physics, Chemistry &amp; Biology included.</p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-[#F2B544] bg-[#FFFBEB] dark:bg-[#2F2411] p-3.5 flex items-start gap-2.5 text-xs">
            <Info className="w-4 h-4 text-[#9A6100] dark:text-[#F2B544] shrink-0 mt-0.5" />
            <p className="text-[#1A262C] dark:text-[#FCEAC2]">
              Verified syllabus datasets are loaded for CBSE Classes 6–12, ICSE Classes 8 &amp; 10,
              Karnataka (8 &amp; 10 SSLC), Maharashtra (8), Tamil Nadu (8), and Kerala (8). You can
              still apply this choice or switch anytime.
            </p>
          </div>
        )}

        {/* Submit & Cancel */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F766E] hover:bg-[#0B5F58] px-6 py-3 min-h-[48px] text-sm font-bold text-white transition-colors cursor-pointer"
          >
            <span>Apply &amp; View My Syllabus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border border-[#E6DEC8] dark:border-[#284766] bg-[#F6F1E3] dark:bg-[#1C3652] px-5 py-3 min-h-[48px] text-sm font-semibold text-[#17324D] dark:text-[#F6F1E3] cursor-pointer"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
};
