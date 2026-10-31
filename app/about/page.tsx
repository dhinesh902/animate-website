import { Metadata } from "next";
import { Header } from "@/components/navigation/Header";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { BottleShowcase } from "@/components/about/BottleShowcase";
import { OurPhilosophy } from "@/components/about/OurPhilosophy";
import { OurDifference } from "@/components/about/OurDifference";
import { BrandStatement } from "@/components/about/BrandStatement";
import { AboutClosing } from "@/components/about/AboutClosing";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "About JRINK® — Beyond the Ordinary | Citrus Story",
  description:
    "We are more than a drink. Discover the story, philosophy, and uncompromising character behind JRINK Orange.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-[#080808] text-[#F8F8F9] min-h-screen">
      {/* Luxury Editorial Custom Cursor */}
      <CustomCursor />

      {/* Shared Brand Header & Index Overlay */}
      <Header />

      {/* 01 — Hero: Beyond the Ordinary */}
      <AboutHero />

      {/* 02 — Our Story: Every Great Story Starts Somewhere */}
      <OurStory />

      {/* 03 — 3D Bottle Showcase: Freshness in Every Dimension */}
      <BottleShowcase />

      {/* 04 — Our Philosophy: Think Bold. Feel Fresh. (Immersive Orange) */}
      <OurPhilosophy />

      {/* 05 — What Makes JRINK Different: Pillars of Distinction */}
      <OurDifference />

      {/* 06 — Brand Statement: Masked Monumental Typography */}
      <BrandStatement />

      {/* 07 — Closing: This Is Just The Beginning */}
      <AboutClosing />

      {/* 08 — Shared Editorial Footer */}
      <Footer />
    </main>
  );
}

