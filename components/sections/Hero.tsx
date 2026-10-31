"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById("cinema");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 bg-[#090807] text-[#F8F8F9] overflow-hidden select-none"
    >
      {/* Top Left Editorial Micro-Label */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="text-[#F76707] font-bold">JRINK®</span>
          <span>/</span>
          <span>CITRUS COLLECTION</span>
        </motion.div>
      </div>

      {/* Main Asymmetrical Stage */}
      <div className="max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Dramatic Editorial Headline */}
        <div className="lg:col-span-7 flex flex-col z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-[-0.05em] uppercase leading-[0.88] text-white"
          >
            <span className="block">NOT JUST</span>
            <span className="block font-editorial-serif italic font-normal text-[#F4EFE6] lowercase tracking-normal">
              another
            </span>
            <span className="block text-[#F76707]">ORANGE.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-8 sm:mt-12 max-w-md border-l border-[#F76707]/60 pl-6"
          >
            <p className="text-lg sm:text-xl text-[#F4EFE6]/90 font-light leading-relaxed">
              "Some things are better experienced than explained."
            </p>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#7A7A80] mt-3">
              THE ART OF ORANGE // SPECIFICATION 001
            </p>
          </motion.div>
        </div>

        {/* Right Column: Oversized Orange Photographic Subject */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-[4/5] rounded-none overflow-hidden border border-white/10 group">
            <Image
              src="/orange-hero.png"
              alt="JRINK Orange Subject"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            {/* Editorial Grain Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent opacity-60" />

            {/* Inset Photo Reference */}
            <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest uppercase text-white/70 bg-black/50 px-2.5 py-1 backdrop-blur-sm">
              PLATE 01.A / SEEDLESS
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Footer Row */}
      <div className="max-w-7xl w-full mx-auto flex items-end justify-between pt-10 border-t border-white/[0.08] text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80]">
        {/* Bottom Left: SCROLL TO DISCOVER */}
        <button
          onClick={handleScrollDown}
          className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#F76707] group-hover:translate-y-1 transition-transform" />
        </button>

        {/* Bottom Right: 01 / THE ORANGE CHAPTER */}
        <div>
          <span className="text-[#F76707]">01</span>
          <span> / THE ORANGE CHAPTER</span>
        </div>
      </div>
    </section>
  );
}

