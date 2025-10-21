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
            AIML engineering student with hands-on experience in <span className="text-primary font-semibold">ML/NLP systems</span>, 
            <span className="text-secondary font-semibold"> reinforcement learning</span>, and <span className="text-primary font-semibold">full-stack development</span>. 
            Skilled in Python, Flask, MongoDB, Tableau, and Power BI. Strong interest in Data Science, Analytics, and AI-driven problem solving. 
            Active hackathon participant and volunteer leader with a passion for creating impactful technological solutions.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-3xl font-display font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary/10 border border-secondary/20">
              <div className="text-3xl font-display font-bold text-secondary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-3xl font-display font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Leadership Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
