import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface CTABlockProps {
  text?: string;
  subtext?: string;
  delay?: number;
}

const CTABlock = ({ 
  text = "Book revenue audit", 
  subtext,
  delay = 0 
}: CTABlockProps) => (
  <ScrollReveal delay={delay}>
    <div className="text-center py-8">
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold-fill inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-transform duration-200"
      >
        {text} <ArrowRight className="w-5 h-5" />
      </a>
      {subtext && (
        <p className="text-muted-foreground text-xs mt-3">{subtext}</p>
      )}
    </div>
  </ScrollReveal>
);

export default CTABlock;
