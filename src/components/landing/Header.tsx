import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#packages", label: "Packages" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              <span className="font-heading font-bold text-xl">SMART</span>
              <span className="font-heading font-bold text-xl text-brand-cyan">EDGE</span>
              <p className={cn(
                "text-xs tracking-widest -mt-1",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              )}>
                AUTOMATION
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors duration-300 hover:text-brand-cyan",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0489209281"
              className={cn(
                "flex items-center gap-2 font-semibold transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              0489 209 281
            </a>
            <Button variant={isScrolled ? "cta" : "hero"} size="lg" asChild>
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-brand-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:0489209281"
                  className="flex items-center gap-2 text-foreground font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  0489 209 281
                </a>
                <Button variant="cta" size="lg" asChild>
                  <a href="#contact">Get Free Quote</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
