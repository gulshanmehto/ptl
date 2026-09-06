import { Check, Star, Sparkles } from "lucide-react";
import { CHECKOUT_BASIC, CHECKOUT_BUMP } from "@/lib/checkout";

const basic = [
  "14,000+ printable worksheets & activities",
  "Instant download — print unlimited times",
  "Ages 2–8: tracing to reading to math",
  "Alphabet, numbers, Hindi, puzzles, coloring & more",
  "No subscription — pay once, yours forever",
  "Email support for any issues",
];
const bump = [
  "Everything in the Essential Bundle",
  "Color & Create 3D Craft Kit (150+ designs)",
  "Bonus 1: 150+ Paper Toys",
  "Bonus 2: 3D Space Kit",
  "Bonus 3: Papertoy Robot Templates",
  "Print, cut, color & build real 3D toys",
];

export default function Pricing() {
  return (
    <section id="oferta" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-blush font-semibold uppercase tracking-widest text-xs">⏰ Limited Time Offer</p>
        <h2 className="mt-3 text-center font-display text-3xl sm:text-5xl text-ink">Choose your bundle</h2>
        <p className="mt-4 text-center text-ink-soft max-w-2xl mx-auto">Digital delivery — nothing ships. Secure checkout. Instant access by email.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white rounded-3xl shadow-lg border border-ink/10 flex flex-col overflow-hidden">
            <img src="https://prettylilthings.in/wp-content/uploads/2026/09/2-2.png" alt="Essential Bundle" loading="lazy" className="w-full h-44 object-cover" />
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-display text-2xl text-ink">The Essential Bundle</h3>
              <p className="mt-1 text-ink-soft text-sm">14,000+ printable worksheets</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl text-ink">₹349</span>
                <span className="text-ink-soft line-through">₹399</span>
                <span className="bg-blush-light text-blush-dark text-xs font-bold px-2 py-1 rounded-full">13% OFF</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {basic.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-ink-soft text-sm">
                    <Check className="w-5 h-5 text-leaf mt-0.5 shrink-0" />{t}
                  </li>
                ))}
              </ul>
              <a href={CHECKOUT_BASIC} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex justify-center bg-ink text-cream rounded-full px-8 py-4 font-semibold hover:bg-ink/90 transition-colors">
                Get the Essential Bundle
              </a>
            </div>
          </div>

          <div className="relative bg-plum rounded-3xl shadow-2xl shadow-blush/20 border-2 border-blush flex flex-col overflow-hidden">
            <img src="https://creative.parentingshop.in/wp-content/uploads/2026/07/Untitled-design-4.webp" alt="Masterpiece Bundle" loading="lazy" className="w-full h-44 object-cover" />
            <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-blush text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1 z-10">
              <Sparkles className="w-3.5 h-3.5" /> Best Value
            </span>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-display text-2xl text-cream">The Masterpiece Bundle</h3>
              <p className="mt-1 text-cream/70 text-sm">Worksheets + 3D Craft Kit</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl text-blush">₹649</span>
                <span className="text-cream/50 line-through">₹1,098</span>
                <span className="bg-blush text-white text-xs font-bold px-2 py-1 rounded-full">41% OFF</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {bump.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-cream/90 text-sm">
                    <Check className="w-5 h-5 text-blush mt-0.5 shrink-0" />{t}
                  </li>
                ))}
              </ul>
              <a href={CHECKOUT_BUMP} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex justify-center bg-blush text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-blush/30 hover:bg-blush-dark transition-colors">
                Get the Masterpiece Bundle
              </a>
              <p className="mt-3 text-center text-cream/60 text-xs">Save ₹449 today · One-time payment</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-ink-soft text-sm">
          <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-blush text-blush" />))}</div>
          Rated 4.9 out of 5 by happy parents
        </div>
      </div>
    </section>
  );
}