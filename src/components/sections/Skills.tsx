
import React, { useEffect, useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { 
  BatteryCharging, 
  Code, 
  Database, 
  Cpu, 
  GitBranch, 
  Terminal,
  HardDrive
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  category: "battery" | "software" | "tools";
}

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "battery" | "software" | "tools">("all");
  const [animated, setAnimated] = useState(false);

  const skills: Skill[] = [
    { name: "Battery Management Systems", level: 90, icon: <BatteryCharging />, category: "battery" },
    { name: "State of Health Estimation", level: 85, icon: <BatteryCharging />, category: "battery" },
    { name: "EIS & Diagnostics", level: 88, icon: <BatteryCharging />, category: "battery" },
    { name: "C#/.NET/WPF", level: 95, icon: <Code />, category: "software" },
    { name: "MATLAB/Simulink", level: 92, icon: <Terminal />, category: "software" },
    { name: "Python", level: 85, icon: <Code />, category: "software" },
    { name: "SQL", level: 80, icon: <Database />, category: "software" },
    { name: "Git/Version Control", level: 88, icon: <GitBranch />, category: "tools" },
    { name: "CI/CD (Jenkins/Azure)", level: 82, icon: <HardDrive />, category: "tools" },
    { name: "CAN/PCAN", level: 85, icon: <Cpu />, category: "tools" },
  ];

  // Filter skills based on active filter
  const filteredSkills = skills.filter(
    (skill) => activeFilter === "all" || skill.category === activeFilter
  );

  const triggerAnimation = () => {
    setAnimated(false);
    setTimeout(() => setAnimated(true), 100);
  };

  useEffect(() => {
    triggerAnimation();
  }, [activeFilter]);

  return (
    <section id="skills" className="py-20 bg-cyber-dark/50 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display mb-2 text-gradient text-center">TECHNICAL SKILLS</h2>
          <p className="text-cyber-gray text-center mb-12 font-mono">Battery software & embedded expertise</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "All Skills" },
              { id: "battery", label: "Battery Tech" },
              { id: "software", label: "Software" },
              { id: "tools", label: "Tools & Protocols" }
            ].map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 interactive ${
                  activeFilter === filter.id
                    ? "bg-cyber-blue/20 text-cyber-blue cyber-border"
                    : "bg-transparent text-cyber-gray hover:text-cyber-blue"
                }`}
                onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={200 + index * 100}>
              <div className="cyber-panel p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-cyber-blue mr-3">{skill.icon}</div>
                  <h3 className="font-display text-lg text-white">{skill.name}</h3>
                </div>
                
                <div className="w-full h-3 bg-cyber-dark cyber-border rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      animated ? "animate-battery-charge" : ""
                    }`}
                    style={{ 
                      width: animated ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs font-mono text-cyber-gray">Proficiency</span>
                  <span className="text-xs font-mono text-cyber-blue">{skill.level}%</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
