import { Link } from "react-router-dom";
import { Linkedin, Mail, Github, Twitter, Facebook, Instagram, ArrowUp } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadrizwan-861201285/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/M-Rizwan-Razzaq", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/i_am_rizwan435/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/rizwan.razzaq.7771", icon: Facebook },
  { label: "X", href: "https://x.com/RizwanRazzaq56", icon: Twitter },
  { label: "Email", href: "mailto:muhammad.rizwan.razzaq56@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <Link to="/" className="font-display font-bold text-2xl gradient-text">
              Muhammad Rizwan
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md text-sm leading-relaxed">
              MERN stack developer and Software Engineering student focused on building clean, responsive web experiences.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <item.icon size={18} />
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
            © 2026 Muhammad Rizwan. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            className="text-xs text-muted-foreground inline-flex items-center gap-2 hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
