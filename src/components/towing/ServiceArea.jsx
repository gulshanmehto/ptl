import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const ZONES = ["Hannon", "Hamilton", "Stoney Creek", "Binbrook", "Mount Hope", "Glanbrook", "Ancaster", "Stoney Creek", "Winona", "Caledonia"];

export default function ServiceArea() {
  return (
    <section id="area" className="relative py-20 sm:py-28 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-sm overflow-hidden border border-border min-h-[340px] bg-card"
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
                    style={{ width: 80 + i * 90, height: 80 + i * 90 }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
                <div className="relative h-16 w-16 rounded-full bg-primary/20 grid place-items-center animate-status-pulse">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 font-mono text-[11px] text-muted-foreground tracking-widest">
              LAT 43.20° · LON -79.90°
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><Navigation className="h-3 w-3 text-primary" /> UNIT-01 ACTIVE</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> LIVE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// 05 — Coverage</span>
            <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl tracking-tight">
              Service <span className="text-primary">Area</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Based in Hannon, we dispatch across Hamilton and the surrounding region —
              day or night. If you're unsure we cover your spot, call us and we'll confirm in seconds.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {ZONES.map((z, i) => (
                <motion.span
                  key={z + i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="font-mono text-xs px-3 py-1.5 border border-border rounded-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors"
                >
                  {z}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 space-y-px bg-border border border-border rounded-sm overflow-hidden">
              <div className="bg-background p-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Base</div>
                  <div className="text-foreground">834 Nebo Rd, Hannon, ON L0R 1P0</div>
                </div>
              </div>
              <div className="bg-background p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Hours</div>
                  <div className="text-foreground">Open 24 hours · 7 days a week</div>
                </div>
              </div>
              <div className="bg-background p-4 flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Dispatch</div>
                  <a href="tel:+19059289001" className="text-foreground hover:text-primary transition-colors">905-928-9001</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}