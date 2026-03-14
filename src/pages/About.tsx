import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Heart, Target } from "lucide-react";
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

const About = () => {
  return (
    <Layout>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading badge="About Me" title="Who I Am" subtitle=" Full Stack Developer  and Software Engineering Student" />

          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 sm:p-8 mb-12"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg sm:text-xl mb-3">Hello, I'm Muhammad Rizwan</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Software Engineering student at IUB with MERN & Mean stack expertise. I build responsive web experiences, integrate modern APIs, and enjoy solving real-world problems through clean, scalable code.
                  </p>
                </div>
                {/* <img
                  src="/rizu"
                  alt="Muhammad Rizwan"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-border/50 shadow-sm"
                  loading="lazy"
                /> */}
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
            <div className="space-y-4 sm:space-y-6 mb-16">
              {education.map((edu, i) => (
                <AnimatedCard key={edu.degree} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-secondary flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-display font-semibold">{edu.degree}</h4>
                      <p className="text-sm text-secondary">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.years}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

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
