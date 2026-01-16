import { motion } from 'framer-motion';
import { BarChart3, FileSpreadsheet, MapPin, Code, Award } from 'lucide-react';

const skillCategories = [
  {
    title: "Transportation Analysis",
    icon: BarChart3,
    color: "primary",
    skills: [
      { name: "PTV Vissim", level: 85 },
      { name: "Discrete Choice Modeling", level: 90 },
      { name: "Multinomial Logit (MNL)", level: 90 },
      { name: "AutoCAD", level: 80 },
    ],
  },
  {
    title: "Project & Financial Analysis",
    icon: FileSpreadsheet,
    color: "accent",
    skills: [
      { name: "PPP Valuation", level: 85 },
      { name: "DCF Modelling", level: 90 },
      { name: "Feasibility Studies", level: 88 },
      { name: "Cost-Benefit Analysis", level: 85 },
    ],
  },
  {
    title: "GIS & Surveys",
    icon: MapPin,
    color: "primary",
    skills: [
      { name: "QGIS", level: 90 },
      { name: "QNEAT3", level: 80 },
      { name: "Land-use Analysis", level: 85 },
      { name: "Survey Design", level: 88 },
    ],
  },
  {
    title: "Data Analysis & Visualization",
    icon: Code,
    color: "accent",
    skills: [
      { name: "Advanced Excel (VBA)", level: 92 },
      { name: "Python (Pandas, NumPy)", level: 75 },
      { name: "Power BI", level: 80 },
      { name: "R", level: 70 },
    ],
  },
];

const certifications = [
  "PTV Vissim & Viswalk Basics (Udemy)",
  "BCG Climate & Sustainability Job simulation",
  "Data Fundamentals for Sustainable Mobility (TUMI)",
  "CFI Financial Analysis Professional certificate",
  "Infrastructure Financing Foundations",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Skills</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Technical Expertise
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                </div>
                <h4 className="text-lg font-heading font-semibold">{category.title}</h4>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`h-full rounded-full ${category.color === 'accent' ? 'bg-accent' : 'bg-primary'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated p-6 md:p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-heading font-semibold">Certifications</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
