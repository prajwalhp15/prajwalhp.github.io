const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="glass-panel p-8 md:p-12 hover-lift hover-glow-violet">
          <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
            Professional Summary
          </h3>
         <p className="text-lg leading-relaxed text-foreground/90">
  I’m an <span className="font-semibold">AIML Engineering student</span> passionate about building intelligent systems and uncovering insights from data.  
  I have hands-on experience in <span className="text-primary font-semibold">ML/NLP systems</span>, 
  <span className="text-secondary font-semibold"> Reinforcement Learning</span>, and <span className="text-primary font-semibold">Full-Stack Development</span>, 
  and have contributed to <span className="text-secondary font-semibold">real-world commercial projects</span>.  
  I enjoy participating in hackathons, leading initiatives, and creating projects that make an impact.  
  I love exploring new technologies, experimenting with AI solutions, and finding creative ways to solve real-world problems.  
  My goal is to build meaningful applications that combine innovation with practical value.
</p>

          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
