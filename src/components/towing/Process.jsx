import { motion } from "framer-motion";
import { Phone, Truck, Flag } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    n: "01",
    title: "Call & Describe",
    desc: "Ring 905-928-9001, tell us where you are and what happened. We confirm coverage and give you a fair, upfront quote.",
    img: "https://media.base44.com/images/public/6ac7c6391aca27799fa701a7/2a7bce0c2_generated_07a5db25.png",
  },
  {
    icon: Truck,
    n: "02",
    title: "Unit Dispatched",
    desc: "The nearest suited unit is sent your way with a live ETA — flatbed, wheel-lift or winch depending on your situation.",
    img: "https://media.base44.com/images/public/6ac7c6391aca27799fa701a7/09bc7e575_generated_b1385143.png",
  },
  {
    icon: Flag,
    n: "03",
    title: "Recovered & Rolling",
    desc: "We load, recover or assist carefully, then get you and your vehicle where you need to be — stress handled.",
    img: "https://media.base44.com/images/public/6ac7c6391aca27799fa701a7/50185eec0_generated_7b3bbe3c.png",
  },
];

export default function Process() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            // Dispatch Protocol
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-3 font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative border border-border rounded-sm overflow-hidden bg-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-3 left-3 font-mono text-xs text-primary tracking-widest">{s.n}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 grid place-items-center border border-border rounded-sm text-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}