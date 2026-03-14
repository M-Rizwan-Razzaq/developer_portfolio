import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";

const filters = ["All", "React", "TypeScript", "JavaScript", "Tailwind", "Vite", "Redux", "HTML", "CSS", "jQuery"];

const projects = [
  {
    title: "Agroanimal Impex",
    description: "Client business website with clean layouts and responsive sections.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: "/agroanimal impex",
    live: "https://www.agroanimalimpex.com/",
    github: "https://github.com/M-Rizwan-Razzaq/Agroanimal-Impex",
  },
  {
    title: "Softechbar IT Company",
    description: "Company showcase site built with modern UI and smooth navigation.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/softechbar",
    live: "https://softechbar-alpha.vercel.app/",
    github: "https://github.com/M-Rizwan-Razzaq/softechbar-ignite",
  },
  {
    title: "Rizt Tech Solution",
    description: "Product and services showcase with structured sections and clear CTAs.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/Rizt tech solution",
    live: "https://rizttechsoltuion.online/",
    github: "https://github.com/M-Rizwan-Razzaq/rizt-solutions-showcase",
  },
  {
    title: "Investor Landing Page",
    description: "Conversion-focused landing page with modern typography and layout.",
    tech: ["React", "Vite", "JavaScript", "Tailwind"],
    image: "/invester landing page",
    live: "https://m-rizwan-razzaq.github.io/invester_landing_app/",
    github: "https://github.com/M-Rizwan-Razzaq/Invester-Landing-Page",
  },
  {
    title: "Shoe Design Selecting Site",
    description: "Product selection experience with clean UI and responsive design.",
    tech: ["React", "JavaScript", "Tailwind"],
    image: "/shoe making site",
    live: "https://m-rizwan-razzaq.github.io/Shoe-Making-App/",
    github: "https://github.com/M-Rizwan-Razzaq/Invester-Landing-Page",
  },
  {
    title: "Employee Todo App",
    description: "CRUD operations app with Redux state and structured forms.",
    tech: ["React", "Vite", "JavaScript", "Redux", "Tailwind"],
    image: "/crud operations app",
    live: "https://m-rizwan-razzaq.github.io/Todo-Add-Employees/",
    github: "https://github.com/M-Rizwan-Razzaq/Todo-Add-Employees",
  },
  {
    title: "Ali Hasan Portfolio",
    description: "Personal portfolio site with strong branding and clean sections.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/ali portfolio",
    live: "https://alihasanportfolio.vercel.app/",
    github: "https://github.com/M-Rizwan-Razzaq/alihasanportfolio",
  },
  {
    title: "Naveed Portfolio",
    description: "Portfolio website with custom animations and classic UI styling.",
    tech: ["HTML", "JavaScript", "jQuery", "CSS"],
    image: "/naveed portfolio",
    live: "https://naveedportfolio-sooty.vercel.app/",
    github: "https://github.com/M-Rizwan-Razzaq/naveed_porfolio",
  },
  {
    title: "Rizwan Old Portfolio",
    description: "Early personal portfolio site showcasing core frontend skills.",
    tech: ["HTML", "JavaScript", "CSS"],
    image: "/rizwan portfolios",
    live: "https://mrizwandev.vercel.app/",
    github: "https://github.com/M-Rizwan-Razzaq/Portfolio-Website",
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
