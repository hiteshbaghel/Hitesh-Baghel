import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
        {portfolioData.skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 rounded-xl w-28 h-28 sm:w-32 sm:h-32 transition-all duration-300 hover:scale-105 hover:border-slate-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-neutral-900/50 animate-on-scroll"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="w-10 h-10 text-slate-700 dark:text-neutral-300">
              {skill.icon}
            </div>
            <span className="font-medium text-center text-sm text-slate-600 dark:text-neutral-400">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;