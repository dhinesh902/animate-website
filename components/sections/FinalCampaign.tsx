"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FinalCampaign() {
  const handleEnterWorld = () => {
    const el = document.getElementById("cinema");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#090807] text-[#F8F8F9] overflow-hidden font-sans border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Top Campaign Index Row */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[#F76707]">05</span>
            <span>/ THE LAST WORD</span>
          </div>
          <div>GLOBAL CAMPAIGN // 2026</div>
        </div>

        {/* Campaign Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Oversized Orange Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/orange-hero.png"
                alt="JRINK Final Campaign Subject"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent opacity-50" />

              <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-widest uppercase text-white/80 bg-black/70 px-3 py-1.5 border border-white/10">
                FINAL FRAME // BOTTLE METAMORPHOSIS
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Headline, Supporting Copy & Luxury CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start justify-center"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F76707] font-semibold mb-4">
              // CONCLUSION
            </span>

            {/* Large headline */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.05em] uppercase leading-[0.88] text-white mb-6">
              <span className="block">MAKE ROOM</span>
              <span className="block font-editorial-serif italic font-normal text-[#F4EFE6] lowercase tracking-normal">
                for
              </span>
              <span className="block text-[#F76707]">ORANGE.</span>
            </h2>

            {/* Supporting text */}
            <p className="text-xl sm:text-2xl font-light text-[#F4EFE6]/90 leading-relaxed mb-10 max-w-md">
              "THE WORLD LOOKS BETTER IN ORANGE."
            </p>

            {/* Custom Designed Editorial CTA Button */}
            <button
              onClick={handleEnterWorld}
              className="editorial-btn group flex items-center gap-4 px-8 py-5 border border-[#F76707] bg-transparent text-white hover:text-black font-mono text-xs uppercase tracking-[0.25em] font-bold cursor-pointer"
            >
              <span>ENTER THE JRINK WORLD</span>
              <ArrowRight className="w-4 h-4 text-[#F76707] group-hover:text-black group-hover:translate-x-1.5 transition-all relative z-10" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

