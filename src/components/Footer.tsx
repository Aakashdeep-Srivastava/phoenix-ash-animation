
import React from 'react';
import PhoenixLogo from '@/assets/PhoenixLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-3 mb-4 md:mb-0 brand-container">
            <PhoenixLogo 
              className="text-foreground logo-glow" 
              size={32}
              filled
            />
            <div>
              <span className="logo-text text-lg tracking-wider inline-flex text-foreground">
                ASH Horizon Technology
              </span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a 
              href="#mvp" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} ASH Horizon Technology. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Ready to transform your workflow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
