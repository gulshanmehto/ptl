import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, Star, ArrowRight } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69c99fe7bf01c3c62fc5e186/63238af69_image.png";

export default function EmergencyFooter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const fill = useTransform(scrollYProgress, [0.15, 0.55], ["0%", "100%"]);

  return (
    <footer id="contact" ref={ref} className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* big fill-on-scroll dispatch number */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5 rounded-sm mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary">Dispatch Online</span>
        </motion.div>
        <h2 className="font-heading font-bold text-4xl sm:text-6xl tracking-tight">CALL NOW</h2>
        <div className="relative mt-6 mx-auto max-w-4xl">
          <div className="font-heading font-bold text-[13vw] sm:text-[10vw] lg:text-[8rem] leading-none text-stroke-silver select-none">
            905-928-9001
          </div>
          <motion.div
            className="absolute inset-0 font-heading font-bold text-[13vw] sm:text-[10vw] lg:text-[8rem] leading-none text-primary overflow-hidden whitespace-nowrap"
            style={{ width: fill }}
          >
            <span className="inline-block">905-928-9001</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8"
        >
          <a
            href="tel:+19059289001"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-lg sm:text-xl px-8 sm:px-10 py-5 rounded-sm animate-status-pulse hover:scale-[1.02] transition-transform"
          >
            <Phone className="h-6 w-6" />
            TAP TO CALL DISPATCH
          </a>
        </motion.div>
      </div>

      {/* footer columns */}
      <div className="relative border-t border-border mt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="lg:w-1/3">
              <img src={LOGO} alt="High Class Recovery" className="h-16 w-auto mb-4" />
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Professional towing &amp; roadside assistance. Prompt, fair, and on call 24/7 across Hamilton, ON.
              </p>
              <a
                href="tel:+19059289001"
                className="mt-5 inline-flex items-center gap-2 font-heading font-bold text-2xl text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" /> (905) 928-9001
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:w-2/3">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Services</h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li><a href="#services" className="hover:text-foreground transition-colors">Emergency towing</a></li>
                  <li><a href="#services" className="hover:text-foreground transition-colors">Roadside assistance</a></li>
                  <li><a href="#services" className="hover:text-foreground transition-colors">Accident recovery</a></li>
                  <li><a href="#services" className="hover:text-foreground transition-colors">Winch-outs</a></li>
                  <li><a href="#services" className="hover:text-foreground transition-colors">Flatbed &amp; long-distance</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Company</h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li><a href="#why" className="hover:text-foreground transition-colors">Why us</a></li>
                  <li><a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a></li>
                  <li><a href="#area" className="hover:text-foreground transition-colors">Service area</a></li>
                  <li>
                    <a href="https://maps.app.goo.gl/ZVsWooHW3tYL1RX18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
                      Google Maps <ArrowRight className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Reach Us</h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 834 Nebo Rd, Hannon, ON L0R 1P0</li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open 24 hours · 7 days</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 fill-primary text-primary" /> 4.4 · 130 reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-mono text-[11px] text-muted-foreground/60 tracking-widest">
              © {new Date().getFullYear()} HIGH CLASS RECOVERY — TOWING SERVICE
            </p>
            <p className="font-mono text-[11px] text-muted-foreground/60 tracking-widest">
              HANNON · HAMILTON · ONTARIO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}