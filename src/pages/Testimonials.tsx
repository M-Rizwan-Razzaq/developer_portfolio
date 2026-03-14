import { Star } from "lucide-react";
import { SectionHeading, AnimatedCard } from "@/components/ui/animated-elements";
import Layout from "@/components/Layout";

const testimonials = [
  {
    name: "Tayyab Iqbal",
    role: "CEO",
    company: "Agroanimal Impex",
    text: "Exceptional work! The platform was delivered ahead of schedule and exceeded our expectations. The attention to detail and clean code quality was outstanding.",
    rating: 5,
  },
  {
    name: "Naveed",
    role: "CTO",
    company: "Rizt Tech Solution",
    text: "The most talented developer we've worked with. Brilliant architecture decisions and seamless collaboration throughout the project.",
    rating: 5,
  },
  {
    name: "M Naqi",
    role: "Product Manager",
    company: "Softechbar",
    text: "Transformed our outdated platform into a modern, scalable application. Our user engagement increased by 150% after the redesign.",
    rating: 5,
  },
  // {
  //   name: "Sikander",
  //   role: "Founder",
  //   company: "StartupLab",
  //   text: "A true professional who understands both the technical and business sides. Delivered a product that our users love.",
  //   rating: 5,
  // },
  // {
  //   name: "Lisa Wang",
  //   role: "Marketing Director",
  //   company: "GrowthCo",
  //   text: "The website redesign completely transformed our online presence. We saw a 200% increase in leads within the first month.",
  //   rating: 5,
  // },
  // {
  //   name: "James Miller",
  //   role: "VP Engineering",
  //   company: "InnovateTech",
  //   text: "Highly skilled and incredibly reliable. The codebase is clean, well-documented, and easy for our team to maintain.",
  //   rating: 4,
  // },
];

const Testimonials = () => {
  return (
    <Layout>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Testimonials"
            title="Client Feedback"
            subtitle="What people say about working with me"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedCard key={t.name} delay={i * 0.08}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className={j < t.rating ? "fill-accent text-accent" : "text-border"}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"{t.text}"</p>
                <div className="pt-4 border-t border-border/30">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
