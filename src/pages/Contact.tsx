import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Contact"
            title="Get In Touch"
            subtitle="Have a project in mind? Let's discuss it."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
              <AnimatedCard>
                <Mail className="text-primary mb-3" size={24} />
                <h4 className="font-display font-semibold">Email</h4>
                <p className="text-sm text-muted-foreground mt-1 break-all">hello@developer.com</p>
              </AnimatedCard>
              <AnimatedCard delay={0.1}>
                <MapPin className="text-secondary mb-3" size={24} />
                <h4 className="font-display font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground mt-1">San Francisco, CA</p>
              </AnimatedCard>
              <AnimatedCard delay={0.2}>
                <Phone className="text-accent mb-3" size={24} />
                <h4 className="font-display font-semibold">Phone</h4>
                <p className="text-sm text-muted-foreground mt-1">+1 (555) 123-4567</p>
              </AnimatedCard>

              <div className="flex gap-3 sm:col-span-3 lg:col-span-1 justify-center lg:justify-start">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project inquiry"
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <Button variant="accent" size="lg" type="submit" className="w-full">
                  Send Message <Send className="ml-1" size={16} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
