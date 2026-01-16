import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: "Electric Bus & Fleet Adoption in Kolkata: A Literature Review on Modelling Approaches for Sustainable Transport",
    authors: "Vaibhav, S.N., Paul, N., Majumdar, D., Goswami, A.K.",
    venue: "12th International Conference on Sustainability, IIM Shillong",
    year: "2025",
    type: "Conference",
    isbn: "ISBN: 978-93-344-2253-5",
  },
];

export const PublicationsSection = () => {
  return (
    <section className="section-padding relative bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Publications</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Research Output
          </h3>
          <p className="text-muted-foreground mt-4">
            Verified entries from academic conferences and journals.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated p-6 md:p-8 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge-primary text-xs">{pub.year}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      {pub.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-2 leading-tight">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {pub.venue}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {pub.isbn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
