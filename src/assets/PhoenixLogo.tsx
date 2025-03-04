
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
      
      {/* Phoenix body */}
      <path 
        d="M30 15C30 15 22 22 20 30C18 38 25 45 30 45C35 45 42 38 40 30C38 22 30 15 30 15Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill={filled ? "currentColor" : "none"}
        opacity={filled ? "0.8" : "1"}
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
      
      {/* Head/center */}
      <path 
        d="M30 25C28.3431 25 27 26.3431 27 28C27 29.6569 28.3431 31 30 31C31.6569 31 33 29.6569 33 28C33 26.3431 31.6569 25 30 25Z" 
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      
      {/* Feather details when filled */}
      {filled && (
        <>
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
          
          {/* Tail feathers */}
          <path 
            d="M27 42C27 42 25 45 30 48C35 45 33 42 33 42" 
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
        </>
      )}
    </svg>
  );
};

export default PhoenixLogo;
