import { Clock, MessageSquare, Search } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { icon: Clock, title: "15-minute fit check", desc: "We verify your company matches the audit criteria." },
  { icon: MessageSquare, title: "No pitch", desc: "We ask about your stack, your traffic, and your conversion points. That's it." },
  { icon: Search, title: "We verify leaks exist first", desc: "If we can't see signals of revenue leakage, we tell you. No engagement." },
];

const CallExplainer = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">WHAT HAPPENS ON THE CALL</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          The call is qualification, not persuasion.
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          We determine if leaks exist. You determine if you want them fixed.
        </p>
      </ScrollReveal>

      <div className="space-y-4">
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
    </div>
  </section>
);

export default CallExplainer;
