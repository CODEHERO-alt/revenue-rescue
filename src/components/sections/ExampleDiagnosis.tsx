import { AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const findings = [
  {
    step: "Landing → Signup",
    leak: "CTA hidden below fold on mobile. 62% of mobile users never see it.",
    impact: "~18% of potential signups lost",
  },
  {
    step: "Signup → Activation",
    leak: "Empty dashboard after signup. No guided first action. Users leave within 90 seconds.",
    impact: "~35% activation failure",
  },
  {
    step: "Activation → Trial Usage",
    leak: "Core feature buried 3 clicks deep. Trial users never discover it.",
    impact: "~25% of trial value unrealized",
  },
  {
    step: "Trial → Conversion",
    leak: "Upgrade prompt appears once and never resurfaces. No usage-based triggers.",
    impact: "~40% of qualified users never see pricing again",
  },
];

const ExampleDiagnosis = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">EXAMPLE DIAGNOSIS</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          A real teardown. Anonymized.
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          SaaS product. $40k/month revenue. Four leaks identified in the first 20 minutes.
        </p>
      </ScrollReveal>

      <div className="space-y-4">
        {findings.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-background p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="mono text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="mono text-sm font-medium text-foreground">{f.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90">{f.leak}</p>
                  </div>
                  <p className="mono text-sm font-bold text-primary">{f.impact}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-8 p-5 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="font-bold text-sm">Combined estimated revenue impact</span>
          </div>
          <p className="mono text-2xl font-black text-primary">$14k – $22k/month</p>
          <p className="text-muted-foreground text-sm mt-1">Total repair time: 11 hours of developer work.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ExampleDiagnosis;
