const pages = [
  "https://prettylilthings.in/wp-content/uploads/2026/09/2-2.png",
  "https://prettylilthings.in/wp-content/uploads/2026/09/1-2.png",
  "https://prettylilthings.in/wp-content/uploads/2026/09/11-2.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/10-1.png",
  "https://prettylilthings.in/wp-content/uploads/2026/09/8-6.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/7-6.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/5-2.png",
  "https://prettylilthings.in/wp-content/uploads/2026/09/23.png",
];

export default function VisualKit() {
  const loop = [...pages, ...pages];
  return (
    <section className="py-12 sm:py-16 bg-secondary/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <span className="text-blush font-bold uppercase tracking-[0.2em] text-xs">Visual Worksheets</span>
        <h2 className="mt-4 font-display text-2xl sm:text-4xl text-ink">A Visual Bundle That Makes Learning Come Alive</h2>
        <p className="mt-3 text-ink-soft max-w-2xl mx-auto text-sm sm:text-base">Take a look at some of the printable pages included in this bundle of <strong>14,000+ worksheets</strong> for teaching kids at home.</p>
      </div>
      <div className="marquee-viewport">
        <div className="marquee-track" style={{ "--marquee-duration": "40s" }}>
          {loop.map((src, i) => (
            <div key={i} className="shrink-0 rounded-2xl overflow-hidden bg-white w-[min(78vw,280px)] aspect-[3/4] sm:w-[320px] sm:h-[426px] sm:aspect-auto border-2 border-blush/30 shadow-xl">
              <img src={src} alt={`Worksheet page ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 max-w-3xl mx-auto px-4 text-center text-ink-soft text-sm sm:text-base">Everything is designed to make learning visual, simple and engaging, so children understand the meaning behind each activity instead of just copying it.</p>
    </section>
  );
}