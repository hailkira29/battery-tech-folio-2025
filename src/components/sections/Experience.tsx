
import React from "react";
import ScrollReveal from "../ScrollReveal";
import { BatteryCharging, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Lead Battery Systems Engineer",
      company: "TechVolt Systems",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading the development of next-generation battery management systems for electric vehicles. Optimized algorithms resulting in 15% increase in battery lifespan and 20% improvement in charging efficiency."
    },
    {
      id: 2,
      role: "Senior Software Developer",
      company: "EnergyCore Solutions",
      location: "Boston, MA",
      period: "2019 - 2022",
      description: "Architected and implemented software for battery analysis and optimization. Created machine learning models for predictive maintenance that reduced failure rates by 30%. Designed real-time monitoring dashboards for battery performance."
    },
    {
      id: 3,
      role: "Battery Research Engineer",
      company: "PowerTech Labs",
      location: "Austin, TX",
      period: "2016 - 2019",
      description: "Conducted research on advanced battery materials and optimization techniques. Developed simulation software for testing battery performance under various conditions. Published 5 research papers in leading energy journals."
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
                        <BatteryCharging className="w-16 h-16 text-cyber-blue" />
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
