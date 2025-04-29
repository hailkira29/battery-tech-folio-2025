
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseEnterLink = () => setLinkHovered(true);
    const onMouseLeaveLink = () => setLinkHovered(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", () => setHidden(true));

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, [role="button"], .interactive'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", () => setHidden(true));
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, [hidden]);

  return (
    <div 
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {/* Inner cursor dot */}
      <div 
        className={`absolute bg-cyber-blue rounded-full transition-all duration-200 ${
          clicked ? "w-2 h-2 -translate-x-1 -translate-y-1" : "w-3 h-3 -translate-x-1.5 -translate-y-1.5"
        }`}
      />
      
      {/* Outer cursor ring */}
      <div 
        className={`absolute border-2 border-cyber-blue rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-difference ${
          linkHovered ? "w-16 h-16 opacity-40" : clicked ? "w-6 h-6 opacity-40" : "w-10 h-10 opacity-30"
        }`}
      />
    </div>
  );
};

export default CustomCursor;
