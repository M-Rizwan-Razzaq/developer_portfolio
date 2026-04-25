import { ReactNode, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background mesh-bg">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <a
        href="https://wa.me/923066592403"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 transition-transform"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
};

export default Layout;
