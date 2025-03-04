
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
      {/* Circular base */}
      <path 
        d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill={filled ? "currentColor" : "none"}
        opacity={filled ? "0.15" : "1"}
      />
      
      {/* Fawkes body */}
      <path 
        d="M30 15C30 15 22 22 20 30C18 38 25 45 30 45C35 45 42 38 40 30C38 22 30 15 30 15Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill={filled ? "currentColor" : "none"}
        opacity={filled ? "0.8" : "1"}
      />
      
      {/* Phoenix tail - longer for Fawkes */}
      <path 
        d="M30 45C30 45 32 50 30 55C28 50 30 45 30 45Z"
        stroke="currentColor" 
        strokeWidth="2"
        fill={filled ? "currentColor" : "none"}
        opacity={filled ? "0.7" : "1"}
      />
      
      {/* Right wing */}
      <path 
        d="M30 15C30 15 33 21 35 25C37 29 40 35 37 40C34 45 30 45 30 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Left wing */}
      <path 
        d="M30 15C30 15 27 21 25 25C23 29 20 35 23 40C26 45 30 45 30 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Head/center - slightly bigger for Fawkes */}
      <path 
        d="M30 24C28 24 26.5 25.3431 26.5 27C26.5 28.6569 28 30 30 30C32 30 33.5 28.6569 33.5 27C33.5 25.3431 32 24 30 24Z" 
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      
      {/* Dumbledore's phoenix distinctive features */}
      {filled && (
        <>
          {/* Fawkes's crest */}
          <path 
            d="M30 18C30 18 28 14 30 12C32 14 30 18 30 18" 
            stroke="currentColor" 
            strokeWidth="1.5"
            fill="currentColor"
            opacity="0.8"
          />
          
          {/* Left wing feathers */}
          <path 
            d="M20 32C20 32 15 28 17 23C19 18 25 20 25 20" 
            stroke="currentColor" 
            strokeWidth="1.5"
            opacity="0.6"
          />
          
          {/* Right wing feathers */}
          <path 
            d="M40 32C40 32 45 28 43 23C41 18 35 20 35 20" 
            stroke="currentColor" 
            strokeWidth="1.5"
            opacity="0.6"
          />
          
          {/* Tail feathers - more elaborate for Fawkes */}
          <path 
            d="M27 42C27 42 25 47 30 52C35 47 33 42 33 42" 
            stroke="currentColor" 
            strokeWidth="1.5"
            opacity="0.7"
          />
          
          {/* Additional wing details */}
          <path 
            d="M33 21C33 21 38 19 39 24" 
            stroke="currentColor" 
            strokeWidth="1"
            opacity="0.6"
            strokeLinecap="round"
          />
          
          <path 
            d="M27 21C27 21 22 19 21 24" 
            stroke="currentColor" 
            strokeWidth="1"
            opacity="0.6"
            strokeLinecap="round"
          />
          
          {/* Fawkes's beak */}
          <path 
            d="M30 26L32 28L30 29L28 28L30 26Z"
            fill="currentColor"
            opacity="0.9"
          />
        </>
      )}
    </svg>
  );
};

export default PhoenixLogo;
