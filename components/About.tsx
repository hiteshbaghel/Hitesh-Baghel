import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-500/30 dark:via-purple-500/30 dark:to-pink-500/30 backdrop-blur-sm">
           {/* Animated shimmer effect */}
          <div className="absolute inset-[-3px] rounded-[1.35rem] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-40 dark:opacity-60 animate-pulse-slow" />
          <div className="relative p-8 md:p-10 rounded-[1.25rem] bg-slate-50/90 dark:bg-neutral-950/90">
            <p className="text-lg text-slate-600 dark:text-neutral-400 leading-relaxed text-center">
              {portfolioData.about.summary}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
