import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const mockLeaks = [
  { id: "LK-001", issue: "Checkout payment intent fails silently", severity: "Critical", revenueImpact: "12–18%", fix: "Add error boundary + retry logic on Stripe webhook", effort: "2h", priority: 1 },
  { id: "LK-002", issue: "Mobile CTA below fold on pricing page", severity: "High", revenueImpact: "8–14%", fix: "Restructure pricing hierarchy, sticky CTA on mobile", effort: "3h", priority: 2 },
  { id: "LK-003", issue: "Trial users skip activation milestone", severity: "High", revenueImpact: "6–10%", fix: "Insert guided activation flow after signup", effort: "4h", priority: 3 },
  { id: "LK-004", issue: "Session state lost on return visit", severity: "Medium", revenueImpact: "4–7%", fix: "Persist onboarding progress to database", effort: "2h", priority: 4 },
  { id: "LK-005", issue: "Integration docs exit with no return path", severity: "Medium", revenueImpact: "3–5%", fix: "Add in-app setup wizard, reduce doc dependency", effort: "6h", priority: 5 },
];

const severityColor = (s: string) => {
  if (s === "Critical") return "bg-destructive/10 text-destructive";
  if (s === "High") return "bg-primary/10 text-primary";
  return "bg-muted text-muted-foreground";
};

const DeliverablePreview = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">WHAT YOU RECEIVE</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          You don't get a report.
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-muted-foreground mb-12">
          You get a repair plan.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {/* Header bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="mono text-xs text-muted-foreground ml-2">revenue-audit-report.json</span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-3 mono text-xs text-muted-foreground font-medium">ID</th>
                  <th className="text-left px-5 py-3 mono text-xs text-muted-foreground font-medium">ISSUE</th>
                  <th className="text-left px-5 py-3 mono text-xs text-muted-foreground font-medium">SEVERITY</th>
                  <th className="text-left px-5 py-3 mono text-xs text-muted-foreground font-medium">REV. IMPACT</th>
                  <th className="text-left px-5 py-3 mono text-xs text-muted-foreground font-medium hidden lg:table-cell">FIX</th>
                  <th className="text-left px-5 py-3 mono text-xs text-muted-foreground font-medium">EFFORT</th>
                  <th className="text-left px-5 py-3 mono text-xs text-muted-foreground font-medium">PRI</th>
                </tr>
              </thead>
              <tbody>
                {mockLeaks.map((leak, i) => (
                  <motion.tr
                    key={leak.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3 }}
                    className="border-b border-border/50 last:border-0"
                  >
                    <td className="px-5 py-3 mono text-xs text-muted-foreground">{leak.id}</td>
                    <td className="px-5 py-3 text-foreground/90 max-w-[200px]">{leak.issue}</td>
                    <td className="px-5 py-3">
                      <span className={`mono text-xs font-medium px-2 py-1 rounded ${severityColor(leak.severity)}`}>
                        {leak.severity}
                      </span>
                    </td>
                    <td className="px-5 py-3 mono text-sm font-bold text-primary">{leak.revenueImpact}</td>
                    <td className="px-5 py-3 text-muted-foreground text-xs max-w-[220px] hidden lg:table-cell">{leak.fix}</td>
                    <td className="px-5 py-3 mono text-xs text-muted-foreground">{leak.effort}</td>
                    <td className="px-5 py-3 mono text-xs font-bold text-foreground">#{leak.priority}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary footer */}
          <div className="px-5 py-4 border-t border-border bg-secondary/30 flex flex-wrap gap-6 mono text-xs">
            <span className="text-muted-foreground">Total leaks: <span className="text-foreground font-bold">5</span></span>
            <span className="text-muted-foreground">Est. total revenue impact: <span className="text-primary font-bold">33–54%</span></span>
            <span className="text-muted-foreground">Total repair effort: <span className="text-foreground font-bold">17h</span></span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DeliverablePreview;
