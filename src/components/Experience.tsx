const projects = [
  {
    title: "Interactive Data Portfolio & LLM Assistant",
    date: "In Progress",
    highlights: [
      "AI agent summarizing projects, datasets, and GitHub repos",
      "Interactive dashboards with LLM integration",
    ],
    tech: ["Python", "React", "LangChain"]
  },
  {
    title: "Social Good Mini-Apps",
    date: "In Progress",
    highlights: [
      "Apps for disaster relief, traffic monitoring, accessibility",
      "Focus on scalability and real-world impact",
    ],
    tech: ["React", "FastAPI", "Firebase"]
  },
  {
    title: "Micro SaaS / Freelance Tool",
    date: "In Progress",
    highlights: [
      "Small niche tools for local businesses or freelancers",
      "Focus on automation, analytics dashboards, and efficiency",
    ],
    tech: ["React", "Node.js", "MongoDB"]
  },
];

const InProgressWork = () => {
  return (
    <section id="in-progress" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text">In-Progress Work</h2>
        <p className="text-muted-foreground mt-2">
          Real-world projects currently under development, showcasing AI, web, and scalable solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div key={proj.title} className="p-6 bg-glass rounded-xl hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
            <p className="text-muted-foreground mb-3">{proj.date}</p>
            <ul className="mb-3 list-disc list-inside text-sm">
              {proj.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            <div className="flex flex-wrap gap-1">
              {proj.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-xs rounded bg-secondary/20">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InProgressWork;
