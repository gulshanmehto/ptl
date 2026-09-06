import KidsBg from "@/components/sales/KidsBg";

const personas = [
  { emoji: "📖", title: "You're a parent of a toddler", desc: "And you want to build early learning habits before school starts." },
  { emoji: "❤️", title: "You're a preschool parent", desc: "And you'd like to practice letters, numbers and shapes at home in a fun way." },
  { emoji: "📋", title: "You're a homeschooling parent", desc: "And you need organized, ready-to-print material for every subject." },
  { emoji: "🏫", title: "You're a teacher or tutor", desc: "And you want ready-made worksheets for your classroom and homework." },
  { emoji: "✨", title: "You're preparing for school", desc: "And you want your child confident with writing, reading and early math." },
  { emoji: "👶", title: "You want screen-free time", desc: "And you're looking for something fun and educational that keeps kids busy." },
];

export default function WhoFor() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <KidsBg />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <span className="block text-center text-blush font-bold uppercase tracking-[0.2em] text-xs">Who it's for</span>
        <h2 className="mt-4 text-center font-display text-2xl sm:text-4xl text-ink">This Bundle Is for You If:</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map(({ emoji, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5">
              <div className="text-3xl">{emoji}</div>
              <h3 className="mt-4 font-semibold text-ink text-lg">{title}</h3>
              <p className="mt-2 text-ink-soft text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}