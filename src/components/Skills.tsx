import { Code2, Globe, Database, Brain, BarChart3, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "C", "Java (Basics)"],
      color: "from-primary to-primary-glow",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React (Basics)", "Streamlit"],
      color: "from-secondary to-secondary-glow",
    },
    {
      icon: Database,
      title: "Frameworks & Databases",
      skills: ["Flask", "FastAPI", "MongoDB", "PostgreSQL", "SQL"],
      color: "from-primary to-secondary",
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "NLP", "Computer Vision"],
      color: "from-secondary to-primary",
    },
    {
      icon: BarChart3,
      title: "Analytics & Tools",
      skills: ["Tableau", "Power BI", "Jupyter Notebook", "Google Colab", "Git"],
      color: "from-primary-glow to-secondary-glow",
    },
    {
      icon: Monitor,
      title: "Operating Systems",
      skills: ["Linux", "Windows", "macOS"],
      color: "from-secondary-glow to-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-panel p-6 hover-lift hover-glow-violet group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-card/50 border border-primary/20 text-sm hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
