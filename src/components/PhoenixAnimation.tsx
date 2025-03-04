
import React, { useEffect, useRef, useState } from 'react';
import PhoenixLogo from '../assets/PhoenixLogo';
import { Flame, Wind, Sparkles } from 'lucide-react';

interface PhoenixAnimationProps {
  onComplete?: () => void;
}

const PhoenixAnimation: React.FC<PhoenixAnimationProps> = ({ onComplete }) => {
  const [animationState, setAnimationState] = useState<'ashes' | 'rebirth' | 'rising' | 'landing' | 'complete'>('ashes');
  const containerRef = useRef<HTMLDivElement>(null);
  const ashParticlesRef = useRef<HTMLDivElement>(null);
  const rebirthCircleRef = useRef<HTMLDivElement>(null);
  const flameTrailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create ash particles
    if (ashParticlesRef.current) {
      for (let i = 0; i < 30; i++) {
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

    // Create flame trails
    if (flameTrailsRef.current) {
      const createFlameTrail = () => {
        if (animationState !== 'rising' || !flameTrailsRef.current) return;
        
        const flame = document.createElement('div');
        flame.classList.add('flame-trail');
        flame.style.left = `${50 + (Math.random() * 10 - 5)}%`;
        flame.style.bottom = `${40 + (Math.random() * 20)}%`;
        
        const flameIcon = document.createElement('div');
        flameIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 17 5 12 5C7 5 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" fill="rgba(255, 100, 50, 0.6)"/>
        </svg>`;
        
        flame.appendChild(flameIcon);
        flameTrailsRef.current.appendChild(flame);
        
        // Remove after animation completes
        setTimeout(() => {
          if (flameTrailsRef.current && flame.parentNode === flameTrailsRef.current) {
            flameTrailsRef.current.removeChild(flame);
          }
        }, 2000);
      };
      
      const trailInterval = setInterval(createFlameTrail, 150);
      return () => clearInterval(trailInterval);
    }

    // Start animation sequence
    const sequence = async () => {
      // Initial state - ashes
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Rebirth from ashes
      setAnimationState('rebirth');
      
      // Create rebirth circle effect
      if (rebirthCircleRef.current) {
        const circle = document.createElement('div');
        circle.classList.add('rebirth-circle');
        rebirthCircleRef.current.appendChild(circle);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Phoenix rises
      setAnimationState('rising');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Phoenix lands
      setAnimationState('landing');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Phoenix complete
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
  }, [onComplete, animationState]);

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col items-center justify-center w-full h-full"
    >
      {/* Ash particles container */}
      <div 
        ref={ashParticlesRef} 
        className="absolute bottom-0 left-0 w-full h-40"
      ></div>
      
      {/* Rebirth circle container */}
      <div
        ref={rebirthCircleRef}
        className="absolute inset-0 flex items-center justify-center"
      ></div>
      
      {/* Flame trails container */}
      <div
        ref={flameTrailsRef}
        className="absolute inset-0"
      ></div>
      
      {/* Initial ashes */}
      {animationState === 'ashes' && (
        <div className="absolute bottom-12 flex justify-center">
          <Flame 
            className="text-ember-light animate-pulse-glow opacity-60" 
            size={30} 
          />
          <Flame 
            className="text-ember-DEFAULT -ml-4 animate-pulse-glow animation-delay-300 opacity-70" 
            size={25} 
          />
          <Flame 
            className="text-ember-dark -ml-4 animate-pulse-glow animation-delay-100 opacity-50" 
            size={28} 
          />
        </div>
      )}
      
      {/* Rebirth moment */}
      {animationState === 'rebirth' && (
        <div className="absolute flex justify-center">
          <Sparkles 
            className="text-ember-light animate-pulse-glow magical-glow" 
            size={50} 
          />
        </div>
      )}
      
      {/* Phoenix rising */}
      {animationState === 'rising' && (
        <>
          <PhoenixLogo 
            className="text-ember-light animate-phoenix-rise absolute magical-glow" 
            size={80} 
            filled
          />
          <div className="absolute">
            <Wind 
              className="text-ember-light/40 animate-fade-in animation-delay-100" 
              size={40} 
            />
          </div>
        </>
      )}
      
      {/* Phoenix landing */}
      {animationState === 'landing' && (
        <PhoenixLogo 
          className="text-ember-light magical-glow" 
          size={80} 
          filled 
        />
      )}
      
      {/* Animation complete - show logo and text */}
      {animationState === 'complete' && (
        <div className="flex flex-col items-center">
          <PhoenixLogo 
            className="text-ember-light mb-4 magical-glow" 
            size={60} 
            filled 
          />
          <h1 className="animate-fade-in text-2xl font-semibold tracking-tight md:text-3xl text-white/90">
            ASH Horizon Technology
          </h1>
        </div>
      )}
    </div>
  );
};

export default PhoenixAnimation;
