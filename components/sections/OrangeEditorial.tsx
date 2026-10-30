"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OrangeEditorial() {
  const annotations = [
    { label: "OBJECT", value: "001" },
    { label: "COLLECTION", value: "CITRUS" },
    { label: "COLOUR", value: "ORANGE" },
    { label: "FORM", value: "NATURAL" },
  ];

  return (
    <section
      id="editorial"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#070707] text-[#F8F8F9] overflow-hidden font-sans border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Index Row */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[#F76707]">02</span>
            <span>/ THE EDITORIAL STUDY</span>
          </div>
          <div>ANATOMY OF A FRUIT</div>
        </div>

        {/* Asymmetrical Two-Column Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Column 1: Large Close-Up Photographic Crop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border border-white/10 group">
              <Image
                src="/orange-hero.png"
                alt="Close-up Botanical Orange Study"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-40" />

              {/* Minimal Stamp */}
              <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest uppercase text-white/70 bg-black/60 px-3 py-1.5 backdrop-blur-sm border border-white/10">
                FIG. 01 — SURFACE TENSION & SOLAR MATRIX
              </div>
            </div>
          </motion.div>

          {/* Column 2: Editorial Typeset Headline, Paragraph & Annotations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            {/* Massive Headline */}
            <div className="mb-10 sm:mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F76707] block mb-4">
                // STUDY NO. 01
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] uppercase leading-[0.9] text-white">
                AN ICON.
                <span className="block font-editorial-serif italic font-normal text-[#F4EFE6] lowercase tracking-normal">
                  in its own skin.
                </span>
              </h2>
            </div>

            {/* Carefully typeset editorial paragraph */}
            <div className="border-l border-white/15 pl-6 sm:pl-8 mb-12">
              <p className="text-xl sm:text-2xl text-[#F4EFE6]/90 font-light leading-relaxed">
                "Colour that catches your eye. Texture that tells its own story. A naturally vibrant form that needs no introduction."
              </p>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#7A7A80] mt-4">
                JRINK BOTANICAL ARCHIVE // ESSAY NO. 04
              </p>
            </div>

            {/* Tiny Annotations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.08] font-mono">
              {annotations.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#7A7A80] mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-white tracking-wider">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

