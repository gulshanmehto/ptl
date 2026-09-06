import { CONTACT_EMAIL } from "@/lib/checkout";

export default function Footer() {
  return (
    <footer className="bg-plum text-cream/80 py-12 pb-24 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="font-display text-2xl text-cream">Pretty <span className="text-blush italic">Little</span> Things</div>
        <p className="mt-3 text-sm max-w-xl mx-auto">Printable kids worksheets & 3D paper crafts — helping parents turn screen time into learning time.</p>
        <p className="mt-4 text-sm">Questions? Email <a href={`mailto:${CONTACT_EMAIL}`} className="text-blush underline">{CONTACT_EMAIL}</a></p>
        <p className="mt-6 text-xs text-cream/50">© {new Date().getFullYear()} Pretty Little Things. Digital delivery — nothing ships. All sales final.</p>
      </div>
    </footer>
  );
}