
import React, { useEffect, useRef, useState } from 'react';
import PhoenixLogo from '../assets/PhoenixLogo';
import { Flame, Wind } from 'lucide-react';

interface PhoenixAnimationProps {
  onComplete?: () => void;
}

const PhoenixAnimation: React.FC<PhoenixAnimationProps> = ({ onComplete }) => {
  const [animationState, setAnimationState] = useState<'initial' | 'rising' | 'landing' | 'complete'>('initial');
  const containerRef = useRef<HTMLDivElement>(null);
  const ashParticlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create ash particles
    if (ashParticlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('ash-particle');
        
        // Random position at the bottom
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `${Math.random() * 20}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        particle.style.scale = `${Math.random() * 0.5 + 0.5}`;
        
        ashParticlesRef.current.appendChild(particle);
      }
    }

    // Start animation sequence
    const sequence = async () => {
      // Initial delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setAnimationState('rising');
      
      // Phoenix rises
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAnimationState('landing');
      
      // Phoenix lands
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnimationState('complete');
      
      // Notify animation completion
      if (onComplete) {
        await new Promise(resolve => setTimeout(resolve, 500));
        onComplete();
      }
    };

    sequence();

    return () => {
      // Cleanup if needed
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col items-center justify-center w-full h-full"
    >
      {/* Ash particles container */}
      <div 
        ref={ashParticlesRef} 
        className="absolute bottom-0 left-0 w-full h-32"
      ></div>
      
      {/* Flame effects */}
      {animationState === 'initial' && (
        <div className="absolute bottom-8 flex justify-center">
          <Flame 
            className="text-ember-light animate-pulse-glow" 
            size={40} 
          />
          <Flame 
            className="text-ember-DEFAULT -ml-4 animate-pulse-glow animation-delay-300" 
            size={32} 
          />
          <Flame 
            className="text-ember-dark -ml-4 animate-pulse-glow animation-delay-100" 
            size={36} 
          />
        </div>
      )}
      
      {/* Phoenix Logo - different states */}
      {animationState === 'rising' && (
        <>
          <PhoenixLogo 
            className="text-ember-DEFAULT animate-phoenix-rise absolute" 
            size={80} 
          />
          <div className="absolute">
            <Wind 
              className="text-ash-light/40 animate-fade-in animation-delay-100" 
              size={40} 
            />
          </div>
        </>
      )}
      
      {animationState === 'landing' && (
        <PhoenixLogo 
          className="text-ember-DEFAULT" 
          size={80} 
          filled 
        />
      )}
      
      {animationState === 'complete' && (
        <div className="flex flex-col items-center">
          <PhoenixLogo 
            className="text-ember-DEFAULT mb-4" 
            size={60} 
            filled 
          />
          <h1 className="animate-fade-in text-2xl font-semibold tracking-tight md:text-3xl">
            ASH Horizon Technology
          </h1>
        </div>
      )}
    </div>
  );
};

export default PhoenixAnimation;
