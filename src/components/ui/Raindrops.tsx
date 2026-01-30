/**
 * Raindrops - Falling golden droplets animation
 *
 * Creates elegant falling droplets that evoke essential oil drops.
 * Matches the "Gocce di Stella" (Drops of Star) brand theme.
 * Gold/amber colored teardrops fall gently with subtle glow effects.
 *
 * Performance optimized: Uses requestAnimationFrame and canvas rendering
 */

import { useEffect, useRef, useState } from 'react';

interface Drop {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  layer: number; // 0 = far (slow/small), 1 = mid, 2 = near (fast/large)
}

interface RaindropsProps {
  dropCount?: number;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export default function Raindrops({
  dropCount = 35,
  className = '',
  intensity = 'light'
}: RaindropsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<Drop[]>([]);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Adjust count based on intensity
  const actualCount = intensity === 'light' ? dropCount :
                      intensity === 'medium' ? dropCount * 1.5 :
                      dropCount * 2.5;

  // Initialize drops
  useEffect(() => {
    const generateDrops = (width: number, height: number): Drop[] => {
      const drops: Drop[] = [];

      for (let i = 0; i < actualCount; i++) {
        const layer = Math.random() < 0.5 ? 0 : Math.random() < 0.6 ? 1 : 2;

        drops.push({
          x: Math.random() * width,
          y: Math.random() * height * 1.5 - height * 0.5, // Start some above screen
          size: layer === 0 ? 2 + Math.random() * 2 :
                layer === 1 ? 3 + Math.random() * 3 :
                5 + Math.random() * 4,
          speed: layer === 0 ? 0.3 + Math.random() * 0.3 :
                 layer === 1 ? 0.5 + Math.random() * 0.5 :
                 0.8 + Math.random() * 0.7,
          opacity: layer === 0 ? 0.15 + Math.random() * 0.1 :
                   layer === 1 ? 0.2 + Math.random() * 0.15 :
                   0.25 + Math.random() * 0.2,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.02 + Math.random() * 0.03,
          layer
        });
      }

      return drops;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      dropsRef.current = generateDrops(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [actualCount]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawDrop = (drop: Drop) => {
      const { x, y, size, opacity } = drop;

      // Wobble effect for organic movement
      const wobbleX = Math.sin(drop.wobble) * (size * 0.3);
      const drawX = x + wobbleX;

      // Create teardrop shape
      ctx.save();
      ctx.translate(drawX, y);

      // Outer glow
      const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
      glowGradient.addColorStop(0, `rgba(212, 175, 55, ${opacity * 0.4})`); // Gold
      glowGradient.addColorStop(0.5, `rgba(212, 175, 55, ${opacity * 0.1})`);
      glowGradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

      ctx.beginPath();
      ctx.arc(0, 0, size * 3, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Teardrop body
      ctx.beginPath();
      ctx.moveTo(0, -size * 1.5); // Top point

      // Right curve
      ctx.bezierCurveTo(
        size * 0.8, -size * 0.5,  // Control point 1
        size * 0.8, size * 0.8,   // Control point 2
        0, size                    // End point (bottom center)
      );

      // Left curve
      ctx.bezierCurveTo(
        -size * 0.8, size * 0.8,  // Control point 1
        -size * 0.8, -size * 0.5, // Control point 2
        0, -size * 1.5             // Back to top
      );

      // Gradient fill for the drop
      const dropGradient = ctx.createLinearGradient(-size, -size, size, size);
      dropGradient.addColorStop(0, `rgba(255, 235, 180, ${opacity * 1.2})`);   // Light gold highlight
      dropGradient.addColorStop(0.3, `rgba(212, 175, 55, ${opacity})`);         // Main gold
      dropGradient.addColorStop(0.7, `rgba(180, 140, 40, ${opacity})`);         // Darker gold
      dropGradient.addColorStop(1, `rgba(150, 110, 30, ${opacity * 0.8})`);     // Shadow

      ctx.fillStyle = dropGradient;
      ctx.fill();

      // Inner highlight (light reflection)
      ctx.beginPath();
      ctx.ellipse(-size * 0.25, -size * 0.3, size * 0.2, size * 0.35, -0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw drops
      dropsRef.current.forEach(drop => {
        // Update position
        drop.y += drop.speed;
        drop.wobble += drop.wobbleSpeed;

        // Reset drop when it goes below screen
        if (drop.y > dimensions.height + drop.size * 2) {
          drop.y = -drop.size * 3;
          drop.x = Math.random() * dimensions.width;
        }

        // Draw the drop
        drawDrop(drop);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
