import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto: prajwalhp15@gmail.com", color: "hover-glow-violet" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prajwal-hp/", color: "hover-glow-cyan" },
    { icon: Github, label: "GitHub", href: "https://github.com/prajwalhp15", color: "hover-glow-violet" },
    { icon: ExternalLink, label: "Portfolio", href: "#", color: "hover-glow-cyan" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <div className="inline-block mb-4 px-4 py-2 glass-panel">
          <span className="text-sm font-medium gradient-text">AI/ML Engineer • Data Analyst • Developer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight">
          <span className="gradient-text">PRAJWAL H P</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
         AIML Engineering Student passionate about turning ideas into intelligent solutions.
Curious, driven, and always learning.
Enjoys building impactful projects and collaborating with teams.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              asChild
              className={`glass-panel hover-lift ${link.color} group`}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="glass-panel bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform text-base font-semibold px-8"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="glass-panel hover-lift hover-glow-cyan text-base font-semibold px-8"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
