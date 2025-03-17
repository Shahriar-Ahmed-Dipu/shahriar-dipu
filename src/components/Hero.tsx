
import { useState, useEffect } from 'react';
import { ResumeButton } from './ResumeButton';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl">
          <div className="space-y-1 overflow-hidden">
            <p className={cn('text-primary font-medium tracking-wide slide-up', isLoaded ? 'opacity-100' : 'opacity-0')} style={{
              animationDelay: '300ms'
            }}>
              Computer Programming & Analysis
            </p>
            
            <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight space-y-3 text-white">
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
            
            <p className={cn('mt-6 text-lg text-gray-200 max-w-2xl slide-up', isLoaded ? 'opacity-100' : 'opacity-0')} style={{
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
            
            <a href="#about" className="inline-flex items-center gap-2 font-medium text-gray-200 hover:text-white transition-colors">
              <span>Learn more</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Animated shapes or decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />
    </section>
  );
};
