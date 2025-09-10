import React, { useEffect, useRef } from 'react';

const GlitchEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let time = 0;
    const glitchLines: Array<{
      y: number;
      width: number;
      offset: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize glitch lines
    for (let i = 0; i < 20; i++) {
      glitchLines.push({
        y: Math.random() * canvas.height,
        width: Math.random() * 200 + 50,
        offset: Math.random() * 20 - 10,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 5)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.1;

      // Random glitch trigger
      if (Math.random() > 0.98) {
        // Create scan lines effect
        for (let i = 0; i < 5; i++) {
          const y = Math.random() * canvas.height;
          const height = Math.random() * 3 + 1;
          
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
          ctx.fillRect(0, y, canvas.width, height);
        }

        // RGB split effect
        glitchLines.forEach(line => {
          if (Math.random() > 0.7) {
            line.y = Math.random() * canvas.height;
            line.offset = Math.random() * 40 - 20;
            line.opacity = Math.random() * 0.8 + 0.2;
            
            // Draw RGB channels separately
            ctx.globalCompositeOperation = 'screen';
            
            // Red channel
            ctx.fillStyle = `rgba(255, 0, 0, ${line.opacity * 0.5})`;
            ctx.fillRect(line.offset - 2, line.y, line.width, 2);
            
            // Green channel
            ctx.fillStyle = `rgba(0, 255, 0, ${line.opacity * 0.5})`;
            ctx.fillRect(line.offset, line.y, line.width, 2);
            
            // Blue channel
            ctx.fillStyle = `rgba(0, 0, 255, ${line.opacity * 0.5})`;
            ctx.fillRect(line.offset + 2, line.y, line.width, 2);
            
            ctx.globalCompositeOperation = 'source-over';
          }
        });

        // Digital noise
        for (let i = 0; i < 100; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 2 + 1;
          
          ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.5})`;
          ctx.fillRect(x, y, size, size);
        }
      }

      // Subtle scan lines always present
      if (Math.sin(time) > 0.5) {
        for (let y = 0; y < canvas.height; y += 4) {
          ctx.fillStyle = `rgba(0, 255, 127, ${0.02 + Math.sin(time + y * 0.01) * 0.01})`;
          ctx.fillRect(0, y, canvas.width, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-5 opacity-45"
      style={{ background: 'transparent', mixBlendMode: 'screen' }}
    />
  );
};

export default GlitchEffect;