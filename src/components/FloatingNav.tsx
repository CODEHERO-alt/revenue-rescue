import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingNav = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.25);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-border bg-card/80 backdrop-blur-md shadow-lg max-w-[calc(100vw-2rem)]"
        >
          <span className="font-bold text-xs sm:text-sm tracking-tight text-foreground hidden sm:inline">
            Signal Audit
          </span>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-fill inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-transform whitespace-nowrap"
          >
            Book revenue audit <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="ml-1 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
