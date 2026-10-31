"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface DifferenceItem {
  number: string;
  category: string;
  statement: string;
  subtext: string;
  alignment: "left" | "right" | "center";
}

const DIFFERENCE_DATA: DifferenceItem[] = [
  {
    number: "01",
    category: "OUR CHARACTER",
    statement: "Bold in identity. Distinct in personality.",
    subtext: "Never formulated to blend in. We design each expression with uncompromising artistic intent.",
    alignment: "left",
  },
  {
    number: "02",
    category: "OUR INSPIRATION",
    statement: "Rooted in the vibrant beauty of nature.",
    subtext: "Guided by the organic architecture of solar fruit and raw botanical vitality.",
    alignment: "right",
  },
  {
    number: "03",
    category: "OUR VISION",
    statement: "Creating memorable experiences through thoughtful branding and creativity.",
    subtext: "Elevating the everyday gesture of drinking into a sensory moment of contemporary culture.",
    alignment: "center",
  },
];

export function OurDifference() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="our-difference"
      className="relative py-28 sm:py-40 px-4 sm:px-8 bg-[#080808] text-[#F8F8F9] select-none border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="text-[#FF7900] font-bold">03</span>
            <span>/ WHAT MAKES JRINK DIFFERENT</span>
          </div>
          <div className="hidden sm:block">PILLARS OF DISTINCTION</div>
        </div>

        {/* Section Heading Lead-In */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF7900] block mb-3">
            THE DIFFERENTIATOR
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-tight text-white">
            WE REJECT CONVENTION IN PURSUIT OF SINGULARITY.
          </h2>
        </div>

        {/* Vertically Stacked Experimental Statements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col space-y-6 sm:space-y-8"
        >
          {DIFFERENCE_DATA.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative border-t border-white/[0.1] pt-10 pb-12 cursor-pointer transition-colors duration-500"
              >
                {/* Expanding Bottom Underline on Hover */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleX: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF7900] origin-left pointer-events-none"
                />

                {/* Alternating Layout Shapes */}
                {item.alignment === "left" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                    <div className="lg:col-span-3 flex items-baseline gap-4">
                      <span
                        className={`text-4xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight transition-colors duration-400 ${
                          isHovered ? "text-[#FF7900]" : "text-white/30"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7900] font-semibold">
                        — {item.category}
                      </span>
                    </div>

                    <div className="lg:col-span-6">
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-white transition-transform duration-400 ${
                          isHovered ? "translate-x-3" : "translate-x-0"
                        }`}
                      >
                        {item.statement}
                      </h3>
                      <p className="mt-4 text-sm sm:text-base text-[#F4EFE5]/70 font-light leading-relaxed max-w-lg">
                        {item.subtext}
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex justify-start lg:justify-end">
                      <div
                        className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-400 ${
                          isHovered
                            ? "border-[#FF7900] bg-[#FF7900] text-black rotate-45"
                            : "text-white/60"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}

                {item.alignment === "right" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                    <div className="lg:col-span-3 lg:order-3 flex items-baseline justify-start lg:justify-end gap-4">
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7900] font-semibold">
                        {item.category} —
                      </span>
                      <span
                        className={`text-4xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight transition-colors duration-400 ${
                          isHovered ? "text-[#FF7900]" : "text-white/30"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <div className="lg:col-span-6 lg:order-2 lg:text-right ml-auto">
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-white transition-transform duration-400 ${
                          isHovered ? "-translate-x-3" : "translate-x-0"
                        }`}
                      >
                        {item.statement}
                      </h3>
                      <p className="mt-4 text-sm sm:text-base text-[#F4EFE5]/70 font-light leading-relaxed max-w-lg ml-auto">
                        {item.subtext}
                      </p>
                    </div>

                    <div className="lg:col-span-3 lg:order-1 flex justify-start">
                      <div
                        className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-400 ${
                          isHovered
                            ? "border-[#FF7900] bg-[#FF7900] text-black rotate-45"
                            : "text-white/60"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}

                {item.alignment === "center" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                    <div className="lg:col-span-2 flex items-baseline gap-4">
                      <span
                        className={`text-4xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight transition-colors duration-400 ${
                          isHovered ? "text-[#FF7900]" : "text-white/30"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <div className="lg:col-span-8 text-left lg:text-center">
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7900] font-semibold block mb-2">
                        // {item.category}
                      </span>
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-white transition-transform duration-400 ${
                          isHovered ? "scale-[1.02]" : "scale-100"
                        }`}
                      >
                        {item.statement}
                      </h3>
                      <p className="mt-4 text-sm sm:text-base text-[#F4EFE5]/70 font-light leading-relaxed max-w-xl mx-auto">
                        {item.subtext}
                      </p>
                    </div>

                    <div className="lg:col-span-2 flex justify-start lg:justify-end">
                      <div
                        className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-400 ${
                          isHovered
                            ? "border-[#FF7900] bg-[#FF7900] text-black rotate-45"
                            : "text-white/60"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
