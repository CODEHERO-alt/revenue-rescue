import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const match = value.match(/(\d+)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1]);
    const prefix = value.slice(0, value.indexOf(match[1]));
    const suffix = value.slice(value.indexOf(match[1]) + match[1].length);
    const duration = 1200;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl bg-background border border-border"
    >
      <p className="text-3xl font-black text-gradient-gold mb-2">{display}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
