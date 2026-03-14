import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Heart, Target } from "lucide-react";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";

const experience = [
  { year: "2024 - Present", role: "Senior Full Stack Developer", company: "TechCorp", description: "Leading development of enterprise SaaS products." },
  { year: "2022 - 2024", role: "Full Stack Developer", company: "StartupHub", description: "Built scalable web applications for various startups." },
  { year: "2021 - 2022", role: "Frontend Developer", company: "DigitalAgency", description: "Created responsive and interactive web interfaces." },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Vercel", "GitHub Actions"] },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading badge="About Me" title="Who I Am" subtitle="A passionate developer building the future of the web" />

          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 sm:p-8 mb-12"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl mb-3">Hello, I'm a Full Stack Developer</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    With 5+ years of experience in web development, I specialize in creating modern, scalable, and user-friendly applications. I'm passionate about clean code, thoughtful architecture, and delivering exceptional digital experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <SectionHeading badge="Experience" title="My Journey" />
            <div className="space-y-4 sm:space-y-6 mb-16">
              {experience.map((exp, i) => (
                <AnimatedCard key={exp.year} delay={i * 0.1}>
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap w-fit">
                      {exp.year}
                    </span>
                    <div>
                      <h4 className="font-display font-semibold">{exp.role}</h4>
                      <p className="text-sm text-secondary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Tech Stack */}
            <SectionHeading badge="Tech Stack" title="Technologies" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16">
              {techStack.map((cat, i) => (
                <AnimatedCard key={cat.category} delay={i * 0.1}>
                  <h4 className="font-display font-semibold text-sm text-primary mb-3">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-surface-hover text-foreground border border-border/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Education */}
            <SectionHeading badge="Education" title="Academic Background" />
            <AnimatedCard className="mb-16">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-display font-semibold">BSc in Computer Science</h4>
                  <p className="text-sm text-secondary">University of Technology</p>
                  <p className="text-sm text-muted-foreground mt-1">2017 - 2021</p>
                </div>
              </div>
            </AnimatedCard>

            {/* Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <AnimatedCard>
                <Target className="text-primary mb-3" size={24} />
                <h4 className="font-display font-semibold mb-2">Mission</h4>
                <p className="text-sm text-muted-foreground">To build software that makes a real impact, solving complex problems with elegant, maintainable solutions.</p>
              </AnimatedCard>
              <AnimatedCard delay={0.1}>
                <Heart className="text-accent mb-3" size={24} />
                <h4 className="font-display font-semibold mb-2">Vision</h4>
                <p className="text-sm text-muted-foreground">To push the boundaries of web technology and create digital products that delight users worldwide.</p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
