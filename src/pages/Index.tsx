import { ArrowRight, AlertTriangle, CheckCircle, DollarSign, Target, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GoldParticles from "@/components/GoldParticles";
import BeforeAfter from "@/components/BeforeAfter";

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
            <span className="mono text-sm text-primary font-medium tracking-wider">REVENUE INFRASTRUCTURE SPECIALIST</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          >
            Your Meta Ads Are
            <br />
            <span className="text-gradient-gold">Leaking Revenue.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Broken purchase signals. Double-counted events. Poor optimization data.
            <br className="hidden sm:block" />
            I fix the tracking infrastructure so your ads optimize for <span className="text-foreground font-semibold">real buyers</span> again.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            href="#offer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg glow-gold hover:scale-105 transition-transform duration-200"
          >
            Fix My Tracking <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">THE PROBLEM</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
              Rising CPAs aren't a media buying problem.
              <br />
              <span className="text-muted-foreground">They're a data problem.</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Meta can't see your real purchases",
              "Events are duplicated or missing entirely",
              "Server-side tracking has gaps",
              "Event prioritization is misconfigured",
              "Optimization targets the wrong signals",
              "You're paying more for worse results",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.08}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <BeforeAfter />

      {/* Solution */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">THE FIX</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Revenue Infrastructure Repair.
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              I audit, fix, and validate your entire tracking stack so Meta receives clean, accurate purchase data — and starts optimizing for real buyers again.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Full Audit", desc: "Every pixel, event, and server-side signal inspected." },
              { icon: Zap, title: "Precision Fix", desc: "Clean implementation. No duplicates, no gaps, no guesswork." },
              { icon: Shield, title: "Validation", desc: "Verified purchase matching between Shopify & Meta." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.12}>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">THE OFFER</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              One fixed price. Full repair.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative p-8 sm:p-12 rounded-2xl bg-card border border-glow glow-gold">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <DollarSign className="w-8 h-8 text-primary" />
                <span className="text-6xl sm:text-7xl font-black text-gradient-gold">2,500</span>
              </div>
              <p className="text-muted-foreground mb-8">Fixed price · Delivered in 2–3 days</p>

              <div className="text-left max-w-md mx-auto space-y-3 mb-10">
                {[
                  "Complete tracking audit",
                  "Meta pixel & CAPI fix",
                  "Event deduplication",
                  "Priority event configuration",
                  "Shopify ↔ Meta purchase validation",
                  "Post-fix verification report",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform duration-200"
              >
                Book a Free Diagnostic <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-muted-foreground text-sm mt-4">No pitch. Just a quick check on your tracking setup.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">THE MATH</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Even a 10% efficiency gain covers the cost.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              If you're spending $5K+/month on Meta, a small tracking fix can recover thousands in wasted ad spend — every single month.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            <AnimatedCounter value="10–20%" label="Typical efficiency recovery" />
            <AnimatedCounter value="2–3 days" label="Full delivery timeline" />
            <AnimatedCounter value="30 days" label="Average payback period" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Stop guessing. Fix the data.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              One quick diagnostic call. No commitment. I'll tell you exactly what's broken.
            </p>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg glow-gold hover:scale-105 transition-transform duration-200"
            >
              Get Your Free Diagnostic <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          Revenue Infrastructure Specialist · Tracking Audit & Repair for DTC Brands
        </div>
      </footer>
    </div>
  );
};

export default Index;
