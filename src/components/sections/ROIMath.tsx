import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const ROIMath = () => {
  const [adSpend, setAdSpend] = useState("");
  const parsed = parseFloat(adSpend.replace(/[^0-9.]/g, ""));
  const isValid = !isNaN(parsed) && parsed > 0;
  const savingsLow = isValid ? Math.round(parsed * 0.15) : 0;
  const savingsHigh = isValid ? Math.round(parsed * 0.35) : 0;

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">ROI LOGIC</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            The math is simple.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Broken signals waste ad spend. Fixing them recovers it. Most stores recover the audit cost within the first week.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="p-6 rounded-xl bg-background border border-border">
            <p className="font-bold text-base mb-4">Estimate your wasted spend</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Monthly ad spend: $</span>
                <input
                  type="text"
                  value={adSpend}
                  onChange={(e) => setAdSpend(e.target.value)}
                  placeholder="e.g. 15000"
                  className="mono bg-secondary border border-border rounded-lg px-4 py-2 text-sm text-foreground w-36 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              {isValid && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-muted-foreground text-sm">Likely waste:</span>
                  <span className="mono text-lg font-bold text-primary">
                    ${savingsLow.toLocaleString()} – ${savingsHigh.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-xs">/mo</span>
                </motion.div>
              )}
            </div>
            <p className="text-muted-foreground text-xs mt-3">
              Based on 15–35% typical signal waste across audited Shopify stores.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-muted-foreground text-sm mt-8 text-center">
            Audit fee: $2,500. Typical monthly savings: 5–10× that.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ROIMath;
