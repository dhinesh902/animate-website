"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sun, Leaf, Droplets, ArrowRight } from "lucide-react";

export function BrandStory() {
  const storyPoints = [
    {
      icon: Sun,
      code: "01 // SOLAR",
      title: "Sun-Drenched Groves",
      desc: "Harvested at peak solar maturation for maximum natural sweetness and rich citrus oil concentration.",
    },
    {
      icon: Droplets,
      code: "02 // PRESS",
      title: "Cold-Pressed Essence",
      desc: "Delicate hydraulic extraction preserves every subtle floral and tart nuance of freshly peeled fruit.",
    },
    {
      icon: Leaf,
      code: "03 // PURITY",
      title: "Pure Simplicity",
      desc: "Zero artificial dyes, zero synthetic preservatives. Just unfiltered orange expression bottled at source.",
    },
  ];

  const metrics = [
    { value: "100%", label: "Valencia Groves", sub: "Solar harvest profile" },
    { value: "0g", label: "Refined Sugar", sub: "Natural sweetness only" },
    { value: "3x", label: "Cold Filtration", sub: "Preserving raw citrus terpenes" },
  ];

  return (
    <section id="story" className="relative py-36 sm:py-48 px-6 bg-[#050505] overflow-hidden font-sans">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Background Ambient Warm Lighting */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[#FF7A00]/7 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#FFA726]/7 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#09090b]/80 border border-white/[0.1] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA726] shadow-[0_0_8px_#FFA726]" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8E8E93] font-medium">
              [ 02 // THE PHILOSOPHY ]
            </span>
          </div>
        </div>

        {/* Split-screen editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_25px_70px_rgba(0,0,0,0.95)] group">
              <Image
                src="/orange-hero.png"
                alt="Jrink Brand Story Visual"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80" />

              {/* Floating Glassmorphic Editorial Badge */}
              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#09090b]/80 backdrop-blur-md border border-white/10 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                <span className="text-[11px] tracking-wider uppercase text-white/90">
                  ORIGIN // SPAIN 2026
                </span>
              </div>

              {/* Floating Editorial Quote */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#09090b]/85 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FFA726] font-semibold">
                    [ UNCOMPROMISING CRAFT ]
                  </span>
                  <span className="text-xs font-mono text-white/40">EST. 2026</span>
                </div>
                <p className="text-sm text-white/90 font-normal leading-relaxed tracking-normal">
                  "Every bottle captures the vitality of an orange harvested under warm Mediterranean skies."
                </p>
              </div>
            </div>

            {/* Accent Glow Circle */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF7A00]/15 to-[#FFA726]/10 rounded-2xl blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: Editorial Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFA726] font-semibold mb-3">
              // CRAFTED WITH PURPOSE
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] uppercase leading-[0.92] mb-6 text-white">
              IT STARTS WITH <span className="text-gradient-orange">NATURE.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#8E8E93] font-normal leading-relaxed mb-8 tracking-normal">
              Every great experience begins with something simple. The vibrant colour, natural beauty, and refreshing character of the orange inspire the Jrink experience.
            </p>

            {/* Three Pillar Points */}
            <div className="space-y-4 mb-8">
              {storyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF7A00]/40 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-lg bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-[#FFA726] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-[#FFA726] tracking-wider uppercase">
                          {point.code}
                        </span>
                        <h3 className="text-base font-bold text-white tracking-tight uppercase">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#8E8E93] leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Metrics Row with Big Space Grotesk Numbers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] mb-8">
              {metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col font-mono">
                  <span className="text-3xl sm:text-4xl font-bold text-[#FFA726] tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-xs font-bold uppercase text-white mt-1">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-[#8E8E93] hidden sm:inline font-sans mt-0.5">
                    {m.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Explore Link */}
            <div>
              <a
                href="#features"
                className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#FFA726] hover:text-[#FF7A00] transition-colors group"
              >
                <span>Discover The Elements</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
