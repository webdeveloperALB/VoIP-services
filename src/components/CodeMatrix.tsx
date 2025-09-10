import React, { useEffect, useRef } from 'react';

const CodeMatrix = () => {
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

    // Different character sets for variety
    const characterSets = [
      // Programming languages
      'function(){}[];var let const if else return',
      'SELECT FROM WHERE INSERT UPDATE DELETE',
      'import export default class extends',
      'print def lambda return yield',
      // Network/Security terms
      'TCP UDP HTTP HTTPS SSL TLS',
      'SIP RTP SRTP ZRTP VoIP PBX',
      'firewall router switch gateway',
      'encrypt decrypt hash salt key',
      // Hexadecimal
      '0123456789ABCDEF',
      // Japanese characters (Matrix style)
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
      // Symbols
      '!@#$%^&*()_+-=[]{}|;:,.<>?'
    ];

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: Array<{
      y: number;
      speed: number;
      charSet: string;
      color: string;
      opacity: number;
    }> = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 1,
        charSet: characterSets[Math.floor(Math.random() * characterSets.length)],
        color: ['#00ff41', '#ff0080', '#0080ff', '#ff8000', '#8000ff'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.8 + 0.2
      };
    }

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        
        // Pick random character from the drop's character set
        const char = drop.charSet[Math.floor(Math.random() * drop.charSet.length)];
        
        // Set color with opacity
        ctx.fillStyle = drop.color.replace(')', `, ${drop.opacity})`).replace('#', 'rgba(').replace(/(.{2})(.{2})(.{2})/, '$1, $2, $3');
        if (!ctx.fillStyle.includes('rgba')) {
          ctx.fillStyle = `rgba(0, 255, 65, ${drop.opacity})`;
        }
        
        // Draw character
        ctx.fillText(char, i * fontSize, drop.y);

        // Move drop down
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y > canvas.height && Math.random() > 0.975) {
          drop.y = 0;
          drop.speed = Math.random() * 3 + 1;
          drop.charSet = characterSets[Math.floor(Math.random() * characterSets.length)];
          drop.color = ['#00ff41', '#ff0080', '#0080ff', '#ff8000', '#8000ff'][Math.floor(Math.random() * 5)];
          drop.opacity = Math.random() * 0.8 + 0.2;
        }
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ background: 'transparent' }}
    />
  );
};

export default CodeMatrix;