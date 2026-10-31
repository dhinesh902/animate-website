"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const lineVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.1,
        delay: 0.15 + i * 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("our-story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#080808] text-[#F8F8F9] overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 flex flex-col justify-between select-none"
    >
      {/* Background Subtle Solar Ambient Light */}
      <div className="absolute top-1/4 right-0 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(247,103,7,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* Top Editorial Index Header */}
      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between pb-6 border-b border-white/[0.08] text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80]"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
            <span className="text-[#FF7900] font-semibold">JRINK</span>
            <span>/ OUR STORY / 001</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>VOL. 01 — THE GENESIS</span>
            <span className="text-white/20">|</span>
            <span>BEYOND THE ORDINARY</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Asymmetric Composition */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-10 sm:py-16 relative z-10">
        {/* Left Column: Line-by-Line Editorial Typography & Supporting Copy */}
        <motion.div style={{ y: textY, opacity }} className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Micro-Tag */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 sm:mb-8"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF7900] border-b border-[#FF7900]/40 pb-0.5">
              THE MANIFESTO
            </span>
          </motion.div>

          {/* Main Oversized Headline (Masked Line-by-Line Reveal) */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-bold tracking-[-0.04em] uppercase leading-[0.9] text-white">
            <span className="block overflow-hidden py-1">
              <motion.span
                custom={0}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                WE ARE
              </motion.span>
            </span>

            <span className="block overflow-hidden py-1">
              <motion.span
                custom={1}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block font-editorial-serif italic font-normal lowercase tracking-normal text-[#F4EFE5] pl-2 sm:pl-4"
              >
                more than
              </motion.span>
            </span>

            <span className="block overflow-hidden py-1">
              <motion.span
                custom={2}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block text-[#FF7900]"
              >
                A DRINK.
              </motion.span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 max-w-xl border-l-2 border-[#FF7900] pl-5 sm:pl-7"
          >
            <p className="text-base sm:text-xl text-[#F4EFE5]/90 font-light leading-relaxed">
              We believe great experiences begin with simple things. Colour,
              character, creativity, and a refreshing perspective.
            </p>
            <div className="mt-4 flex items-center gap-4 text-[10px] font-mono tracking-[0.25em] uppercase text-[#7A7A80]">
              <span>LONDON / MILAN</span>
              <span>•</span>
              <span>100% UNFILTERED DISPOSITION</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Large Cinematic Orange Photograph Partially Cropped Beyond Viewport */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <motion.div
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              opacity: 0,
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 1,
            }}
            transition={{
              duration: 1.3,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ y: imageY, scale: imageScale }}
            className="relative w-full max-w-[440px] lg:max-w-none lg:w-[120%] lg:-right-8 aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
          >
            <Image
              src="/orange-hero.png"
              alt="Cinematic Botanical Orange Specimen"
              fill
              priority
              className="object-cover object-center filter contrast-[1.08] saturate-[1.12]"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />

            {/* Dark Studio Film Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,121,0,0.15)_0%,transparent_60%)] pointer-events-none" />

            {/* Editorial Metadata Overlay Plate */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/80 bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                SPECIMEN // 001.SOLAR
              </span>
              <span className="text-[#929292]">35MM ARCHIVE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row: Scroll Indicator & Editorial Coordinate Markers */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-8 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80]">
        <div className="flex items-center gap-3">
          <span className="text-[#FF7900]">01</span>
          <span>/</span>
          <span>06 CHAPTERS</span>
        </div>

        <button
          onClick={handleScrollDown}
          className="flex items-center gap-2.5 text-[#F8F8F9] hover:text-[#FF7900] transition-colors cursor-pointer group"
        >
          <span className="tracking-[0.25em]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF7900] group-hover:translate-y-1 transition-transform" />
        </button>

        <div className="hidden sm:block text-right text-[11px] text-[#7A7A80]">
          COORDINATES: 45.4642° N, 9.1900° E
        </div>
      </div>
    </section>
  );
}
