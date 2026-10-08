import { motion } from "framer-motion";
import { Clock, BadgeDollarSign, ShieldCheck, Zap } from "lucide-react";

const STATS = [
  { icon: Clock, value: "24/7", label: "Always Dispatched", sub: "Day, night, holidays" },
  { icon: Zap, value: "~30 min", label: "Avg. Response", sub: "Across Hamilton region" },
  { icon: BadgeDollarSign, value: "Fair", label: "Upfront Pricing", sub: "No surprise fees" },
  { icon: ShieldCheck, value: "Licensed", label: "Fully Insured", sub: "Your vehicle protected" },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 sm:py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              // 03 — Why High Class
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            >
              The Guardian <span className="text-primary">Mechanic</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg"
            >
              When your vehicle stops, your stress starts. We treat every call like a
              mission-critical deployment — fast, careful, and fair. No runaround, no
              inflated invoices, no leaving you waiting in the dark.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-4"
            >
              {[
                "Live dispatch answers every call — no call centres, no hold music.",
                "Flatbed and wheel-lift options to suit your vehicle.",
                "Transparent quote before we hook up, every time.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-foreground/90">{t}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-background p-6 sm:p-8 flex flex-col gap-3"
                >
                  <Icon className="h-7 w-7 text-primary" />
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-foreground">{s.value}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-foreground/80">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.sub}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}