import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const phases = [
  { num: "01", title: "Signal audit", desc: "We map every pixel event and CAPI call across your Shopify store. We identify what's firing, what's missing, and what's wrong." },
  { num: "02", title: "Event prioritisation", desc: "We score each event by revenue impact and flag misconfigurations in your Aggregated Event Measurement setup." },
  { num: "03", title: "Gap report", desc: "Server-side tracking gaps are documented with exact technical details — what's broken, where, and why it matters." },
  { num: "04", title: "Repair plan", desc: "Developer-ready instructions for every fix. Priority-ordered. Effort-estimated. No ambiguity." },
  { num: "05", title: "Verification", desc: "After your team implements, we verify the fixes are firing correctly and Meta is receiving clean signals." },
];

const DeliverablePreview = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">WHAT YOU GET</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          A repair plan, not a report.
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Every signal issue documented. Every fix specified. Every priority ranked.
        </p>
      </ScrollReveal>

      <div className="space-y-4">
        {phases.map((phase, i) => (
          <ScrollReveal key={phase.num} delay={i * 0.08}>
            <motion.div
              className="flex items-start gap-5 p-5 sm:p-6 rounded-xl bg-card border border-border"
            >
              <span className="mono text-2xl font-black text-primary/30 shrink-0">{phase.num}</span>
              <div>
                <h3 className="font-bold text-base mb-1">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverablePreview;
