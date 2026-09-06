const emojis = [
  { e: "⭐", c: "top-[8%] left-[6%]", s: "text-2xl opacity-30" },
  { e: "🎈", c: "top-[22%] right-[7%]", s: "text-3xl opacity-25" },
  { e: "🌈", c: "bottom-[14%] left-[10%]", s: "text-3xl opacity-20" },
  { e: "✏️", c: "bottom-[22%] right-[12%]", s: "text-2xl opacity-30" },
  { e: "🧩", c: "top-[48%] left-[4%]", s: "text-2xl opacity-20" },
  { e: "🖍️", c: "top-[42%] right-[5%]", s: "text-2xl opacity-25" },
  { e: "☁️", c: "top-[70%] left-[16%]", s: "text-2xl opacity-20" },
  { e: "🪁", c: "bottom-[40%] right-[16%]", s: "text-2xl opacity-20" },
];

export default function KidsBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-blush-light/40 blur-3xl" />
      <div className="absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-blush-light/30 blur-3xl" />
      {emojis.map((it, i) => (
        <span key={i} className={`absolute ${it.c} ${it.s}`}>{it.e}</span>
      ))}
    </div>
  );
}