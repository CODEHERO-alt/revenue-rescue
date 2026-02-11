import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why not just use analytics tools like GA4 or Mixpanel?",
    a: "Analytics tools show you what happened. They don't tell you what should have happened. We isolate the gap between user intent and user action — then quantify the revenue sitting in that gap.",
  },
  {
    q: "What if you don't find anything significant?",
    a: "If we cannot identify at least 3 revenue-impacting issues, you don't pay. We have never triggered this guarantee on a company doing $10k+/month.",
  },
  {
    q: "Do you implement the fixes or just report them?",
    a: "You receive a developer-ready repair plan with exact instructions, effort estimates, and priority order. Your team implements. We verify after.",
  },
  {
    q: "How is this different from a CRO agency?",
    a: "CRO agencies run A/B tests on surface-level elements. We detect structural leaks in your revenue infrastructure — broken flows, silent failures, missing activation steps. Different problem, different method.",
  },
  {
    q: "What do you need access to?",
    a: "Read-only access to your product (a test account), your analytics, and your conversion data. No code access required for the audit phase.",
  },
];

const FAQ = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">QUESTIONS</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Common objections. Direct answers.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-background">
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
