import { openCheckout } from "@/lib/checkout-modal";

const pages = [
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/2.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/3.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/4.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/5.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/6.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/7.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/09/Bonus-1-Paper-Toy.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/09/Bonus-2-Space-Kit.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/09/Bonus-3-ROBOT-KIT.webp",
];

export default function Activities() {
  const loop = [...pages, ...pages];
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <span className="text-blush font-bold uppercase tracking-[0.2em] text-xs">Hands-On Activities</span>
        <h2 className="mt-4 font-display text-2xl sm:text-4xl text-ink">Activities, Games and Crafts That Make Learning Fun</h2>
        <p className="mt-3 text-ink-soft max-w-2xl mx-auto text-sm sm:text-base">Along with the worksheets, the bundle includes activities, games, cards and 3D crafts so children learn by doing.</p>
      </div>
      <div className="marquee-viewport">
        <div className="marquee-track" style={{ "--marquee-duration": "45s" }}>
          {loop.map((src, i) => (
            <div key={i} className="shrink-0 rounded-2xl overflow-hidden bg-white w-[min(78vw,280px)] aspect-square sm:w-[320px] sm:h-[320px] border-2 border-blush/30 shadow-xl">
              <img src={src} alt={`Activity page ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <button onClick={openCheckout} className="inline-flex bg-blush text-white rounded-[10px] px-10 py-4 font-bold text-lg uppercase shadow-lg hover:bg-blush-dark transition-colors">Get the Bundle</button>
      </div>
    </section>
  );
}