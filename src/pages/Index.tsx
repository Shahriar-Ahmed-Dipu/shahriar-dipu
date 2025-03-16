
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Professional } from '@/components/Professional';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    // Preload animations
    const preloadAnimation = () => {
      document.body.classList.add('preloaded');
    };
    window.addEventListener('load', preloadAnimation);
    
    return () => {
      window.removeEventListener('load', preloadAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Professional />
      <Footer />
    </div>
  );
};

export default Index;
