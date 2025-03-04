
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn p-2 rounded-full transition-all duration-300 ${
        theme === 'green' 
          ? 'bg-emerald-800/40 hover:bg-emerald-700/50 shadow-emerald-500/20 shadow-md' 
          : 'bg-horizon-dark/40 hover:bg-horizon-dark/50 shadow-horizon-light/20 shadow-md'
      } ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'blue' ? (
        <Sun className="h-5 w-5 text-horizon-light animate-pulse-glow" />
      ) : (
        <Moon className="h-5 w-5 text-emerald-400 animate-pulse-glow" />
      )}
    </button>
  );
};

export default ThemeToggle;
