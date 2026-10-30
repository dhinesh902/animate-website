"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export function CTASection() {
  const [reserved, setReserved] = useState(false);
  const [selectedPack, setSelectedPack] = useState<"standard" | "artisan">("artisan");

  const handleReserve = () => {
    setReserved(true);
    setTimeout(() => setReserved(false), 4000);
  };

  return (
    <section className="relative py-36 sm:py-48 px-6 bg-[#050505] overflow-hidden border-t border-white/[0.06] font-sans">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Dramatic Golden & Orange Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-gradient-to-tr from-[#FF7A00]/16 via-[#FFA726]/10 to-transparent rounded-full blur-[190px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#09090b]/85 backdrop-blur-2xl p-8 sm:p-16 lg:p-20 shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
          {/* Subtle Orange Glow Top Highlight Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent shadow-[0_0_20px_#FF7A00]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 backdrop-blur-md mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFA726]" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFA726] font-semibold">
                  [ 04 // RESERVE YOUR TASTE ]
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] uppercase leading-[0.9] text-white mb-6"
              >
                MAKE EVERY MOMENT <span className="text-gradient-orange">REFRESHING.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-[#8E8E93] font-normal leading-relaxed mb-6 max-w-lg"
              >
                Discover the world of Jrink Orange. An artisan blend of pure solar citrus vitality and unfiltered botanical elegance.
              </motion.p>

              {/* Pack Selector */}
              <div className="flex items-center gap-3 mb-8 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedPack("standard")}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                    selectedPack === "standard"
                      ? "bg-white/10 border border-[#FF7A00] text-white"
                      : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  Tasting Duo (2x)
                </button>
                <button
                  onClick={() => setSelectedPack("artisan")}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                    selectedPack === "artisan"
                      ? "bg-white/10 border border-[#FF7A00] text-white shadow-[0_0_15px_rgba(255,122,0,0.3)]"
                      : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  Artisan Case (6x) • Batch 082
                </button>
              </div>

              {/* Guarantees */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#8E8E93] mb-8"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA726]" />
                  <span>Small-Batch Bottled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA726]" />
                  <span>Solar Ripened Fruit</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FFA726]" />
                  <span>Cold-Chain Delivered</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={handleReserve}
                  className="px-8 py-4 rounded-xl text-xs font-bold tracking-widest uppercase text-black bg-[#FF7A00] hover:bg-[#FFA726] shadow-[0_0_30px_rgba(255,122,0,0.5)] hover:shadow-[0_0_45px_rgba(255,122,0,0.7)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>{reserved ? "Allocation Secured ✓" : "Explore Jrink"}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[390px] rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group">
                <Image
                  src="/orange-hero.png"
                  alt="Jrink Orange Hero Experience Bottle"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-65" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#09090b]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#FFA726] uppercase">
                  Cinematic Edition
                </div>

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#09090b]/80 backdrop-blur-md border border-white/10 font-mono">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    UV-Protective Glass Bottle
                  </p>
                  <p className="text-[11px] text-[#8E8E93] mt-0.5 font-sans">
                    Preserves cold-pressed aromatic terpenes and flavor longevity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
