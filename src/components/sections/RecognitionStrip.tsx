import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    label: "SaaS",
    sentence: "Users sign up but never reach the first value moment.",
    cue: "Activation stalls and upgrades slow down.",
  },
  {
    label: "AI tools",
    sentence: "People try once then abandon because the first run feels unclear.",
    cue: "Retention collapses after day one.",
  },
  {
    label: "Communities and courses",
    sentence: "Visitors watch the pitch but hesitate at the decision point and leave.",
    cue: "Enrollments underperform despite traffic.",
  },
  {
    label: "Ecommerce",
    sentence: "Ad traffic lands with intent but product pages fail to convert.",
    cue: "Add to cart happens but purchases drop.",
  },
];

const RecognitionStrip = () => (
  <section className="py-16 px-6 bg-card">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">RECOGNITION</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
          Where this typically happens
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="p-5 rounded-xl bg-background border border-border h-full flex flex-col">
              <span className="mono text-xs font-bold text-primary mb-3 tracking-wider">{card.label}</span>
              <p className="text-sm text-foreground/90 leading-relaxed mb-3 flex-1">{card.sentence}</p>
              <p className="mono text-xs text-muted-foreground">{card.cue}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <p className="text-muted-foreground text-sm mt-8 text-center">
          If one of these sounds familiar, the leak is measurable.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default RecognitionStrip;
