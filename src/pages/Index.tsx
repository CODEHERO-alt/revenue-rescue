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
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      {/* 1 — Hero Realisation */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <GoldParticles />
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-24 min-h-[85vh] flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          >
            Your Product Is
            <br />
            <span className="text-gradient-gold">Quietly Leaking Revenue.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Most companies already have demand. They lose conversions in hidden points across onboarding, pricing, and activation.
          </motion.p>

          <motion.a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-200"
          >
            Check if leaks exist <ArrowRight className="w-5 h-5" />
          </motion.a>

        </div>
      </section>

      {/* 2 — Recognition */}
      <RevenueLeakRecognition />

      {/* 3 — What We Do */}
      <AuditMechanism />

      {/* 4 — What You Receive */}
      <DeliverablePreview />

      {/* 5 — ROI Logic */}
      <ROIMath />

      {/* 6 — Fit Filter */}
      <WhoNotFor />

      {/* 7 — Guarantee */}
      <Guarantee />

      {/* 8 — What Happens On Call + CTA */}
      <CallExplainer />

      {/* 9 — Example Diagnosis */}
      <ExampleDiagnosis />

      {/* Comparison + FAQ */}
      <ComparisonTable />
      <FAQ />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          Revenue Infrastructure Audit · Leak Detection &amp; Repair
        </div>
      </footer>
    </div>
  );
};

export default Index;
