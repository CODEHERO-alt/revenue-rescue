import { useState } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type DiagnosisStep = {
  step: string;
  leak: string;
  impact: string;
};

type MarketExample = {
  label: string;
  steps: DiagnosisStep[];
  combined: string;
  repairTime: string;
};

const markets: MarketExample[] = [
  {
    label: "SaaS",
    steps: [
      { step: "Landing to entry", leak: "CTA below fold on mobile. Most never see it.", impact: "Estimated signup loss 18 percent" },
      { step: "Entry to first value moment", leak: "Empty first screen. No guided win. Users leave fast.", impact: "Activation failure 35 percent" },
      { step: "First value moment to repeated use", leak: "Core feature buried too deep. Users do not discover it.", impact: "Trial value unrealized 25 percent" },
      { step: "Repeated use to upgrade", leak: "Upgrade prompt appears once. No triggers.", impact: "Qualified users never see pricing again 40 percent" },
    ],
    combined: "$14k to $22k per month",
    repairTime: "11 hours",
  },
  {
    label: "AI tool",
    steps: [
      { step: "Landing to first run", leak: "Promise is clear but first run has friction.", impact: "High intent bounces 20 percent" },
      { step: "First run to first win", leak: "Output is not framed as a win fast enough.", impact: "Day one retention below 25 percent" },
      { step: "First win to habit", leak: "No guided next action or templates.", impact: "Week one usage drops 30 percent" },
      { step: "Habit to paid", leak: "Paywall timing misses the value moment.", impact: "Upgrades drop 15 to 35 percent" },
    ],
    combined: "$8k to $18k per month",
    repairTime: "6 to 10 hours",
  },
  {
    label: "Community or course",
    steps: [
      { step: "Content to sales page", leak: "Strong attention but weak intent capture.", impact: "Leads under captured 20 percent" },
      { step: "Sales page to pricing", leak: "Clarity breaks at who it is for and what happens next.", impact: "Scroll to checkout drop 25 percent" },
      { step: "Pricing to checkout", leak: "Risk reversal and guarantee appear too late.", impact: "Checkout initiation drop 15 to 35 percent" },
      { step: "Checkout to purchase", leak: "Payment options, trust cues and FAQs are missing.", impact: "Purchase completion drop 10 to 20 percent" },
    ],
    combined: "$5k to $15k per launch",
    repairTime: "4 to 8 hours",
  },
  {
    label: "Ecommerce",
    steps: [
      { step: "Ad click to product page", leak: "Mismatch between ad promise and first screen.", impact: "Product page bounces 25 percent" },
      { step: "Product page to add to cart", leak: "Value proof and social proof are too far down.", impact: "Add to cart rate under 6 percent" },
      { step: "Cart to checkout", leak: "Shipping, returns and delivery uncertainty appear late.", impact: "Cart abandonment 60 percent" },
      { step: "Checkout to purchase", leak: "Friction in fields, errors and payment flow.", impact: "Checkout drop 10 to 25 percent" },
    ],
    combined: "$10k to $30k per month",
    repairTime: "6 to 12 hours",
  },
];

const ExampleDiagnosis = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = markets[activeTab];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">EXAMPLE DIAGNOSIS</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Journey teardown examples
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Real patterns we identify in the first 20 minutes across four markets.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {markets.map((m, i) => (
              <button
                key={m.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 border border-border text-foreground/70 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {active.steps.map((f, i) => (
            <ScrollReveal key={`${activeTab}-${i}`} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-background p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="mono text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="mono text-sm font-medium text-foreground">{f.step}</span>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{f.leak}</p>
                </div>
                <p className="mono text-sm font-bold text-primary">{f.impact}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 p-5 rounded-xl border border-primary/20 bg-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="font-bold text-sm">Combined estimated revenue impact</span>
            </div>
            <p className="mono text-2xl font-black text-primary">{active.combined}</p>
            <p className="text-muted-foreground text-sm mt-1">Total repair time: {active.repairTime} of developer work.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExampleDiagnosis;
