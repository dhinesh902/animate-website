"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#070707] text-[#F8F8F9] overflow-hidden flex flex-col items-center justify-center text-center font-sans border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 mb-8 sm:mb-12 font-mono text-xs uppercase tracking-[0.25em] text-[#7A7A80]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F76707]" />
          <span>04 // THE BRAND MANIFESTO</span>
        </motion.div>

        {/* 3-Line Centered Statement */}
        <div className="space-y-2 sm:space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] uppercase text-white"
          >
            WE BELIEVE THE ORDINARY
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-editorial-serif italic font-normal tracking-tight text-[#F4EFE6]"
          >
            deserves to be
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] uppercase text-[#F76707]"
          >
            EXTRAORDINARY.
          </motion.div>
        </div>

        {/* Small supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto pt-8 border-t border-white/10"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-[#7A7A80] leading-relaxed">
            JRINK IS A CELEBRATION OF COLOUR, CHARACTER AND THE ART OF STANDING OUT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
