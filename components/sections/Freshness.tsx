"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Freshness() {
  return (
    <section
      id="freshness"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#F76707] text-[#070707] overflow-hidden select-none font-sans"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Editorial Index Row on Orange Background */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#070707]/60 pb-8 border-b border-[#070707]/15 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#070707]">03</span>
            <span>/ THE ART OF FRESHNESS</span>
          </div>
          <div>SOLAR PALETTE</div>
        </div>

        {/* Asymmetrical Grid with Partially Cropped Edge Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Massive Typographic Statement & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] font-bold tracking-[-0.05em] uppercase leading-[0.85] text-[#070707]"
            >
              <span className="block">FRESH</span>
              <span className="block font-editorial-serif italic font-normal tracking-normal lowercase text-[#F4EFE6]">
                is a
              </span>
              <span className="block">FEELING.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 sm:mt-16 max-w-md border-l-2 border-[#070707] pl-6"
            >
              <p className="text-xl sm:text-2xl font-medium text-[#070707] leading-relaxed">
                "Bright in colour. Bold in character. Made to stand out."
              </p>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#070707]/70 mt-3">
                RAW EXPRESSION // NO FILLERS
              </p>
            </motion.div>
          </div>

          {/* Right Column: Large Photographic Orange Image Partially Cropped at Viewport Edge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-end"
          >
            <div className="relative w-full max-w-[480px] aspect-[3/4] overflow-hidden border-2 border-[#070707] shadow-2xl">
              <Image
                src="/orange-hero.png"
                alt="Fresh Orange in Pure Form"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F76707]/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 bg-[#070707] text-[#F8F8F9] px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                CROPPED SPECIMEN 02
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

