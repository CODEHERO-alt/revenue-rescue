import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why not just use GA4, Mixpanel or Hotjar?",
    a: "Tools show what happened. We tell you why it happened and what to change. We connect behavior to revenue impact and give implementable fixes.",
  },
  {
    q: "What if you do not find anything significant?",
    a: "Then you do not proceed. If we cannot identify at least three revenue impacting issues, we stop and you owe nothing.",
  },
  {
    q: "Do you implement fixes or only report them?",
    a: "We deliver a repair plan that your team can implement. If you want implementation support, you can request it after the audit, but the audit stands alone.",
  },
  {
    q: "What access do you need?",
    a: "Minimum is analytics access and a walkthrough of the journey. In some cases we request read only access to key tools after the fit check.",
  },
  {
    q: "Who is the fit check for?",
    a: "Teams with real traffic and real intent, where one repair could pay for the audit.",
  },
];

const FAQ = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">QUESTIONS</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Common objections, Direct answers.
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
