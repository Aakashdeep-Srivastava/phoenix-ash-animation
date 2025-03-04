
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className="min-h-[90vh] pt-24 pb-12 flex flex-col justify-center items-center relative overflow-hidden px-4 bg-[#0a1025]">
      {/* Softer, more dynamic gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,116,255,0.12)_0,rgba(15,23,42,0)_70%)]"></div>
      
      {/* Background decorative elements with improved coloring */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-horizon-dark/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-ember-light/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <span className="bg-horizon-dark/30 text-horizon-light text-xs font-medium px-3 py-1 rounded-full inline-block mb-8 animate-fade-in border border-horizon-light/20">
          Ecological Magical Solutions for Tomorrow
        </span>
        
        <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-text-reveal animation-delay-100">
          Transforming Businesses Through
          <span className="text-gradient"> Phoenix Magic</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto opacity-0 animate-text-reveal animation-delay-200">
          Like the phoenix that rises from ashes, we provide transformative solutions to elevate your business, creating a brighter future while optimizing your potential.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-text-reveal animation-delay-300">
          <a 
            href="mailto:aakashdeep@ashhorizontechnology.com" 
            className="phoenix-button inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#F97316] to-[#FEC6A1] hover:from-[#F97316] hover:to-[#FF8A50] px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-[#F97316]/20 hover:shadow-xl"
          >
            <span className="relative z-10">Summon a Consultation</span>
          </a>
          
          <a 
            href="#mvp" 
            className="phoenix-button-secondary inline-flex h-12 items-center justify-center rounded-md border border-horizon-light/20 bg-background/30 hover:bg-[#F97316]/10 px-8 py-3 text-sm font-medium shadow-md transition-all duration-300 hover:border-[#FEC6A1]/40 hover:shadow-[#F97316]/10 hover:shadow-lg"
          >
            <span className="relative z-10">Discover Our Magic</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
