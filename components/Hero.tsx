import React from 'react';
import { portfolioData, MailIcon, GithubIcon, LinkedinIcon } from '../constants';
import { TypewriterEffect } from './ui/TypewriterEffect';

const Hero: React.FC = () => {
  const words = portfolioData.title.split(' ').map(text => ({ 
      text, 
      className: "text-slate-900 dark:text-neutral-100" 
  }));

  return (
    <section id="hero" className="min-h-screen flex items-center -mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          {/* Content column */}
          <div className="space-y-5 text-center lg:text-left">
            <TypewriterEffect 
              words={words} 
              className="!text-center lg:!text-left text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              cursorClassName="bg-slate-900 dark:bg-neutral-100"
            />
            <p className="text-lg text-slate-600 dark:text-neutral-400 font-light fade-in-up-2 max-w-2xl mx-auto lg:mx-0">
              A Backend Engineer skilled in building scalable and efficient applications using Java, Spring Boot, and MySQL. Passionate about API development, database management, and system integration.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 fade-in-up-3">
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

          {/* Image column (desktop only) */}
          <div className="hidden lg:flex justify-center items-center">
             <div className="relative w-80 h-80">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-indigo-300 via-sky-300 to-rose-300 dark:from-indigo-900/70 dark:via-sky-900/70 dark:to-rose-900/70 blur-2xl animate-pulse-slow"></div>
                <img 
                    src={portfolioData.profileImage} 
                    alt={portfolioData.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-100 dark:border-neutral-900 shadow-2xl"
                />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;