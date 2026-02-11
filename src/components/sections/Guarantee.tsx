import { Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Guarantee = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="p-8 sm:p-10 rounded-xl border-2 border-primary/30 bg-background">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-7 h-7 text-primary" />
            <p className="mono text-primary text-sm font-medium tracking-wider">GUARANTEE</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            If we cannot identify at least 3 revenue-impacting issues, you don't pay.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We have never failed to find significant leaks in a company doing $10k+/month. 
            But if your infrastructure is already clean, we will tell you — and you owe nothing.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Guarantee;
