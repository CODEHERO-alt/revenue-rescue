import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why does this only take 2–3 days?",
    a: "We've built a repeatable audit framework specifically for Shopify × Meta tracking. We know exactly where signals break and how to document repairs. No discovery phase, no meetings.",
  },
  {
    q: "Why $2,500?",
    a: "Most stores waste $2,500+ per month on misattributed ad spend. The audit pays for itself in recovered efficiency within weeks. We price it as a diagnostic, not a retainer.",
  },
  {
    q: "Do you fix the tracking or just report it?",
    a: "You receive developer-ready repair instructions with exact steps, priority order, and effort estimates. Your team implements. We verify after.",
  },
  {
    q: "What if we don't have much traffic?",
    a: "If you're spending under $3k/month on Meta ads, the signal issues are harder to isolate statistically. We recommend waiting until you have more data before auditing.",
  },
  {
    q: "What access do you need?",
    a: "Read-only access to your Meta Events Manager, Shopify admin, and Google Tag Manager (if used). No code access required for the audit.",
  },
  {
    q: "What if our tracking is actually fine?",
    a: "Then you leave with confirmation and zero cost. Our guarantee covers this — fewer than 3 issues means you don't pay.",
  },
  {
    q: "How is this different from what our ad agency does?",
    a: "Ad agencies optimise campaigns — creative, targeting, budgets. We fix the signal infrastructure that campaigns depend on. They're complementary, not competing.",
  },
];

const FAQ = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">QUESTIONS</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Common questions. Direct answers.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card">
              <AccordionTrigger className="text-left text-sm font-medium py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQ;
