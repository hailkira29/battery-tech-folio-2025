
import React from "react";
import ScrollReveal from "../ScrollReveal";
import { BatteryCharging, Calendar, MapPin, Code, Terminal, Database } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Application & Software Developer",
      company: "LXInstruments GmbH",
      location: "Germany",
      period: "Mar 2024 - Oct 2024",
      description: "Built modular C# WPF diagnostic platform, improving UI responsiveness by 30%. Integrated SQL battery databank with 40% faster queries. Automated KPI dashboard via REST API and mentored interns on C# unit testing.",
      icon: <Code className="w-16 h-16 text-cyber-blue" />
    },
    {
      id: 2,
      role: "Master Thesis Researcher",
      company: "State of Health Estimation of Li-ion Batteries using EIS",
      location: "Germany",
      period: "Aug 2023 - Feb 2024",
      description: "Developed MATLAB/Simulink algorithms achieving ±5% SoH accuracy (R² = 0.92). Processed 10k impedance profiles via SQL and validated model across 120 cells, identifying 18% as safe for second life reuse.",
      icon: <Terminal className="w-16 h-16 text-cyber-blue" />
    },
    {
      id: 3,
      role: "Battery Test Intern",
      company: "LXInstruments GmbH",
      location: "Germany",
      period: "Apr 2023 - Jul 2023",
      description: "Scripted C# PCAN interfaces for real-time BMU data, tripling signal resolution. Automated test sequences, increasing throughput by 15%. Implemented safety watchdog preventing cell damage during 200+ cycles.",
      icon: <BatteryCharging className="w-16 h-16 text-cyber-blue" />
    },
    {
      id: 4,
      role: "Development Engineer Intern",
      company: "Wacker Neuson Produktion GmbH & Co. KG",
      location: "Germany",
      period: "May 2022 - Oct 2022",
      description: "Analyzed battery logs and created MATLAB KPI extractor with 15% improved accuracy. Optimized peak detection functions, reducing analysis runtimes by 30%. Prepared technical reports for management audits.",
      icon: <Database className="w-16 h-16 text-cyber-blue" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-cyber-dark/50 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display mb-2 text-gradient text-center">WORK EXPERIENCE</h2>
          <p className="text-cyber-gray text-center mb-12 font-mono">Professional journey & achievements</p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-cyber-blue/20 z-0"></div>

          {experiences.map((exp, index) => (
            <ScrollReveal 
              key={exp.id} 
              delay={300 + index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="relative z-10 mb-12">
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyber-dark border-2 border-cyber-blue z-10"></div>
                  
                  {/* Content box */}
                  <div className={`w-full md:w-[calc(50%-30px)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="cyber-panel p-6 rounded-lg relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue/50"></div>
                      
                      <h3 className="text-xl font-display text-white mb-2">{exp.role}</h3>
                      <h4 className="text-cyber-blue font-mono text-lg mb-4">{exp.company}</h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center text-cyber-gray text-sm mb-4 space-y-2 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-cyber-purple" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-cyber-purple" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-cyber-gray leading-relaxed">{exp.description}</p>
                      
                      <div className="absolute -bottom-3 -right-3 opacity-10">
                        {exp.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
