import React from 'react';

const DataStream = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-35 overflow-hidden">
      {/* Horizontal data streams */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-data-flow"
          style={{
            top: `${10 + i * 12}%`,
            width: '200px',
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i}s`
          }}
        />
      ))}
      
      {/* Vertical data streams */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"
          style={{
            left: `${15 + i * 15}%`,
            height: '300px',
            top: `${Math.random() * 50}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Diagonal streams */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`d-${i}`}
          className="absolute w-px h-64 bg-gradient-to-b from-transparent via-green-400 to-transparent transform rotate-45 animate-pulse"
          style={{
            left: `${20 + i * 25}%`,
            top: `${20 + i * 20}%`,
            animationDelay: `${i * 2.5}s`,
            animationDuration: '4s'
          }}
        />
      ))}
    </div>
  );
};

export default DataStream;