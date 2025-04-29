
import React from "react";
import { BatteryFull, Circuit, Cpu, Zap } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark py-12 relative">
      {/* Cyberpunk decoration elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue/60 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-1 h-10 bg-cyber-blue/30"></div>
      <div className="absolute top-0 right-1/4 w-1 h-6 bg-cyber-blue/30"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-6">
            <BatteryFull className="w-6 h-6 text-cyber-blue mr-2" />
            <span className="text-2xl font-display text-white tracking-wider">
              <span className="text-gradient">BATTERY</span>
              <span className="text-cyber-gray">TECH</span>
            </span>
          </div>
          
          <div className="mb-8">
            <p className="text-cyber-gray text-center">
              Powering innovation through advanced battery technology and software development.
            </p>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent mb-8"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-2xl">
            <div className="flex flex-col items-center">
              <Cpu className="w-5 h-5 text-cyber-blue mb-2" />
              <span className="text-cyber-gray text-xs font-mono">SYSTEMS</span>
            </div>
            <div className="flex flex-col items-center">
              <Circuit className="w-5 h-5 text-cyber-blue mb-2" />
              <span className="text-cyber-gray text-xs font-mono">CIRCUITS</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-5 h-5 text-cyber-blue mb-2" />
              <span className="text-cyber-gray text-xs font-mono">ENERGY</span>
            </div>
            <div className="flex flex-col items-center">
              <BatteryFull className="w-5 h-5 text-cyber-blue mb-2" />
              <span className="text-cyber-gray text-xs font-mono">POWER</span>
            </div>
          </div>
          
          <div className="text-cyber-gray text-sm font-mono text-center">
            <p>&copy; {currentYear} Battery Tech Portfolio. All rights reserved.</p>
            <p className="mt-2">
              <span className="text-cyber-blue">Designed & Developed</span> with sustainable energy in mind.
            </p>
          </div>
          
          {/* Cyberpunk decorative element */}
          <div className="mt-8 relative">
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 cyber-border flex items-center justify-center rounded">
              <div className="w-2 h-2 bg-cyber-blue rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
