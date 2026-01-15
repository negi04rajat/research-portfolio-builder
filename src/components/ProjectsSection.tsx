import { motion } from 'framer-motion';
import { ExternalLink, Zap, Building, TrendingUp, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "UNDP E-Mobility Implementation in Belize",
    subtitle: "Financial and Environmental Modelling",
    description: "Assessed 950+ ICE buses fleet, conducted GIS-based route mapping, and built scenario-based TCO and GHG emissions models achieving 80% emissions reduction projection over 15 years.",
    icon: Zap,
    tags: ["E-Mobility", "GIS", "Financial Modelling"],
    category: "E-Mobility",
  },
  {
    title: "Electrifying Bus Fleet Feasibility",
    subtitle: "M.Tech Research Project (Ongoing)",
    description: "Building route-level techno-economic model to evaluate TCO and assess operator-level financial feasibility using Python, QGIS, and Advanced Excel for behavioral analysis.",
    icon: Train,
    tags: ["Python", "QGIS", "TCO Analysis"],
    category: "Research",
  },
  {
    title: "Drinking Water Supply System",
    subtitle: "Financial Modelling Project at IIT KGP",
    description: "Structured $655.6M project financing model with 85% JICA debt, delivering 18% IRR and 2.53% WACC over 20 years with comprehensive sensitivity analysis.",
    icon: TrendingUp,
    tags: ["PPP", "DCF", "Excel VBA"],
    category: "Finance",
  },
  {
    title: "Multinomial Logit Analysis",
    subtitle: "Access–Egress Connectivity in Delhi",
    description: "Conducted survey of 100+ users, developed MNL model with 70/30 validation to estimate factors affecting access/egress mode choice, identified last-mile connectivity gaps.",
    icon: Building,
    tags: ["MNL", "Survey Design", "Transportation"],
    category: "Analysis",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Projects</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Featured Work
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Research and implementation projects in sustainable transport, financial modelling, and urban mobility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h4 className="text-xl font-heading font-bold text-foreground mb-1">
                {project.title}
              </h4>
              <p className="text-sm text-primary mb-3">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
