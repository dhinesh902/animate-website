"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export function OurPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.06]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const headlineParallax = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const words = [
    { text: "THINK", serif: false },
    { text: "BOLD.", serif: true },
    { text: "FEEL", serif: false },
    { text: "FRESH.", serif: true },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-40 px-4 sm:px-8 bg-[#FF7900] text-[#080808] overflow-hidden select-none"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#080808_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Row */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#080808]/70 pb-8 border-b border-[#080808]/20 mb-16 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#080808]">02</span>
            <span>/ OUR PHILOSOPHY</span>
          </div>
          <div className="hidden sm:block">THE RAW DOCTRINE</div>
        </div>

        {/* Dynamic Composition: Overlapping Headline & Botanical Image */}
        <div className="relative">
          {/* Main Oversized Typography */}
          <motion.div style={{ y: headlineParallax }} className="relative z-10 max-w-4xl">
            <h2
              ref={textRef}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-[-0.05em] uppercase leading-[0.82] text-[#080808]"
            >
              <div className="flex flex-wrap gap-x-6 sm:gap-x-10">
                {words.slice(0, 2).map((item, i) => (
                  <span key={i} className="inline-block overflow-hidden py-1">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      animate={isTextInView ? { y: "0%", opacity: 1 } : {}}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + i * 0.14,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`inline-block ${
                        item.serif
                          ? "font-editorial-serif italic font-normal tracking-normal text-[#F4EFE5]"
                          : ""
                      }`}
                    >
                      {item.text}
                    </motion.span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-6 sm:gap-x-10 mt-2 sm:mt-4">
                {words.slice(2, 4).map((item, i) => (
                  <span key={i} className="inline-block overflow-hidden py-1">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      animate={isTextInView ? { y: "0%", opacity: 1 } : {}}
                      transition={{
                        duration: 0.9,
                        delay: 0.38 + i * 0.14,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`inline-block ${
                        item.serif
                          ? "font-editorial-serif italic font-normal tracking-normal text-[#F4EFE5]"
                          : ""
                      }`}
                    >
                      {item.text}
                    </motion.span>
                  </span>
                ))}
              </div>
            </h2>
          </motion.div>

          {/* Overlapping Artistic Orange Specimen Image */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-8 lg:right-0 lg:w-[46%] z-20">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-[460px] ml-auto overflow-hidden border-2 border-[#080808] shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
            >
              <Image
                src="/orange-hero.png"
                alt="Artistic botanical orange with natural leaves"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#FF7900]/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-[#080808] text-white px-3 py-1 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase">
                STUDY 02 // CHROMATIC ESSENCE
              </div>
            </motion.div>
          </div>

          {/* Supporting Statement in High-Contrast Layout */}
          <div className="mt-14 sm:mt-24 lg:mt-32 max-w-xl relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-4 border-[#080808] pl-6 sm:pl-8 py-2"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#080808] leading-snug">
                "Our philosophy is simple. Celebrate individuality, embrace creativity, and bring a little more brightness into everyday life."
              </p>
              <div className="mt-4 text-xs font-mono tracking-[0.25em] uppercase text-[#080808]/70">
                JRINK CODE OF CONDUCT // PURE CITRUS
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
