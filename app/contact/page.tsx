import { Metadata } from "next";
import { Header } from "@/components/navigation/Header";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactVisual } from "@/components/contact/ContactVisual";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Contact JRINK® — Let's Make Something Fresh | Inquiries & Collaboration",
  description:
    "Connect with the JRINK citrus studio. Reach out for wholesale distribution, brand collaborations, press inquiries, or general support.",
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#080808] text-[#F8F8F9] min-h-screen">
      {/* Luxury Editorial Custom Pointer */}
      <CustomCursor />

      {/* Shared Brand Header & Index Navigation */}
      <Header />

      {/* 01 — Contact Hero: Let's Talk Fresh */}
      <ContactHero />

      {/* 02 — Main Contact Stage: Asymmetric Info & Minimal Form */}
      <section
        id="contact-section"
        className="relative py-24 sm:py-36 px-4 sm:px-8 bg-[#080808] border-t border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Contact Information Grid */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ContactInfo />
          </div>

          {/* Right Column: Premium Underline Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 03 — Creative Visual Break: Good Ideas Start With A Hello */}
      <ContactVisual />

      {/* 04 — Physical Cartography: Location & Coordinates Map */}
      <ContactMap />

      {/* 05 — Editorial FAQ Accordion */}
      <ContactFAQ />

      {/* 06 — Final Call to Action */}
      <ContactCTA />

      {/* 07 — Shared Editorial Footer */}
      <Footer />
    </main>
  );
}

