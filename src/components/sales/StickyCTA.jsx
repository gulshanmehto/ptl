import { openCheckout } from "@/lib/checkout-modal";

export default function StickyCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-cream/95 backdrop-blur border-t border-blush/20 px-4 py-3 flex items-center justify-between gap-3">
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-xl text-ink leading-none">₹349</span>
          <span className="text-xs text-ink-soft line-through">₹399</span>
        </div>
        <div className="text-[11px] font-bold text-blush-dark uppercase tracking-wide">13% off</div>
      </div>
      <button onClick={openCheckout} className="flex-1 bg-blush text-white rounded-full py-3 text-center font-semibold">
        Get Bundle →
      </button>
    </div>
  );
}