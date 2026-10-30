"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Sparkles, Droplets, Sun, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const handleScrollToExperience = () => {
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToStory = () => {
    const el = document.getElementById("story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-between pt-36 pb-12 px-6 overflow-hidden bg-[#050505] font-sans"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />

      {/* Background Ambient Lighting & Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#FF7A00]/14 via-[#FFA726]/8 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/6 w-[360px] h-[360px] bg-[#FF7A00]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/6 w-[420px] h-[420px] bg-[#FFA726]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center my-auto">
        {/* Editorial Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#09090b]/80 border border-white/[0.1] backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(255,122,0,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#FFA726] font-medium">
            [ SOLAR HARVEST // 2026 EDITION ]
          </span>
        </motion.div>

        {/* Primary Headline with Space Grotesk Tight Tracking */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] uppercase leading-[0.88] mb-6"
        >
          <span className="block text-white">REFRESH</span>
          <span className="block text-gradient-orange">YOUR WORLD.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl font-normal text-white/90 max-w-2xl tracking-[-0.02em] mb-4"
        >
          Experience the pure essence of orange.
        </motion.p>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-sm sm:text-base text-[#8E8E93] max-w-lg font-normal leading-relaxed mb-10 tracking-normal"
        >
          A bold burst of freshness. Crafted to awaken your senses with nature’s most radiant solar citrus profile.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-6"
        >
          <button
            onClick={handleScrollToExperience}
            className="px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-black bg-[#FF7A00] hover:bg-[#FFA726] shadow-[0_0_25px_rgba(255,122,0,0.5)] hover:shadow-[0_0_40px_rgba(255,122,0,0.7)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
          >
            Discover the Experience
          </button>
          <button
            onClick={handleScrollToStory}
            className="px-7 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-white/[0.04] border border-white/[0.12] hover:border-[#FFA726]/50 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
          >
            Our Story
          </button>
        </motion.div>

        {/* Hero Visual Teaser with High-Fashion Framing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-8 w-full max-w-xl aspect-[4/3] flex items-center justify-center select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-[#FF7A00]/25 via-transparent to-transparent rounded-full blur-3xl transform scale-90" />

          {/* Floating Pill Left */}
          <div className="hidden md:flex absolute -left-10 top-1/4 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#09090b]/85 backdrop-blur-xl border border-white/[0.1] shadow-2xl animate-float-slow">
            <div className="p-1.5 rounded-lg bg-[#FF7A00]/20 text-[#FFA726]">
              <Sun className="w-4 h-4" />
            </div>
            <div className="text-left font-mono">
              <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">Ripened By</p>
              <p className="text-xs font-bold text-white tracking-wide">Pure Sunlight</p>
            </div>
          </div>

          {/* Floating Pill Right */}
          <div className="hidden md:flex absolute -right-10 bottom-1/4 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#09090b]/85 backdrop-blur-xl border border-white/[0.1] shadow-2xl animate-float-slow [animation-delay:2s]">
            <div className="p-1.5 rounded-lg bg-[#FFA726]/20 text-[#FFA726]">
              <Droplets className="w-4 h-4" />
            </div>
            <div className="text-left font-mono">
              <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">Extraction</p>
              <p className="text-xs font-bold text-white tracking-wide">Cold-Pressed</p>
            </div>
          </div>

          {/* Center Image Container */}
          <div className="relative w-full h-full max-w-[440px] max-h-[380px] overflow-hidden rounded-3xl border border-white/[0.12] shadow-[0_25px_80px_rgba(0,0,0,0.9)] group">
            <Image
              src="/orange-hero.png"
              alt="Jrink Orange Hero Experience"
              fill
              priority
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 450px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-65" />

            {/* Bottom Glass Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-3 rounded-xl bg-[#09090b]/80 backdrop-blur-md border border-white/10 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/90">
                  Unfiltered Formula
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#FFA726] tracking-wider">
                100% PURE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer pt-6"
        onClick={handleScrollToExperience}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#8E8E93] font-medium">
          [ SCROLL TO TRANSFORM ]
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#FF7A00]"
          />
        </motion.div>
        <ChevronDown className="w-3.5 h-3.5 text-[#8E8E93]" />
      </motion.div>
    </section>
  );
}
