import { Users, Calendar } from "lucide-react";

const Leadership = () => {
  const roles = [
    {
      title: "IEEE Student Chair",
      organization: "PESITM",
      period: "2025 – Present",
      description: "Leading the IEEE student branch, organizing technical workshops, guest lectures, and student development programs.",
      color: "from-primary to-primary-glow",
    },
    {
      title: "Forum Coordinator",
      organization: "AIML Department, PESITM",
      period: "2024 – October 2025",
      description: "Coordinated departmental events, technical sessions, and student engagement activities for the AIML community.",
      color: "from-secondary to-secondary-glow",
    },
    {
      title: "Social Media Head",
      organization: "AIML Department, PESITM",
      period: "October 2025 – Present",
      description: "Managing social media presence, creating engaging content, and promoting departmental achievements and events.",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Leadership & Volunteering
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="glass-panel p-6 hover-lift hover-glow-violet relative overflow-hidden group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${role.color}`}>
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold mb-2">
                  {role.title}
                </h3>
                
                <p className="text-primary font-semibold mb-2">
                  {role.organization}
                </p>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{role.period}</span>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
