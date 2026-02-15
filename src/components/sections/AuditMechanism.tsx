import ScrollReveal from "@/components/ScrollReveal";

const breakdowns = [
  {
    label: "Pixel misfires",
    desc: "Events fire on wrong pages, fire duplicates, or don't fire at all. Meta's algorithm receives noise instead of signal.",
  },
  {
    label: "CAPI gaps",
    desc: "Server-side events aren't configured or are sending incomplete data. Meta can't match conversions back to ad clicks.",
  },
  {
    label: "Event priority errors",
    desc: "Purchase events compete with low-value events like PageView. Meta optimises for the wrong action.",
  },
  {
    label: "Deduplication failures",
    desc: "Both pixel and CAPI send the same event. Meta double-counts conversions, inflating reported ROAS while real performance drops.",
  },
];

const AuditMechanism = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">WHY IT HAPPENS</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Your tracking is sending bad data to Meta.
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Meta's ad algorithm is only as good as the signals it receives. Most Shopify stores have at least two of these issues.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {breakdowns.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="p-6 rounded-xl bg-background border border-border h-full">
              <h3 className="font-bold text-base mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AuditMechanism;
