import { useEffect } from "react";
import { Star, X, Check, Sparkles } from "lucide-react";
import { CHECKOUT_BASIC, CHECKOUT_BUMP } from "@/lib/checkout";
import { useCheckoutModal } from "@/hooks/useCheckoutModal";

const basic = [
  "14,000+ printable worksheets & activities",
  "Instant download — print unlimited times",
  "Ages 2–8: tracing to reading to math",
];
const bump = [
  "Everything in the Essential Bundle",
  "Color & Create 3D Craft Kit (150+ designs)",
  "Bonus 1: 150+ Paper Toys",
  "Bonus 2: 3D Space Kit",
  "Bonus 3: Papertoy Robot Templates",
  "Print, cut, color & build real 3D toys",
];

export default function PricingModal() {
  const { isOpen, closeCheckout } = useCheckoutModal();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCheckout();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCheckout]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={closeCheckout} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto">
        <button
          onClick={closeCheckout}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-1 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-blush text-blush" />
            ))}
          </div>
          <p className="mt-1 text-center text-ink-soft text-xs font-semibold uppercase tracking-wide">
            Rated 4.9 out of 5 by 2,000+ parents
          </p>
          <h2 className="mt-3 text-center font-display text-2xl sm:text-3xl text-ink">Choose your bundle</h2>
          <p className="mt-1 text-center text-ink-soft text-sm">
            Start with the worksheets, or get the complete kit with 3D crafts too.
          </p>

          <div className="mt-6 space-y-4">
            {/* Essential */}
            <div className="rounded-2xl border border-ink/15 bg-white p-5">
              <div className="flex gap-4">
                <img
                  src="https://prettylilthings.in/wp-content/uploads/2026/09/2-2.png"
                  alt="Essential bundle"
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-ink text-lg leading-tight">The Essential Bundle</h3>
                  <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                    <span className="font-display text-2xl text-ink">₹349</span>
                    <span className="text-ink-soft line-through text-sm">₹399</span>
                    <span className="bg-blush-light text-blush-dark text-[11px] font-bold px-2 py-0.5 rounded-full">Save ₹50 · 13% off</span>
                  </div>
                  <p className="mt-1 text-ink-soft text-xs">14,000+ printable worksheets — print & play.</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5">
                {basic.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-ink-soft text-sm">
                    <Check className="w-4 h-4 text-leaf mt-0.5 shrink-0" />{t}
                  </li>
                ))}
              </ul>
              <a
                href={CHECKOUT_BASIC}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeCheckout}
                className="mt-4 w-full inline-flex justify-center rounded-xl border-2 border-ink text-ink font-bold py-3 hover:bg-ink hover:text-cream transition-colors"
              >
                Get the Essential Bundle — ₹349
              </a>
            </div>

            {/* Masterpiece */}
            <div className="relative rounded-2xl border-2 border-blush bg-blush-light/40 p-5">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-plum text-cream text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-md">
                <Sparkles className="w-3 h-3" /> Best Value · Save ₹449
              </span>
              <div className="flex gap-4 mt-1">
                <img
                  src="https://creative.parentingshop.in/wp-content/uploads/2026/07/Untitled-design-4.webp"
                  alt="Masterpiece bundle"
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-ink text-lg leading-tight">The Masterpiece Bundle</h3>
                  <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                    <span className="font-display text-2xl text-blush">₹649</span>
                    <span className="text-ink-soft line-through text-sm">₹1,098</span>
                    <span className="bg-blush text-white text-[11px] font-bold px-2 py-0.5 rounded-full">Save ₹449 · 41% off</span>
                  </div>
                  <p className="mt-1 text-ink-soft text-xs">Worksheets + 3D Craft Kit — the complete kit.</p>
                </div>
              </div>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-ink">
                Everything in the Essential, plus the 3D craft kit:
              </p>
              <ul className="mt-2 space-y-1.5">
                {bump.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-ink-soft text-sm">
                    <Check className="w-4 h-4 text-leaf mt-0.5 shrink-0" />{t}
                  </li>
                ))}
              </ul>
              <a
                href={CHECKOUT_BUMP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeCheckout}
                className="mt-4 w-full inline-flex justify-center rounded-xl bg-blush text-white font-bold py-3 shadow-lg shadow-blush/30 hover:bg-blush-dark transition-colors"
              >
                Get Everything — ₹649
              </a>
              <p className="mt-2 text-center text-ink-soft text-[11px]">Most parents choose the complete kit 🌟</p>
            </div>
          </div>
          <p className="mt-4 text-center text-ink-soft text-xs">
            Secure checkout · Instant delivery · Digital product
          </p>
        </div>
      </div>
    </div>
  );
}