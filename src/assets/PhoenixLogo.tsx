
import React from 'react';

interface PhoenixLogoProps {
  className?: string;
  filled?: boolean;
  size?: number;
}

const PhoenixLogo: React.FC<PhoenixLogoProps> = ({ 
  className = "", 
  filled = false,
  size = 60
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill={filled ? "currentColor" : "none"}
        opacity={filled ? "0.1" : "1"}
      />
      <path 
        d="M30 15C30 15 22 20 20 30C18 40 25 45 30 45C35 45 42 40 40 30C38 20 30 15 30 15Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill={filled ? "currentColor" : "none"}
      />
      <path 
        d="M30 15C30 15 33 21 35 25C37 29 40 35 37 40C34 45 30 45 30 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 15C30 15 27 21 25 25C23 29 20 35 23 40C26 45 30 45 30 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 25C28.3431 25 27 26.3431 27 28C27 29.6569 28.3431 31 30 31C31.6569 31 33 29.6569 33 28C33 26.3431 31.6569 25 30 25Z" 
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default PhoenixLogo;
