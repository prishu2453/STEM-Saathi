import React from 'react';
import { StatusChip } from './CoverageNotice';
import { getCoverage } from '../lib/coverage';
import { formatLearningPathSummary } from '../data/learningPathCore';
import type { Language, LearningPathPreference } from '../types/stem';

export const PathBar: React.FC<{ path: LearningPathPreference; language: Language; onChange: () => void; onCoverage: () => void }> = ({ path, language, onChange, onCoverage }) => (
  <div className="border-b border-[#E6DEC8] dark:border-[#284766] bg-[#E3F5F3] dark:bg-[#0F766E]/20" role="region" aria-label="Your class and board">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
      <span className="font-semibold text-[#0B5F58] dark:text-[#4AD1C6]">
        {language === 'hi' ? 'आपका चयन' : language === 'kn' ? 'ನಿಮ್ಮ ಆಯ್ಕೆ' : 'Your selection'}:
      </span>
      <span className="font-bold text-[#17324D] dark:text-white">{formatLearningPathSummary(path, language)}</span>
      <StatusChip status={getCoverage(path.classLevel, path.board, path.stateName, path.subject as never).status} language={language} />
      <button type="button" onClick={onChange} className="min-h-[44px] px-3 rounded-lg text-sm font-semibold underline text-[#0B5F58] dark:text-[#4AD1C6] cursor-pointer">
        {language === 'hi' ? 'बदलें' : language === 'kn' ? 'ಬದಲಿಸಿ' : 'Change'}
      </button>
      <button type="button" onClick={onCoverage} className="min-h-[44px] px-3 rounded-lg text-sm font-semibold underline text-[#0B5F58] dark:text-[#4AD1C6] cursor-pointer">
        {language === 'hi' ? 'कवरेज देखें' : language === 'kn' ? 'ವ್ಯಾಪ್ತಿ ನೋಡಿ' : 'See coverage'}
      </button>
    </div>
  </div>
);
