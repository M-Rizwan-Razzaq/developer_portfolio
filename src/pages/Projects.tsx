import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";

const filters = ["All", "React", "Node.js", "Next.js", "TypeScript", "MongoDB"];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with real-time inventory, Stripe payments, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    live: "#", github: "#",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics with data visualization, team management, and reporting.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    live: "#", github: "#",
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging, sharing, and AI recommendations.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    live: "#", github: "#",
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management with Kanban boards and time tracking.",
    tech: ["React", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    live: "#", github: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation platform with templates and analytics.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    live: "#", github: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with virtual tours and mortgage calculator.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    live: "#", github: "#",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.tech.includes(activeFilter));

  return (
    <Layout>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading badge="Portfolio" title="My Projects" subtitle="A collection of work I'm proud of" />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-hover border border-border/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filtered.map((project, i) => (
                <AnimatedCard key={project.title} delay={i * 0.05} className="p-0 overflow-hidden group">
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a href={project.live}>
                        <Button variant="hero" size="sm">
                          Live Demo <ExternalLink size={14} />
                        </Button>
                      </a>
                      <a href={project.github}>
                        <Button variant="hero-outline" size="sm">
                          <Github size={14} />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display font-semibold text-base sm:text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">{t}</span>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
