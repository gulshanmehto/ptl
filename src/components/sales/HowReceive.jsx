import { openCheckout } from "@/lib/checkout-modal";

const steps = [
  { emoji: "🛒", title: "Order & Pay", desc: "Complete secure checkout in under a minute. UPI, cards & wallets all accepted." },
  { emoji: "⚡", title: "Instant Download Link", desc: "Your download link arrives immediately by email — no waiting, no shipping." },
  { emoji: "🖨️", title: "Print at Home", desc: "Print on any A4 paper — at home or your local print shop. Standard paper works." },
  { emoji: "🖍️", title: "Kids Play & Learn", desc: "Hand over crayons and enjoy quiet, screen-free, happy learning time!" },
];

export default function HowReceive() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <span className="block text-center text-blush font-bold uppercase tracking-[0.2em] text-xs">How it works</span>
        <h2 className="mt-4 text-center font-display text-2xl sm:text-4xl text-ink">How Do You Receive the Kit?</h2>
        <p className="mt-4 text-center text-ink-soft max-w-2xl mx-auto">From checkout to crayons in hand — here's exactly what happens after you order.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-ink/5 text-center">
              <div className="text-4xl">{s.emoji}</div>
              <div className="mt-3 w-8 h-8 rounded-full bg-blush text-white font-bold mx-auto flex items-center justify-center text-sm">{i + 1}</div>
              <h3 className="mt-3 font-semibold text-ink text-lg">{s.title}</h3>
              <p className="mt-2 text-ink-soft text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={openCheckout}
            className="inline-flex bg-blush text-white rounded-[10px] px-10 py-4 font-bold text-lg uppercase shadow-lg hover:bg-blush-dark transition-colors"
          >
            Get the Bundle →
          </button>
        </div>
      </div>
    </section>
  );
}