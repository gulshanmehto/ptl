import { useState } from "react";
import LoadingScreen from "@/components/towing/LoadingScreen";
import Navbar from "@/components/towing/Navbar";
import Hero from "@/components/towing/Hero";
import Marquee from "@/components/towing/Marquee";
import Services from "@/components/towing/Services";
import WhyChooseUs from "@/components/towing/WhyChooseUs";
import Process from "@/components/towing/Process";
import Reviews from "@/components/towing/Reviews";
import ServiceArea from "@/components/towing/ServiceArea";
import EmergencyFooter from "@/components/towing/EmergencyFooter";
import FloatingCall from "@/components/towing/FloatingCall";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen onDone={() => setLoaded(true)} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyChooseUs />
        <Process />
        <Reviews />
        <ServiceArea />
      </main>
      <EmergencyFooter />
      {loaded && <FloatingCall />}
    </div>
  );
}