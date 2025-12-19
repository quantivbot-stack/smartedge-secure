import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwKvYD6PWkQRfgZteEycvIjTTvAuqbJEyoP65_wv1hJrw6KRYzjaFMJxM6VGP_rh926/exec";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    state: "",
  });

  const states = [
    "ACT",
    "NSW",
    "VIC",
    "QLD",
    "SA",
    "WA",
    "TAS",
    "NT",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone || !formData.state) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 30 minutes.",
      });

      setFormData({ full_name: "", email: "", phone: "", state: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl border border-border"
    >
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">
        Get Your Free Quote
      </h3>

      <div className="space-y-4">
        <div>
          <Label htmlFor="full_name" className="text-foreground">Full Name</Label>
          <Input
            id="full_name"
            type="text"
            placeholder="John Smith"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="mt-1.5"
            maxLength={100}
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1.5"
            maxLength={255}
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="0400 000 000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1.5"
            maxLength={20}
          />
        </div>

        <div>
          <Label htmlFor="state" className="text-foreground">Which state are you in?</Label>
          <Select
            value={formData.state}
            onValueChange={(value) => setFormData({ ...formData, state: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full mt-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Get Free Quote
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default QuoteForm;
