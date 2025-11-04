import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto text-center animate-on-scroll" style={{ transitionDelay: '150ms' }}>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
          {portfolioData.summary}
        </p>
      </div>
    </Section>
  );
};

export default About;