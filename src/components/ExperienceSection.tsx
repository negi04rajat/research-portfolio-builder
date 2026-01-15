import { motion } from 'framer-motion';
import { Briefcase, Building2, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "E-Mobility Intern",
    company: "pManifold Business Solutions",
    period: "Dec'25 – Feb'26",
    highlights: [
      "Performed TCO analysis and financial modelling for e-Buses implementation in Belize",
      "Conducted GHG emissions modelling to evaluate lifetime environmental impacts",
      "GIS-Routing and route-level energy modelling for charger sizing",
    ],
    tags: ["TCO Analysis", "GHG Modelling", "GIS"],
  },
  {
    title: "Transportation Analyst Intern",
    company: "TUTEM Project, Asian Development Bank",
    period: "May'25 – Jul'25",
    highlights: [
      "Modeled safety perceptions across 10 cities, projecting 15% shift to metro/bus",
      "Estimated potential reduction of 2,200 tons of CO₂ emissions annually",
      "Used R, QGIS, Econometrics for modeling and safety hotspot analysis",
    ],
    tags: ["R", "QGIS", "Econometrics", "Safety Analysis"],
  },
  {
    title: "Research Intern",
    company: "Waste Warriors Society",
    period: "Dec'24 – Jan'25",
    highlights: [
      "Designed QGIS-based models to optimize waste logistics for 200,000+ residents",
      "Conducted 50+ field visits to identify funding gaps (₹16.22L–₹24.34L)",
      "Presented findings to State Government officials for resource allocation",
    ],
    tags: ["QGIS", "Field Research", "Policy"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Experience</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Professional Journey
          </h3>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-border space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                
                <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-bold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <span className="badge-accent text-xs">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
