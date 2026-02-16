import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Map the full journey" },
  { num: "02", title: "Detect intent drop offs" },
  { num: "03", title: "Classify friction type" },
  { num: "04", title: "Quantify revenue impact" },
  { num: "05", title: "Prioritise highest leverage fixes" },
  { num: "06", title: "Deliver implementation plan" },
];

const AuditMechanism = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          We reconstruct the journey and isolate drop offs
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 0.08}>
            <div className="relative p-6 rounded-xl bg-background border border-border h-full flex items-center gap-4">
              <span className="mono text-2xl font-black text-primary/30">{step.num}</span>
              <h3 className="font-bold text-sm">{step.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-10 flex items-center justify-center gap-2 overflow-x-auto py-4">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-2 shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
              >
                <span className="mono text-xs font-bold text-primary">{step.num}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="w-8 h-px bg-primary/30 origin-left"
                />
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AuditMechanism;
