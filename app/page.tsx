import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { OrangeCinema } from "@/components/sections/OrangeCinema";
import { OrangeEditorial } from "@/components/sections/OrangeEditorial";
import { Freshness } from "@/components/sections/Freshness";
import { Manifesto } from "@/components/sections/Manifesto";
import { FinalCampaign } from "@/components/sections/FinalCampaign";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-[#070707] text-[#F8F8F9] min-h-screen">
      {/* Editorial Custom Cursor */}
      <CustomCursor />

      {/* Brand Header & Editorial Menu Overlay */}
      <Header />

      {/* 01 — Hero: A Fruit With An Attitude */}
      <Hero />

      {/* 02 — Main Attraction: Scroll Cinema (HTML5 Canvas + GSAP Pinning) */}
      <OrangeCinema />

      {/* 03 — The Orange: An Editorial Study */}
      <OrangeEditorial />

      {/* 04 — The Art of Freshness (Unexpected Orange Background) */}
      <Freshness />

      {/* 05 — The Brand Manifesto (Individual Line Scroll Reveal) */}
      <Manifesto />

      {/* 06 — Final Campaign: The Last Word */}
      <FinalCampaign />

      {/* 07 — The Signature Editorial Footer */}
      <Footer />
    </main>
  );
}
