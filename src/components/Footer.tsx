import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <Link to="/" className="font-display font-bold text-2xl gradient-text">
              {"<Dev />"}
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md text-sm leading-relaxed">
              Full Stack Developer specializing in building exceptional digital experiences.
              Turning complex problems into elegant solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Pages</h4>
            <div className="flex flex-col gap-2">
              {["About", "Projects", "Services", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {["Web Development", "Frontend Dev", "Backend Dev", "UI/UX Design", "Optimization"].map((item) => (
                <span key={item} className="text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Dev Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
