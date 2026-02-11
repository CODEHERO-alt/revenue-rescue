import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GoldParticles from "@/components/GoldParticles";
import RevenueLeakRecognition from "@/components/sections/RevenueLeakRecognition";
import AuditMechanism from "@/components/sections/AuditMechanism";
import DeliverablePreview from "@/components/sections/DeliverablePreview";
import ROIMath from "@/components/sections/ROIMath";
import WhoNotFor from "@/components/sections/WhoNotFor";
import Guarantee from "@/components/sections/Guarantee";
import CallExplainer from "@/components/sections/CallExplainer";
import ExampleDiagnosis from "@/components/sections/ExampleDiagnosis";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <GoldParticles />
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-32 min-h-screen flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-glow bg-secondary"
          >
            <span className="mono text-sm text-primary font-medium tracking-wider">REVENUE INFRASTRUCTURE AUDIT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          >
            Your Product Is
            <br />
            <span className="text-gradient-gold">Leaking Revenue.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Silent checkout failures. Broken activation flows. Users who intend to pay but never do.
            <br className="hidden sm:block" />
            We detect, quantify, and prioritize every leak — so your team repairs what matters first.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground text-sm mb-0"
          >
            Scroll to see how it works ↓
          </motion.p>
        </div>
      </section>

      {/* Section 1: Revenue Leak Recognition */}
      <RevenueLeakRecognition />

      {/* Section 2: How the Audit Works */}
      <AuditMechanism />

      {/* First CTA — after proof sections */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-200"
            >
              Check if revenue leaks exist <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-muted-foreground text-sm mt-4">15-minute fit check. No pitch. No commitment.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Deliverable Preview */}
      <DeliverablePreview />

      {/* Section 4: ROI Math */}
      <ROIMath />

      {/* Section 8: Example Diagnosis */}
      <ExampleDiagnosis />

      {/* Comparison Table (optional — included) */}
      <ComparisonTable />

      {/* Section 5: Who This Is NOT For */}
      <WhoNotFor />

      {/* Section 6: Guarantee */}
      <Guarantee />

      {/* Section 7: What Happens On The Call */}
      <CallExplainer />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Revenue leaks compound every month.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              One diagnostic call. We verify leaks exist before any engagement.
            </p>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg glow-gold hover:scale-105 transition-transform duration-200"
            >
              Check if revenue leaks exist <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          Revenue Infrastructure Audit · Leak Detection & Repair for Companies Doing $10k+/month
        </div>
      </footer>
    </div>
  );
};

export default Index;
