import { Check } from "lucide-react";
import { CHECKOUT_BUMP } from "@/lib/checkout";

const bonuses = [
  { img: "https://creative.parentingshop.in/wp-content/uploads/2026/09/Bonus-1-Paper-Toy.webp", title: "150+ Paper Toys", points: ["150+ characters to cut & assemble", "Animals, cartoons, superheroes & more", "Builds focus and creativity"] },
  { img: "https://creative.parentingshop.in/wp-content/uploads/2026/09/Bonus-2-Space-Kit.webp", title: "3D Space Kit", points: ["Rockets, space stations & vehicles", "Ready-to-print HD templates", "Print, cut, color & assemble"] },
  { img: "https://creative.parentingshop.in/wp-content/uploads/2026/09/Bonus-3-ROBOT-KIT.webp", title: "Papertoy Robot Templates", points: ["Build & color it yourself", "3 additional 3D robot designs", "Great for room decor"] },
];

const designs = [
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/2.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/3.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/4.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/5.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/6.webp",
  "https://creative.parentingshop.in/wp-content/uploads/2026/07/7.webp",
];

export default function BumpOffer() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blush-light/60 rounded-[2.5rem] blur-2xl" />
            <img src="https://creative.parentingshop.in/wp-content/uploads/2026/07/Untitled-design-4.webp" alt="Color & Create 3D Craft Kit" loading="lazy" className="relative rounded-3xl shadow-2xl shadow-ink/10 w-full" />
          </div>
          <div>
            <span className="inline-block bg-blush text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">🔥 Exclusive Add-On</span>
            <h2 className="mt-5 font-display text-3xl sm:text-5xl text-ink">Build it, don't just color it — 3D paper crafts.</h2>
            <p className="mt-5 text-ink-soft text-lg">Add the <strong className="text-ink">Color & Create Kit</strong> to your bundle and your child can print, cut, color & assemble real 3D paper toys — rockets, robots, characters and more. Screen-free fun that builds spatial thinking and fine motor skills.</p>
            <ul className="mt-6 space-y-2">
              {["150+ ready-to-print 3D designs", "Print as many times as you like", "Cut, color, fold & build — no glue mess", "Great for ages 4–10"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-ink-soft"><Check className="w-5 h-5 text-leaf shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {bonuses.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-ink/5">
              <img src={b.img} alt={b.title} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-ink text-lg">{b.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-ink-soft text-sm"><Check className="w-4 h-4 text-leaf mt-0.5 shrink-0" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-center text-ink-soft text-sm uppercase tracking-widest">A few of the 150+ designs</p>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
            {designs.map((src, i) => (
              <img key={i} src={src} alt={`Design ${i + 1}`} loading="lazy" className="rounded-xl shadow-md border border-ink/5 w-full aspect-square object-cover" />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center bg-blush-light/50 rounded-3xl p-8">
          <p className="font-display text-2xl sm:text-3xl text-ink">Get the workbook <span className="text-blush">+</span> 3D craft bundle together</p>
          <a href={CHECKOUT_BUMP} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex bg-blush text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-blush/30 hover:bg-blush-dark transition-colors">
            Get the Masterpiece Bundle — ₹649
          </a>
        </div>
      </div>
    </section>
  );
}