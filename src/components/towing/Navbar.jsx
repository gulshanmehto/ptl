import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#area" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }} className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/user_69c99fe7bf01c3c62fc5e186/63238af69_image.png"
              alt="High Class Recovery"
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+19059289001"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-4 py-2.5 rounded-sm hover:bg-primary/90 transition-colors animate-status-pulse"
            >
              <Phone className="h-4 w-4" />
              905-928-9001
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden h-10 w-10 grid place-items-center border border-border rounded-sm text-foreground hover:border-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-background lg:hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative flex items-center justify-between h-16 px-4 border-b border-border">
              <img
                src="https://media.base44.com/images/public/user_69c99fe7bf01c3c62fc5e186/63238af69_image.png"
                alt="High Class Recovery"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 grid place-items-center border border-border rounded-sm text-foreground"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="relative flex-1 flex flex-col justify-center px-6 gap-2">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  onClick={() => go(l.href)}
                  className="text-left font-heading text-4xl font-bold text-foreground hover:text-primary transition-colors py-2 border-b border-border/40"
                >
                  <span className="font-mono text-xs text-primary mr-3">0{i + 1}</span>
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <div className="relative p-6 border-t border-border">
              <a
                href="tel:+19059289001"
                className="flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-lg py-4 rounded-sm animate-status-pulse"
              >
                <Phone className="h-5 w-5" />
                CALL DISPATCH · 905-928-9001
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}