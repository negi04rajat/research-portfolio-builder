import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: "M.Tech in Infrastructure Design and Management",
    institute: "Indian Institute of Technology, Kharagpur",
    score: "8.50 CGPA",
    year: "2026*",
  },
  {
    degree: "Bachelor of Architecture (B. Arch)",
    institute: "Guru Gobind Singh Indraprastha University, Delhi",
    score: "86.5%",
    year: "2024",
  },
  {
    degree: "Higher Secondary School (XII) - CBSE",
    institute: "The Indian Heights School, Dwarka",
    score: "81.6%",
    year: "2019",
  },
];

const achievements = [
  {
    title: "Finalist – Playground-on-Wheels Competition",
    description: "Top 6 of 100+ teams by Vadodara Smart City & WRI India",
    year: "2023",
  },
  {
    title: "GATE 2024 - 97.7 Percentile",
    description: "Architecture and Planning, conducted by IISc Bangalore",
    year: "2024",
  },
  {
    title: "Prime Minister's Scholarship",
    description: "Awarded to the top 2,000 students across India",
    year: "2021 & 2023",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">About</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Academic Journey
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold">Education</h4>
            </div>

            <div className="space-y-6 relative pl-6 border-l border-border">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="timeline-dot" />
                  <div className="glass-card rounded-xl p-5 hover-lift">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                      <span className="text-sm font-semibold text-foreground bg-primary/10 px-3 py-1 rounded-full">
                        {item.score}
                      </span>
                    </div>
                    <h5 className="font-heading font-semibold text-foreground mb-1">
                      {item.degree}
                    </h5>
                    <p className="text-sm text-muted-foreground">{item.institute}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold">Achievements</h4>
            </div>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-5 hover-lift"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                  </div>
                  <h5 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h5>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
