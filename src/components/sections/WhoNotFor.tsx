import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const fitFor = [
  "Shopify stores spending $5k+/month on Meta ads",
  "DTC brands with traffic but declining ROAS",
  "Founders managing their own Meta campaigns",
  "Stores that scaled spend but CPA won't come down",
  "Teams that suspect tracking is broken but can't diagnose it",
];

const notFor = [
  "Pre-launch stores with no ad history",
  "Stores not running Meta ads",
  "Businesses spending under $3k/month on ads",
  "Dropshipping stores with no retention focus",
];

const WhoNotFor = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">This is for you if</h2>
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
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">This is not for you if</h2>
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
