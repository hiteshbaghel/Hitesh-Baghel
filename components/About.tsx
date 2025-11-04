import React from 'react';
import Section from './Section';
import { portfolioData } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="space-y-6 text-base md:text-lg text-slate-700 dark:text-neutral-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p>
            Hello! I'm {portfolioData.name}, a backend-focused developer passionate about building scalable and efficient applications. My journey into software engineering is driven by a desire to solve complex problems and create impactful digital solutions using Java, Spring Boot, and MySQL.
          </p>
          <p>
            With hands-on experience in API development, database management, and system integration from academic and personal projects, I have a strong foundation in Object-Oriented Programming, Data Structures, and core software engineering principles. I am enthusiastic about applying my technical expertise to real-world challenges and am committed to continuous learning and growth in the tech industry.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;