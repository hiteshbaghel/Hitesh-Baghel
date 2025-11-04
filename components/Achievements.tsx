import React from 'react';
import { portfolioData, TrophyIcon } from '../constants';
import Section from './Section';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements">
      <div className="max-w-5xl mx-auto">
        <ul className="space-y-4">
          {portfolioData.achievements.map((achievement, index) => (
            <li 
              key={index} 
              className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 animate-on-scroll transition-colors duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-neutral-900 text-slate-500 dark:text-neutral-400 transition-colors duration-300">
                <TrophyIcon className="w-5 h-5" />
              </div>
              <p className="text-slate-700 dark:text-neutral-300 pt-0.5">{achievement}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Achievements;