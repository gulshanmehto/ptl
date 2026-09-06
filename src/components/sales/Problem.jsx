import KidsBg from "@/components/sales/KidsBg";

const items = [
  { emoji: "📱", title: "Phone Addiction", desc: "Children as young as 3 develop screen dependency, making it harder to focus on anything else." },
  { emoji: "😴", title: "Poor Sleep & Mood", desc: "Late-night screens disrupt sleep, leading to cranky mornings and tired school days." },
  { emoji: "📉", title: "Falling Behind in School", desc: "Less practice with writing, reading & numbers means struggling to keep up with classmates." },
  { emoji: "✍️", title: "Weak Pencil Grip", desc: "Swiping a screen doesn't build the hand strength needed for neat handwriting." },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <KidsBg />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl sm:text-4xl text-ink max-w-3xl mx-auto">Too much screen time is quietly holding your child back</h2>
        <p className="mt-4 text-center text-ink-soft max-w-2xl mx-auto">Every parent worries — here's what happens when young children spend too much time on phones & tablets.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ emoji, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 text-center">
              <div className="text-4xl">{emoji}</div>
              <h3 className="mt-4 font-semibold text-ink text-lg">{title}</h3>
              <p className="mt-2 text-ink-soft text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}