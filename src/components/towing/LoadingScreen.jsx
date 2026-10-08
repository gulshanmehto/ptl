import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2600;
    let raf;
    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 500);
        setTimeout(() => onDone && onDone(), 1250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const pct = Math.round(progress);
  const hooked = pct >= 100;
  const cableH = (progress / 100) * 84;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute left-0 right-0 h-px bg-primary/60 animate-scan" />

          {/* wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative z-10 text-center mb-8"
          >
            <div className="font-heading font-bold leading-[0.85] tracking-tight">
              <div className="text-4xl sm:text-6xl">HIGH</div>
              <div className="text-4xl sm:text-6xl">CLASS</div>
              <div className="text-4xl sm:text-6xl text-primary animate-flicker">RECOVERY</div>
            </div>
          </motion.div>

          {/* cable + hook */}
          <div className="relative z-10 flex flex-col items-center" style={{ height: 120 }}>
            <div
              className="w-[3px] bg-gradient-to-b from-primary to-primary/20"
              style={{ height: `${cableH}px` }}
            />
            <motion.svg
              viewBox="0 0 60 60"
              fill="none"
              className="w-7 h-7 -mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 6 ? 1 : 0, rotate: hooked ? [0, -8, 0] : 0 }}
              transition={{ duration: 0.4 }}
            >
              <path
                d="M30 4v22c0 14-9 20-18 18C4 42 2 32 8 26c5-5 13-4 16 2"
                stroke="hsl(0 100% 50%)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>

          {/* meta */}
          <div className="relative z-10 mt-6 w-[min(86vw,420px)] px-4">
            <div className="flex items-center justify-between font-mono text-xs tracking-widest">
              <span className="flex items-center gap-2 text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {hooked ? "HOOKED — ROLLING OUT" : "HOOKING YOU UP"}
              </span>
              <span className="text-primary tabular-nums">
                {String(pct).padStart(3, "0")}
                <span className="text-primary/60">%</span>
              </span>
            </div>
            <div className="mt-2 h-[2px] w-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary transition-[width] duration-100" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="absolute bottom-5 font-mono text-[10px] text-muted-foreground/60 tracking-[0.3em]">
            HAMILTON · ON · 24/7
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}