import { Star } from "lucide-react";
import { openCheckout } from "@/lib/checkout-modal";
import KidsBg from "@/components/sales/KidsBg";

const pills = [
  { icon: "📚", label: "14,000+ printable resources" },
  { icon: "🖨️", label: "PDF ready to print" },
  { icon: "⚡", label: "Instant access by email" },
];

const thumbs = [
  "https://prettylilthings.in/wp-content/uploads/2026/09/1-2.png",
  "https://prettylilthings.in/wp-content/uploads/2026/09/11-2.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/10-1.png",
  "https://prettylilthings.in/wp-content/uploads/2026/09/8-6.webp",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-6 pb-10 sm:pt-10 sm:pb-14 max-w-5xl mx-auto text-center">
      <KidsBg />
      <div className="relative">
        <span className="inline-block bg-blush-light text-blush-dark text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-blush/30">
          ✨ Printable Kids Activity Kit · 14,000+ Resources
        </span>
        <h1 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-ink">
          Turn Screen Time Into <span className="text-blush italic">Fun Learning</span> With 14,000+ Printable Activities
        </h1>
        <p className="mt-5 text-sm sm:text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
          A digital printable PDF bundle for Indian families, teachers and schools — ready to download, print and use.
        </p>
        <div className="mt-6 flex justify-center">
          <img
            src="https://media-cdn.cosmofeed.com/chat/ChatGPT-Image-Sep-5--2026--04-09-07-50-33.png"
            alt="The Ultimate Kids Learning Bundle"
            loading="eager"
            className="w-full max-w-[520px] sm:max-w-[640px] h-auto object-contain drop-shadow-2xl rounded-3xl"
          />
        </div>
        <div className="mt-4 flex justify-center gap-2 sm:gap-3">
          {thumbs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Sample page ${i + 1}`}
              loading="lazy"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-white shadow-md"
            />
          ))}
        </div>
        <div className="mt-6">
          <button
            onClick={openCheckout}
            className="inline-flex items-center justify-center bg-blush text-white rounded-[10px] px-10 py-4 sm:px-12 sm:py-5 font-bold text-lg sm:text-2xl uppercase shadow-lg hover:bg-blush-dark transition-colors"
          >
            Get the Bundle →
          </button>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {pills.map((p) => (
              <span key={p.label} className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
                <span>{p.icon}</span> {p.label}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-blush text-blush" />
            ))}
          </div>
          <span className="text-sm font-semibold text-ink-soft">Rated 4.9 out of 5</span>
        </div>
      </div>
    </section>
  );
}