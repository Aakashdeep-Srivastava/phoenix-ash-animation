
import React from 'react';
import PhoenixLogo from '../../assets/PhoenixLogo';

const LogoReveal: React.FC = () => {
  return (
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
  );
};

export default LogoReveal;
