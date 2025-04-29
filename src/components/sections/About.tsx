
import React from "react";
import ScrollReveal from "../ScrollReveal";
import { BatteryMedium, Cpu, GitBranch, Globe, Server } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display mb-2 text-gradient text-center">ABOUT ME</h2>
          <p className="text-cyber-gray text-center mb-12 font-mono">The human behind the code</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200} direction="left">
            <div className="cyber-panel rounded-xl p-1">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-8 bg-cyber-dark/80 backdrop-blur-sm flex items-center px-3 space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-cyber-gray font-mono">developer.jpg</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="right">
            <div className="space-y-6">
              <p className="text-lg text-cyber-gray leading-relaxed">
                I'm a passionate software developer with extensive expertise in battery technology. My work bridges the gap between cutting-edge software development and advanced battery systems, creating innovative solutions for energy storage challenges.
              </p>
              <p className="text-lg text-cyber-gray leading-relaxed">
                With <span className="text-cyber-blue">7+ years</span> of experience in battery management systems, I specialize in optimizing performance, extending battery life, and enhancing safety through intelligent software solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <BatteryMedium className="h-8 w-8 text-cyber-blue mb-2" />, label: "Battery Systems" },
                  { icon: <Cpu className="h-8 w-8 text-cyber-blue mb-2" />, label: "Embedded Systems" },
                  { icon: <GitBranch className="h-8 w-8 text-cyber-blue mb-2" />, label: "Software Development" },
                  { icon: <Server className="h-8 w-8 text-cyber-blue mb-2" />, label: "Data Analysis" }
                ].map((item, index) => (
                  <div key={index} className="cyber-panel rounded-lg p-4 flex flex-col items-center text-center">
                    {item.icon}
                    <p className="font-mono text-sm text-cyber-gray">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
