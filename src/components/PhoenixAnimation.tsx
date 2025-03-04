
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './animations/LoadingSpinner';
import LogoReveal from './animations/LogoReveal';

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
      <LoadingSpinner />
      
      {/* Logo reveal animation */}
      {showLogo && <LogoReveal />}
    </div>
  );
};

export default PhoenixAnimation;
