
import React, { useEffect, useState } from "react";
import { BatteryFull, ChevronDown } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Developer", "Engineer", "Innovator", "Battery Expert"];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (typedText === currentWord) {
      // Full word typed, wait before erasing
      timer = setTimeout(() => {
        eraseText();
      }, delayBetweenWords);
    } else if (typedText === "" && currentWord !== words[currentWordIndex]) {
      // Word erased, move to next word
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else if (typedText.length < currentWord.length) {
      // Currently typing
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, currentWordIndex, words]);

  const eraseText = () => {
    let timer: NodeJS.Timeout;
    if (typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(typedText.substring(0, typedText.length - 1));
      }, erasingSpeed);
    }
    return () => clearTimeout(timer);
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-dark to-black/90 z-[-1]"></div>
      
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal delay={300} direction="up">
          <div className="flex items-center justify-center mb-4">
            <BatteryFull className="text-cyber-blue w-8 h-8 mr-2" />
            <span className="font-mono text-cyber-blue uppercase tracking-widest">Power Your Future</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={500} direction="up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-white">Battery Technology</span><br />
            <span className="text-gradient">Portfolio 2025</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={700} direction="up">
          <div className="h-16">
            <h2 className="text-xl md:text-2xl text-cyber-gray font-mono mb-8">
              <span>I am a </span>
              <span className="text-cyber-blue">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={900} direction="up">
          <button 
            onClick={scrollToNext}
            className="mt-12 px-8 py-3 rounded-full bg-transparent cyber-border text-cyber-blue font-mono uppercase tracking-wider hover:bg-cyber-blue/10 transition-colors duration-300 interactive"
          >
            Explore My Work
          </button>
        </ScrollReveal>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
        <button 
          onClick={scrollToNext}
          className="text-cyber-blue interactive"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
