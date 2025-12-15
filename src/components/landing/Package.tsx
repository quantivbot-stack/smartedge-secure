import { motion } from "framer-motion";
import { Check, Shield, Clock, Wrench, HardDrive, Camera, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const Package = () => {
  const packageFeatures = [
    { icon: Camera, text: "4x 6K Cameras + NVR" },
    { icon: HardDrive, text: "2TB Hard Drive" },
    { icon: Wifi, text: "Fully wired PoE setup" },
    { icon: Wrench, text: "Clean, professional installation" },
    { icon: Shield, text: "2-Year Parts Warranty" },
    { icon: Clock, text: "1-Year Labour Warranty" },
  ];

  const specializedSolutions = [
    {
      title: "Motion-Tracking Cameras",
      description: "Automatically follow movement for maximum coverage.",
      icon: "🎯",
    },
    {
      title: "180° Wide-Angle Cameras",
      description: "Cover larger areas with fewer cameras.",
      icon: "🌐",
    },
    {
      title: "Construction Site Monitoring",
      description: "Protect assets, prevent theft, and monitor progress remotely.",
      icon: "🚧",
    },
    {
      title: "Reliable Wired Setup",
      description: "No Wi-Fi dropouts. No battery failures. Just performance.",
      icon: "🔌",
    },
  ];

  return (
    <section id="packages" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-brand-cyan/10 text-brand-cyan font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Our Core Solution
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Security Camera &{" "}
            <span className="text-brand-cyan">Surveillance Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We install premium 6K security cameras with hard-wired reliability—no signal
            dropouts, no shortcuts.
          </p>
        </motion.div>

        {/* Main Package Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
            {/* Header */}
            <div className="bg-hero-gradient px-8 py-10 text-center relative overflow-hidden">
              {/* Limited Offer Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-4 right-4 md:top-6 md:right-6"
              >
                <span className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse shadow-lg">
                  🔥 LIMITED OFFER
                </span>
              </motion.div>

              <span className="inline-block bg-primary-foreground/20 text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full mb-4">
                STARTER PACKAGE
              </span>
              
              <div className="flex flex-col items-center justify-center gap-2">
                {/* Original Price - Strikethrough */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary-foreground/60 text-lg">Was</span>
                  <span className="relative text-primary-foreground/50 text-2xl md:text-3xl font-semibold">
                    $2,400
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute left-0 right-0 top-1/2 h-0.5 bg-brand-orange origin-left"
                    />
                  </span>
                </motion.div>

                {/* New Price */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-primary-foreground/80 text-lg">Now from</span>
                  <span className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground drop-shadow-lg">
                    $1,850
                  </span>
                </motion.div>

                {/* Savings Badge */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="inline-block bg-brand-green text-white text-sm font-bold px-4 py-1.5 rounded-full mt-2"
                >
                  SAVE $550!
                </motion.span>
              </div>
            </div>

            {/* Features */}
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {packageFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-brand-green/10 rounded-xl p-4 mb-8 flex items-center gap-3">
                <Check className="w-6 h-6 text-brand-green flex-shrink-0" />
                <p className="text-foreground">
                  <span className="font-semibold">Fully licensed & insured technicians</span>
                  {" "}— Designed for long-term reliability and crystal-clear footage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" asChild>
                  <a href="#contact">Get a Free Quote</a>
                </Button>
                <Button variant="ctaOutline" size="xl" asChild>
                  <a href="tel:0489209281">Book Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specialized Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Specialised Camera Solutions
          </h3>
          <p className="text-muted-foreground">
            We don't believe in one-size-fits-all security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializedSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center"
            >
              <span className="text-4xl mb-4 block">{solution.icon}</span>
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                {solution.title}
              </h4>
              <p className="text-muted-foreground text-sm">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
