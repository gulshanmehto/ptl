import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, AlertTriangle, MapPin } from "lucide-react";

export default function FloatingCall() {
  const [emergency, setEmergency] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && !emergency && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
        >
          <button
            onClick={() => setEmergency(true)}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border bg-background/80 backdrop-blur px-3 py-1.5 rounded-sm hover:border-primary hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <AlertTriangle className="h-3 w-3" /> Emergency?
          </button>
          <a
            href="tel:+19059289001"
            className="relative h-16 w-16 rounded-full bg-primary text-primary-foreground grid place-items-center animate-status-pulse shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
            aria-label="Call dispatch"
          >
            <Phone className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-foreground border-2 border-background" />
          </a>
        </motion.div>
      )}

      <AnimatePresence>
        {emergency && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <button
              onClick={() => setEmergency(false)}
              className="absolute top-5 right-5 h-11 w-11 grid place-items-center border border-border rounded-sm text-foreground hover:border-primary"
              aria-label="Exit emergency mode"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative text-center max-w-md"
            >
              <div className="inline-flex items-center gap-2 border border-primary bg-primary/10 px-4 py-2 rounded-sm mb-6 animate-flicker">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary">Emergency Mode</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-3">Need Help Right Now?</h2>
              <p className="text-muted-foreground mb-8">
                All distractions removed. Tap below to call dispatch instantly — we're standing by 24/7.
              </p>
              <a
                href="tel:+19059289001"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-xl px-8 py-5 rounded-sm animate-status-pulse hover:scale-[1.02] transition-transform"
              >
                <Phone className="h-6 w-6" /> TAP TO CALL · 905-928-9001
              </a>
              <a
                href="https://maps.app.goo.gl/ZVsWooHW3tYL1RX18"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" /> Share My Location
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}