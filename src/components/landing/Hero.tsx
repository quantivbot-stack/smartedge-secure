import { motion } from "framer-motion";
import { Check, Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const features = [
    "4K Cameras",
    "Fully Wired (PoE) Systems",
    "Licensed Professionals",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional security camera installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 pattern-overlay opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <span className="text-sm font-medium">5-Star Rated on Google</span>
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Stay Aware.{" "}
              <span className="text-brand-cyan">Stay Secure.</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-6">
              Professional Security Camera & Smart Automation Solutions
            </p>

            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
              Complete security systems for homes & businesses — installed by licensed professionals.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2"
                >
                  <Check className="w-5 h-5 text-brand-cyan" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="flex items-center gap-2 text-primary-foreground/70 mb-8">
              <MapPin className="w-5 h-5 text-brand-cyan" />
              <span>Canberra • NSW • Greater Sydney</span>
            </div>

            {/* Promotion & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="bg-brand-orange/20 backdrop-blur-sm border border-brand-orange/30 rounded-xl px-5 py-3">
                <p className="text-brand-orange text-xs font-semibold uppercase tracking-wide mb-1">🔥 Limited Time Offer</p>
                <div className="flex items-center gap-3">
                  <span className="text-primary-foreground/50 text-xl line-through">$2,500</span>
                  <span className="font-heading text-3xl font-bold text-brand-cyan">$1,850</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="xl" asChild>
                  <a href="#packages">View Package</a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="tel:0489209281" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-72 h-72 border-2 border-brand-cyan/30 rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-primary-foreground/20 rounded-full" />
              
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-sm"
              >
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm mb-2">Get a Free Quote in</p>
                  <p className="font-heading text-5xl font-bold text-brand-cyan">30</p>
                  <p className="text-foreground font-semibold">Minutes</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-brand-green" />
                    <span>No pressure. No obligation.</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-brand-green" />
                    <span>Honest advice from experts.</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-brand-green" />
                    <span>Fully licensed & insured.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
