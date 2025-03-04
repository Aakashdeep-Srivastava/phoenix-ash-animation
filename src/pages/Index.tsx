
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MVPShowcase from '@/components/MVPShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PhoenixAnimation from '@/components/PhoenixAnimation';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    // Allow animation to complete before hiding
    const handleLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
        // Show scroll indicator after page loads
        setTimeout(() => {
          setShowScrollIndicator(true);
        }, 1000);
      }, 4000); // Animation will run for 4 seconds before fading out
    };

    // Start loading sequence after page is fully loaded
    if (document.readyState === 'complete') {
      handleLoading();
    } else {
      window.addEventListener('load', handleLoading);
      return () => window.removeEventListener('load', handleLoading);
    }
    
    // Hide scroll indicator on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {isLoading ? (
        <div className={`loading-overlay ${!isLoading ? 'fade-out' : ''}`}>
          <PhoenixAnimation onComplete={() => {
            const overlay = document.querySelector('.loading-overlay');
            if (overlay) overlay.classList.add('fade-out');
          }} />
          <div className="absolute bottom-8 text-center w-full text-sm text-ember-light/60">
            <p>Fawkes, Professor Dumbledore's faithful phoenix, rising from the ashes</p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(70,90,120,0.1)_0,rgba(20,30,50,0)_70%)] pointer-events-none"></div>
          
          {/* Decorative floating elements */}
          <div className="fixed top-1/4 left-1/6 w-64 h-64 bg-horizon-light/5 rounded-full blur-3xl floating-slow"></div>
          <div className="fixed bottom-1/4 right-1/6 w-80 h-80 bg-ember-light/5 rounded-full blur-3xl floating"></div>
          
          <Navbar />
          <main>
            <Hero />
            <MVPShowcase />
            <ContactSection />
          </main>
          <Footer />
          
          {/* Scroll down indicator */}
          {showScrollIndicator && (
            <div className="scroll-indicator flex flex-col items-center opacity-70 transition-opacity duration-300 hover:opacity-100">
              <span className="text-xs text-foreground/70 mb-2">Scroll Down</span>
              <ChevronDown className="animate-bounce w-5 h-5 text-foreground/70" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Index;
