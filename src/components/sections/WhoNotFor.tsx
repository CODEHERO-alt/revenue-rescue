import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const fitFor = [
  "Products with real traffic and real intent",
  "Businesses with visitors or users but unclear drop offs",
  "Teams seeing signups, clicks or carts without enough purchases",
  "Founders who suspect revenue loss but cannot isolate the cause",
  "Any offer where one repair could pay for the audit",
];

const notFor = [
  "Pre launch projects with no traffic",
  "Businesses with no measurable journey yet",
  "Teams unwilling to change product or funnel mechanics",
  "Anyone looking for ads management or generic marketing",
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
