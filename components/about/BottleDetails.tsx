"use client";

import { motion, AnimatePresence } from "framer-motion";

export interface BottleData {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  tasteNotes: string[];
  extraction: string;
  volume: string;
  image: string;
  accentColor: string;
}

interface BottleDetailsProps {
  bottle: BottleData;
}

export function BottleDetails({ bottle }: BottleDetailsProps) {
  return (
    <div className="relative min-h-[180px] sm:min-h-[200px] flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={bottle.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Micro Index Badge */}
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FF7900] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900] shadow-[0_0_8px_#FF7900]" />
            <span>EXHIBIT // {bottle.number}</span>
            <span className="text-white/20">•</span>
            <span className="text-[#929292]">{bottle.subtitle}</span>
          </div>

          {/* Flavour Title */}
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-white leading-tight mb-3 sm:mb-4">
            {bottle.name}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#F4EFE5]/85 font-light leading-relaxed max-w-lg mb-6">
            "{bottle.description}"
          </p>

          {/* Tasting Notes / Architectural Specs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80]">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
              {bottle.extraction}
            </span>
            <span className="hidden xs:inline text-white/20">•</span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
              {bottle.tasteNotes.join(" / ")}
            </span>
            <span className="hidden xs:inline text-white/20">•</span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
              {bottle.volume}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

