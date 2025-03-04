
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import PhoenixLogo from '@/assets/PhoenixLogo';
import { Menu, X, User, MessageSquare, Lightbulb, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          ? "bg-background/90 backdrop-blur-md shadow-sm py-2" 
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
            className="text-ember-DEFAULT magical-glow" 
            size={36} 
          />
          <span className="font-medium text-lg tracking-tight hidden md:inline-block">
            ASH Horizon Technology
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <ThemeToggle className="mr-2" />
          
          {/* Dropdown Menu for About, Solutions, Contact */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              <span>Quick Links</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-background/95 backdrop-blur-sm border border-border/50">
              <DropdownMenuItem asChild>
                <a href="#about" className="flex items-center cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>About</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#mvp" className="flex items-center cursor-pointer">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  <span>Solutions</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" className="flex items-center cursor-pointer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Contact</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a 
            href="mailto:aakashdeep@ashhorizontechnology.com" 
            className="magical-button inline-flex h-9 items-center justify-center rounded-md bg-ember-DEFAULT px-4 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span>Book a Consultation</span>
          </a>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            className="flex items-center justify-center rounded-md w-10 h-10 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md animate-slide-down">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="mr-2 h-4 w-4" />
              <span>About</span>
            </a>
            <a 
              href="#mvp" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              <span>Solutions</span>
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </a>
            <a 
              href="mailto:aakashdeep@ashhorizontechnology.com" 
              className="magical-button inline-flex h-10 items-center justify-center rounded-md bg-ember-DEFAULT px-4 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Book a Consultation</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
