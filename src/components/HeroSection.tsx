import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge-accent mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Research Opportunities • 2025
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Decoding{' '}
              <span className="gradient-text">Sustainable</span>{' '}
              <span className="gradient-text">Mobility.</span>
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm">M.Tech, IIT Kharagpur</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Noida, India</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Bridging <span className="text-foreground font-medium">transportation analysis</span> with{' '}
              <span className="text-foreground font-medium">financial modeling</span> to build sustainable,
              electrified urban transport systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 group">
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Profile Image Placeholder with Stats */}
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 glow-effect">
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-6">
                  <span className="text-6xl font-heading font-bold gradient-text">VN</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="stat-number gradient-text">97.7</p>
                    <p className="text-sm text-muted-foreground mt-1">GATE Percentile</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="stat-number gradient-text">8.50</p>
                    <p className="text-sm text-muted-foreground mt-1">CGPA</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Focus */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 glass-card rounded-xl p-4 hover-lift"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Focus</p>
                <p className="font-heading font-semibold text-foreground">E-Mobility</p>
              </motion.div>

              {/* Floating Badge - Expertise */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 hover-lift"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Expertise</p>
                <p className="font-heading font-semibold text-foreground">Transport Analysis</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
