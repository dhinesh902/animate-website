"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplets, Zap, ArrowUpRight } from "lucide-react";

export function FeaturesSection() {
  const cards = [
    {
      id: "01",
      code: "[ COMPONENT // 01 ]",
      title: "NATURAL BEAUTY",
      description: "Inspired by the vibrant beauty of fresh oranges.",
      subtext: "Luminous solar tones and raw botanical elegance woven into every nuance.",
      icon: Sparkles,
      tag: "Vibrant Character",
      highlight: "100% Sourced",
    },
    {
      id: "02",
      code: "[ COMPONENT // 02 ]",
      title: "BOLD FRESHNESS",
      description: "A refreshing visual celebration of orange.",
      subtext: "Crisp sensory profile designed to delight from the very first impression.",
      icon: Droplets,
      tag: "Pure Awakening",
      highlight: "Cold-Pressed",
    },
    {
      id: "03",
      code: "[ COMPONENT // 03 ]",
      title: "PURE ENERGY",
      description: "A bright and vibrant experience for every moment.",
      subtext: "An uplifting burst of vitality crafted to elevate any occasion.",
      icon: Zap,
      tag: "Solar Radiance",
      highlight: "Raw Terpenes",
    },
  ];

  return (
    <section id="features" className="relative py-36 sm:py-48 px-6 bg-[#050505] overflow-hidden font-sans">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#FF7A00]/8 via-[#FFA726]/10 to-[#FFB300]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#09090b]/80 border border-white/[0.1] backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA726] shadow-[0_0_8px_#FFA726]" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8E8E93] font-medium">
              [ 03 // THE ELEMENTS ]
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] uppercase leading-[0.92] mb-6 text-white"
          >
            DISCOVER THE <span className="text-gradient-orange">ELEMENTS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#8E8E93] font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Every detail is meticulously calibrated to deliver an unmatched harmony of visual elegance and sensory delight.
          </motion.p>
        </div>

        {/* 3 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 sm:p-10 rounded-2xl bg-[#09090b]/70 border border-white/[0.08] backdrop-blur-xl hover:border-[#FF7A00]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(255,122,0,0.2)] hover:-translate-y-2"
              >
                {/* Background Hover Radial Glow */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#FF7A00]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div>
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/25 text-[#FFA726] group-hover:bg-[#FF7A00]/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs tracking-widest text-[#8E8E93] group-hover:text-[#FFA726] transition-colors">
                      {card.code}
                    </span>
                  </div>

                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFA726] font-semibold">
                      {card.tag}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93]">
                      {card.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-white mb-4 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-white/90 font-medium leading-relaxed mb-3">
                    {card.description}
                  </p>

                  {/* Subtext */}
                  <p className="text-sm text-[#8E8E93] font-normal leading-relaxed">
                    {card.subtext}
                  </p>
                </div>

                {/* Bottom Border Accent Line */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#8E8E93] group-hover:text-white transition-colors">
                  <span>EXPLORE NUANCE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFA726] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
