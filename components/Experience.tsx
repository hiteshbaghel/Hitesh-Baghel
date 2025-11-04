import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Education">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-2 top-2 h-full w-0.5 bg-slate-200 dark:bg-neutral-800 transition-colors duration-300" aria-hidden="true"></div>
        <div className="relative space-y-10 ml-8">
          {portfolioData.education.map((item, index) => (
            <div 
              key={index} 
              className="relative animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-[-1.5rem] top-1.5 w-4 h-4 bg-white dark:bg-neutral-100 border-2 border-slate-300 dark:border-neutral-700 rounded-full transition-colors duration-300"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div className="sm:pr-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-neutral-100">{item.degree}</h3>
                  <p className="text-slate-700 dark:text-neutral-300 mt-1">{item.institution}</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-neutral-500 text-left sm:text-right shrink-0 mt-2 sm:mt-0">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;