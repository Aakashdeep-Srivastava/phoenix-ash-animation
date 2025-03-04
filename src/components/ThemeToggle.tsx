
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
      className={`theme-toggle-btn p-2 rounded-full transition-colors ${
        theme === 'green' ? 'bg-emerald-800/30' : 'bg-horizon-dark/30'
      } ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'blue' ? (
        <Sun className="h-5 w-5 text-emerald-400" />
      ) : (
        <Moon className="h-5 w-5 text-horizon-light" />
      )}
    </button>
  );
};

export default ThemeToggle;
