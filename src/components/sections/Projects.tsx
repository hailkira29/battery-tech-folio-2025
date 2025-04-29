
import React, { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "BatteryOS",
      description: "Advanced battery management system with AI-powered optimization for electric vehicles.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      tags: ["C++", "Python", "Machine Learning"],
      category: "battery",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Energy Forecast",
      description: "Predictive analytics platform for battery performance and degradation modeling.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      tags: ["React", "TensorFlow", "Data Visualization"],
      category: "webapp",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "ThermalGuard",
      description: "Real-time thermal management system for large-scale battery installations.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22732f9e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      tags: ["IoT", "Embedded Systems", "C"],
      category: "embedded",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "CellSim",
      description: "Battery cell simulation software for research and development applications.",
      image: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      tags: ["Python", "Simulation", "Scientific Computing"],
      category: "software",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display mb-2 text-gradient text-center">MY PROJECTS</h2>
          <p className="text-cyber-gray text-center mb-12 font-mono">Notable works & contributions</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "battery", "webapp", "embedded", "software"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 interactive ${
                  activeFilter === filter
                    ? "bg-cyber-blue/20 text-cyber-blue cyber-border"
                    : "bg-transparent text-cyber-gray hover:text-cyber-blue"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={300 + index * 100}>
              <div className="cyber-panel rounded-xl overflow-hidden group relative">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-white mb-2">{project.title}</h3>
                  <p className="text-cyber-gray mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs font-mono py-1 px-2 rounded-full bg-cyber-blue/10 text-cyber-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        className="flex items-center text-sm font-mono text-cyber-blue hover:underline interactive"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="flex items-center text-sm font-mono text-cyber-blue hover:underline interactive"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Source Code
                      </a>
                    )}
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

export default Projects;
