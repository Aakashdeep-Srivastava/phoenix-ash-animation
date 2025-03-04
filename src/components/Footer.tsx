
import React from 'react';
import PhoenixLogo from '@/assets/PhoenixLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-secondary/50 to-secondary/30 py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-3 mb-4 md:mb-0 brand-container">
            <PhoenixLogo 
              className="text-ember-DEFAULT logo-glow" 
              size={32}
              filled
            />
            <div>
              <span className="logo-text text-lg tracking-wider inline-flex">
                <span className="ash-text">ASH</span>
                <span className="horizon-text mx-1.5">Horizon</span>
                <span className="tech-text">Technology</span>
              </span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative group-hover:text-ash-light transition-colors duration-300">
                About
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-ash-light to-transparent group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a 
              href="#mvp" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative group-hover:text-horizon-light transition-colors duration-300">
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-horizon-light to-transparent group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative group-hover:text-ember-light transition-colors duration-300">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-ember-light to-transparent group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} ASH Horizon Technology. All rights reserved.
          </p>
          
          <p className="text-sm text-gradient">
            Ready to transform your workflow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
