import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vaibhavnegi.24@kgpian.iitkgp.ac.in",
    href: "mailto:vaibhavnegi.24@kgpian.iitkgp.ac.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8287725581",
    href: "tel:+918287725581",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, UP, India",
    href: null,
  },
];

const extracurriculars = [
  { name: "Badminton", detail: "Gold & Bronze medal winner" },
  { name: "Table Tennis", detail: null },
  { name: "Cycling", detail: null },
  { name: "Swimming", detail: null },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Contact</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Let's Connect
          </h3>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to research collaborations, internships, and opportunities in sustainable transport and e-mobility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="card-elevated rounded-xl p-4 flex items-center gap-4 hover-lift block"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          {item.label}
                        </p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="card-elevated rounded-xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          {item.label}
                        </p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Positions of Responsibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-elevated rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-semibold">Positions of Responsibility</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">Students' Research Club Executive Head</p>
                  <p className="text-sm text-muted-foreground">IIT Kharagpur • Led 40-member team, 15+ R&D projects</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Placement Coordinator</p>
                  <p className="text-sm text-muted-foreground">Industry–Alumni Connect with 40+ alumni</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Extra-curricular & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-elevated rounded-2xl p-6 md:p-8 border-2 border-primary/20">
              <h4 className="font-heading font-semibold text-xl mb-2">9-5 Office</h4>
              <h4 className="font-heading font-semibold text-xl mb-6 gradient-text">5-9 Passion</h4>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {extracurriculars.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-3 rounded-xl bg-secondary text-center"
                  >
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    {item.detail && (
                      <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  Let's discuss how we can collaborate on sustainable transport research.
                </p>
                <Button size="lg" className="w-full gap-2 rounded-full" asChild>
                  <a href="mailto:vaibhavnegi.24@kgpian.iitkgp.ac.in">
                    <Send className="w-4 h-4" />
                    Send Message
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
