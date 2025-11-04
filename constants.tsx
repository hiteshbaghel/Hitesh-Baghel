import React from 'react';

// Skill Icons - Replaced with official logos, styled for the UI
const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4.77 17.93C5.59 19.16 7.02 20 8.5 20c2.24 0 4.12-1.66 4.44-3.84a5.53 5.53 0 0 1-1.44.22c-1.82 0-3.43-1.04-4.23-2.54-.31.08-.62.16-.94.16-.92 0-1.78-.34-2.45-.92l-.11.11c-.39.39-.39 1.02 0 1.41l.54.54z"/>
    </svg>
);
const SpringBootIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14.18,10.38a1.2,1.2,0,0,0-1.6,1.71,1.21,1.21,0,0,0,1.71,1.6,3.61,3.61,0,0,1,1.69,5.77A3.54,3.54,0,0,1,12,20a3.61,3.61,0,0,1-3.59-3.6,1.2,1.2,0,1,0-2.4,0A6,6,0,0,0,12,22.4a6,6,0,0,0,5.77-7.7A6,6,0,0,0,14.18,10.38ZM11,2.6,3.65,9.93a1.2,1.2,0,1,0,1.69,1.69L11,5.29,18.66,13A1.2,1.2,0,1,0,20.35,11.3ZM12.39,4.41a1.2,1.2,0,1,0-1.7,1.7L12.4,7.8a1.21,1.21,0,0,0,1.7,0,1.2,1.2,0,0,0,0-1.7Z"/>
    </svg>
);
const MySqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
       <path d="M11.64,15.11a2.37,2.37,0,0,1,2.36-2.37V12a3.11,3.11,0,0,0-5.63-2,4,4,0,0,0-4.22,4.22,4.3,4.3,0,0,0,8.44,1.11,2.5,2.5,0,0,0-1-1.19ZM8.24,14.22a2,2,0,0,1,2-2,1.7,1.7,0,0,1,1.41.6,3.18,3.18,0,0,0-1.11,3,1.75,1.75,0,0,1-2.31-1.63Zm11.85,1.11a4.2,4.2,0,0,0-4.11-4.1,2,2,0,0,0-2,.41,4.3,4.3,0,0,0-4-3.14,4.2,4.2,0,0,0-4.1,4.1,3.7,3.7,0,0,0,2.83,3.61,4.2,4.2,0,0,0,4.1,4.1,2,2,0,0,0,2-.41,4.3,4.3,0,0,0,4,3.14,4.2,4.2,0,0,0,4.1-4.1,3.7,3.7,0,0,0-2.83-3.61Z"/>
    </svg>
);
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2.25" fill="currentColor"></circle>
            <ellipse cx="12" cy="12" rx="10.5" ry="4.5"></ellipse>
            <ellipse cx="12" cy="12" rx="4.5" ry="10.5" transform="rotate(60 12 12)"></ellipse>
            <ellipse cx="12" cy="12" rx="4.5" ry="10.5" transform="rotate(-60 12 12)"></ellipse>
        </g>
    </svg>
);
const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 0h24v24H0V0zm22.034 18.262c.328-.64.48-1.332.48-2.072 0-1.16-.36-2.12-.99-2.928-.648-.803-1.524-1.2-2.628-1.2-.912 0-1.68.288-2.304.864-.624.576-1.032 1.344-1.224 2.292H14.52c.216-1.416.9-2.484 2.052-3.204.936-.576 2.064-.864 3.384-.864 1.488 0 2.76.432 3.816 1.296s1.584 2.016 1.584 3.456c0 1.224-.336 2.304-.996 3.24-.66 1-1.596 1.644-2.808 1.944a4.53 4.53 0 01-2.916-.036c-1.032-.384-1.848-1.152-2.448-2.316l1.836-1.08c.36.792.924 1.32 1.704 1.584.78.264 1.56.12 2.34-.432zm-8.478-1.08c.552.936 1.32 1.404 2.304 1.404.648 0 1.164-.156 1.548-.468.384-.312.576-.708.576-1.188 0-.528-.204-.936-.612-1.224-.408-.288-.984-.432-1.728-.432h-.9v-1.836h.864c.72 0 1.296-.144 1.728-.432.432-.288.648-.66.648-1.116 0-.432-.18-.78-.54-1.044-.36-.264-.828-.396-1.404-.396-.552 0-1.02.156-1.404.468-.384.312-.636.732-.756 1.26l-1.92-.432c.264-1.128.936-1.992 2.016-2.592.756-.408 1.62-.612 2.592-.612 1.2 0 2.184.312 2.952.936.768.624 1.152 1.464 1.152 2.52 0 .6-.132 1.14-.396 1.62-.264.48-.636.876-1.116 1.188v.108c.696.264 1.248.66 1.656 1.188.408.528.612 1.152.612 1.872 0 1.116-.396 2.04-1.188 2.772-.792.732-1.8.1.096-3.024.1.096-1.464 0-2.616-.504-1.032-1.284-1.68-2.22-1.944z"/>
    </svg>
);
const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.04,10.23a2.4,2.4,0,0,0-1.9-2.09,2.44,2.44,0,0,0-2.22.68L12.5,14.23V5.5a2.5,2.5,0,1,0-1,0v8.73L6.08,8.82a2.44,2.44,0,0,0-2.22-.68,2.4,2.4,0,0,0-1.9,2.09,2.5,2.5,0,0,0,1,2.8L8.24,16.2,3,19.34a2.5,2.5,0,1,0,1,2.24L9.36,18.4,14.64,22a2.5,2.5,0,1,0,1-2.24L10.29,16.2l5.29-3.17a2.5,2.5,0,0,0,1-2.8Z"/>
    </svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.12 10.78a2.52 2.52 0 0 0-2.45-1.92h-.24c-.21 0-.42.03-.63.09-.27-1.5-1.02-2.8-2.19-3.77-.9-1-2.1-1.64-3.5-1.89-1.2-.2-2.43-.1-3.6.31-1.41.48-2.61 1.34-3.51 2.5-.93 1.2-1.44 2.65-1.44 4.18v.25c0 .35.03.7.1 1.05-.22-1.35.3-2.78 1.47-3.65.9-1 2.1-1.64 3.5-1.89s2.8-.1 4,.31 2.18 1.18 2.88 2.19.96 2.31.78 3.69-.78 2.63-1.81 3.44c-.11-1.35-.99-2.54-2.25-3.06a3.22 3.22 0 0 0-3.34.41c-.96.69-1.44 1.88-1.28 3.12a3.49 3.49 0 0 0 2.22 2.92c1.23.51 2.61.27 3.63-.66.19-1.35 1.13-2.48 2.43-2.91a3.1 3.1 0 0 1 3.27.32c.98.71 1.48 1.94 1.3 3.22a3.64 3.64 0 0 1-2.1 3c-1.26.54-2.68.33-3.72-.56-1.08-.94-1.64-2.31-1.53-3.72.16-2.22 1.37-4.14 3.25-5.22l.16-.09.16-.08.31-.15.45-.2.59-.25c.18-.07.35-.13.51-.18.28-.08.56-.12.84-.12a2.52 2.52 0 0 1 2.45 1.92 2.4 2.4 0 0 1-1.92 2.94 2.52 2.52 0 0 1-2.94-1.92 2.4 2.4 0 0 1 1.92-2.94ZM13.3 8.4H9.9v3.4h3.4V8.4Zm-5.1 0H4.8v3.4h3.4V8.4Zm8.5 0h-3.4v3.4h3.4V8.4Zm-3.4-5.1H9.9v3.4h3.4V3.3Z"/>
    </svg>
);
const TailwindCssIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.334,13.382,8.973,12,6.001,12z"></path>
    </svg>
);
const Html5Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.23.002.626 7.022h8.981l-.323 3.465-2.73-1.022-2.738 1.025.203 2.134 4.838 1.834 4.83-1.832.66-7.234H8.531z"/>
    </svg>
);
const Css3Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
);


export const portfolioData = {
  name: "Hitesh Baghel",
  title: "Java Backend Developer | Freelancer",
  contact: {
    phone: "+917879025039",
    email: "hiteshbaghel03@gmail.com",
    linkedin: "https://linkedin.com/in/hiteshbaghel",
    github: "https://github.com/hiteshbaghel",
  },
  summary: "Backend Engineer skilled in building scalable and efficient applications using Java, Spring Boot, and MySQL. Hands-on experience in API development, database management, and system integration. Strong problem-solving abilities with a solid understanding of DSA, OOP, and software engineering principles.",
  skills: [
    { name: "Java", icon: <JavaIcon /> },
    { name: "Spring Boot", icon: <SpringBootIcon /> },
    { name: "MySQL", icon: <MySqlIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Tailwind CSS", icon: <TailwindCssIcon /> },
    { name: "HTML5", icon: <Html5Icon /> },
    { name: "CSS3", icon: <Css3Icon /> },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Mahakal Institute of Technology, Ujjain",
      duration: "September 2022 - June 2026",
    },
    {
      degree: "Intermediate (Higher Secondary Education)",
      institution: "Padmaja Higher Secondary School, Dewas",
      duration: "June 2021 - May 2022",
    },
    {
      degree: "Matriculation (Secondary Education)",
      institution: "The Guardian High School, Dewas",
      duration: "June 2019 - May 2020",
    },
  ],
  projects: [
    {
      title: "SkillSyncAi - AI Powered Placement Preparation Platform",
      description: "Designed and implemented a full-stack platform with AI-driven mock interviews, quiz generation, ML-based placement prediction, leaderboard & analytics.",
      stack: ["React", "Java", "Spring Boot", "MySQL"],
      tags: ["Full Stack", "AI/ML", "SaaS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "ByteWise - A Toolkit for Engineering Success",
      description: "Engineered a comprehensive academic platform with semester resources, Razorpay payments, certified course showcase, and an admin dashboard with CRUD operations.",
      stack: ["React", "Java", "Spring Boot", "MySQL"],
      tags: ["Full Stack", "E-learning", "Platform"],
      links: {
        demo: "#",
      },
    },
  ],
  achievements: [
    "Google Cloud Arcade Facilitator Cohort 2 (2025) - Selected for facilitator program, mentoring peers in cloud-native application deployment.",
    "ProjectExpo 4.0, MIT Ujjain (2025) – First Place Winner & Cash Prize for innovative project showcasing technical skills and problem-solving.",
    "Codathon, MIT Ujjain – Recognized as Top Performer in competitive coding event demonstrating strong algorithmic thinking.",
  ],
  certifications: [
    "C++ & Java, Database & MySQL – AK Soft",
    "Java, Spring 6 & Spring Boot 3 – Telusko (Udemy)",
    "Java Developer Internship – Codsoft",
  ],
};

// Icons as SVG components
export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 17.66 1.41-1.41"></path><path d="m17.66 4.93 1.41 1.41"></path></svg>
);

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);

export const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
);

export const CertificateIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0"></path><path d="M8 21s1.33-2 4-2 4 2 4 2"></path></svg>
);

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);