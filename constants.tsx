import React from 'react';

// --- ICONS ---
// Using simple SVG components for icons
// These props allow passing className and other SVG attributes
const createIcon = (path: React.ReactNode) => (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {path}
    </svg>
);

export const SunIcon = createIcon(
    <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m4.93 19.07 1.41-1.41" />
        <path d="m17.66 6.34 1.41-1.41" />
    </>
);

export const MoonIcon = createIcon(<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />);

export const UserIcon = createIcon(
    <>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </>
);

export const CodeIcon = createIcon(
    <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </>
);

export const FolderKanbanIcon = createIcon(
    <>
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        <path d="M8 10v4" />
        <path d="M12 10v2" />
        <path d="M16 10v6" />
    </>
);

export const GraduationCapIcon = createIcon(
    <>
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>
);

export const PhoneIcon = createIcon(
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
);

export const GithubIcon = createIcon(
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.16.28-2.28-.28-3.28a3.99 3.99 0 0 0-1.39-.94c-.55-.17-1.12-.23-1.69-.23-1.5 0-3 .5-4.5 1.5-1.5-1-3-1.5-4.5-1.5A5.4 5.4 0 0 0 2 7.52c-.56 1-.56 2.12-.28 3.28-1 1-1.5 2.5-1.5 4C.22 17.5 3 20 6 20c.5 1.5 1 3 1 4.5" />
);

export const ExternalLinkIcon = createIcon(
    <>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" x2="21" y1="14" y2="3" />
    </>
);

export const TrophyIcon = createIcon(<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />);

export const CertificateIcon = createIcon(
    <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <circle cx="10" cy="16" r="2" />
        <path d="m10 10-2 3 2 3 2-3-2-3Z" />
    </>
);

export const LeetcodeIcon = createIcon(
    <path d="M14.5 19.5 22 12l-7.5-7.5L9.5 12l5 7.5zM4.5 12l5-7.5 5 7.5-5 7.5-5-7.5z" />
);

export const MailIcon = createIcon(
    <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
);

export const LinkedinIcon = createIcon(
    <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </>
);

export const ChevronDownIcon = createIcon(<path d="m6 9 6 6 6-6" />);

export const DesktopIcon = createIcon(
    <>
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <line x1="12" y1="16" x2="12" y2="20" />
        <line x1="8" y1="20" x2="16" y2="20" />
    </>
);


// Custom Technology Icons
const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.39 6.28c-.14-.38-.46-.38-.59 0l-1.38 3.93c-.11.38.3.63.59.38l1.38-1.04c.1-.08.23-.08.33 0l1.38 1.04c.29.25.7-.01.59-.38l-1.38-3.93zm-3.83 5.34c-.14-.38-.46-.38-.59 0l-1.38 3.93c-.11.38.3.63.59.38l1.38-1.04c.1-.08.23-.08.33 0l1.38 1.04c.29.25.7-.01.59-.38l-1.38-3.93zm9.32-1.63c0-2.32-1.89-4.2-4.21-4.2h-4.3c-2.32 0-4.21 1.88-4.21 4.2v7.83c0 2.31 1.89 4.2 4.21 4.2h4.3c2.32 0 4.21-1.89 4.21-4.2V9.99zm-2.06 7.64c0 1.19-.97 2.15-2.15 2.15h-4.3c-1.19 0-2.15-.96-2.15-2.15V9.99c0-1.19.96-2.15 2.15-2.15h4.3c1.18 0 2.15.96 2.15 2.15v7.64zm-1.66-2.58c.14.38.46.38.59 0l1.38-3.93c.11-.38-.3-.63-.59-.38l-1.38 1.04c-.1.08-.23.08-.33 0l-1.38-1.04c-.29-.25-.7.01-.59.38l1.38 3.93z" />
    </svg>
);
const SpringIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.001 2C6.478 2 2.001 6.477 2.001 12c0 2.91 1.24 5.548 3.25 7.424.328.303.85.068.85-.349V17.5c0-1.03.68-1.93 1.66-2.31 1.3-.5 2.68-.8 4.1-.8s2.81.3 4.1.8c.98.4 1.66 1.3 1.66 2.31v1.575c0 .417.522.652.85.349 2.01-1.876 3.25-4.514 3.25-7.424 0-5.523-4.477-10-10-10zM12.001 4c1.61 0 3.1.5 4.39 1.38-1.11.7-2.43 1.2-3.89 1.48-.48.09-.5.78 0 .87 1.46.28 2.78.78 3.89 1.48C15.1 10.1 13.61 10.6 12.001 10.6s-3.1-.5-4.39-1.38c1.11-.7 2.43-1.2 3.89-1.48.48-.09.5-.78 0-.87-1.46-.28-2.78-.78-3.89-1.48C8.9 4.5 10.39 4 12.001 4z" />
    </svg>
);
const MySqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.35 4.03a.59.59 0 00-.7 0C7.2 6.81 5.02 9.47 5.02 12.56c0 2.21.9 4.22 2.37 5.65l-1.05.6c-.3.17-.39.56-.2.85.19.29.58.38.87.19l1.1-.63c.53.25 1.1.45 1.7.6v1.1c0 .32.26.58.58.58h1.16c.32 0 .58-.26.58-.58v-1.1c.6-.15 1.17-.35 1.7-.6l1.1.63c.29.19.68.1.87-.19.19-.29.1-.68-.2-.85l-1.05-.6c1.47-1.43 2.37-3.44 2.37-5.65 0-3.09-2.18-5.75-6.62-8.53zM12 5.2c3.48 2.22 5.47 4.35 5.47 7.36 0 1.58-.68 3.12-1.92 4.32-.43.42-.83.77-1.2 1.07-.37.29-.72.54-1.04.75-.12.08-.23.15-.35.21V12.9h-1.8v5.99c-1.2-.42-2.3-1.08-3.23-1.95C7.99 15.65 7.2 14.15 7.2 12.56c0-3.01 2-5.14 5.48-7.36z" />
    </svg>
);
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);
const HtmlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M1.625 0h20.75L20.612 21.6l-8.621 2.4-8.621-2.4L1.625 0zM12 19.868l6.857-1.884L19.53 3.2H4.469l.674 14.784L12 19.868zM12 5.647h5.81l-.229 2.568H12V5.647zm0 3.734h5.45l-.457 5.111-2.993.822v-2.316l1.625-.432.144-1.617H12v-1.568z" />
    </svg>
);
const CssIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M1.625 0h20.75L20.612 21.6l-8.621 2.4-8.621-2.4L1.625 0zM12 19.868l6.857-1.884L19.53 3.2H4.469l.674 14.784L12 19.868zM12 5.647H6.188l-.171-1.932h11.965l-.229 2.568H12V5.647zm0 3.734h-4.22l.144 1.617 1.625.432v2.316l-2.993-.822.312 3.543h5.132v-1.568H9.37l-.114-1.295h2.744v-1.568H8.97l-.085-1.02h3.03v-1.568z" />
    </svg>
);
const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.04 10.74a1.73 1.73 0 00-1.48-1.48l-6.1-1.1-2.73-5.5a1.73 1.73 0 00-3.08 0l-2.73 5.5-6.1 1.1A1.73 1.73 0 00.3 12.4l4.42 4.3-1.04 6.08a1.73 1.73 0 002.51 1.82L12 21.43l5.46 2.87a1.73 1.73 0 002.5-1.82l-1.03-6.08 4.42-4.3c.63-.6.44-1.65-.3-1.74z" />
    </svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.42 12.75c-.24-.1-.58-.04-.8.15L21 13.5v-3.32c0-.3-.15-.58-.4-.75l-2.3-1.53c-.2-.14-.46-.17-.7-.06l-4.5 2.05v.2c0 .42-.16.82-.44 1.13-.28.31-.67.5-1.08.5H8.75v-2.88H11.5c.34 0 .66-.13.9-.35.24-.22.38-.52.4-.84l.02-1.04c0-.3-.15-.58-.4-.75l-2.3-1.53c-.2-.14-.46-.17-.7-.06L5.02 5.86c-.3.14-.52.43-.52.78v8.2c-.1.32-.4.56-.75.56H2c-.44 0-.8-.36-.8-.8V8.4c0-.44.36-.8.8-.8h1.2v-1.c0-.44.36-.8.8-.8h.28c.3-.14.52-.43.52-.78V4.1c0-.44.36-.8.8-.8h3.8c.24 0 .47.07.66.2l3.4 2.28c.18.12.3.33.3.55v.6c.02.16.1.3.24.4.14.1.3.15.46.12l4.8-2.2c.24-.1.58-.04.8.15l2.76 2.08c.22.17.38.43.38.72v5.1zM5.3 16.5h2.1v2.1h-2.1zM8.1 16.5h2.1v2.1H8.1zM10.9 16.5h2.1v2.1h-2.1zM13.6 16.5h2.1v2.1h-2.1zM16.4 16.5h2.1v2.1h-2.1z" />
    </svg>
);

// --- PORTFOLIO DATA ---

export const portfolioData = {
  name: "Hitesh Baghel",
  title: "Java Backend Developer",
  description: "Backend Engineer skilled in building scalable and efficient applications using Java, Spring Boot, and MySQL. Hands-on experience in API development, database management, and system integration through academic and personal projects. Strong problem-solving abilities with solid understanding of DSA, OOP, and software engineering principles. Enthusiastic about applying technical expertise to impactful projects while continuously learning.",
  contact: {
    email: "hiteshbaghel03@gmail.com",
    github: "https://github.com/hiteshbaghel",
    linkedin: "https://in.linkedin.com/in/hiteshbaghel",
    leetcode: "https://leetcode.com/u/hiteshbaghel/",
  },
  skills: [
    { name: 'Java', icon: <JavaIcon className="w-full h-full" /> },
    { name: 'Spring Boot', icon: <SpringIcon className="w-full h-full" /> },
    { name: 'MySQL', icon: <MySqlIcon className="w-full h-full" /> },
    { name: 'React', icon: <ReactIcon className="w-full h-full" /> },
    { name: 'HTML5', icon: <HtmlIcon className="w-full h-full" /> },
    { name: 'CSS3', icon: <CssIcon className="w-full h-full" /> },
    { name: 'Git', icon: <GitIcon className="w-full h-full" /> },
    { name: 'Docker', icon: <DockerIcon className="w-full h-full" /> },
  ],
  projects: [
    {
      title: 'SkillSyncAI – AI Powered Placement Preparation Platform',
      description: 'Designed and implemented a full-stack platform with AI-driven mock interviews, quiz generation, ML-based placement prediction, leaderboard & analytics. Enhanced placement readiness for students.',
      tags: ['AI/ML', 'Full-Stack', 'EdTech'],
      stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Vercel', 'Render'],
      links: {
        demo: '#', // Add your actual demo link here
        github: 'https://github.com/hiteshbaghel/SkillSyncAI', // Add your actual github link here
      }
    },
    {
      title: 'ByteWise - A Toolkit for Engineering Success',
      description: 'Engineered a comprehensive academic toolkit with semester resources, Razorpay payments, certified course showcase, and admin dashboard with CRUD operations and analytics.',
      tags: ['Full-Stack', 'Academic Tool', 'E-commerce'],
      stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Vercel', 'Render'],
      links: {
        demo: '#', // Add your actual demo link here
        github: 'https://github.com/hiteshbaghel/ByteWise', // Add your actual github link here
      }
    }
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Mahakal Institute of Technology, Ujjain',
      duration: 'Sep 2022 - Jun 2026',
      icon: <DesktopIcon />,
    },
    {
      degree: 'Intermediate (Higher Secondary Education)',
      institution: 'Padmaja Higher Secondary School, Dewas',
      duration: 'Jun 2021 - May 2022',
      icon: <GraduationCapIcon />,
    },
    {
      degree: 'Matriculation (Secondary Education)',
      institution: 'The Guardian High School, Dewas',
      duration: 'Jun 2019 - May 2020',
      icon: <GraduationCapIcon />,
    },
  ],
  achievements: [
    "Google Cloud Arcade Facilitator Cohort 2 (2025) - Selected for facilitator program, mentoring peers in cloud-native application deployment.",
    "ProjectExpo 4.0, MIT Ujjain (2025) - First Place Winner & Cash Prize for innovative project showcasing technical skills and problem-solving.",
    "Codathon, MIT Ujjain – Recognized as Top Performer in competitive coding event demonstrating strong algorithmic thinking.",
  ],
  certifications: [
    "C++ & Java, Database & MySQL - AK Soft",
    "Java, Spring 6 & Spring Boot 3 – Telusko (Udemy)",
    "Java Developer Internship - Codsoft",
  ],
};