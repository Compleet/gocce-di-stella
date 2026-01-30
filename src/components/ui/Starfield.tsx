/**
 * Starfield - Animated celestial background
 *
 * Creates an ethereal field of twinkling stars that moves subtly
 * with parallax effect. Stars vary in size, brightness, and twinkle speed
 * to create depth and mystical atmosphere.
 *
 * Performance optimized: Uses requestAnimationFrame and canvas rendering
 */

import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  layer: number; // 0 = far (slow), 1 = mid, 2 = near (fast)
}

interface StarfieldProps {
  starCount?: number;
  className?: string;
  parallaxIntensity?: number;
}

export default function Starfield({
  starCount = 150,
  className = '',
  parallaxIntensity = 0.02
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize stars
  useEffect(() => {
    const generateStars = (width: number, height: number): Star[] => {
      const stars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        const layer = Math.random() < 0.6 ? 0 : Math.random() < 0.7 ? 1 : 2;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: layer === 0 ? 0.5 + Math.random() * 0.5 :
                layer === 1 ? 0.8 + Math.random() * 0.7 :
                1.2 + Math.random() * 1,
          opacity: 0.2 + Math.random() * 0.5,
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinkleOffset: Math.random() * Math.PI * 2,
          layer
        });
      }

      return stars;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      starsRef.current = generateStars(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [starCount]);

  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const animate = () => {
      time += 0.016; // ~60fps

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw stars
      starsRef.current.forEach(star => {
        // Calculate twinkle
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.5 + twinkle * 0.5);

        // Calculate parallax offset based on layer
        const parallaxMultiplier = star.layer === 0 ? 0.3 :
                                   star.layer === 1 ? 0.6 : 1;
        const offsetX = mouseRef.current.x * parallaxIntensity * 100 * parallaxMultiplier;
        const offsetY = mouseRef.current.y * parallaxIntensity * 100 * parallaxMultiplier;

        const x = star.x + offsetX;
        const y = star.y + offsetY;

        // Draw star with glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, star.size * 3);

        // Warm golden color for stars
        gradient.addColorStop(0, `rgba(255, 235, 200, ${currentOpacity})`);
        gradient.addColorStop(0.3, `rgba(255, 220, 180, ${currentOpacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(255, 220, 180, 0)');

        ctx.beginPath();
        ctx.arc(x, y, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw star core
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 250, 240, ${currentOpacity})`;
        ctx.fill();
      });

      // Occasional shooting star (very rare)
      if (Math.random() < 0.0003) {
        drawShootingStar(ctx, dimensions.width, dimensions.height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, parallaxIntensity]);

  const drawShootingStar = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const startX = Math.random() * width * 0.8;
    const startY = Math.random() * height * 0.3;
    const length = 50 + Math.random() * 100;
    const angle = Math.PI / 4 + Math.random() * 0.3;

    const endX = startX + Math.cos(angle) * length;
    const endY = startY + Math.sin(angle) * length;

    const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
    gradient.addColorStop(0, 'rgba(255, 250, 240, 0.8)');
    gradient.addColorStop(0.3, 'rgba(255, 235, 200, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 220, 180, 0)');

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
