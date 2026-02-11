import ScrollReveal from "@/components/ScrollReveal";

const leaks = [
  {
    symptom: "Users sign up but never reach first value moment",
    cause: "Empty state after signup provides no direction",
    impact: "Activation rate drops below 30%",
  },
  {
    symptom: "Pricing page creates hesitation before decision",
    cause: "Unclear value anchoring at the decision point",
    impact: "Demo requests drop 20–40%",
  },
  {
    symptom: "Mobile users never see the primary action",
    cause: "CTA sits below fold or competes with surrounding content",
    impact: "30–50% of mobile traffic never engages",
  },
  {
    symptom: "Returning users restart onboarding each session",
    cause: "Session or state persistence failure",
    impact: "Repeat visitors treated as new — trust lost",
  },
  {
    symptom: "Trial users activate but do not adopt core feature",
    cause: "Onboarding skips the activation milestone",
    impact: "Churn within 48 hours",
  },
  {
    symptom: "Checkout silently fails and users leave",
    cause: "Payment intent error swallowed on client side",
    impact: "Lost buyers every day — undetected",
  },
  {
    symptom: "Users open docs and never come back to product",
    cause: "No re-engagement trigger after documentation exit",
    impact: "Setup abandonment at integration step",
  },
];

const RevenueLeakRecognition = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          Where revenue actually disappears
        </h2>
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

      <ScrollReveal delay={0.5}>
        <p className="text-muted-foreground text-sm mt-8 text-center">
          If even one looks familiar, you likely have measurable loss.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default RevenueLeakRecognition;
