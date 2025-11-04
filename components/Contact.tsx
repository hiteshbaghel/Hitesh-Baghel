import React from 'react';
import { portfolioData, GithubIcon, LinkedinIcon } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mx-auto max-w-7xl">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl"></div>
        </div>
      </div>
      <div className="relative max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-slate-100/80 dark:bg-neutral-950/50 backdrop-blur-sm border border-slate-200 dark:border-neutral-800 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-neutral-100">Get In Touch</h2>
        <p className="text-lg text-slate-600 dark:text-neutral-400 mt-6 mb-8">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out.
        </p>
        <a href={`mailto:${portfolioData.contact.email}`}
           className="inline-block text-lg font-semibold text-white dark:text-black bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 rounded-lg px-8 py-3 transition-colors">
            {portfolioData.contact.email}
        </a>
        <div className="flex justify-center items-center gap-4 mt-12">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 inline-flex items-center justify-center bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors">
                <GithubIcon className="w-6 h-6" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 inline-flex items-center justify-center bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors">
                <LinkedinIcon className="w-6 h-6" />
            </a>
        </div>
      </div>
      <footer className="mt-24 text-center">
        <p className="text-slate-500 dark:text-neutral-500">&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;