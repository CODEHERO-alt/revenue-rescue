import { ArrowRight, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GoldParticles from "@/components/GoldParticles";

import RecognitionStrip from "@/components/sections/RecognitionStrip";
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
import AnnouncementBar from "@/components/AnnouncementBar";

const WA_LINK = "https://wa.me/REPLACE_WITH_NUMBER?text=Hey%20I%20want%20to%20check%20if%20leaks%20exist%20Can%20we%20do%20the%2015%20minute%20fit%20check";

const Index = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setShowTop(scrollPercent > 0.3);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnnouncementBar />
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
            Most businesses already have demand. People click, sign up, browse or start. But value never becomes obvious fast enough, so revenue leaks through silent drop offs across the journey.
          </motion.p>

          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="btn-gold-fill inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-transform duration-200"
          >
            Check if a leak exists <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted-foreground text-sm mt-4"
          >
            Takes 15 minutes. If we cannot identify at least three revenue impacting issues, you do not proceed.
          </motion.p>

        </div>
      </section>

      {/* 1.5 — Recognition Strip */}
      <RecognitionStrip />

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
          Revenue Infrastructure Audit · Leak Detection and Repair
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
