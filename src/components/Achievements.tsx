import { Award, Trophy, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    "Participated in Smart India Hackathon 2025",
    "Participated in DBMS Hackathon",
    "2nd Place - Hack Yugma state level Hackathon, JNNCE Shivamogga",  
    "Contributed to NITK Cyber Knowledge Graph Bootcamp (Honeywell-supported)",
    "Student Coordinator at IEEE AMATHE 2025",
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      year: "2025",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      year: "2025",
    },
    {
      title: "Attention Mechanism in Transformers",
      issuer: "DeepLearning.AI",
      year: "2024",
    },
    {
      title: "Deep Learning with TensorFlow",
      issuer: "IBM",
      year: "2024",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Achievements */}
          <div className="glass-panel p-6 md:p-8 hover-lift hover-glow-violet">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card/30 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-panel p-6 md:p-8 hover-lift hover-glow-cyan">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-secondary/20 border border-secondary/30">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card/30 border border-secondary/10 hover:border-secondary/30 transition-colors"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-secondary font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
