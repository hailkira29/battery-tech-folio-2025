
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import CircuitBackground from "../components/CircuitBackground";

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showToTop, setShowToTop] = useState(false);

  const handlePreloaderFinished = () => {
    setLoading(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark">
      {loading && <Preloader onFinished={handlePreloaderFinished} />}
      <CustomCursor />
      <CircuitBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
        {/* Cyberpunk decorative line elements */}
        <div className="absolute left-0 top-1/3 h-px w-8 bg-cyber-blue/30"></div>
        <div className="absolute right-0 top-2/3 h-px w-12 bg-cyber-blue/30"></div>
        <div className="absolute left-0 bottom-1/4 h-px w-16 bg-cyber-blue/30"></div>
      </main>
      <Footer />
      
      {/* Back to Top Button with enhanced cyberpunk styling */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-cyber-blue/20 border border-cyber-blue/30 text-cyber-blue transition-all duration-300 hover:bg-cyber-blue/30 z-40 interactive group ${
          showToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-px bg-cyber-blue/50 group-hover:w-full transition-all duration-300"></span>
      </button>
    </div>
  );
};

export default Index;
