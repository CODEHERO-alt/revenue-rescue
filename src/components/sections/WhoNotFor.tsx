import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const fitFor = [
  "Growing SaaS with active users",
  "Products already acquiring traffic",
  "DTC brands running Meta ads",
  "Entrepreneurs managing their own Meta campaigns",
  "Teams that suspect they lose more than they realise",
];

const notFor = [
  "Pre-launch startups",
  "No users yet",
  "Content sites",
  "Hobby projects or side hustles",
];

const WhoNotFor = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">Who this is for</h2>
      </ScrollReveal>

      <div className="space-y-3 mb-12">
        {fitFor.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground/90 text-sm">{item}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">Who this is not for</h2>
      </ScrollReveal>

      <div className="space-y-3">
        {notFor.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <X className="w-5 h-5 text-destructive shrink-0" />
              <span className="text-foreground/90 text-sm">{item}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoNotFor;
