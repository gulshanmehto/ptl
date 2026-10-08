import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  { text: "Hands down the best towing company in town! Fast, professional, and treated my car like it was their own.", author: "Verified Google Review", time: "07:42" },
  { text: "My car broke down and they gave me an ETA and actually met it. Came fast, helped out, even gave me a ride home. Respectful and efficient.", author: "Local Driver", time: "23:18" },
  { text: "10/10 service. Got my car moved safely off the road with zero stress. Fair price too.", author: "Hamilton Resident", time: "14:05" },
  { text: "Got stranded on the side of the road and thought it'd be a rough night. The driver pulled over to check I was okay — genuinely cared.", author: "Roadside Customer", time: "02:33" },
  { text: "Really appreciate people like that who actually care. Highly recommend High Class Recovery to anyone in the area.", author: "Repeat Customer", time: "19:51" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              // 04 — Field Reports
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            >
              Recent <span className="text-primary">Saves</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-3 border border-border rounded-sm px-4 py-3 bg-card">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              <span className="text-foreground font-bold">4.4</span> on Google
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="bg-background p-6 sm:p-8 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-primary tracking-widest">LOG #{String(i + 1).padStart(3, "0")}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{r.time} HRS</span>
              </div>
              <Quote className="h-6 w-6 text-primary/40 mb-3" />
              <p className="text-foreground/90 leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{r.author}</span>
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}