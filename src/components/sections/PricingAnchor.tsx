import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const included = [
  "Full Meta pixel + CAPI audit",
  "Event mapping with priority scoring",
  "Server-side tracking gap report",
  "Developer-ready repair instructions",
  "Post-fix verification call",
];

const PricingAnchor = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">INVESTMENT</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
          One fee. Complete diagnosis. No retainers.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
            <div>
              <p className="mono text-4xl sm:text-5xl font-black text-foreground">$2,500</p>
              <p className="text-muted-foreground text-sm mt-1">One-time. Delivered in 2–3 days.</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground/90 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-fill inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-transform duration-200 w-full justify-center"
          >
            Book revenue audit <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-muted-foreground text-xs text-center mt-4">
            If we find fewer than 3 revenue-impacting issues, you don't pay.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingAnchor;
