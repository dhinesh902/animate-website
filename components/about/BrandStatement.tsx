"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const lineVariants = {
    hidden: { y: "120%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.1,
        delay: 0.15 + i * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const lines = [
    { text: "WE DON'T FOLLOW", serif: false, orange: false },
    { text: "the ordinary.", serif: true, orange: false },
    { text: "WE CREATE", serif: false, orange: false },
    { text: "OUR OWN WORLD.", serif: false, orange: true },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-32 sm:py-48 px-4 sm:px-8 bg-[#050505] text-[#F8F8F9] select-none border-t border-white/[0.08] overflow-hidden"
    >
      {/* Ambient Focal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[35vw] max-w-[900px] max-h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between min-h-[60vh]">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-12 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[#FF7900] font-bold">04</span>
            <span>/ THE MANIFESTO</span>
          </div>
          <div>SINGULAR REALITY</div>
        </div>

        {/* Monumental Masked Statement */}
        <div className="my-auto py-8">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-[-0.04em] uppercase leading-[0.92] text-white">
            {lines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-1 sm:py-2">
                <motion.span
                  custom={idx}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className={`block ${
                    line.serif
                      ? "font-editorial-serif italic font-normal text-[#F4EFE5] lowercase tracking-normal pl-2 sm:pl-6"
                      : ""
                  } ${line.orange ? "text-[#FF7900]" : ""}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        {/* Small JRINK® Signature at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 sm:pt-16 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80]"
        >
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold tracking-tight text-white">JRINK®</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
            <span>ORIGINAL FORMULATION // 2026</span>
          </div>

          <div className="text-[11px] text-[#929292]">
            AUTHENTIC CITRUS ARCHITECTURE • DESIGNED IN EUROPE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
