import { useState, useEffect } from "react";

function getTarget() {
  const stored = localStorage.getItem("plt_deadline");
  if (stored) return parseInt(stored, 10);
  const t = Date.now() + 12 * 60 * 60 * 1000;
  localStorage.setItem("plt_deadline", String(t));
  return t;
}

export default function Countdown() {
  const [target] = useState(getTarget);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  let diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3600000); diff %= 3600000;
  const m = Math.floor(diff / 60000); diff %= 60000;
  const s = Math.floor(diff / 1000);
  const pad = (n) => String(n).padStart(2, "0");
  const boxes = [["Hours", pad(h)], ["Minutes", pad(m)], ["Seconds", pad(s)]];

  return (
    <section className="bg-gradient-to-r from-plum to-[#2a1320] px-4 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 shadow-2xl border-y border-white/10">
      <p className="text-cream font-extrabold text-sm sm:text-lg uppercase tracking-wide text-center">⏰ Special launch price — today only</p>
      <div className="inline-flex items-center gap-2 sm:gap-3 font-mono tabular-nums">
        {boxes.map(([label, val], i) => (
          <div key={label} className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center bg-blush rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[56px] sm:min-w-[76px] shadow-lg border border-white/15">
              <span className="text-2xl sm:text-4xl font-black leading-none text-white">{val}</span>
              <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.15em] mt-1 text-white/80 uppercase">{label}</span>
            </div>
            {i < 2 && <span className="text-white text-2xl sm:text-3xl font-black opacity-90">:</span>}
          </div>
        ))}
      </div>
    </section>
  );
}