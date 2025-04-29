
import React, { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  glitch?: boolean; // New prop for cyberpunk glitch effect
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
  distance = 20,
  duration = 0.6,
  glitch = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Calculate transform based on direction
    let initialTransform = `translateY(${distance}px)`;
    switch (direction) {
      case "up":
        initialTransform = `translateY(${distance}px)`;
        break;
      case "down":
        initialTransform = `translateY(-${distance}px)`;
        break;
      case "left":
        initialTransform = `translateX(${distance}px)`;
        break;
      case "right":
        initialTransform = `translateX(-${distance}px)`;
        break;
      case "none":
        initialTransform = "translateY(0)";
        break;
      default:
        initialTransform = `translateY(${distance}px)`;
    }

    // Set initial styles
    currentRef.style.opacity = "0";
    currentRef.style.transform = initialTransform;
    currentRef.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;
    if (delay) {
      currentRef.style.transitionDelay = `${delay}ms`;
    }

    // Apply glitch effect class if enabled
    if (glitch) {
      currentRef.classList.add("cyber-glitch-prepare");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          currentRef.style.opacity = "1";
          currentRef.style.transform = "translate(0)";
          hasAnimated.current = true;
          
          // Trigger glitch animation if enabled
          if (glitch) {
            currentRef.classList.add("cyber-glitch");
            setTimeout(() => {
              currentRef.classList.remove("cyber-glitch-prepare", "cyber-glitch");
            }, 1000);
          }
          
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, delay, direction, distance, duration, glitch]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
