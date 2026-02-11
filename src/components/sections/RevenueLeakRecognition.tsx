import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const leaks = [
  {
    symptom: "Checkout loads but payment intent silently fails",
    cause: "Stripe webhook misconfiguration or client-side error swallowed",
    impact: "User never retries — lost buyers every day",
  },
  {
    symptom: "Pricing page causes hesitation",
    cause: "Unclear value anchoring or missing social proof at decision point",
    impact: "Demo requests drop 20–40%",
  },
  {
    symptom: "Mobile users scroll past CTA",
    cause: "Visual hierarchy conflict — CTA competes with surrounding content",
    impact: "30–50% of mobile traffic never engages",
  },
  {
    symptom: "Users activate trial but never discover core feature",
    cause: "Onboarding sequence skips activation milestone",
    impact: "Churn within 48 hours",
  },
  {
    symptom: "Returning visitors restart onboarding each session",
    cause: "State persistence failure or cookie/session misconfiguration",
    impact: "Repeat visitors treated as new — trust eroded",
  },
  {
    symptom: "Integration docs opened but users never return to app",
    cause: "No re-engagement trigger after documentation exit",
    impact: "Setup abandonment at integration step",
  },
  {
    symptom: "Signup succeeds but first action never happens",
    cause: "Empty state provides no direction — user leaves",
    impact: "Activation rate below 30%",
  },
];

const RevenueLeakRecognition = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">REVENUE LEAK RECOGNITION</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Companies don't lose revenue from traffic.
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-muted-foreground mb-12">
          They lose it from invisible leaks.
        </p>
      </ScrollReveal>

      <div className="grid gap-4">
        {leaks.map((leak, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="grid sm:grid-cols-3 gap-px rounded-xl overflow-hidden border border-border bg-border">
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
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default RevenueLeakRecognition;
