import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "Reinforcement Learning-Based Cyber Threat Detection",
      shortDesc: "DQN-powered anomaly detection system for 6G networks using Neo4j graph database",
      fullDesc: "Advanced cyber threat detection system leveraging Deep Q-Network (DQN) reinforcement learning algorithms to identify and mitigate security threats in next-generation 6G networks. Utilizes Neo4j graph database for efficient threat relationship mapping and pattern recognition.",
      tech: ["Python", "DQN", "Neo4j", "Reinforcement Learning", "Network Security"],
      link: "#",
      github: "#",
      color: "from-primary to-primary-glow",
    },
    {
      title: "HologramArcade (VisionLab)",
      shortDesc: "Interactive holographic display with gesture recognition using MediaPipe and Three.js",
      fullDesc: "Cutting-edge holographic display system featuring real-time gesture recognition powered by MediaPipe. Users can interact with 3D holographic objects through intuitive hand gestures, with integrated audio controls and speech recognition for seamless multimodal interaction.",
      tech: ["MediaPipe", "Three.js", "JavaScript", "Computer Vision", "WebGL"],
      link: "#",
      github: "#",
      color: "from-secondary to-secondary-glow",
    },
    {
      title: "ExplainMyCar - Car Price Prediction",
      shortDesc: "ML-powered car price prediction with SHAP explainability deployed via Streamlit",
      fullDesc: "Comprehensive car price prediction system utilizing advanced regression algorithms. Features SHAP (SHapley Additive exPlanations) integration for model interpretability, allowing users to understand the factors influencing price predictions. Deployed as an interactive web application using Streamlit.",
      tech: ["Python", "Machine Learning", "SHAP", "Streamlit", "Regression"],
      link: "#",
      github: "#",
      color: "from-primary to-secondary",
    },
    {
      title: "RainWise (SIH 2025)",
      shortDesc: "Rooftop rainwater harvesting assessment platform with automated reports and subsidy analysis",
      fullDesc: "Smart web application for evaluating rooftop rainwater harvesting potential. Provides detailed feasibility analysis, automated recommendation reports, cost-benefit analysis, and government subsidy eligibility assessment. Aims to promote sustainable water management practices.",
      tech: ["React", "Flask", "MongoDB", "Data Analytics", "Environmental Tech"],
      link: "#",
      github: "#",
      color: "from-secondary to-primary",
    },
    {
      title: "ESDO Salon Website",
      shortDesc: "Full-stack salon management system with multi-role access (Admin/Partner/Customer)",
      fullDesc: "Commercial full-stack web application for comprehensive salon management. Features role-based access control for administrators, salon partners, and customers. Includes appointment scheduling, service management, payment processing, and customer relationship management.",
      tech: ["React", "Node.js", "MongoDB", "Authentication", "Full-Stack"],
      link: "#",
      github: "#",
      color: "from-primary-glow to-secondary-glow",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-panel p-6 hover-lift hover-glow-cyan group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-4`} />
              
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-xs">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 hover-glow-violet"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 hover-glow-cyan"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-panel max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display gradient-text">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              {selectedProject?.fullDesc}
            </p>

            <div>
              <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                className="flex-1 bg-gradient-to-r from-primary to-primary-glow"
                asChild
              >
                <a href={selectedProject?.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex-1 hover-glow-cyan"
                asChild
              >
                <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
