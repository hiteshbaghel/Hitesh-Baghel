import React from 'react';
import { portfolioData, GithubIcon, LeetcodeIcon, MailIcon } from '../constants';
import LinkedInBadge from './ui/LinkedInBadge';

interface ContactProps {
    theme: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  return (
    <section id="contact" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mx-auto max-w-7xl">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl"></div>
        </div>
      </div>
      
      {/* Main Card */}
      <div className="relative max-w-5xl mx-auto p-1 rounded-3xl bg-gradient-to-br from-slate-200/80 via-white/80 to-slate-200/80 dark:from-neutral-800/80 dark:via-neutral-950/80 dark:to-neutral-800/80 backdrop-blur-sm border border-slate-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="relative p-8 md:p-12 rounded-[1.25rem] bg-slate-50/90 dark:bg-neutral-950/90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Info & CTA */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-neutral-100">Let's Connect</h2>
                    <p className="text-lg text-slate-600 dark:text-neutral-400 mt-4 leading-relaxed">
                        I'm always excited to hear about new projects. Whether you have a question, a proposal, or just want to say hello, feel free to reach out.
                    </p>
                    <div className="mt-8 space-y-4">
                        <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center justify-center md:justify-start gap-3 group">
                            <MailIcon className="w-5 h-5 text-slate-500 dark:text-neutral-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                            <span className="text-slate-700 dark:text-neutral-300 group-hover:text-slate-900 dark:group-hover:text-neutral-100 font-medium transition-colors hover:underline">{portfolioData.contact.email}</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Social Links */}
                <div className="flex flex-col gap-4">
                    {/* LinkedIn Badge for mobile view */}
                    <div className="block lg:hidden mx-auto mb-4">
                        <LinkedInBadge theme={theme} />
                    </div>
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
                       className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 hover:border-slate-300 dark:hover:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-800/50 transition-all duration-300 hover:scale-[1.03]">
                        <div className="flex items-center gap-4">
                            <GithubIcon className="w-8 h-8 text-slate-600 dark:text-neutral-400" />
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-neutral-200">GitHub</h4>
                                <p className="text-sm text-slate-500 dark:text-neutral-500">Explore my projects</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-neutral-600 group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"></path></svg>
                    </a>
                    <a href={portfolioData.contact.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"
                       className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 hover:border-slate-300 dark:hover:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-800/50 transition-all duration-300 hover:scale-[1.03]">
                        <div className="flex items-center gap-4">
                            <LeetcodeIcon className="w-8 h-8 text-slate-600 dark:text-neutral-400" />
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-neutral-200">LeetCode</h4>
                                <p className="text-sm text-slate-500 dark:text-neutral-500">View my profile</p>
                            </div>
                        </div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-neutral-600 group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"></path></svg>
                    </a>
                </div>
            </div>
        </div>
      </div>

      <footer className="mt-24 text-center">
        <p className="text-slate-500 dark:text-neutral-500">&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;