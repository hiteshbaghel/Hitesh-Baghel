
import React, { useState, useEffect, useCallback } from 'react';
import { 
    portfolioData, SunIcon, MoonIcon, UserIcon, CodeIcon, FolderKanbanIcon, GraduationCapIcon, PhoneIcon
} from '../constants';
import { FluidDropdown, Category } from './ui/FluidDropdown';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navCategories: Category[] = [
    { id: 'about', label: 'About', href: '#about', icon: <UserIcon />, color: "#0284c7" }, // sky-600
    { id: 'skills', label: 'Skills', href: '#skills', icon: <CodeIcon />, color: "#059669" }, // emerald-600
    { id: 'projects', label: 'Projects', href: '#projects', icon: <FolderKanbanIcon />, color: "#9333ea" }, // purple-600
    { id: 'experience', label: 'Education', href: '#experience', icon: <GraduationCapIcon />, color: "#475569" }, // slate-600
    { id: 'contact', label: 'Contact', href: '#contact', icon: <PhoneIcon />, color: "#4f46e5" }, // indigo-600
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(navCategories[0].id);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);

    const headerOffset = 120; // Offset for the sticky header height + some buffer
    let newActiveId = navCategories[0].id;

    // Find the last section that is scrolled past the header offset
    for (const category of navCategories) {
        const element = document.getElementById(category.id);
        if (element && element.getBoundingClientRect().top <= headerOffset) {
            newActiveId = category.id;
        }
    }
    
    setActiveSectionId(newActiveId);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Education' },
  ];

  const handleLinkClick = (href: string) => {
    const id = href.substring(1);
    setActiveSectionId(id); // Immediately update state for responsiveness
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-slate-200 dark:border-neutral-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center py-4">
        <a href="#" className="border border-slate-300 dark:border-neutral-700 bg-slate-100/50 dark:bg-neutral-900/50 rounded-full px-4 py-1.5 text-sm font-medium text-slate-800 dark:text-neutral-200 hover:bg-slate-200/50 dark:hover:bg-neutral-800/50 transition-colors">
          {portfolioData.name}
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }} className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }} className="hidden sm:block border border-slate-300 dark:border-neutral-700 rounded-full px-4 py-1.5 text-sm font-medium text-slate-800 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-neutral-800/50 transition-colors">
                CONTACT
            </a>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="border border-slate-300 dark:border-neutral-700 rounded-full p-2 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 hover:bg-slate-100 dark:hover:bg-neutral-800/50 transition-colors">
                {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
            </button>
            <div className="md:hidden">
                <FluidDropdown
                    categories={navCategories}
                    selectedId={activeSectionId}
                    onSelect={(category) => {
                        handleLinkClick(category.href);
                    }}
                />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;