import { Star } from "lucide-react";
import { openCheckout } from "@/lib/checkout-modal";
import KidsBg from "@/components/sales/KidsBg";

const reviews = [
  { name: "Priya, mom of 2", text: "My daughter went from screen time to worksheet time without a single complaint. We've reprinted our favorites at least five times!" },
  { name: "Rahul, dad of a 5-yr-old", text: "Best ₹349 I've spent. My son asks for a new page every morning instead of the iPad." },
  { name: "Anjali, primary teacher", text: "I use these in my classroom and every student wants to keep going. The Hindi sheets are a lovely bonus!" },
  { name: "Meera, mom of 3", text: "Three kids, one bundle, endless printing. Worth every single rupee." },
  { name: "Kavita, preschool owner", text: "Clean, bright and age-perfect. My whole preschool uses these worksheets now." },
  { name: "Sneha, first-time mom", text: "The tracing pages gave my toddler real pencil confidence in just two weeks. So happy!" },
];

const photoReviews = [
  "https://prettylilthings.in/wp-content/uploads/2026/09/1.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/2.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/3.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/4.webp",
  "https://prettylilthings.in/wp-content/uploads/2026/09/6.webp",
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <KidsBg />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <span className="block text-center text-blush font-bold uppercase tracking-[0.2em] text-xs">What people are saying</span>
        <h2 className="mt-4 text-center font-display text-2xl sm:text-4xl text-ink">Parents love it — and kids do too 💛</h2>
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-blush text-blush" />
            ))}
          </div>
          <span className="text-sm font-semibold text-ink-soft">Rated 4.9 out of 5 by 2,000+ happy parents</span>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-blush text-blush" />
                ))}
              </div>
              <p className="mt-4 text-ink-soft leading-relaxed text-sm">"{r.text}"</p>
              <p className="mt-4 text-sm font-semibold text-ink">— {r.name}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-center font-display text-xl sm:text-2xl text-ink">Real reviews from real parents</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {photoReviews.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Parent review ${i + 1}`}
              loading="lazy"
              className="rounded-xl shadow-md border border-ink/10 w-full object-cover aspect-[4/5]"
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={openCheckout}
            className="inline-flex bg-blush text-white rounded-[10px] px-10 py-4 font-bold text-lg uppercase shadow-lg hover:bg-blush-dark transition-colors"
          >
            Join Happy Parents — Get the Bundle
          </button>
        </div>
      </div>
    </section>
  );
}