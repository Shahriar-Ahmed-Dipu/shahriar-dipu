import { useState, useEffect } from 'react';
import { ResumeButton } from './ResumeButton';
import { cn } from '@/lib/utils';
export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  return <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 z-10 relative pt-20">
        <div className="max-w-4xl">
          <div className="space-y-1 overflow-hidden">
            <p className={cn('text-primary font-medium tracking-wide slide-up', isLoaded ? 'opacity-100' : 'opacity-0')} style={{
            animationDelay: '300ms'
          }}>
              Computer Programming & Analysis
            </p>
            
            <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight space-y-3">
              <span className="block overflow-hidden">
                <span className={cn('block slide-up', isLoaded ? 'opacity-100' : 'opacity-0')} style={{
                animationDelay: '400ms'
              }}>Hi, I'm Shahriar Ahmed Dipu</span>
              </span>
              <span className="block overflow-hidden">
                <span className={cn('block slide-up', isLoaded ? 'opacity-100' : 'opacity-0')} style={{
                animationDelay: '500ms'
              }}>
                  Software Developer.
                </span>
              </span>
            </h1>
            
            <p className={cn('mt-6 text-lg text-muted-foreground max-w-2xl slide-up', isLoaded ? 'opacity-100' : 'opacity-0')} style={{
            animationDelay: '600ms'
          }}>
              A passionate programmer with a focus on creating clean, efficient solutions.
              I specialize in JavaScript, PHP, and modern web technologies.
            </p>
          </div>

          <div className={cn('mt-8 flex gap-4 items-center slide-up', isLoaded ? 'opacity-100' : 'opacity-0')} style={{
          animationDelay: '700ms'
        }}>
            <ResumeButton />
            
            <a href="#about" className="inline-flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors">
              <span>Learn more</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none select-none">
        <div className={cn("absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-opacity duration-1000", isLoaded ? "opacity-100" : "opacity-0")} />
        <div className={cn("absolute bottom-1/4 left-[10%] w-80 h-80 bg-blue-50 rounded-full blur-3xl transition-opacity duration-1000", isLoaded ? "opacity-100" : "opacity-0")} style={{
        transitionDelay: '300ms'
      }} />
      </div>
    </section>;
};