
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
  pulse: boolean;
  pulseSpeed: number;
  pulseDirection: boolean;
  rotation: number;
  rotationSpeed: number;
}

const MagicalBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<MagicalParticle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const frameCountRef = useRef(0);
  
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
    
    // Track mouse position for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize particles with enhanced properties
    const particleCount = Math.min(window.innerWidth / 8, 200); // More responsive particle count
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle(theme);
      particlesRef.current.push(particle);
    }
    
    // Animation loop with enhanced effects
    let animationFrame: number;
    const animate = () => {
      frameCountRef.current++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Global wave effect
      const waveAmplitude = Math.sin(frameCountRef.current * 0.005) * 0.2;
      
      particlesRef.current.forEach((particle, index) => {
        // Update position with wave influence
        particle.x += particle.speedX + (waveAmplitude * particle.size * 0.01);
        particle.y += particle.speedY + (Math.cos(frameCountRef.current * 0.01 + index) * 0.1);
        
        // Boundary check with soft bounce effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.8;
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.8;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }
        
        // Pulse effect for size and opacity
        if (particle.pulse) {
          if (particle.pulseDirection) {
            particle.opacity += particle.pulseSpeed;
            if (particle.opacity > 0.7) {
              particle.pulseDirection = false;
            }
          } else {
            particle.opacity -= particle.pulseSpeed;
            if (particle.opacity < 0.1) {
              particle.pulseDirection = true;
            }
          }
        }
        
        // Rotation for more dynamic particles
        particle.rotation += particle.rotationSpeed;
        
        // Mouse interaction - gentle attraction/repulsion
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 1500;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }
        
        // Limit max speed
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > 0.5) {
          particle.speedX = (particle.speedX / speed) * 0.5;
          particle.speedY = (particle.speedY / speed) * 0.5;
        }
        
        // Draw particle with rotation and glow
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Add glow effect
        ctx.shadowBlur = particle.size * 2;
        ctx.shadowColor = particle.color.replace(')', `,${particle.opacity * 0.5})`);
        
        // Draw main particle
        ctx.beginPath();
        if (Math.random() > 0.3) {
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        } else {
          // Sometimes draw stars instead of circles
          drawStar(ctx, 0, 0, particle.size, particle.size / 2, 5);
        }
        ctx.fillStyle = particle.color.replace(')', `,${particle.opacity})`);
        ctx.fill();
        
        ctx.restore();
      });
      
      // Occasionally spawn new particles for freshness
      if (frameCountRef.current % 60 === 0) {
        for (let i = 0; i < 5; i++) {
          if (particlesRef.current.length < particleCount) {
            particlesRef.current.push(createParticle(theme));
          }
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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
      speedX: (Math.random() * 0.3 - 0.15) * (Math.random() > 0.5 ? 1 : -1),
      speedY: (Math.random() * 0.3 - 0.15) * (Math.random() > 0.5 ? 1 : -1),
      opacity: Math.random() * 0.5 + 0.1,
      color: getParticleColor(currentTheme),
      pulse: Math.random() > 0.5,
      pulseSpeed: Math.random() * 0.01 + 0.003,
      pulseDirection: Math.random() > 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() * 0.01 - 0.005) * 0.1
    };
  };
  
  const getParticleColor = (currentTheme: 'blue' | 'green'): string => {
    const blueColors = [
      'rgba(78, 107, 255',
      'rgba(163, 185, 255',
      'rgba(218, 226, 255',
      'rgba(100, 150, 255',
      'rgba(110, 130, 200',  // Added more variety
      'rgba(70, 90, 180',
    ];
    
    const greenColors = [
      'rgba(16, 185, 129',
      'rgba(167, 243, 208',
      'rgba(110, 231, 183',
      'rgba(4, 120, 87',
      'rgba(6, 150, 100',  // Added more variety
      'rgba(20, 160, 110',
    ];
    
    const colors = currentTheme === 'blue' ? blueColors : greenColors;
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // Helper function to draw star shapes
  const drawStar = (
    ctx: CanvasRenderingContext2D, 
    cx: number, 
    cy: number, 
    outerRadius: number, 
    innerRadius: number, 
    spikes: number
  ) => {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
  };
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default MagicalBackground;
