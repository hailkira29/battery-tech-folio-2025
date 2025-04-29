
import React, { useEffect, useState } from "react";
import { Battery } from "lucide-react";

interface PreloaderProps {
  onFinished: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [message, setMessage] = useState("Initializing systems");

  useEffect(() => {
    const messages = [
      "Initializing systems",
      "Loading battery data",
      "Calibrating interface",
      "Establishing connection",
      "System ready"
    ];

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onFinished();
            }, 500);
          }, 500);
          return 100;
        }
        
        // Update loading message based on progress
        const messageIndex = Math.floor((prev / 100) * (messages.length - 1));
        setMessage(messages[messageIndex]);
        
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cyber-dark transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md px-4">
        <h1 className="text-center mb-8 text-4xl md:text-5xl font-display text-white tracking-widest">
          <span className="text-gradient">PORTFOLIO</span>
          <span className="text-cyber-gray"> 2025</span>
        </h1>

        <div className="relative mb-3 h-3 bg-cyber-dark cyber-border overflow-hidden rounded-full">
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{ 
              width: `${progress}%`,
              background: `linear-gradient(90deg, #1EAEDB ${progress < 50 ? '0%' : '50%'}, #8B5CF6 100%)` 
            }}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Battery className="w-5 h-5 mr-2 text-cyber-blue" />
            <p className="text-sm font-mono text-cyber-gray">{message}</p>
          </div>
          <p className="font-mono text-cyber-blue">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
