import TopBar from "@/components/sales/TopBar";
import Navbar from "@/components/sales/Navbar";
import Hero from "@/components/sales/Hero";
import Countdown from "@/components/sales/Countdown";
import VisualKit from "@/components/sales/VisualKit";
import Activities from "@/components/sales/Activities";
import Problem from "@/components/sales/Problem";
import Comparison from "@/components/sales/Comparison";
import WhoFor from "@/components/sales/WhoFor";
import WhatsInside from "@/components/sales/WhatsInside";
import BumpOffer from "@/components/sales/BumpOffer";
import Testimonials from "@/components/sales/Testimonials";
import HowReceive from "@/components/sales/HowReceive";
import FAQ from "@/components/sales/FAQ";
import Pricing from "@/components/sales/Pricing";
import Footer from "@/components/sales/Footer";
import StickyCTA from "@/components/sales/StickyCTA";
import PricingModal from "@/components/sales/PricingModal";

export default function Home() {
  return (
    <div className="bg-cream">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <VisualKit />
        <Activities />
        <Problem />
        <Comparison />
        <WhoFor />
        <WhatsInside />
        <BumpOffer />
        <Testimonials />
        <HowReceive />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
      <StickyCTA />
      <PricingModal />
    </div>
  );
}