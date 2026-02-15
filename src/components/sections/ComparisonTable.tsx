import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  { feature: "Time to results", audit: "2–3 days", agency: "2–6 weeks", diy: "Ongoing" },
  { feature: "Developer-ready fixes", audit: true, agency: false, diy: "partial" },
  { feature: "Signal-level diagnosis", audit: true, agency: false, diy: false },
  { feature: "Cost", audit: "$2,500 one-time", agency: "$3k–$10k/mo", diy: "Your time" },
  { feature: "Ongoing commitment", audit: "None", agency: "3–6 month contract", diy: "Indefinite" },
  { feature: "Post-fix verification", audit: true, agency: "sometimes", diy: false },
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
          Why not just hire an agency?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Agencies run ads. We fix the infrastructure that makes ads work.
        </p>
      </ScrollReveal>

      {/* Desktop table */}
      <ScrollReveal delay={0.15}>
        <div className="rounded-xl border border-border overflow-hidden hidden sm:block">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="text-left px-5 py-3 text-muted-foreground font-medium"></th>
                  <th className="text-left px-5 py-3 font-bold text-primary">Signal Audit</th>
                  <th className="text-left px-5 py-3 text-muted-foreground font-medium">Ad Agency</th>
                  <th className="text-left px-5 py-3 text-muted-foreground font-medium">DIY</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="px-5 py-3 text-foreground/90 font-medium">{row.feature}</td>
                    <td className="px-5 py-3 text-foreground"><CellValue val={row.audit} /></td>
                    <td className="px-5 py-3 text-muted-foreground"><CellValue val={row.agency} /></td>
                    <td className="px-5 py-3 text-muted-foreground"><CellValue val={row.diy} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-4">
        {rows.map((row, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-medium text-foreground/90 text-sm mb-3">{row.feature}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-bold">Signal Audit</span>
                  <CellValue val={row.audit} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Ad Agency</span>
                  <CellValue val={row.agency} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">DIY</span>
                  <CellValue val={row.diy} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonTable;
