
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
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50">
        <About />
      </div>
      <Education />
      <Projects />
      <div className="bg-gradient-to-r from-rose-50 to-pink-50">
        <Professional />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
