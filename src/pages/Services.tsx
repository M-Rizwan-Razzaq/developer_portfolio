import { Globe, Layout as LayoutIcon, Server, Palette, Zap, Code2, ArrowRight } from "lucide-react";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    description: "End-to-end web application development from database design to frontend implementation.",
    benefits: ["Scalable Architecture", "Clean Code", "Fast Delivery"],
  },
  {
    icon: LayoutIcon,
    title: "Frontend Development",
    description: "Modern, responsive interfaces built with React, Next.js, and cutting-edge UI frameworks.",
    benefits: ["Pixel Perfect", "Responsive Design", "Smooth Animations"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust APIs and server-side solutions with Node.js, databases, and cloud services.",
    benefits: ["REST & GraphQL", "Authentication", "Cloud Deployment"],
  },
  {
    icon: Palette,
    title: "UI/UX Development",
    description: "Converting designs into functional, accessible, and delightful user experiences.",
    benefits: ["Accessibility", "Design Systems", "User Testing"],
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Performance auditing and optimization for lightning-fast load times and SEO.",
    benefits: ["Core Web Vitals", "SEO", "Image Optimization"],
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Tailored software solutions built to solve your specific business challenges.",
    benefits: ["Custom Solutions", "Integration", "Maintenance"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Services"
            title="What I Offer"
            subtitle="Professional services tailored to your needs"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <AnimatedCard key={service.title} delay={i * 0.08} className="group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((b) => (
                    <span key={b} className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary">{b}</span>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Get Started <ArrowRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
