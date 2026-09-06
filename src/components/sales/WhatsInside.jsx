const groups = [
  { emoji: "📖", title: "Main Content", subtitle: "Everything you need to teach early skills clearly", items: ["Core worksheets for letters, numbers & shapes", "Visual pages for every topic", "Hindi & English practice sets", "Posters for the study wall", "A mini activity booklet for kids"] },
  { emoji: "🎲", title: "Activities & Games", subtitle: "Learning through play, remembering with joy", items: ["Printable cards for memorization", "Games that reinforce the lesson", "Color, match, complete & cut-out activities", "Special bonuses in the complete bundle"] },
  { emoji: "📥", title: "Digital Delivery", subtitle: "Practical, instant, at your own pace", items: ["Use it at home, in class or on the go", "PDF file", "Print only what you need"] },
];

export default function WhatsInside() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <span className="block text-center text-blush font-bold uppercase tracking-[0.2em] text-xs">What's inside</span>
        <h2 className="mt-4 text-center font-display text-2xl sm:text-4xl text-ink">Everything Included in the 14,000+ Bundle</h2>
        <p className="mt-4 text-center text-ink-soft max-w-2xl mx-auto">A complete package to teach, practice, play and create with children.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="bg-white rounded-2xl p-7 shadow-sm border border-ink/5">
              <div className="text-3xl">{g.emoji}</div>
              <h3 className="mt-4 font-semibold text-ink text-lg">{g.title}</h3>
              <p className="mt-1 text-ink-soft text-sm">{g.subtitle}</p>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (<li key={it} className="flex items-start gap-2 text-ink-soft text-sm"><span className="text-leaf font-bold">✓</span>{it}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}