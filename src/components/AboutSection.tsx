import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, BookOpen, Code, Lightbulb, Rocket } from 'lucide-react';

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

const protocol = [
  { label: 'Read', icon: BookOpen },
  { label: 'Learn', icon: Lightbulb },
  { label: 'Code', icon: Code },
  { label: 'Deploy', icon: Rocket },
];

const stats = [
  { value: '1', label: 'Publication' },
  { value: '3+', label: 'Internships' },
  { value: '5+', label: 'Projects' },
  { value: '2', label: 'Awards' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">About</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            About Me
          </h3>
        </motion.div>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a transportation researcher pursuing my <span className="text-foreground font-semibold">M.Tech at IIT Kharagpur</span> with 
            a background in Architecture. My focus lies in sustainable mobility, e-bus fleet electrification, 
            and financial modelling for urban transport systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My core philosophy lies in bridging technical analysis with practical implementation. By combining{' '}
            <a href="#skills" className="text-primary hover:underline font-medium">GIS-based analysis</a> and{' '}
            <a href="#skills" className="text-primary hover:underline font-medium">Financial Modelling</a>, 
            I design transport systems that are efficient, sustainable, and economically viable.
          </p>
        </motion.div>

        {/* My Protocol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4">My 4-Stage Protocol</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {protocol.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="protocol-badge bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="stat-number gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
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
              <h4 className="text-xl font-heading font-semibold">Academic Journey</h4>
            </div>

            <div className="space-y-4 relative pl-6 border-l-2 border-border">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="card-elevated p-5 hover-lift ml-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-semibold">{item.year}</span>
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
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-xl font-heading font-semibold">Awards & Achievements</h4>
            </div>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated p-5 hover-lift"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-semibold">{item.year}</span>
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
