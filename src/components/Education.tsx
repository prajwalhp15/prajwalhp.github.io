import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="glass-panel p-8 md:p-10 hover-lift hover-glow-cyan relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          
          <div className="flex items-start gap-4 mb-4 relative z-10">
            <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-2">
                B.E. in Artificial Intelligence and Machine Learning
              </h3>
              <p className="text-xl text-secondary font-semibold mb-3">
                PES Institute of Technology and Management
              </p>
              
              <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Shivamogga, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Expected 2026</span>
                </div>
              </div>

              <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                <span className="text-lg font-semibold">CGPA: 7.00</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border/50 relative z-10">
            <h4 className="text-lg font-semibold mb-3 text-primary">Key Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Reinforcement Learning",
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Full-Stack Development"
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-full bg-card/50 border border-primary/20 text-sm hover:border-primary/50 transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
