import React from 'react';

const CircuitBoard = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" />
            <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" />
            
            {/* Vertical lines */}
            <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" />
            <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" />
            
            {/* Circuit nodes */}
            <circle cx="20" cy="20" r="2.5" fill="rgba(147, 51, 234, 0.8)" />
            <circle cx="50" cy="20" r="2.5" fill="rgba(6, 182, 212, 0.8)" />
            <circle cx="80" cy="20" r="2.5" fill="rgba(147, 51, 234, 0.8)" />
            <circle cx="20" cy="50" r="2.5" fill="rgba(6, 182, 212, 0.8)" />
            <circle cx="50" cy="50" r="2.5" fill="rgba(147, 51, 234, 0.8)" />
            <circle cx="80" cy="50" r="2.5" fill="rgba(6, 182, 212, 0.8)" />
            <circle cx="20" cy="80" r="2.5" fill="rgba(6, 182, 212, 0.8)" />
            <circle cx="50" cy="80" r="2.5" fill="rgba(147, 51, 234, 0.8)" />
            <circle cx="80" cy="80" r="2.5" fill="rgba(6, 182, 212, 0.8)" />
            
            {/* Small rectangles (chips) */}
            <rect x="15" y="45" width="10" height="10" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" />
            <rect x="75" y="15" width="10" height="10" fill="none" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default CircuitBoard;