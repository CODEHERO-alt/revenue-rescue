import { Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Guarantee = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="p-8 sm:p-10 rounded-xl border border-border bg-background">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <p className="mono text-primary text-sm font-medium tracking-wider">GUARANTEE</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            If we find fewer than 3 signal issues, you don't pay.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            We've never failed to find significant tracking failures in a Shopify store spending $5k+/month on Meta.
            If your signals are already clean, we tell you — and you owe nothing.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Guarantee;
