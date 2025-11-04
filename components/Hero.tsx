import React from 'react';
import { portfolioData, MailIcon, GithubIcon, LinkedinIcon } from '../constants';
import { TypewriterEffect } from './ui/TypewriterEffect';

const Hero: React.FC = () => {
  const words = portfolioData.title.split(' ').map(text => ({ 
      text, 
      className: "text-slate-900 dark:text-neutral-100" 
  }));

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start -mt-20 px-4">
      <div className="max-w-3xl space-y-5">
        <TypewriterEffect 
          words={words} 
          className="!text-left text-5xl md:text-7xl font-bold tracking-tight"
          cursorClassName="bg-slate-900 dark:bg-neutral-100"
        />
        <p className="text-lg text-slate-600 dark:text-neutral-400 font-light fade-in-up-2">
          Crafting high-performance, scalable, and user-friendly backend applications using modern technologies, clean code, and best practices for seamless user experiences.
        </p>
        <div className="flex items-center gap-3 pt-2 fade-in-up-3">
          <a href={`mailto:${portfolioData.contact.email}`} className="inline-flex items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-black font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 dark:hover:bg-neutral-200 transition-colors">
            <MailIcon className="w-5 h-5" />
            Hire me
          </a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 inline-flex items-center justify-center bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 inline-flex items-center justify-center bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;