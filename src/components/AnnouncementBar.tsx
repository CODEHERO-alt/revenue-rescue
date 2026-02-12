import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  "💰 Money Back Guarantee If We Don't Improve Revenue",
  "⚡ Average Payback On Investment: 30 Days",
  "🏆 Helped 200+ Companies Decrease Their CPA While Maintaining Quality Leads",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-primary text-primary-foreground py-2 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto flex items-center justify-center h-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-xs sm:text-sm font-semibold tracking-wide text-center whitespace-nowrap"
          >
            {announcements[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnnouncementBar;
