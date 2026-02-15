import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GoldParticles from "@/components/GoldParticles";

import RevenueLeakRecognition from "@/components/sections/RevenueLeakRecognition";
import AuditMechanism from "@/components/sections/AuditMechanism";
import DeliverablePreview from "@/components/sections/DeliverablePreview";
import ROIMath from "@/components/sections/ROIMath";
import WhoNotFor from "@/components/sections/WhoNotFor";
import Guarantee from "@/components/sections/Guarantee";
import ExampleDiagnosis from "@/components/sections/ExampleDiagnosis";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";
import PricingAnchor from "@/components/sections/PricingAnchor";
import CTABlock from "@/components/sections/CTABlock";
import FloatingNav from "@/components/FloatingNav";
import AnnouncementBar from "@/components/AnnouncementBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnnouncementBar />
      <FloatingNav />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <GoldParticles />
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 min-h-[85vh] flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          >
            Fix Your Meta Signals.
            <br />
            <span className="text-gradient-gold">Lower CPA in 3 Days.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We audit your Shopify store's tracking infrastructure — pixel fires, CAPI events, and signal quality — so Meta's algorithm stops wasting your ad spend.
          </motion.p>

          <motion.a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="btn-gold-fill inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-transform duration-200"
          >
            Book revenue audit <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Credibility strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-xs mono tracking-wide"
          >
            <span>200+ stores audited</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>$2,500 flat fee</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>2–3 day delivery</span>
          </motion.div>
        </div>
      </section>

      {/* 2 — Problem agitation */}
      <RevenueLeakRecognition />

      <CTABlock text="See what's broken" subtext="Free 15-minute signal check" />

      {/* 3 — Education: what's actually broken */}
      <AuditMechanism />

      {/* 4 — Solution: what the audit covers */}
      <DeliverablePreview />

      {/* 5 — Proof */}
      <ExampleDiagnosis />

      <CTABlock text="Book revenue audit" subtext="Results in 2–3 business days" />

      {/* 6 — ROI logic */}
      <ROIMath />

      {/* 7 — Comparison */}
      <ComparisonTable />

      {/* 8 — Pricing anchor */}
      <PricingAnchor />

      {/* 9 — Who it's for */}
      <WhoNotFor />

      {/* 10 — Guarantee */}
      <Guarantee />

      {/* 11 — Objection handling */}
      <FAQ />

      {/* 12 — Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Your Meta signals are either working or they're not.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We'll tell you which — in 15 minutes.
          </p>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-fill inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-transform duration-200"
          >
            Book revenue audit <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          Revenue Infrastructure Audit · Signal Repair for Shopify × Meta
        </div>
      </footer>
    </div>
  );
};

export default Index;
