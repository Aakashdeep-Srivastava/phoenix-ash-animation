
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface MagicalParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const MagicalBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<MagicalParticle[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize particles
    const particleCount = Math.min(window.innerWidth / 10, 150); // Responsive particle count
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle(theme);
      particlesRef.current.push(particle);
    }
    
    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `,${particle.opacity})`);
        ctx.fill();
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [theme]);
  
  // Update particle colors when theme changes
  useEffect(() => {
    particlesRef.current.forEach(particle => {
      particle.color = getParticleColor(theme);
    });
  }, [theme]);
  
  const createParticle = (currentTheme: 'blue' | 'green'): MagicalParticle => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 0.5,
      speedX: Math.random() * 0.2 - 0.1,
      speedY: Math.random() * 0.2 - 0.1,
      opacity: Math.random() * 0.5 + 0.1,
      color: getParticleColor(currentTheme),
    };
  };
  
  const getParticleColor = (currentTheme: 'blue' | 'green'): string => {
    const blueColors = [
      'rgba(78, 107, 255',
      'rgba(163, 185, 255',
      'rgba(218, 226, 255',
      'rgba(100, 150, 255',
    ];
    
    const greenColors = [
      'rgba(16, 185, 129',
      'rgba(167, 243, 208',
      'rgba(110, 231, 183',
      'rgba(4, 120, 87',
    ];
    
    const colors = currentTheme === 'blue' ? blueColors : greenColors;
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default MagicalBackground;
