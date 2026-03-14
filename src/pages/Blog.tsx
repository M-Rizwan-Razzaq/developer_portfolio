import { Calendar, ArrowRight, Tag } from "lucide-react";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Scalable APIs with Node.js in 2026",
    excerpt: "Learn the best practices for designing and building production-ready RESTful APIs that can handle millions of requests.",
    date: "Mar 10, 2026",
    tag: "Backend",
    readTime: "8 min read",
  },
  {
    title: "Modern React Patterns You Should Know",
    excerpt: "Exploring the latest patterns and best practices in React development, from server components to advanced hooks.",
    date: "Mar 5, 2026",
    tag: "Frontend",
    readTime: "6 min read",
  },
  {
    title: "TypeScript Tips for Cleaner Code",
    excerpt: "Advanced TypeScript techniques that will make your codebase more robust and maintainable.",
    date: "Feb 28, 2026",
    tag: "TypeScript",
    readTime: "5 min read",
  },
  {
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to building complex layouts with modern CSS techniques.",
    date: "Feb 20, 2026",
    tag: "CSS",
    readTime: "7 min read",
  },
  {
    title: "Database Optimization Strategies",
    excerpt: "Practical strategies for optimizing database queries and improving application performance.",
    date: "Feb 15, 2026",
    tag: "Database",
    readTime: "10 min read",
  },
  {
    title: "Deploying to the Cloud: A Complete Guide",
    excerpt: "Step-by-step guide to deploying your applications with Docker, CI/CD, and cloud providers.",
    date: "Feb 10, 2026",
    tag: "DevOps",
    readTime: "12 min read",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Blog"
            title="Latest Articles"
            subtitle="Thoughts, tutorials, and insights about web development"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <AnimatedCard key={post.title} delay={i * 0.08} className="group cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary">{post.tag}</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
