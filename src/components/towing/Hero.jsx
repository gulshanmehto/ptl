import { motion } from "framer-motion";
import { Phone, Star, Clock, ChevronDown, MapPin } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6ac7c6391aca27799fa701a7/aee7041b7_generated_image.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="High Class Recovery tow truck at night with red beacon lights" className="h-full w-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5 rounded-sm mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary">
            Open Now — 24/7 Towing &amp; Roadside · Hannon &amp; Hamilton, ON
          </span>
        </motion.div>

        <h1 className="font-heading font-bold leading-[0.9] tracking-tight text-foreground">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="block text-[14vw] sm:text-[10vw] lg:text-[8.5vw] xl:text-[8rem]"
          >
            STUCK?
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="block text-[14vw] sm:text-[10vw] lg:text-[8.5vw] xl:text-[8rem]"
          >
            WE'RE ALREADY
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="block text-[14vw] sm:text-[10vw] lg:text-[8.5vw] xl:text-[8rem] text-primary"
          >
            ROLLING.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Professional towing, prompt roadside help and fair-priced vehicle recovery. Day, night,
          holidays, snowstorms — one call and a truck is on its way to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:+19059289001"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-base sm:text-lg px-7 py-4 rounded-sm animate-status-pulse hover:scale-[1.02] transition-transform"
          >
            <Phone className="h-5 w-5" />
            CALL (905) 928-9001
          </a>
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-mono text-sm uppercase tracking-widest px-6 py-4 rounded-sm hover:border-primary hover:text-primary transition-colors"
          >
            What we handle
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-2 border border-border rounded-sm px-3 py-1.5 bg-card/60">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-foreground font-semibold">4.4</span> · 130 reviews
          </span>
          <span className="flex items-center gap-2 border border-border rounded-sm px-3 py-1.5 bg-card/60">
            <Clock className="h-4 w-4 text-primary" /> Licensed &amp; insured
          </span>
          <span className="flex items-center gap-2 border border-border rounded-sm px-3 py-1.5 bg-card/60">
            <MapPin className="h-4 w-4 text-primary" /> Upfront fair pricing
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}