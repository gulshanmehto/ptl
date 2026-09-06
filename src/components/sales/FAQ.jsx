import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  ["What exactly do I get?", "A digital bundle of 14,000+ printable PDF worksheets — alphabets, numbers, tracing, reading, coloring, puzzles, word search, Hindi and more. Download instantly and print at home. The Masterpiece Bundle also adds 150+ 3D paper craft designs."],
  ["Is this suitable for my child's age?", "Yes — covers ages 2 to 8. Toddlers start with tracing, shapes and coloring. Older kids move to reading, writing, early math, puzzles and Hindi. The 3D crafts suit ages 4–10."],
  ["Do I need a printer at home?", "A home printer is easiest, but you can take the PDFs to any local print shop or cyber cafe. Standard A4 paper works perfectly."],
  ["How quickly do I get the files?", "Instantly! After payment, the download link appears right away. No waiting, no shipping."],
  ["Can I use this for more than one child?", "Absolutely — it's a printable PDF for your household. Print as many copies as you need for siblings or cousins."],
  ["Is this a one-time payment or subscription?", "One-time payment. No recurring charges, no hidden fees. Pay once and it's yours forever."],
  ["Are Hindi worksheets included?", "Yes! Hindi learning activities are included as their own set inside the bundle, alongside all English worksheets."],
  ["What if I face any problem?", "Email us at mysmarthustlelife@gmail.com and we'll sort it out. We're here for you!"],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-20 sm:py-28 bg-blush-light/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-center text-blush font-semibold uppercase tracking-widest text-xs">Questions & Answers</p>
        <h2 className="mt-3 text-center font-display text-3xl sm:text-5xl text-ink">Everything you want to know</h2>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={i} className="bg-white rounded-2xl border border-ink/5 overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-ink">{q}</span>
                <Plus className={`w-5 h-5 text-blush shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-ink-soft text-sm leading-relaxed">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}