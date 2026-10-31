"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export function ContactVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.05]);
  const textParallax = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-44 px-4 sm:px-8 bg-[#050505] text-[#F8F8F9] select-none border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Solar Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[35vw] max-w-[1000px] max-h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.07)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-16 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[#FF7900] font-bold">03</span>
            <span>/ THE CREATIVE IMPERATIVE</span>
          </div>
          <div className="hidden sm:block">OPEN DIALOGUE</div>
        </div>

        {/* Dynamic Composition: Dominant Visual & Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dominant Large Photographic Citrus Specimen */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square sm:aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] group"
            >
              {/* Floating Levitation Animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/orange-hero.png"
                  alt="Large artistic orange fruit with natural green leaves"
                  fill
                  className="object-cover object-center filter contrast-[1.08] saturate-[1.15] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Editorial Micro-Label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-white/80 bg-black/65 backdrop-blur-md px-3.5 py-2 border border-white/10">
                  <span>SPECIMEN // BOTANICAL ENERGY</span>
                  <span className="text-[#FF7900]">NATURAL VITALITY</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Monumental Statement & Supporting Copy */}
          <motion.div
            ref={textRef}
            style={{ y: textParallax }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF7900] block mb-4">
              COLLABORATION & IDEAS
            </span>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[0.92] text-white">
              <span className="block">GOOD IDEAS</span>
              <span className="block font-editorial-serif italic font-normal text-[#F4EFE5] lowercase tracking-normal pl-2 sm:pl-3">
                start with a
              </span>
              <span className="block text-[#FF7900]">HELLO.</span>
            </h2>

            {/* Supporting Sentence */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 border-l-2 border-[#FF7900] pl-6 max-w-lg"
            >
              <p className="text-xl sm:text-2xl font-light text-[#F4EFE5]/90 leading-relaxed">
                "From a simple question to a big collaboration, every conversation matters."
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm sm:text-base text-[#7A7A80] font-light leading-relaxed max-w-md"
            >
              Whether you represent an independent boutique café, an international retail group, or a creative studio, we welcome partnerships rooted in bold aesthetics and uncompromising quality.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

