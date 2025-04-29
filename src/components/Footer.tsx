
import React from "react";
import { BatteryFull } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark py-12">
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
          
          <div className="text-cyber-gray text-sm font-mono text-center">
            <p>&copy; {currentYear} Battery Tech Portfolio. All rights reserved.</p>
            <p className="mt-2">
              <span className="text-cyber-blue">Designed & Developed</span> with sustainable energy in mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
