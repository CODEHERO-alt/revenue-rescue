import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const leaks = [
  {
    symptom: "People enter but never reach the first value moment",
    cause: "The first screen after entry gives no direction and no guided next step",
    impact: "First value moment rate falls below 30 percent",
  },
  {
    symptom: "The decision page creates hesitation right before purchase",
    cause: "Value anchoring is unclear at the exact decision point",
    impact: "High intent visits drop 20 to 40 percent",
  },
  {
    symptom: "Mobile visitors never reach the primary action",
    cause: "The main action sits below the fold or competes with surrounding content",
    impact: "30 to 50 percent of mobile traffic never engages",
  },
  {
    symptom: "Returning visitors restart the journey each session",
    cause: "Session or state persistence failure",
    impact: "Repeat visitors treated as new, trust lost",
  },
  {
    symptom: "People try once and do not return",
    cause: "The first output is slow, confusing or not framed as a win",
    impact: "Day one retention drops below 25 percent",
  },
  {
    symptom: "Visitors consume the sales page but do not enroll",
    cause: "Offer clarity breaks at pricing and guarantee",
    impact: "Checkout initiation drops 15 to 35 percent",
  },
  {
    symptom: "Add to cart happens but purchases fail",
    cause: "Shipping, returns or trust cues appear too late",
    impact: "Cart to purchase falls below 40 percent",
  },
  {
    symptom: "High intent visitors bounce without taking any step",
    cause: "Tracking or routing errors break attribution and follow up",
    impact: "You lose both revenue and visibility",
  },
];

const INITIAL_COUNT = 3;

const RevenueLeakRecognition = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleLeaks = expanded ? leaks : leaks.slice(0, INITIAL_COUNT);
  const hiddenCount = leaks.length - INITIAL_COUNT;

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Where revenue actually disappears
          </h2>
        </ScrollReveal>

        <div className="grid gap-4">
          {visibleLeaks.map((leak, i) => (
            <ScrollReveal key={i} delay={i < INITIAL_COUNT ? i * 0.06 : 0}>
              <motion.div
                initial={i >= INITIAL_COUNT ? { opacity: 0, y: 12 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (i - INITIAL_COUNT) * 0.05 }}
                className="grid sm:grid-cols-3 gap-px rounded-xl overflow-hidden border border-border bg-border"
              >
                <div className="bg-card p-4 sm:p-5">
                  <p className="mono text-xs text-muted-foreground mb-1.5 tracking-wider">SYMPTOM</p>
                  <p className="text-sm text-foreground/90 leading-relaxed">{leak.symptom}</p>
                </div>
                <div className="bg-card p-4 sm:p-5">
                  <p className="mono text-xs text-muted-foreground mb-1.5 tracking-wider">CAUSE</p>
                  <p className="text-sm text-foreground/90 leading-relaxed">{leak.cause}</p>
                </div>
                <div className="bg-card p-4 sm:p-5">
                  <p className="mono text-xs text-muted-foreground mb-1.5 tracking-wider">REVENUE IMPACT</p>
                  <p className="text-sm text-primary font-medium leading-relaxed">{leak.impact}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {!expanded && (
          <ScrollReveal delay={0.2}>
            <button
              onClick={() => setExpanded(true)}
              className="mt-6 mx-auto flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary/50 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Show {hiddenCount} more leaks <ChevronDown className="w-4 h-4" />
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

        <ScrollReveal delay={0.5}>
          <p className="text-muted-foreground text-sm mt-8 text-center">
            If even one looks familiar, you likely have measurable loss.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RevenueLeakRecognition;
