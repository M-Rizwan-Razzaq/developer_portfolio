import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";

const filters = ["All", "Angular", "React", "Next.js", "TypeScript", "JavaScript", "NestJS", "MongoDB", "PostgreSQL", "Tailwind"];

const projects = [
  {
    title: "StaffOS Workforce & Payroll",
    description: "Workforce management platform for employee administration, payroll cycles, payslips, and organization-specific workflows.",
    tech: ["Angular", "TypeScript", "NestJS", "PostgreSQL"],
    image: "/projects%20images/staffos.jpeg",
  },
  {
    title: "Spotium Sales Intelligence",
    description: "Multi-tenant B2B platform for company discovery, data enrichment, and AI-assisted sales research.",
    tech: ["Angular", "NestJS", "MongoDB", "Redis", "Apollo GraphQL"],
    image: "/spotium.png",
  },
  {
    title: "RizMart E-commerce",
    description: "Full-stack retail experience with product catalogues, category browsing, media management, and REST APIs.",
    tech: ["Next.js", "NestJS", "TypeScript", "MongoDB"],
    image: "/rizmart.jpeg",
  },
  {
    title: "DevKitly Developer Tools",
    description: "A collection of 60+ browser-based utilities for JSON, encoding, QR codes, PDFs, images, and data conversion.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/devkitly.jpeg",
  },
  {
    title: "OutilSimple Productivity Tools",
    description: "French-language productivity platform with 15 online utilities, structured routes, and France-focused SEO.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/outilsimple.jpeg",
  },
  {
    title: "The Insight Desk Payroll CMS",
    description: "Custom payroll management system with API-connected workflows, MongoDB records, and verified data migration.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    image: "/theinsightdesk.jpeg",
  },
  {
    title: "Spotium Mobile App",
    description: "Cross-platform companion for company and contact discovery, connecting users to enriched business insights on the go.",
    tech: ["Angular", "Ionic", "Capacitor", "NestJS"],
    image: "/spotium-mobile.png",
  },
  {
    title: "Task & Reminder App",
    description: "Cross-platform task and reminder app with mobile workflows, account login, notifications, and in-app task management.",
    tech: ["React", "Ionic", "Capacitor", "TypeScript"],
    image: "/projects%20images/weekit.jpeg",
  },
  {
    title: "AI Resume Analyzer",
    description: "Final-year project for submitting resumes and supporting automated evaluation and feedback through a full-stack workflow.",
    tech: ["React", "NestJS", "Node.js", "MongoDB"],
    image: "/placeholder.svg",
  },
  {
    title: "NaqTech IT Solution",
    description: "Responsive IT company showcase website with structured content, navigation, and reusable interface components.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/projects%20images/naqtech.jpeg",
  },
  {
    title: "Agroanimal Impex",
    description: "Responsive business website presenting an international trading organization's services and information.",
    tech: ["React", "JavaScript", "Tailwind"],
    image: "/agroanimal impex",
    live: "https://www.agroanimalimpex.com/",
    github: "https://github.com/M-Rizwan-Razzaq/Agroanimal-Impex",
  },
  {
    title: "Developer Portfolio",
    description: "Responsive portfolio for professional experience, technical skills, projects, and software development work.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    image: "/rizwan portfolios",
    live: "https://rizwanrazzaq.vercel.app/",
    github: "https://github.com/M-Rizwan-Razzaq",
  },
  {
    title: "Rizt Tech Solution",
    description: "Company website showcasing products, services, and business offerings with responsive layouts and clear calls to action.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/Rizt tech solution",
    live: "https://rizttechsoltuion.online/",
    github: "https://github.com/M-Rizwan-Razzaq/rizt-solutions-showcase",
  },
  {
    title: "Investor Landing Page",
    description: "Conversion-focused landing page with responsive layouts and clear product communication.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/invester landing page",
    live: "https://m-rizwan-razzaq.github.io/invester_landing_app/",
    github: "https://github.com/M-Rizwan-Razzaq/Invester-Landing-Page",
  },
];

const projectDetails: Record<string, string> = {
  "StaffOS Workforce & Payroll": "Contributed to employee administration, payroll cycles, payroll items, payslips, reporting, and organization-specific workflows. The resume describes frontend modules, backend API integrations, and multi-tenant data management.",
  "Spotium Sales Intelligence": "A multi-tenant B2B platform for finding target markets, companies, and decision-makers. Work described in the resume includes AI-assisted research, business data enrichment, tenant-level access control, and Redis caching.",
  "RizMart E-commerce": "An online store focused on bags, backpacks, laptop bags, school bags, travel bags, and everyday accessories. The resume describes responsive product catalogues, category browsing, REST APIs, MongoDB data management, and Cloudinary media uploads.",
  "DevKitly Developer Tools": "A collection of more than 60 online utilities, including JSON processing, encoding and decoding, QR generation, PDF manipulation, image processing, and data conversion. Supported utilities process data in the browser.",
  "OutilSimple Productivity Tools": "A French-language productivity platform with 20 structured routes and 15 online utilities. The resume highlights reusable components, responsive navigation, and France-focused SEO.",
  "The Insight Desk Payroll CMS": "A custom payroll CMS for a global expert network and market research organization. Work included payroll workflows, REST API integration, MongoDB records, data migration, validation, and deployment support.",
  "Spotium Mobile App": "A cross-platform mobile app for B2B company and contact discovery. It connects users to enriched company information and AI-powered sales insights, with authentication and role-based permissions.",
  "Task & Reminder App": "Contributed to a cross-platform task and reminder app. The resume describes Ionic and Capacitor mobile features, Apple account login, push notifications, Featurebase integration, and iOS-specific behavior.",
  "AI Resume Analyzer": "A final-year project for resume submission and analysis. The resume describes a React frontend, NestJS and Node.js APIs, MongoDB storage, and workflows for automated resume evaluation and feedback.",
  "NaqTech IT Solution": "A professional IT company showcase website with structured content sections, responsive navigation, and reusable UI components. Built with React, Vite, TypeScript, and Tailwind CSS.",
  "Agroanimal Impex": "A responsive business website for an international trading and business organization, designed to present its information through clear, reusable, and accessible sections.",
  "Developer Portfolio": "A responsive personal portfolio showcasing professional experience, technical expertise, projects, and contact information. Built with reusable UI components and deployed using Vercel.",
  "Rizt Tech Solution": "A company website showcasing its products, services, and business offerings through responsive layouts, structured sections, reusable components, and clear calls to action.",
  "Investor Landing Page": "A conversion-focused landing page with modern typography, structured product information, responsive layouts, and clear navigation.",
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
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
                <AnimatedCard key={project.title} delay={i * 0.05} className="relative overflow-hidden p-0 group">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Read details about ${project.title}`}
                    aria-haspopup="dialog"
                    className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  >
                    <div className="h-44 overflow-hidden sm:h-48">
                      <img
                        src={project.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-display text-base font-semibold sm:text-lg">{project.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                        {project.tech.map((t) => (
                          <span key={t} className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary">{t}</span>
                        ))}
                      </div>
                      <span className="mt-4 inline-block text-xs font-medium text-primary">View project details</span>
                    </div>
                  </button>
                  {(project.live || project.github) && (
                    <div className="pointer-events-none absolute left-0 right-0 top-0 flex h-44 items-center justify-center gap-3 bg-background/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-48">
                      {project.live && (
                        <Button asChild variant="hero" size="sm" className="pointer-events-auto">
                          <a href={project.live} target="_blank" rel="noreferrer">
                            Live Demo <ExternalLink size={14} />
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild variant="hero-outline" size="sm" className="pointer-events-auto">
                          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                            <Github size={14} />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </AnimatedCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader className="pr-8 text-left">
              <DialogTitle className="font-display text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>Project overview and technologies</DialogDescription>
            </DialogHeader>
            <img
              src={selectedProject.image}
              alt={`${selectedProject.title} preview`}
              className="max-h-72 w-full rounded-xl border border-border/60 bg-muted object-cover"
            />
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">Overview</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {projectDetails[selectedProject.title] ?? selectedProject.description}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Technologies</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.tech.map((technology) => (
                    <span key={technology} className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {(selectedProject.live || selectedProject.github) && (
              <DialogFooter className="gap-2 sm:justify-start">
                {selectedProject.live && (
                  <Button asChild variant="hero" size="sm">
                    <a href={selectedProject.live} target="_blank" rel="noreferrer">
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </Button>
                )}
                {selectedProject.github && (
                  <Button asChild variant="hero-outline" size="sm">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer">
                      GitHub <Github size={14} />
                    </a>
                  </Button>
                )}
              </DialogFooter>
            )}
          </DialogContent>
        )}
      </Dialog>
    </Layout>
  );
};

export default Projects;
