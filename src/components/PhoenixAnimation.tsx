
import React, { useEffect, useState } from 'react';
import PhoenixLogo from '../assets/PhoenixLogo';

interface PhoenixAnimationProps {
  onComplete?: () => void;
}

const PhoenixAnimation: React.FC<PhoenixAnimationProps> = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Simplified animation sequence
    const sequence = async () => {
      // Show loader initially
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show logo reveal
      setShowLogo(true);
      
      // Complete animation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Notify animation completion
      if (onComplete) {
        onComplete();
      }
    };

    sequence();
  }, [onComplete]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      {/* Clean loading spinner */}
      <div className="clean-loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
      
      {/* Logo reveal animation */}
      {showLogo && (
        <div className="flex flex-col items-center logo-reveal mt-6">
          <PhoenixLogo 
            className="text-ember-light mb-4 magical-glow" 
            size={60} 
            filled 
          />
          <h1 className="text-2xl font-cormorant font-semibold tracking-tight md:text-3xl text-white/90">
            ASH Horizon Technology
          </h1>
        </div>
      )}
    </div>
  );
};

export default PhoenixAnimation;
