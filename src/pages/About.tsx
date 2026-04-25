import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, MapPin, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";

const experience = [
  {
    year: "June 2025 - Present",
    role: "Full Stack Developer",
    company: "Tech Crusades",
    description: "Working on MEAN and MERN stack applications, building Angular/React frontends with Node.js, Express, and MongoDB.",
  },
  {
    year: "Jul 2024 - Oct 2024",
    role: "MERN Stack Web Developer",
    company: "Codings First",
    description: "Improved MongoDB performance with indexing, refined the frontend with TypeScript + Tailwind, and strengthened auth using JWT & OAuth.",
  },
  {
    year: "Mar 2024 - Jun 2024",
    role: "Web Developer Internship",
    company: "Skill Evokers",
    description: "Built a React + Node.js e-commerce platform and optimized APIs with caching to reduce load times.",
  },
  {
    year: "Jun 2023 - Feb 2024",
    role: "Frontend Developer",
    company: "Freelance, Bahawalpur",
    description: "Delivered responsive UI with React + Tailwind, integrated REST APIs & Redux, and converted Figma designs with high accuracy.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React.js", "Angular", "Tailwind CSS", "Bootstrap", "Responsive UI", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"] },
  { category: "Database", items: ["MongoDB"] },
  { category: "Tools", items: ["TypeScript", "Git", "GitHub", "GitLab", "Azure", "CI/CD"] },
];

const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "The Islamia University of Bahawalpur (IUB)",
    years: "2022 - 2026",
  },
  {
    degree: "Intermediate (Mathematics, Physics, CS)",
    school: "Aspire College, Mian Channu",
    years: "2020 - 2022",
  },
];

const highlights = [
  { label: "Experience", value: "3+ years" },
  { label: "Projects", value: "9+ shipped" },
  { label: "Focus", value: "Fast UI + APIs" },
];

const About = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/8 via-secondary/5 to-transparent" />
        <div className="absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center mb-16"
            >
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  About Me
                </span>
                <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Building clean web experiences with{" "}
                  <span className="gradient-text-hero">thoughtful design</span>
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0 lg:text-lg">
                  I am Muhammad Rizwan, a Full Stack Developer and Software Engineering student.
                  I like turning ideas into responsive products that feel fast, clear, and polished.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {[
                    "React + Angular",
                    "Node + MongoDB",
                    "Responsive UI systems",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-medium text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-lg shadow-primary/10 transition-transform hover:scale-[1.02]"
                  >
                    Let's work together
                    <ArrowRight size={16} />
                  </Link>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    Lahore, Pakistan
                  </div>
                </div>
              </div>

              <AnimatedCard className="relative overflow-hidden p-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_hsl(var(--secondary)/0.12),_transparent_34%)]" />
                <div className="relative p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    {/* <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-background shadow-lg shadow-primary/10">
                      <img
                        src="/rizu"
                        alt="Muhammad Rizwan"
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </div> */}
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Profile</p>
                      <h2 className="mt-1 font-display text-2xl font-bold">Muhammad Rizwan</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Full Stack Developer focused on UX, performance, and maintainable code.
                      </p>
                    </div>
                  </div>

                  {/* <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {highlights.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-border/60 bg-background/75 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                        <p className="mt-2 font-display text-xl font-bold">{item.value}</p>
                      </div>
                    ))}
                  </div> */}

                  <div className="mt-6 rounded-2xl border border-border/60 bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Zap className="h-4 w-4 text-primary" />
                      Currently building
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Modern web apps with React, Node.js, Angular, TypeScript, Tailwind, and MongoDB.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>

            <SectionHeading
              badge="Experience"
              title="My Journey"
              subtitle="A quick look at the roles and projects that shaped how I build today."
            />
            <div className="mb-16 space-y-4 sm:space-y-5">
              {experience.map((exp, i) => (
                <AnimatedCard key={exp.year} delay={i * 0.08} className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
                  <div className="flex flex-col gap-3 pl-3 sm:pl-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {exp.year}
                      </span>
                      <span className="rounded-full border border-border/60 bg-surface-hover px-3 py-1 text-xs font-medium text-muted-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <SectionHeading
              badge="Tech Stack"
              title="Technologies"
              subtitle="Tools and frameworks I use to turn ideas into stable, responsive products."
            />
            <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {techStack.map((cat, i) => (
                <AnimatedCard key={cat.category} delay={i * 0.08} className="h-full">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-primary">{cat.category}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                      {cat.items.length} items
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-border/50 bg-surface-hover px-3 py-2 text-xs font-medium text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <SectionHeading
              badge="Education"
              title="Academic Background"
              subtitle="Formal training that complements my hands-on development work."
            />
            <div className="mb-16 space-y-4 sm:space-y-5">
              {education.map((edu, i) => (
                <AnimatedCard key={edu.degree} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10">
                      <GraduationCap className="text-secondary" size={22} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-base font-semibold">{edu.degree}</h3>
                        <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                          {edu.years}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
