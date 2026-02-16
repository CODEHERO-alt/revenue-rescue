import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const tiers = [
  { revenue: "$20k/mo", leakLow: "$3k", leakHigh: "$9k" },
  { revenue: "$50k/mo", leakLow: "$8k", leakHigh: "$22k" },
  { revenue: "$100k/mo", leakLow: "$15k", leakHigh: "$45k" },
];

const ROIMath = () => {
  const [customRevenue, setCustomRevenue] = useState("");

  const parsed = parseFloat(customRevenue.replace(/[^0-9.]/g, ""));
  const isValid = !isNaN(parsed) && parsed > 0;
  const leakLow = isValid ? Math.round(parsed * 0.15) : 0;
  const leakHigh = isValid ? Math.round(parsed * 0.45) : 0;

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Why companies do this
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.revenue} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <p className="text-muted-foreground text-sm mb-2">Monthly revenue</p>
                <p className="text-2xl font-black text-foreground mb-4">{tier.revenue}</p>
                <p className="text-muted-foreground text-sm mb-1">Typical leak range</p>
                <p className="text-xl font-bold text-primary">{tier.leakLow}, {tier.leakHigh}</p>
                <p className="text-muted-foreground text-xs mt-1">per month</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.35}>
          <div className="p-6 rounded-xl bg-background border border-border">
            <p className="font-bold text-base mb-4">Estimate your leak range</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Monthly revenue: $</span>
                <input
                  type="text"
                  value={customRevenue}
                  onChange={(e) => setCustomRevenue(e.target.value)}
                  placeholder="e.g. 35000"
                  className="mono bg-secondary border border-border rounded-lg px-4 py-2 text-sm text-foreground w-36 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              {isValid && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-muted-foreground text-sm">Estimated leak:</span>
                  <span className="mono text-lg font-bold text-primary">
                    ${leakLow.toLocaleString()}, ${leakHigh.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-xs">/mo</span>
                </motion.div>
              )}
            </div>
            <p className="text-muted-foreground text-xs mt-3">Based on typical 15 to 45 percent revenue leakage across audited journeys where demand exists but conversion mechanics are unclear.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p className="text-muted-foreground text-sm mt-8 text-center">
            Recovering one issue usually covers the audit.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ROIMath;
