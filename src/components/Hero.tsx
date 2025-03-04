
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] pt-24 pb-12 flex flex-col justify-center items-center relative overflow-hidden px-4 bg-[#0a1025]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,94,191,0.08)_0,rgba(15,23,42,0)_70%)]"></div>
      
      {/* Background decorative elements - enhanced for magical theme */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-horizon-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-ember-light/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <span className="bg-horizon-dark/30 text-horizon-light text-xs font-medium px-3 py-1 rounded-full inline-block mb-8 animate-fade-in border border-horizon-light/20">
          Sustainable Magical Solutions for Tomorrow
        </span>
        
        <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-text-reveal animation-delay-100">
          Transforming Businesses Through
          <span className="text-gradient"> Phoenix Magic</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto opacity-0 animate-text-reveal animation-delay-200">
          We harness the power of rebirth and transformation to help businesses rise from the ashes, creating a brighter, more sustainable future while optimizing your potential.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-text-reveal animation-delay-300">
          <a 
            href="mailto:aakashdeep@ashhorizontechnology.com" 
            className="phoenix-button inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-ember-dark hover:to-purple-600 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-ember-light/20 hover:shadow-xl"
          >
            <span className="relative z-10">Summon a Consultation</span>
          </a>
          
          <a 
            href="#mvp" 
            className="phoenix-button-secondary inline-flex h-12 items-center justify-center rounded-md border border-horizon-light/20 bg-background/30 hover:bg-horizon-dark/40 px-8 py-3 text-sm font-medium shadow-md transition-all duration-300 hover:border-horizon-light/40 hover:shadow-horizon-light/10 hover:shadow-lg"
          >
            <span className="relative z-10">Discover Our Magic</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-horizon-light/60 hover:text-horizon-light transition-colors duration-300" size={24} />
      </div>
    </section>
  );
};

export default Hero;
