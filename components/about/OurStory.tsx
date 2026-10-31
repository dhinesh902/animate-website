"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const numberY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const editorialNotes = [
    { label: "FOUNDATION", value: "INDEPENDENT CRAFT" },
    { label: "HARVEST", value: "SOLAR RIPENED" },
    { label: "METHOD", value: "UNFILTERED ESSENCE" },
    { label: "CHARACTER", value: "NATURALLY BOLD" },
  ];

  return (
    <section
      id="our-story"
      ref={containerRef}
      className="relative py-24 sm:py-36 px-4 sm:px-8 bg-[#0D0D0D] text-[#F8F8F9] overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Index Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="text-[#FF7900] font-bold">01</span>
            <span>/ OUR STORY</span>
          </div>
          <div className="hidden sm:block">GENESIS OF TASTE</div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Orange Fruit Photograph with Bottom-to-Top Reveal */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
                opacity: 0,
              }}
              whileInView={{
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ y: imageY }}
              className="relative w-full aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img
                src="https://jrink.com/cdn/shop/products/DSC04339_d8fa07f1-95ca-43c3-83dc-ac404f03519f.jpg?v=1584163323"
                alt="The Genesis of JRINK"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-50" />

              {/* Photographic Stamp Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-white/80 bg-black/60 px-3.5 py-2 backdrop-blur-md border border-white/10">
                <span>PLATE 01 — BOTANICAL ORIGIN</span>
                <span className="text-[#FF7900]">100% CITRUS</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Headline, Story Copy, Annotations & Decorative 01 */}
          <div ref={textRef} className="lg:col-span-7 relative flex flex-col justify-center">
            {/* Giant Decorative Number in Background */}
            <motion.div
              style={{ y: numberY }}
              className="absolute -top-12 -right-4 sm:-right-8 text-[14rem] sm:text-[20rem] md:text-[24rem] font-bold text-white/[0.03] select-none pointer-events-none leading-none z-0 font-sans"
            >
              01
            </motion.div>

            {/* Main Headline */}
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95] text-white"
              >
                <span className="block">EVERY GREAT STORY</span>
                <span className="block font-editorial-serif italic font-normal text-[#F4EFE5] lowercase tracking-normal pl-2 sm:pl-3">
                  starts somewhere.
                </span>
              </motion.h2>

              {/* Lead Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 sm:mt-12 border-l-2 border-[#FF7900] pl-6 sm:pl-8"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug">
                  JRINK WAS BORN FROM A SIMPLE IDEA — TO MAKE EVERYDAY REFRESHMENT FEEL EXTRAORDINARY.
                </p>
              </motion.div>

              {/* Supporting Secondary Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 sm:mt-8 text-base sm:text-lg text-[#F4EFE5]/75 font-light leading-relaxed max-w-xl"
              >
                We are inspired by the vibrant character of nature, the beauty of simplicity, and the power of standing out. In a world full of homogenized sweetness and synthetic flavours, JRINK was crafted as an ode to raw citrus purity.
              </motion.p>

              {/* Editorial Annotations Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {editorialNotes.map((note, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#7A7A80] uppercase mb-1">
                      {note.label}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                      {note.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
