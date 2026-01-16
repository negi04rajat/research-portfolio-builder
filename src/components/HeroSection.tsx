import { motion } from 'framer-motion';
import { ArrowRight, Mail, GraduationCap, Sparkles, Monitor, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Subtle background dots */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      {/* Gradient orbs - subtle */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge-primary mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Open to Research Opportunities • 2025
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6">
              Decoding{' '}
              <span className="italic gradient-text">Sustainable</span>{' '}
              <span className="italic gradient-text">Mobility.</span>
            </h1>

            {/* Credentials Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="badge-outline">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>M.Tech, IIT Kharagpur</span>
              </div>
              <div className="badge-outline">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span>B.Arch, GGSIPU Delhi</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Bridging <span className="text-foreground font-semibold">transportation analysis</span> with{' '}
              <span className="text-foreground font-semibold">financial modeling</span> to build sustainable,
              electrified urban transport systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 group rounded-full px-6" asChild>
                <a href="#projects">
                  <Sparkles className="w-4 h-4" />
                  Explore Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-6" asChild>
                <a href="mailto:vaibhavnegi.24@kgpian.iitkgp.ac.in">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Profile Card with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Main Profile Card */}
            <div className="relative">
              <div className="card-elevated p-8 w-full max-w-sm">
                {/* Profile Image Placeholder - Replace src with your image */}
                <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center mb-6 overflow-hidden">
                  {/* TODO: Replace this with your profile image: <img src="/your-photo.jpg" alt="Vaibhav Singh Negi" className="w-full h-full object-cover" /> */}
                  <span className="text-6xl font-heading font-bold gradient-text">VN</span>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="stat-number text-foreground">97.7</p>
                    <p className="text-xs text-muted-foreground mt-1">GATE Percentile</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="stat-number text-foreground">8.50</p>
                    <p className="text-xs text-muted-foreground mt-1">CGPA</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Focus (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="floating-badge -top-4 -right-4 lg:-right-12 animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Focus</p>
                    <p className="font-heading font-semibold text-foreground">E-Mobility</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Expertise (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="floating-badge -bottom-4 -left-4 lg:-left-12 animate-float-delayed"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Expertise</p>
                    <p className="font-heading font-semibold text-foreground">Transport Analysis</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
