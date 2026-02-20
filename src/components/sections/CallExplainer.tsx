import { ArrowRight, Clock, MessageSquare, Search } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WA_LINK = "https://calendly.com/pehchaanmedia/30min";

const steps = [
  { icon: Clock, title: "15 minute fit check", desc: "We confirm you match the criteria and that a measurable journey exists." },
  { icon: MessageSquare, title: "No pitch", desc: "We ask about traffic, intent and your key conversion points." },
  { icon: Search, title: "We confirm leaks exist", desc: "If we cannot see clear leakage signals, you leave with clarity." },
];

const CallExplainer = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          First step is verification, not sales
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          We determine if leaks exist. You determine if you want them fixed.
        </p>
      </ScrollReveal>

      <div className="space-y-4 mb-10">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
              <step.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-base mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-fill inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-transform duration-200"
          >
            Check if leaks exist in your journey <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CallExplainer;
