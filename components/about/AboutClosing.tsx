"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutClosing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const lineVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.0,
        delay: 0.15 + i * 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-44 px-4 sm:px-8 bg-[#080808] text-[#F8F8F9] select-none border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Solar Flare */}
      <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.07)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Index Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="text-[#FF7900] font-bold">05</span>
            <span>/ THE EPILOGUE</span>
          </div>
          <div>FUTURE FORWARD</div>
        </div>

        {/* Dramatic Closing Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Climax & Interactive CTA */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF7900] block mb-4">
              THE NEXT CHAPTER
            </span>

            {/* Oversized Headline */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-bold tracking-[-0.04em] uppercase leading-[0.9] text-white">
              <span className="block overflow-hidden py-1">
                <motion.span
                  custom={0}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isTextInView ? "visible" : "hidden"}
                  className="block"
                >
                  THIS IS
                </motion.span>
              </span>

              <span className="block overflow-hidden py-1">
                <motion.span
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isTextInView ? "visible" : "hidden"}
                  className="block font-editorial-serif italic font-normal text-[#F4EFE5] lowercase tracking-normal pl-2 sm:pl-4"
                >
                  just the
                </motion.span>
              </span>

              <span className="block overflow-hidden py-1">
                <motion.span
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isTextInView ? "visible" : "hidden"}
                  className="block text-[#FF7900]"
                >
                  BEGINNING.
                </motion.span>
              </span>
            </h2>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-xl sm:text-2xl text-[#F4EFE5]/85 font-light leading-relaxed max-w-lg"
            >
              Welcome to the world of JRINK.
            </motion.p>

            {/* Animated Interactive CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 sm:mt-16"
            >
              <Link
                href="/#cinema"
                className="group inline-flex items-center gap-4 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#F8F8F9] hover:text-[#FF7900] transition-colors pb-3 relative"
              >
                <span className="font-semibold">EXPLORE OUR WORLD</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF7900] group-hover:bg-[#FF7900] group-hover:text-black transition-all duration-400">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>

                {/* Animated CTA Underline on Hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF7900] group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Dramatic Editorial Crop of Bottled Orange Art */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <motion.div
              initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: imageY, scale: imageScale }}
              className="relative w-full max-w-[460px] aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)] group"
            >
              <Image
                src="/orange/ezgif-frame-299.jpg"
                alt="JRINK Bottled Art In Pure Form"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Minimal Editorial Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/80 bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                  FINAL EXHIBIT
                </span>
                <span className="text-[#929292]">COLD-CRAFTED ART</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
