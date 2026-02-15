import { AlertTriangle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const findings = [
  {
    step: "Pixel → Purchase event",
    leak: "Purchase pixel fires on the order status page but also on the thank-you redirect. Every order counted twice.",
    impact: "Reported ROAS inflated by ~40%",
  },
  {
    step: "CAPI → Event match",
    leak: "Server events sending without email or phone hashing. Meta match rate at 18% instead of 60%+.",
    impact: "Algorithm can't attribute purchases back to ads",
  },
  {
    step: "AEM → Priority",
    leak: "ViewContent ranked above Purchase in Aggregated Event Measurement. Meta optimised for browsers, not buyers.",
    impact: "CPA increased ~35% over 6 weeks",
  },
  {
    step: "Pixel → Add to Cart",
    leak: "AddToCart event fires on product page load, not on button click. Every visitor counted as intent.",
    impact: "Retargeting pool polluted with non-buyers",
  },
];

const ExampleDiagnosis = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">SCENARIO OUTCOME</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          What a typical audit uncovers.
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Shopify store. $80k/month ad spend. Four signal failures found in the first audit pass.
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
            <span className="font-bold text-sm">After repair</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Clean signals restored. Meta match rate from 18% to 67%. CPA dropped 28% within two weeks of fixes going live. 
            <span className="mono text-xs text-muted-foreground/60 ml-2">(Scenario outcome based on typical audit results)</span>
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ExampleDiagnosis;
