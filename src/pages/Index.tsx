
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
      }, 4000); // Animation will run for 4 seconds before fading out
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
