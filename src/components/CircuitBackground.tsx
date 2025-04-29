
import React from "react";

const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <svg
        className="absolute w-screen h-screen opacity-10"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal lines */}
        <line x1="0" y1="200" x2="1000" y2="200" className="circuit-line" strokeWidth="1" />
        <line x1="0" y1="400" x2="1000" y2="400" className="circuit-line" strokeWidth="1" />
        <line x1="0" y1="600" x2="1000" y2="600" className="circuit-line" strokeWidth="1" />
        <line x1="0" y1="800" x2="1000" y2="800" className="circuit-line" strokeWidth="1" />

        {/* Vertical lines */}
        <line x1="200" y1="0" x2="200" y2="1000" className="circuit-line" strokeWidth="1" />
        <line x1="400" y1="0" x2="400" y2="1000" className="circuit-line" strokeWidth="1" />
        <line x1="600" y1="0" x2="600" y2="1000" className="circuit-line" strokeWidth="1" />
        <line x1="800" y1="0" x2="800" y2="1000" className="circuit-line" strokeWidth="1" />

        {/* Diagonal lines */}
        <line x1="0" y1="0" x2="1000" y2="1000" className="circuit-line" strokeWidth="1" />
        <line x1="1000" y1="0" x2="0" y2="1000" className="circuit-line" strokeWidth="1" />

        {/* Nodes */}
        <circle cx="200" cy="200" r="5" className="fill-cyber-blue/30" />
        <circle cx="400" cy="400" r="5" className="fill-cyber-blue/30" />
        <circle cx="600" cy="600" r="5" className="fill-cyber-blue/30" />
        <circle cx="800" cy="800" r="5" className="fill-cyber-blue/30" />
        <circle cx="200" cy="800" r="5" className="fill-cyber-blue/30" />
        <circle cx="800" cy="200" r="5" className="fill-cyber-blue/30" />

        {/* Additional curved circuit paths */}
        <path
          d="M200,200 Q400,100 600,200 T1000,300"
          fill="none"
          className="circuit-line"
          strokeWidth="1"
        />
        <path
          d="M0,700 Q200,800 400,700 T800,600"
          fill="none"
          className="circuit-line"
          strokeWidth="1"
        />
        <path
          d="M700,0 Q800,200 700,400 T600,800"
          fill="none"
          className="circuit-line"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default CircuitBackground;
