"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ContactCTA() {
  const scrollToForm = () => {
    const target = document.getElementById("contact-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 sm:py-48 px-4 sm:px-8 bg-[#080808] text-[#F8F8F9] select-none border-t border-white/[0.08] overflow-hidden">
      {/* Background Solar Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] max-w-[800px] max-h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.09)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Section Badge */}
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#FF7900] block mb-6">
          // INITIATE COLLABORATION
        </span>

        {/* Oversized Headline */}
        <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight uppercase leading-[0.92] text-white max-w-5xl mx-auto mb-6">
          YOUR NEXT FRESH IDEA{" "}
          <span className="font-editorial-serif italic font-normal text-[#F4EFE5] lowercase tracking-normal">
            starts
          </span>{" "}
          <span className="text-[#FF7900]">HERE.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-2xl text-[#F4EFE5]/85 font-light leading-relaxed mb-12 sm:mb-16">
          Let's make it happen.
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToForm}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#FF7900] text-black text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold hover:bg-[#FFA726] transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(255,121,0,0.35)]"
        >
          <span>GET IN TOUCH</span>
          <div className="w-6 h-6 rounded-full border border-black/30 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}

