import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Behavioral Map Reconstruction", desc: "Trace every user path. Identify where intent exists." },
  { num: "02", title: "Intent Drop-off Detection", desc: "Isolate exact moments users disengage." },
  { num: "03", title: "Friction Classification", desc: "Categorize each leak by type and severity." },
  { num: "04", title: "Revenue Impact Modeling", desc: "Quantify dollar value of each identified leak." },
  { num: "05", title: "Fix Prioritization", desc: "Rank repairs by effort-to-impact ratio." },
  { num: "06", title: "Implementation Blueprint", desc: "Deliver developer-ready repair instructions." },
];

const AuditMechanism = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">THE MECHANISM</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          A repeatable system. Not consulting.
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 0.08}>
            <div className="relative p-6 rounded-xl bg-background border border-border h-full">
              <span className="mono text-3xl font-black text-primary/20 absolute top-4 right-5">{step.num}</span>
              <h3 className="font-bold text-base mb-2 pr-10">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Pipeline connector visual */}
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
