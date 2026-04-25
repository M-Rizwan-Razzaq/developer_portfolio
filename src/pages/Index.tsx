import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles, Zap, Star, ExternalLink, ArrowUpRight, Calendar, Layers3, Globe2, WandSparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Angular", level: 75 },
  { name: "Node.js / Express.js", level: 85 },
  { name: "NestJS", level: 78 },
  { name: "MongoDB", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Redux / Context API", level: 82 },
];

const featuredProjects = [
  {
    title: "Agroanimal Impex",
    description: "Client business website with clean layouts and responsive sections.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: "/agroanimal impex",
    live: "https://www.agroanimalimpex.com/",
  },
  {
    title: "Softechbar IT Company",
    description: "Company showcase site built with modern UI and smooth navigation.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/softechbar",
    live: "https://softechbar-alpha.vercel.app/",
  },
  {
    title: "Rizt Tech Solution",
    description: "Product and services showcase with structured sections and clear CTAs.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/Rizt tech solution",
    live: "https://rizttechsoltuion.online/",
  },
];

const testimonials = [
  {
    name: "Tayyab Iqbal",
    role: "CEO, Agroanimal Impex",
    text: "Exceptional work! Delivered our platform ahead of schedule with outstanding quality.",
    rating: 5,
  },
  {
    name: "Naveed",
    role: "CTO, Rizt Tech Solution",
    text: "The most talented developer we've worked with. Clean code and brilliant architecture.",
    rating: 5,
  },
];

const blogPosts = [
  {
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn best practices for designing and building production-ready APIs.",
    date: "Mar 10, 2026",
    tag: "Backend",
    href: "https://medium.com/@muhammad.rizwan.razzaq56/building-scalable-apis-with-node-js-in-2026-b74669ce92c0",
  },
  {
    title: "Modern React Patterns in 2026",
    excerpt: "Exploring the latest patterns and best practices in React development.",
    date: "Mar 5, 2026",
    tag: "Frontend",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 top-12 mx-auto h-80 w-[90vw] max-w-6xl rounded-[3rem] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
          <div className="absolute top-1/4 left-1/5 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/5 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-2 sm:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/20 mb-6">
                  <Sparkles className="inline w-3 h-3" />
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              >
                Muhammad Rizwan{" "}
                <span className="gradient-text-hero">Software Engineer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Building fast, scalable, and modern web applications with React, Node.js, Angular, and MongoDB, focused on performance and great user experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Link to="/contact">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto">
                    Hire Me <ArrowRight className="ml-1" size={18} />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                    View Projects <ExternalLink className="ml-1" size={18} />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {[
                  "Responsive UI",
                  "Clean APIs",
                  "Motion-first",
                  "Mobile friendly",
                ].map((item) => (
                  <span key={item} className="px-3 py-2 rounded-full border border-border/70 bg-card/70 text-xs font-medium text-muted-foreground">
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-panel p-5 sm:p-6 md:p-7 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_hsl(var(--secondary)/0.14),_transparent_35%)]" />
              <div className="relative space-y-5">

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Layers3, label: "Projects shipped", value: "9+" },
                    { icon: Globe2, label: "Live websites", value: "8" },
                    { icon: Code2, label: "Core stack", value: "MERN" },
                    { icon: Zap, label: "Focus", value: "Fast" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                      <item.icon className="text-primary" size={18} />
                      <div className="mt-4 text-2xl font-display font-bold">{item.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Skills"
            title="Technologies I Work With"
            subtitle="Constantly evolving my toolkit to deliver polished, high-performance solutions"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Featured Projects */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Portfolio"
            title="Featured Projects"
            subtitle="Some of my recent work that I'm proud of"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedCard key={project.title} delay={i * 0.1} className="p-0 overflow-hidden group">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <a href={project.live} target="_blank" rel="noreferrer" className="block h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button asChild variant="hero" size="sm">
                        <span>
                          Preview <ArrowUpRight size={14} />
                        </span>
                      </Button>
                    </div>
                  </a>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display font-semibold text-base sm:text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Testimonials Preview */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Testimonials"
            title="What Clients Say"
            subtitle="Feedback from people I've worked with"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedCard key={t.name} delay={i * 0.1}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Blog Preview */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading badge="Blog" title="Latest Articles" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {blogPosts.map((post, i) => (
              <a
                key={post.title}
                href={post.href}
                target={post.href ? "_blank" : undefined}
                rel={post.href ? "noreferrer" : undefined}
                className="block"
              >
                <AnimatedCard delay={i * 0.1} className="cursor-pointer">
                  <span className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary">{post.tag}</span>
                  <h3 className="font-display font-semibold mt-3 text-base sm:text-lg">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                </AnimatedCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 rounded-b-full" style={{ background: "var(--gradient-hero)" }} />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-hero">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Have a project in mind? I'd love to help you bring your ideas to life.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Get In Touch <ArrowRight className="ml-1" size={16} />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
