
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ResumeButtonProps {
  className?: string;
}

export const ResumeButton = ({ className }: ResumeButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300',
        isHovered ? 'gap-3 pr-6' : '',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>Resume</span>
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={cn('transition-transform duration-300', isHovered ? 'transform translate-x-1' : '')}
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </a>
  );
};
