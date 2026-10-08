import { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck, Wrench, Battery, KeyRound, Disc3, Fuel, Anchor, Route,
  CarFront, Bike, ShieldCheck, Zap,
} from "lucide-react";

const SERVICES = [
  { icon: Truck, title: "24/7 Towing", spec: "Response ~30 min", desc: "Round-the-clock light & medium duty towing anywhere in the Hamilton region." },
  { icon: Wrench, title: "Roadside Assistance", spec: "On-site repair", desc: "Fast help at the roadside so you can get back moving without a full tow." },
  { icon: ShieldCheck, title: "Vehicle Recovery", spec: "Winch equipped", desc: "Safe recovery from ditches, embankments, snow and awkward spots." },
  { icon: CarFront, title: "Flatbed Towing", spec: "Damage-free", desc: "Flatbed transport for luxury, lowered and classic vehicles — no wear on your wheels." },
  { icon: Battery, title: "Jump Start", spec: "Battery boost", desc: "Dead battery? We'll get you started and back on the road in minutes." },
  { icon: KeyRound, title: "Lockout Service", spec: "Non-destructive", desc: "Locked out of your car? We'll get you back inside quickly and safely." },
  { icon: Disc3, title: "Tire Change", spec: "Spare swap", desc: "Flat tire on the shoulder? We'll swap to your spare so you can drive on." },
  { icon: Fuel, title: "Fuel Delivery", spec: "Gas / diesel", desc: "Out of fuel? We bring enough to get you to the nearest station." },
  { icon: Anchor, title: "Winch Out", spec: "Up to 50,000 lbs", desc: "Stuck in mud, snow or a ditch? Heavy-duty winch extraction to free your vehicle." },
  { icon: Route, title: "Long Distance Towing", spec: "Cross-province", desc: "Reliable long-haul towing across Ontario at fair, upfront pricing." },
  { icon: Zap, title: "Accident Recovery", spec: "Insurance ready", desc: "Calm, careful recovery after a collision — we coordinate with your insurer." },
  { icon: Bike, title: "Motorcycle Towing", spec: "Secured transport", desc: "Specialized towing that keeps your bike upright and scratch-free." },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="relative py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              // 02 — Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            >
              Tactical <span className="text-primary">Services</span>
            </motion.h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm sm:text-base">
            One fleet, every scenario. Hover a tile to load its operational spec — then call dispatch to deploy a unit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="relative bg-background p-6 sm:p-8 min-h-[180px] group cursor-default overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`h-12 w-12 grid place-items-center border rounded-sm transition-colors ${isActive ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/60">0{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <div className={`mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${isActive ? "text-primary opacity-100 translate-y-0" : "text-muted-foreground/50 opacity-70"}`}>
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {s.spec}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border rounded-sm p-6 bg-card"
        >
          <p className="text-sm sm:text-base text-muted-foreground">
            Not sure which service you need? Call us — we'll figure it out and dispatch the right unit.
          </p>
          <a
            href="tel:+19059289001"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-sm hover:scale-[1.02] transition-transform whitespace-nowrap"
          >
            <Truck className="h-4 w-4" /> Dispatch a Unit
          </a>
        </motion.div>
      </div>
    </section>
  );
}