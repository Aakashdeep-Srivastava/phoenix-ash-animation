
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] pt-24 pb-12 flex flex-col justify-center items-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,80,0.05)_0,rgba(255,255,255,0)_70%)]"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-horizon-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-ember-light/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <span className="bg-horizon-light/50 text-horizon-dark text-xs font-medium px-3 py-1 rounded-full inline-block mb-8 animate-fade-in">
          Sustainable Solutions for Tomorrow
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-text-reveal animation-delay-100">
          Transforming Businesses Through
          <span className="text-gradient"> Sustainable Solutions</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto opacity-0 animate-text-reveal animation-delay-200">
          We help businesses make effective decisions for their local sustainability challenges, creating a greener future while optimizing workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-text-reveal animation-delay-300">
          <a 
            href="mailto:aakashdeep@ashhorizontechnology.com" 
            className="magical-button inline-flex h-11 items-center justify-center rounded-md bg-ember-DEFAULT px-8 py-3 text-sm font-medium text-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-dark"
          >
            <span>Book a Consultation</span>
          </a>
          
          <a 
            href="#mvp" 
            className="magical-button inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span>Explore Solutions</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
