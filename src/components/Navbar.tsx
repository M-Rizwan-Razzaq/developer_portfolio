import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import TextColorPicker from "./text-color-picker";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className={`fixed inset-x-2 top-2 z-50 mx-auto max-w-7xl transition-all duration-300 rounded-2xl sm:inset-x-4 sm:top-4 sm:rounded-3xl ${
        scrolled || isOpen ? "glass-nav shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-6 sm:py-3">
        <Link to="/" className="flex min-w-0 max-w-[calc(100%-7.5rem)] items-center gap-2 whitespace-nowrap sm:max-w-none sm:gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-[2px] shadow-lg shadow-primary/10 sm:h-12 sm:w-12">
            <img
              src="/rizu"
              alt="Muhammad Rizwan"
              className="h-full w-full rounded-full object-cover object-[50%_20%]"
              loading="eager"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display font-bold text-sm sm:text-base lg:text-lg gradient-text">Muhammad Rizwan</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-muted-foreground">
              <Sparkles size={12} />
              Full Stack Developer
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1 glass-panel px-2 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 lg:gap-3">
          <TextColorPicker />
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden xl:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg shadow-primary/10 transition-transform hover:scale-[1.02]"
          >
            Let's talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <TextColorPicker />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-surface-hover"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden max-h-[calc(100vh-5.5rem)] overflow-y-auto overflow-x-hidden border-t border-border/30 bg-card/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-1 px-3 py-3 sm:px-4 sm:py-4">
              <div className="mb-3 rounded-2xl border border-border/40 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-3 sm:p-4">
                <p className="text-sm font-semibold">Available for freelance and full-time roles</p>
                <p className="text-xs text-muted-foreground mt-1">React, Node.js, Angular, TypeScript, and polished UI systems.</p>
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block rounded-xl px-3 py-3 text-sm font-medium transition-all sm:px-4 sm:text-base ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
