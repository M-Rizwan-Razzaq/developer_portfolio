import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles, Zap, Star, ExternalLink, ArrowUpRight, Calendar } from "lucide-react";
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
  },
  {
    title: "Softechbar IT Company",
    description: "Company showcase site built with modern UI and smooth navigation.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/softechbar",
  },
  {
    title: "Rizt Tech Solution",
    description: "Product and services showcase with structured sections and clear CTAs.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    image: "/Rizt tech solution",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-2 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                <Sparkles className="inline w-3 h-3 mr-1" />
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
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
           Building fast, scalable, and modern web applications with React, Node.js, Angular, and MongoDB, focused on performance and great user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
            >
              {[
                { value: "9", label: "Projects" },
                { value: "4", label: "Roles" },
                { value: "2", label: "Degrees" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
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
            subtitle="Constantly evolving my toolkit to deliver the best solutions"
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="hero" size="sm">
                      View Details <ArrowUpRight size={14} />
                    </Button>
                  </div>
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
              <AnimatedCard key={post.title} delay={i * 0.1}>
                <span className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary">{post.tag}</span>
                <h3 className="font-display font-semibold mt-3 text-base sm:text-lg">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {post.date}
                </div>
              </AnimatedCard>
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
