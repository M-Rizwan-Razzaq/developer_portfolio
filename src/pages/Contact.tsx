import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const CONTACT_RECEIVER_EMAIL = "muhammad.rizwan.razzaq56@gmail.com";
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_RECEIVER_EMAIL}`;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadrizwan-861201285/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/M-Rizwan-Razzaq", icon: Github },
    { label: "Instagram", href: "https://www.instagram.com/i_am_rizwan435/", icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/rizwan.razzaq.7771", icon: Facebook },
    { label: "X", href: "https://x.com/RizwanRazzaq56", icon: Twitter },
    { label: "Email", href: "mailto:muhammad.rizwan.razzaq56@gmail.com", icon: Mail },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const senderEmail = String(formData.get("email") || "").trim();

    formData.set("_subject", "New Contact Form Submission");
    formData.set("_captcha", "false");
    formData.set("_template", "table");
    if (senderEmail) {
      formData.set("_replyto", senderEmail);
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result || result.success !== "true") {
        throw new Error("Form submit failed");
      }

      setIsSubmitted(true);
      form.reset();
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Message deliver nahi hui. Please dobara try karein ya direct email karein.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <p className="text-sm text-muted-foreground mt-1 break-all">muhammad.rizwan.razzaq56@gmail.com</p>
              </AnimatedCard>
              <AnimatedCard delay={0.1}>
                <MapPin className="text-secondary mb-3" size={24} />
                <h4 className="font-display font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground mt-1">Lahore, Pakistan</p>
              </AnimatedCard>
              <AnimatedCard delay={0.2}>
                <Phone className="text-accent mb-3" size={24} />
                <h4 className="font-display font-semibold">Phone</h4>
                <p className="text-sm text-muted-foreground mt-1">+92 306 6592403</p>
              </AnimatedCard>

              <div className="flex flex-wrap gap-3 sm:col-span-3 lg:col-span-1 justify-center lg:justify-start">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.label}
                    className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <item.icon size={18} />
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
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+92 300 1234567"
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <Button variant="accent" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-1" size={16} /></>}
                </Button>
                {isSubmitted && (
                  <p className="text-sm text-center text-muted-foreground">Your message has been sent successfully.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
