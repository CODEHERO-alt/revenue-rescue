import { motion } from "framer-motion";
import { X, Check, AlertTriangle, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const beforeData = [
  { event: "Purchase", status: "Duplicated", count: "2x", icon: X },
  { event: "Add to Cart", status: "Missing params", count: "—", icon: AlertTriangle },
  { event: "Initiate Checkout", status: "No dedup ID", count: "3x", icon: X },
  { event: "Page View", status: "Firing", count: "OK", icon: Check },
];

const afterData = [
  { event: "Purchase", status: "Verified match", count: "1x", icon: Check },
  { event: "Add to Cart", status: "Clean signal", count: "1x", icon: Check },
  { event: "Initiate Checkout", status: "Dedup active", count: "1x", icon: Check },
  { event: "Page View", status: "Firing", count: "OK", icon: Check },
];

const Panel = ({
  title,
  subtitle,
  data,
  variant,
}: {
  title: string;
  subtitle: string;
  data: typeof beforeData;
  variant: "broken" | "fixed";
}) => {
  const isBroken = variant === "broken";
  return (
    <div
      className={`rounded-xl border p-5 sm:p-6 ${
        isBroken
          ? "bg-destructive/5 border-destructive/20"
          : "bg-primary/5 border-primary/20"
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        {isBroken ? (
          <AlertTriangle className="w-5 h-5 text-destructive" />
        ) : (
          <TrendingUp className="w-5 h-5 text-primary" />
        )}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-5">{subtitle}</p>

      <div className="space-y-2">
        {data.map(({ event, status, count, icon: Icon }, i) => {
          const isOk = Icon === Check;
          return (
            <motion.div
              key={event}
              initial={{ opacity: 0, x: isBroken ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="flex items-center justify-between gap-3 rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm"
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isOk ? "text-primary" : "text-destructive"
                  }`}
                />
                <span className="font-medium">{event}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="hidden sm:inline">{status}</span>
                <span
                  className={`mono text-xs font-bold px-2 py-0.5 rounded ${
                    isOk
                      ? "bg-primary/10 text-primary"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {count}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const BeforeAfter = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono text-primary text-sm font-medium mb-4 tracking-wider">
          BEFORE → AFTER
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          See what broken tracking looks like —{" "}
          <span className="text-muted-foreground">and what clean data delivers.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <Panel
            title="Before"
            subtitle="Typical broken setup"
            data={beforeData}
            variant="broken"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Panel
            title="After"
            subtitle="Post-infrastructure repair"
            data={afterData}
            variant="fixed"
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
