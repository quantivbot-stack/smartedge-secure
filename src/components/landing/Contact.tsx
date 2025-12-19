import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteForm from "./QuoteForm";

const Contact = () => {
  const serviceAreas = ["Canberra", "NSW", "Greater Sydney"];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary-foreground/20 text-primary-foreground font-semibold px-4 py-2 rounded-full text-sm mb-4">
              Get Started Today
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Get a Free Quote in{" "}
              <span className="text-brand-cyan">30 Minutes</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              No pressure. No obligation. Just honest advice. Have questions about
              creating the perfect Security Camera & Smart Automation system? We're
              here to guide you every step of the way.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8">
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                <span className="text-primary-foreground font-medium">Quick Response</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-primary-foreground/10 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-primary-foreground font-medium">
                  {serviceAreas.join(" • ")}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:0489209281" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: 0489 209 281
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="mailto:info@smartedgeautomation.com.au">
                  Send an Email
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
