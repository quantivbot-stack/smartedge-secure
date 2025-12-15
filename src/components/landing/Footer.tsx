import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-primary-foreground">
                <span className="font-heading font-bold text-xl">SMART</span>
                <span className="font-heading font-bold text-xl text-brand-cyan">EDGE</span>
                <p className="text-xs tracking-widest -mt-1 text-primary-foreground/70">
                  AUTOMATION
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Professional security camera & smart automation solutions for homes and
              businesses in Canberra, NSW & Greater Sydney.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-brand-cyan hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-primary-foreground/70">
              <p>
                <span className="text-brand-cyan">Phone:</span>{" "}
                <a href="tel:+61489209281" className="hover:text-primary-foreground transition-colors">
                  +61 489 209 281
                </a>
              </p>
              <p>
                <span className="text-brand-cyan">Email:</span>{" "}
                <a
                  href="mailto:info@smartedgeautomation.com.au"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@smartedgeautomation.com.au
                </a>
              </p>
              <p>
                <span className="text-brand-cyan">Address:</span> Yarralumla, ACT 2600
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 SmartEdge Automation. All rights reserved.
            </p>
            <a
              href="#"
              className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
