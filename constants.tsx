import React from 'react';

// Base64 encoded profile image
const profileImageBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHBwaHBoaHBwaHBoaHBoaGhwaGhgcIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEkQAAIBAgQDBQQGBggEBwAAAAECAAMRBBIhMQVBUQYTImFxgZGhMrHB0RQjQlJy4fAVQ2KSk6KywvEzorMkc4OTo8PT4v/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAwEQACAgEDAgMIAgMAAwAAAAAAAQIRAxIhBBMxQVEiMmFxFIGhscHR4fBCgZFC8VL/9gAIAQEAAT8A9wCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIgCIg-bhBHZFVk-hBHZFVk-h... (truncated)";

// --- Generic Icons ---
export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

export const FolderKanbanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
        <path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path>
    </svg>
);

export const GraduationCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.7.7 3.2 2 4.2"></path>
        <path d="M18 17.2c1.3-1 2-2.5 2-4.2v-5"></path><path d="M10 12.3v9.7"></path>
        <path d="M2 10v6c0 1.9.6 3.7 1.8 5"></path><path d="m15.1 18.2-3.1-2-3.1 2"></path>
        <path d="M22 10v6"></path><path d="m2 10 10 5 10-5"></path>
        <path d="M6 18v-5l-4-2"></path>
    </svg>
);

export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const LeetcodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
        <path d="M13.48 0L10.52 0 0 10.48 0 13.52 10.52 24 13.48 24 2.96 13.52 2.96 10.48 13.48 0zM21.04 10.48L10.52 0 13.48 0 24 10.48 24 13.52 13.48 24 10.52 24 21.04 13.52 21.04 10.48z"></path>
    </svg>
);


export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

export const CertificateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <path d="M12 9v.01"></path><path d="M12 13v-2"></path>
  </svg>
);

export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m6 9 6 6 6-6"></path>
    </svg>
);

// --- Skill Icons ---
const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M37.9999 18.99C37.9999 22.99 35.9999 30.99 31.4999 32.99C26.9999 34.99 21.9999 33.99 18.9999 30.99C15.9999 27.99 15.4199 23.23 15.5399 21.19C15.6599 19.15 17.9999 13.99 21.9999 13.99C25.9999 13.99 28.9999 17.99 28.9999 17.99C28.9999 17.99 30.0799 15.67 30.4999 14.99C30.9199 14.31 32.9999 11.99 32.9999 11.99C32.9999 11.99 37.9999 14.99 37.9999 18.99Z" fill="#F44336" />
    <path d="M15.4893 21.08C15.3793 23.15 15.8993 27.94 18.8993 30.94C21.8993 33.94 26.9993 34.95 31.4993 32.95C33.8993 31.85 35.6193 28.52 36.6593 25.4C37.0093 24.32 37.9993 21.84 37.9993 18.84C37.9993 14.84 32.9993 11.84 32.9993 11.84C32.9993 11.84 30.9193 14.16 30.4993 14.84C29.9893 15.68 28.9993 17.84 28.9993 17.84C28.9993 17.84 27.4993 15.34 25.4993 14.34C23.4993 13.34 21.8393 13.84 21.8393 13.84C17.8393 13.84 15.5993 19.06 15.4893 21.08Z" fill="#5D4037" />
    <path d="M28.9998 17.99C28.9998 17.99 26.9998 23.99 23.9998 25.99C20.9998 27.99 17.9998 26.99 17.9998 26.99C17.9998 26.99 20.9998 20.99 23.9998 18.99C26.9998 16.99 28.9998 17.99 28.9998 17.99Z" fill="#FFFFFF" />
    <path d="M11.9999 33.99C11.9999 33.99 10.9999 38.99 13.9999 41.99C16.9999 44.99 21.9999 43.99 21.9999 43.99L22.9999 36.99L11.9999 33.99Z" fill="#42A5F5" />
    <path d="M11.9998 33.99C11.9998 35.99 12.9998 42.99 21.9998 43.99C21.9998 43.99 22.9998 36.99 22.9998 36.99L11.9998 33.99Z" fill="#1E88E5" />
  </svg>
);

const SpringBootIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M17.228 19.531c-2.31 2.31-5.744 3.32-8.336 2.373-2.738-1.002-4.954-3.218-5.956-5.956-0.947-2.592 0.063-6.026 2.373-8.336C7.62 5.301 11.054 4.29 13.646 5.237c2.738 1.002 4.954 3.218 5.956 5.956 0.947 2.592-0.063 6.026-2.374 8.338zM8.969 19.544c0.803 0.294 2.801 0.732 4.671-1.138 2.31-2.31 1.83-4.99-1.026-7.845-2.855-2.855-5.535-3.336-7.845-1.025-1.87 1.87-1.432 3.868-1.138 4.671l5.338 5.337z" fill="#6DB33F" />
    </svg>
);

const MysqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M57.11 81.76a20.8 20.8 0 0013.78 0v-16.2h15.93c0-10.4-5.32-16.75-15.93-16.75h-25v53.75h11.22v-20.8z" fill="#00758F" />
        <path d="M81.33 48.81V32h-10.4v16.81h10.4z" fill="#00758F" />
        <path d="M70.89 81.76a20.8 20.8 0 01-13.78 0v-16.2H41.18v27.42c0 5.32 4.22 9.24 10.13 9.24h29.58V81.76H70.89z" fill="#F29111" />
        <path d="M86.65 67.74a20.8 20.8 0 01-13.78 0V51.54H9.09v27.42c0 5.32 4.22 9.24 10.13 9.24h29.58v18.04h11.22V81.76h29.58c5.91 0 10.13-3.92 10.13-9.24V51.54H86.65v16.2z" fill="#00758F" />
        <path d="M103.22 81.76a20.8 20.8 0 0013.78 0v-16.2h-15.93c0-10.4-5.32-16.75-15.93-16.75h-25v53.75h11.22v-20.8h16.86z" fill="#00758F" />
        <path d="M117 48.81V32H106.6v16.81H117z" fill="#00758F" />
    </svg>
);

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" {...props}>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
    </svg>
);

const JsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#F7DF1E" d="M0 0h256v256H0V0Z" />
        <path d="M42.24 210.88c.8 3.52 2.72 6.4 7.2 6.4 3.36 0 5.28-1.44 5.28-7.2V115.36h15.2v94.88c0 12.16-7.84 17.6-19.52 17.6-10.4 0-16.16-6.08-18.4-13.92l10.24-4.16zm57.28 7.36c4.64 0 8.48-1.6 11.2-4.96l-8.48-5.6c-1.44 2.08-3.04 2.88-5.12 2.88-3.04 0-4.96-1.76-4.96-4.8v-32.96h20.48v-12.8H93.12v-17.28h21.12v-12.8H93.12V115.36h22.72v-12.8H77.92v114.24h15.2v-12.64c1.12 4.48 4.32 8.48 11.68 8.48zm57.6 0c11.68 0 18.4-7.36 18.4-17.76v-25.28c0-8.32-3.2-13.44-11.52-13.44-4.8 0-8.32 2.72-9.76 6.08l-10.56-4c2.56-8.48 9.6-13.28 20.16-13.28 12.48 0 21.6 8.32 21.6 20.8v38.24c0 15.2-11.36 24.32-26.24 24.32-15.52 0-24.16-9.12-24.16-22.56v-6.56h15.2v5.6c.16 5.28 3.2 9.12 8.96 9.12z" />
    </svg>
);

const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.5 11.1c-.1-.4-.3-.7-.6-.9L14.7.7c-.6-.6-1.6-.6-2.2 0l-1.9 1.9c.2.1.4.2.5.4l1.9-1.9c.3-.3.8-.3 1.1 0l6.6 6.6c.3.3.3.8 0 1.1l-6.6 6.6c-.3.3-.8.3-1.1 0l-1.9-1.9c-.1.2-.3.3-.5.4l1.9 1.9c.6.6 1.6.6 2.2 0l7.2-7.2c.3-.2.5-.5.6-.9z" fill="#F05033"/>
        <path d="M12.9 14.1c-1-.2-1.8-1-1.8-2s.8-1.8 1.8-2c1-.2 2.1.2 2.7.9l.1.1c.3.3.3.8 0 1.1l-.1.1c-.5.8-1.6 1.1-2.6.9zm-2.8-5.3c-1.3-1.3-3.5-1.3-4.8 0L3.5 10.6c-1.3 1.3-1.3 3.5 0 4.8l1.8 1.8c1.3 1.3 3.5 1.3 4.8 0l1.8-1.8v-3.3l-1.8-1.5zM9.5 16c-.9.9-2.3.9-3.2 0L4.5 14.2c-.9-.9-.9-2.3 0-3.2L6.3 9.2c.9-.9 2.3-.9 3.2 0l1.8 1.8v3.2L9.5 16z" fill="#F05033"/>
        <path d="M9.3 14.1c-.5-.1-.9-.5-.9-1s.4-.9.9-1c.5-.1 1 .1 1.3.5.1.1.3.1.4 0l.1-.1c.1-.1.1-.3 0-.4-.4-.5-1-.8-1.7-.6-1 .2-1.8 1-1.8 2s.8 1.8 1.8 2c.7.1 1.3-.2 1.7-.6.1-.1.1-.3 0-.4l-.1-.1c-.1 0-.2-.1-.4 0-.3.4-.8.6-1.3.5z" fill="#F05033"/>
    </svg>
);

const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}>
        <path d="M255.16 113.37a44.22 44.22 0 00-11.83-20.9 66.27 66.27 0 00-11.45-8.9c-2.43-1.33-5-2.58-7.5-3.83-4.83-2.36-9.67-4.66-14.53-6.84a5.3 5.3 0 00-6.15.58 6.44 6.44 0 00-2 6.53v.41c-2.33 1.25-4.58 2.5-6.88 3.82-3.54 2-7 4.14-10.4 6.27-2.82 1.76-5.5 3.61-8.23 5.4a4.13 4.13 0 00-1.85 4.34c.05.3.1.6.15.9a4.2 4.2 0 004.83 2.8c2-.68 3.5-2.4 4.1-4.32a37.8 37.8 0 0110-10.28c2.4-1.46 4.88-2.85 7.35-4.13 1.1-.58 2.22-1.15 3.33-1.72a4.2 4.2 0 002.3-5.26 3.65 3.65 0 00-4.8-2.18c-2.13.93-4.25 1.9-6.35 2.87-2.67 1.23-5.3 2.5-7.93 3.83-3.13 1.57-6.23 3.2-9.28 4.88-4.43 2.45-8.73 5-13.06 7.55-3.1 1.85-6.2 3.7-9.2 5.66-4.52 3-8.8 6.15-12.87 9.54-5.3 4.43-9.5 9.4-13.2 15.04a50.62 50.62 0 00-7.8 19.34c-.9 4.82-1.32 9.7-1.7 14.57-.4 5-.77 9.94-1.15 14.88-.2 2.5-.38 5.08-.57 7.62v1.3c.02.43.04.87.06 1.3-3.1 1.7-6.1 3.53-9.1 5.36-4.24 2.6-8.38 5.34-12.3 8.3-2.12 1.6-4.2 3.28-6.3 4.9-1.9 1.5-3.7 3.07-5.55 4.62a15.14 15.14 0 00-4.83 11.53c0 .32.02.63.05.95a5.72 5.72 0 006.18 5.1c2.7-.35 4.68-2.4 5.3-5.02.1-.4.2-1 .3-1.45a33.3 33.3 0 014.22-13.23c2-3.15 4.3-6.1 6.68-9 1.4-1.7 2.9-3.32 4.4-4.93 1.1-.38 2.2-.75 3.32-1.12a6.3 6.3 0 005.15-3.3c.6-1.6.5-3.37-.2-4.88-.8-1.63-2.4-2.7-4.22-2.9-2.2-.26-4.26.75-5.53 2.5-1.1 1.53-1.6 3.3-1.7 5-.13 2-.2 4-.3 6-.1 2.2-.2 4.4-.3 6.6-.1 2.15-.2 4.3-.3 6.45-.1 2.5-.2 5-.3 7.5s-.2 5-.28 7.53c-.05 2.7-.1 5.4-.14 8.1 0 2.22 0 4.45.04 6.67.03 2.7.07 5.4.12 8.1.05 2.5.12 5 .2 7.5.1 2.2.18 4.35.28 6.52.08 2.2.16 4.4.28 6.6.1 2.1.2 4.2.3 6.3.06 1.4.13 2.8.2 4.2a6.3 6.3 0 003.5 5.53c1.7.9 3.6.95 5.35.15 1.8-.83 3-2.5 3.35-4.4.3-1.75.1-3.6-1.1-4.9-1.32-1.5-3-2.55-4.8-3.1-1.6-.5-3.2-.9-4.8-1.3-3.4-.84-6.8-1.66-10.2-2.5-3.3-.8-6.6-1.6-9.9-2.4-2.1-.5-4.1-1.04-6.2-1.5-2.2-.5-4.4-1-6.6-1.5s-4.3-.9-6.5-1.4c-2-.4-4.1-.8-6.1-1.2-2.8-.5-5.5-1-8.3-1.5a4.2 4.2 0 00-4.3 1.8 4.2 4.2 0 00.3 5.1c.8.9 1.9 1.5 3.1 1.7 3.6.7 7.2 1.3 10.8 1.9 3.5.6 7 1.2 10.5 1.7 3.3.5 6.6 1 9.9 1.5 3.3.4 6.7.9 10 1.3 3.3.4 6.6.8 9.9 1.2 2.1.2 4.2.5 6.2.7 2.1.2 4.2.4 6.2.5 2.1.1 4.2.3 6.3.4 2.1.1 4.2.1 6.3.2 2.1 0 4.2 0 6.2.05 2.1 0 4.2 0 6.3 0 2.1 0 4.2-.02 6.3-.03 2.1-.02 4.2-.03 6.2-.05 2.1-.03 4.2-.06 6.3-.1a5.8 5.8 0 005.1-2.6 6 6 0 001.3-5.6c-.6-2-2.1-3.6-4.1-4.4-1.7-.7-3.5-1-5.3-1.4-3-.6-6-1.2-9-1.8-3-.6-6-1.2-9-1.8s-6-1.1-9-1.7c-3-.6-6-1.1-9-1.6-1.8-.3-3.6-.6-5.4-.9a4.2 4.2 0 00-5.1 2.3 4.2 4.2 0 002.3 5.1c1.3.6 2.7.9 4.1 1.2a121.2 121.2 0 0015.5 2.6c5.2.4 10.4.7 15.5.9 5.2.2 10.4.3 15.6.4H154c5.2 0 10.4-.04 15.6-.1 5.2-.08 10.4-.18 15.5-.3 5.2-.1 10.4-.2 15.6-.4a5.1 5.1 0 004.5-2.2c1.2-1.8 1.4-4 .6-5.9a41.8 41.8 0 00-11.82-16.7c-1.3-1.2-2.6-2.3-3.9-3.5a5.5 5.5 0 00-5.4-1.2 6.1 6.1 0 00-3.6 5.4c.05.3.1.6.15.9a4.2 4.2 0 004.8 2.8c2-.68 3.5-2.4 4.1-4.32a37.8 37.8 0 0110-10.28c2.4-1.46 4.88-2.85 7.35-4.13.2-.1.3-.2.5-.3z" fill="#0db7ed" />
    </svg>
);

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#44A8B3" d="M128.4 0c-42.7 0-77.4 34.7-77.4 77.4s34.7 77.4 77.4 77.4 77.4-34.7 77.4-77.4S171.1 0 128.4 0zm-18.7 118.3c-7.3 7.3-18.2 10.6-29.2 8-11.3-2.6-20.4-9.9-25.2-20.4-4.8-10.5-5-22.3-0.2-32.8s14.8-19.1 25.4-22.8c10.9-3.7 23.1-2.1 32.8 5.2 9.4 7.1 14.3 18.1 13.9 29.4-0.3 9.4-4.2 18.2-10.5 24.5-6.3 6.3-14.8 10-23.7 11.4-2.3 0.4-4.6 0.5-6.9 0.5z" />
        <path fill="#44A8B3" d="M174.4 118.3c-7.3 7.3-18.2 10.6-29.2 8-11.3-2.6-20.4-9.9-25.2-20.4-4.8-10.5-5-22.3-0.2-32.8s14.8-19.1 25.4-22.8c10.9-3.7 23.1-2.1 32.8 5.2 9.4 7.1 14.3 18.1 13.9 29.4-0.3 9.4-4.2 18.2-10.5 24.5-6.3 6.3-14.8 10-23.7 11.4-2.3 0.4-4.6 0.5-6.9 0.5z" />
    </svg>
);

const Html5Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#E34F26" d="M71 460L30 0h451l-41 460-185 52z" />
        <path fill="#EF652A" d="M256 472l149-41 35-394H256z" />
        <path fill="#EBEBEB" d="M256 208h-74l-5-57h158l-16 179-63 17-63-17 4-50h45l-19 21 38 10 38-10 4-37H116l-11-124h230l-4 44H256z" />
    </svg>
);

const Css3Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#1572B6" d="M71 460L30 0h451l-41 460-185 52z" />
        <path fill="#33A9DC" d="M256 472l149-41 35-394H256z" />
        <path fill="#EBEBEB" d="M256 208h83l-8 91h-75v-45h129l-12 133-63 17v48l101-28 11-124h-212l5 44h152z" />
        <path fill="#FFFFFF" d="M256 208v45h75l5-45H256zM132 164l-5-56h233l-4 45H172l4 46h76v-45h-72zm43 147l-2 20 63 17v-47l-61-16z" />
    </svg>
);


export const portfolioData = {
  name: 'Hitesh Baghel',
  title: 'Java Backend Developer',
  profileImage: profileImageBase64,
  summary: "Backend Engineer skilled in building scalable and efficient applications using Java, Spring Boot, and MySQL. Hands-on experience in API development, database management, and system integration through academic and personal projects. Strong problem-solving abilities with solid understanding of DSA, OOP, and software engineering principles. Enthusiastic about applying technical expertise to impactful projects while continuously learning.",
  skills: [
    { name: 'Java', icon: <JavaIcon /> },
    { name: 'Spring Boot', icon: <SpringBootIcon /> },
    { name: 'MySQL', icon: <MysqlIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'JavaScript', icon: <JsIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'HTML5', icon: <Html5Icon /> },
    { name: 'CSS3', icon: <Css3Icon /> },
  ],
  projects: [
    {
      title: 'SkillSyncAI – AI Powered Placement Preparation Platform',
      description: 'Designed and implemented a full-stack platform with AI-driven mock interviews, quiz generation, ML-based placement prediction, leaderboard & analytics. Enhanced placement readiness for students.',
      tags: ['AI/ML', 'Full-Stack', 'Ed-Tech'],
      stack: ['React', 'Java', 'Spring Boot', 'MySQL'],
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'ByteWise - A Toolkit for Engineering Success',
      description: 'Engineered a comprehensive academic toolkit with semester resources, Razorpay payments, certified course showcase, and admin dashboard with CRUD operations and analytics.',
      tags: ['Full-Stack', 'E-learning', 'Toolkit'],
      stack: ['React', 'Java', 'Spring Boot', 'MySQL'],
      links: {
        github: '#',
        demo: '#',
      },
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Mahakal Institute of Technology, Ujjain',
      duration: 'Sep 2022 - Jun 2026',
    },
    {
      degree: 'Intermediate (Higher Secondary Education)',
      institution: 'Padmaja Higher Secondary School, Dewas',
      duration: 'Jun 2021 - May 2022',
    },
    {
      degree: 'Matriculation (Secondary Education)',
      institution: 'The Guardian High School, Dewas',
      duration: 'Jun 2019 - May 2020',
    },
  ],
  achievements: [
    'Google Cloud Arcade Facilitator Cohort 2 (2025) - Selected for facilitator program, mentoring peers in cloud-native application deployment.',
    'ProjectExpo 4.0, MIT Ujjain (2025) - First Place Winner & Cash Prize for innovative project showcasing technical skills and problem-solving.',
    'Codathon, MIT Ujjain – Recognized as Top Performer in competitive coding event demonstrating strong algorithmic thinking.',
  ],
  certifications: [
    'C++ & Java, Database & MySQL - AK Soft',
    'Java, Spring 6 & Spring Boot 3 – Telusko (Udemy)',
    'Java Developer Internship - Codsoft',
  ],
  contact: {
    email: 'hiteshbaghel03@gmail.com',
    github: 'https://github.com/hiteshbaghel',
    linkedin: 'https://in.linkedin.com/in/hiteshbaghel',
    leetcode: 'https://leetcode.com/u/hiteshbaghel/',
  },
};