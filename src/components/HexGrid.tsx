import React from 'react';

const HexGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexGrid"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,2 52,15 52,37 30,50 8,37 8,15"
              fill="none"
              stroke="rgba(6, 182, 212, 0.5)"
              strokeWidth="1.5"
            />
          </pattern>
          <pattern
            id="hexGridGlow"
            x="0"
            y="0"
            width="120"
            height="104"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="60,4 104,30 104,74 60,100 16,74 16,30"
              fill="none"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
        <rect width="100%" height="100%" fill="url(#hexGridGlow)" />
      </svg>
    </div>
  );
};

export default HexGrid;