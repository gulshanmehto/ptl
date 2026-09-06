import { Check, X } from "lucide-react";
import { openCheckout } from "@/lib/checkout-modal";

const without = [
  "Long explanations that lose their attention",
  "Children distracted or simply not learning",
  "Building every activity from scratch",
  "Very little remembered after the lesson",
  "Hard to explain concepts without visuals",
];
const withBundle = [
  "You get 14,000+ printable resources ready to use",
  "No need to create activities from scratch",
  "You teach with visual pages, games and cards",
  "Material for home, class and tuition",
  "Print only what you need for each day",
  "Children learn in a more visual, hands-on way",
];

export default function Comparison() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl sm:text-4xl text-ink">Without organized material, everything takes more effort</h2>
        <p className="mt-4 text-center text-ink-soft max-w-2xl mx-auto">With the bundle in hand, parents and teachers can help children learn in a way that is visual, simple and practical.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-ink/10">
            <h3 className="font-semibold text-ink text-lg flex items-center gap-2"><X className="w-5 h-5 text-blush" /> Without the bundle</h3>
            <ul className="mt-4 space-y-3">
              {without.map((t) => (<li key={t} className="flex items-start gap-2 text-ink-soft text-sm"><X className="w-4 h-4 text-blush mt-0.5 shrink-0" />{t}</li>))}
            </ul>
          </div>
          <div className="bg-blush-light/50 rounded-2xl p-7 border border-blush/20">
            <h3 className="font-semibold text-ink text-lg flex items-center gap-2"><Check className="w-5 h-5 text-leaf" /> With the Pretty Little Things Bundle</h3>
            <ul className="mt-4 space-y-3">
              {withBundle.map((t) => (<li key={t} className="flex items-start gap-2 text-ink-soft text-sm"><Check className="w-4 h-4 text-leaf mt-0.5 shrink-0" />{t}</li>))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button onClick={openCheckout} className="inline-flex bg-blush text-white rounded-[10px] px-10 py-4 font-bold text-lg uppercase shadow-lg hover:bg-blush-dark transition-colors">Get the Bundle →</button>
        </div>
      </div>
    </section>
  );
}