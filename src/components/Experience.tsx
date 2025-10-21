import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="glass-panel p-8 md:p-10 hover-lift hover-glow-violet relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 rounded-xl bg-secondary/20 border border-secondary/30">
              <Briefcase className="w-8 h-8 text-secondary" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-1">
                    Data Science Intern
                  </h3>
                  <p className="text-xl text-secondary font-semibold">
                    Cognifyz Technologies
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>March 2025 – April 2025</span>
                </div>
              </div>

              <div className="space-y-3 text-foreground/90">
                <p className="leading-relaxed">
                  Worked on comprehensive data science projects focusing on real-world business problems and data-driven insights.
                </p>
                
                <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <p>Performed extensive <span className="text-primary font-semibold">data preprocessing</span> and <span className="text-secondary font-semibold">exploratory data analysis</span> on large datasets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <p>Conducted <span className="text-primary font-semibold">geospatial analysis</span> and visualization to identify location-based patterns</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <p>Applied advanced <span className="text-secondary font-semibold">feature engineering</span> techniques to improve model performance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <p>Built and deployed <span className="text-primary font-semibold">predictive models</span> for business forecasting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <p>Created interactive <span className="text-secondary font-semibold">dashboards and visualizations</span> using Tableau and Power BI</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Tableau", "Power BI"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-card/50 border border-secondary/20 text-sm hover:border-secondary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
