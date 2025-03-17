
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Professional', href: '#professional' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 20);

      // Find the active section based on scrolling
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'backdrop-blur-xl bg-white/90 shadow-md dark:bg-gray-900/90' 
          : 'bg-transparent'
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a 
            href="#hero" 
            className={cn(
              "font-display text-xl font-semibold tracking-tight transition-colors",
              isScrolled ? 'text-foreground' : 'text-white'
            )} 
            onClick={e => scrollToSection(e, '#hero')}
          >
            Shahriar Dipu
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={e => scrollToSection(e, item.href)} 
                    className={cn(
                      'text-sm font-medium transition-colors relative py-2',
                      activeSection === item.href 
                        ? isScrolled ? 'text-primary' : 'text-primary font-semibold' 
                        : isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-gray-200 hover:text-white'
                    )}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transform origin-left transition-transform animate-scale-in" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button 
              className={cn("text-foreground", isScrolled ? 'text-foreground' : 'text-white')} 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden pt-20">
          <nav className="container mx-auto px-6 py-8">
            <ul className="flex flex-col space-y-6">
              {navItems.map(item => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={e => scrollToSection(e, item.href)} 
                    className={cn(
                      'text-xl font-medium block transition-colors py-2',
                      activeSection === item.href 
                        ? 'text-primary font-semibold' 
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
