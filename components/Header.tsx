import React, { useState, useEffect } from 'react';
import { portfolioData, SunIcon, MoonIcon, MenuIcon, XIcon } from '../constants';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-slate-200 dark:border-neutral-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center py-4">
        <a href="#" className="border border-slate-300 dark:border-neutral-700 bg-slate-100/50 dark:bg-neutral-900/50 rounded-full px-4 py-1.5 text-sm font-medium text-slate-800 dark:text-neutral-200 hover:bg-slate-200/50 dark:hover:bg-neutral-800/50 transition-colors">
          {portfolioData.name}
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hidden sm:block border border-slate-300 dark:border-neutral-700 rounded-full px-4 py-1.5 text-sm font-medium text-slate-800 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-neutral-800/50 transition-colors">
                CONTACT
            </a>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="border border-slate-300 dark:border-neutral-700 rounded-full p-2 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 hover:bg-slate-100 dark:hover:bg-neutral-800/50 transition-colors">
                {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="md:hidden border border-slate-300 dark:border-neutral-700 rounded-full p-2 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 hover:bg-slate-100 dark:hover:bg-neutral-800/50 transition-colors">
                {isMenuOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 sm:px-6 md:px-12 pb-4">
            <nav className="flex flex-col items-start gap-4">
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="w-full text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 font-medium transition-colors p-2 rounded-md hover:bg-slate-100 dark:hover:bg-neutral-800/50">
                        {link.label}
                    </a>
                ))}
                 <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="sm:hidden w-full text-center border border-slate-300 dark:border-neutral-700 rounded-full px-4 py-1.5 text-sm font-medium text-slate-800 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-neutral-800/50 transition-colors mt-2">
                    CONTACT
                </a>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;