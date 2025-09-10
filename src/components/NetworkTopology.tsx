import React, { useEffect, useRef } from 'react';

const NetworkTopology = () => {
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

    // Network nodes representing servers, routers, etc.
    const nodes: { x: number; y: number; type: string; pulse: number; connections: number[] }[] = [];
    const nodeCount = 25;

    // Initialize network nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        type: ['server', 'router', 'firewall', 'endpoint'][Math.floor(Math.random() * 4)],
        pulse: Math.random() * Math.PI * 2,
        connections: []
      });
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2);
          if (distance < 200 && Math.random() > 0.7) {
            node.connections.push(j);
          }
        }
      });
    });

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const target = nodes[connectionIndex];
          if (target) {
            // Animated data packets
            const progress = (Math.sin(time + i * 0.5) + 1) / 2;
            const packetX = node.x + (target.x - node.x) * progress;
            const packetY = node.y + (target.y - node.y) * progress;

            // Connection line
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(0, 255, 127, ${0.3 + Math.sin(time + i) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Data packet
            ctx.beginPath();
            ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#00ff7f';
            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00ff7f';
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulseSize = 8 + Math.sin(time + node.pulse) * 3;
        
        // Node glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize + 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${0.2 + Math.sin(time + i) * 0.1})`;
        ctx.fill();

        // Main node
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        const colors = {
          server: '#06b6d4',
          router: '#8b5cf6',
          firewall: '#ef4444',
          endpoint: '#10b981'
        };
        ctx.fillStyle = colors[node.type as keyof typeof colors];
        ctx.fill();

        // Node type indicator
        ctx.fillStyle = '#ffffff';
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.type.toUpperCase(), node.x, node.y - pulseSize - 8);
      });

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
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};

export default NetworkTopology;