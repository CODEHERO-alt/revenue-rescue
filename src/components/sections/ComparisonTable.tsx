import { Check, X, Minus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  { feature: "Time to first insight", audit: "48 hours", cro: "2–4 weeks", hire: "1–3 months" },
  { feature: "Developer-ready instructions", audit: true, cro: false, hire: true },
  { feature: "Revenue impact quantified", audit: true, cro: "sometimes", hire: false },
  { feature: "Cost", audit: "$2,500 one-time", cro: "$3k–$10k/mo", hire: "$8k–$15k/mo" },
  { feature: "Ongoing commitment", audit: "None", cro: "3–6 month contract", hire: "Full-time" },
  { feature: "Covers full user journey", audit: true, cro: "partial", hire: "depends" },
];

const CellValue = ({ val }: { val: string | boolean }) => {
  if (val === true) return <Check className="w-4 h-4 text-primary" />;
  if (val === false) return <X className="w-4 h-4 text-destructive" />;
  return <span className="text-sm">{val}</span>;
};

const ComparisonTable = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">COMPARISON</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Why not just hire a CRO agency?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Different tools for different problems.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="text-left px-5 py-3 text-muted-foreground font-medium"></th>
                  <th className="text-left px-5 py-3 font-bold text-primary">Revenue Audit</th>
                  <th className="text-left px-5 py-3 text-muted-foreground font-medium">CRO Agency</th>
                  <th className="text-left px-5 py-3 text-muted-foreground font-medium">Internal Hire</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="px-5 py-3 text-foreground/90 font-medium">{row.feature}</td>
                    <td className="px-5 py-3 text-foreground"><CellValue val={row.audit} /></td>
                    <td className="px-5 py-3 text-muted-foreground"><CellValue val={row.cro} /></td>
                    <td className="px-5 py-3 text-muted-foreground"><CellValue val={row.hire} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ComparisonTable;
