
import React, { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Calculate transform based on direction
    let initialTransform = "translateY(20px)";
    switch (direction) {
      case "up":
        initialTransform = "translateY(20px)";
        break;
      case "down":
        initialTransform = "translateY(-20px)";
        break;
      case "left":
        initialTransform = "translateX(20px)";
        break;
      case "right":
        initialTransform = "translateX(-20px)";
        break;
      case "none":
        initialTransform = "translateY(0)";
        break;
      default:
        initialTransform = "translateY(20px)";
    }

    // Set initial styles
    currentRef.style.opacity = "0";
    currentRef.style.transform = initialTransform;
    currentRef.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
    if (delay) {
      currentRef.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          currentRef.style.opacity = "1";
          currentRef.style.transform = "translate(0)";
          hasAnimated.current = true;
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
  }, [threshold, delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
