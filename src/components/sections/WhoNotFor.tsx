import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const exclusions = [
  "Pre-product startups without a live product",
  "Companies with no active users yet",
  "Content blogs or media sites",
  "Stores under $10k/month in revenue",
];

const WhoNotFor = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">WHO THIS IS NOT FOR</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          We turn away most inquiries.
        </h2>
      </ScrollReveal>

      <div className="space-y-3">
        {exclusions.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <X className="w-5 h-5 text-destructive shrink-0" />
              <span className="text-foreground/90 text-sm">{item}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <p className="text-muted-foreground text-sm mt-6">
          This signals seriousness. The audit is built for companies already generating revenue that suspect they are losing more than they realize.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhoNotFor;
