
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MVPShowcase from '@/components/MVPShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PhoenixAnimation from '@/components/PhoenixAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to show animation
    const handleLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000); // Animation will run for 5 seconds before fading out
    };

    // Start loading sequence after page is fully loaded
    if (document.readyState === 'complete') {
      handleLoading();
    } else {
      window.addEventListener('load', handleLoading);
      return () => window.removeEventListener('load', handleLoading);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {isLoading ? (
        <div className={`loading-overlay ${!isLoading ? 'fade-out' : ''}`}>
          <PhoenixAnimation onComplete={() => {
            const overlay = document.querySelector('.loading-overlay');
            if (overlay) overlay.classList.add('fade-out');
          }} />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(70,90,120,0.1)_0,rgba(20,30,50,0)_70%)] pointer-events-none"></div>
          <Navbar />
          <main>
            <Hero />
            <MVPShowcase />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
