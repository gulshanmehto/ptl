import { Star } from "lucide-react";
import { openCheckout } from "@/lib/checkout-modal";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-blush/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl text-ink leading-none">
          Pretty <span className="text-blush italic">Little</span> Things
        </a>
        <div className="hidden sm:flex items-center gap-1 text-ink">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-blush text-blush" />
          ))}
          <span className="ml-1.5 text-sm font-semibold">4.9</span>
        </div>
        <button
          onClick={openCheckout}
          className="bg-blush text-white rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blush-dark transition-colors"
        >
          Get Bundle · ₹349
        </button>
      </div>
    </header>
  );
}