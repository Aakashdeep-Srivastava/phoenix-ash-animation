
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import PhoenixLogo from '@/assets/PhoenixLogo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center space-x-2"
          aria-label="ASH Horizon Technology"
        >
          <PhoenixLogo 
            className="text-ember-DEFAULT" 
            size={36} 
          />
          <span className="font-medium text-lg tracking-tight hidden md:inline-block">
            ASH Horizon Technology
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#mvp" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Solutions
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a 
            href="mailto:aakashdeep@ashhorizontechnology.com" 
            className="inline-flex h-9 items-center justify-center rounded-md bg-ember-DEFAULT px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-ember-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Book a Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center rounded-md w-10 h-10 text-muted-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-slide-down">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#mvp" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="mailto:aakashdeep@ashhorizontechnology.com" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-ember-DEFAULT px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-ember-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
