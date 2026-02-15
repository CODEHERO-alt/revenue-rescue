import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const pains = [
  "CPA keeps climbing but traffic quality hasn't changed",
  "Meta reports conversions that don't match Shopify",
  "You're spending more but ROAS keeps dropping",
  "Retargeting audiences feel random and unresponsive",
  "Purchase events fire late, duplicate, or not at all",
  "You've scaled ad spend but revenue didn't follow",
  "Attribution is a mess — you don't trust the numbers",
];

const INITIAL_COUNT = 4;

const RevenueLeakRecognition = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? pains : pains.slice(0, INITIAL_COUNT);
  const hiddenCount = pains.length - INITIAL_COUNT;

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Sound familiar?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            These symptoms point to the same root cause.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {visible.map((pain, i) => (
            <ScrollReveal key={i} delay={i < INITIAL_COUNT ? i * 0.06 : 0}>
              <motion.div
                initial={i >= INITIAL_COUNT ? { opacity: 0, y: 12 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (i - INITIAL_COUNT) * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
              >
                <span className="mono text-primary text-sm font-bold mt-0.5">→</span>
                <span className="text-foreground/90 text-sm">{pain}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {!expanded && hiddenCount > 0 && (
          <ScrollReveal delay={0.2}>
            <button
              onClick={() => setExpanded(true)}
              className="mt-6 mx-auto flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary/50 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Show {hiddenCount} more <ChevronDown className="w-4 h-4" />
            </button>
          </ScrollReveal>
        )}

        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="mt-6 mx-auto flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary/50 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Show less <ChevronUp className="w-4 h-4" />
          </button>
        )}

        <ScrollReveal delay={0.4}>
          <p className="text-foreground font-medium text-sm mt-10 text-center">
            Your traffic isn't the problem. Your tracking infrastructure is.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RevenueLeakRecognition;
