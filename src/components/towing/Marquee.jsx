import { motion } from "framer-motion";

const ITEMS = [
  "24/7 TOWING", "ROADSIDE ASSISTANCE", "VEHICLE RECOVERY", "FLATBED TOWING",
  "JUMP START", "LOCKOUT SERVICE", "TIRE CHANGE", "FUEL DELIVERY",
  "WINCH OUT", "LONG DISTANCE TOWING", "ACCIDENT RECOVERY", "MOTORCYCLE TOWING",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card py-4">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-heading font-bold text-2xl sm:text-3xl text-foreground/80">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}