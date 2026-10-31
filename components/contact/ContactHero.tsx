"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const words = [
    { text: "LET'S", serif: false, orange: false },
    { text: "talk", serif: true, orange: false },
    { text: "FRESH.", serif: false, orange: true },
  ];

  const handleScrollToForm = () => {
    const target = document.getElementById("contact-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] w-full bg-[#080808] text-[#F8F8F9] overflow-hidden pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-8 flex flex-col justify-between select-none"
    >
      {/* Background Solar Glow */}
      <div className="absolute top-1/3 right-4 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* Top Editorial Index Header */}
      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between pb-6 border-b border-white/[0.08] text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80]"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900] shadow-[0_0_8px_#FF7900]" />
            <span className="text-[#FF7900] font-semibold">JRINK</span>
            <span>/ CONTACT / 001</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>INQUIRY & COLLABORATION</span>
            <span className="text-white/20">|</span>
            <span>DIRECT DISPATCH</span>
          </div>
        </motion.div>
      </div>

      {/* Main Asymmetrical Hero Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto py-8 sm:py-14 relative z-10">
        {/* Left Column: Word-by-Word Headline & Supporting Copy */}
        <motion.div style={{ y: textY, opacity }} className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF7900] border-b border-[#FF7900]/40 pb-0.5">
              START A CONVERSATION
            </span>
          </motion.div>

          {/* Oversized Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-bold tracking-[-0.04em] uppercase leading-[0.88] text-white">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden py-1 sm:py-1.5 mr-3 sm:mr-5">
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.15 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block ${
                    word.serif
                      ? "font-editorial-serif italic font-normal text-[#F4EFE5] lowercase tracking-normal pl-1 sm:pl-3"
                      : ""
                  } ${word.orange ? "text-[#FF7900]" : ""}`}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 max-w-xl border-l-2 border-[#FF7900] pl-5 sm:pl-7"
          >
            <p className="text-base sm:text-xl text-[#F4EFE5]/90 font-light leading-relaxed">
              Have an idea, a question, or just want to say hello? We'd love to hear from you.
            </p>
            <p className="mt-3 text-xs font-mono tracking-[0.2em] uppercase text-[#7A7A80]">
              RESPONSE TIME // WITHIN 24 HOURS
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Striking Orange Fruit Visual Revealed via Clip-Path */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center lg:justify-end">
          <motion.div
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              opacity: 0,
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 1,
            }}
            transition={{
              duration: 1.3,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ y: imageY, scale: imageScale }}
            className="relative w-full max-w-[420px] lg:max-w-none aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
          >
            <Image
              src="/orange-hero.png"
              alt="Cinematic Botanical Orange"
              fill
              priority
              className="object-cover object-center filter contrast-[1.08] saturate-[1.12]"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />

            {/* Dark Studio Film Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Plate Stamp Tag */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/80 bg-black/65 backdrop-blur-md px-3.5 py-2 border border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                CONTACT DESK // DISPATCH
              </span>
              <span className="text-[#929292]">OPEN TO FRESH IDEAS</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80]">
        <div className="flex items-center gap-3">
          <span className="text-[#FF7900]">01</span>
          <span>/</span>
          <span>DIRECT CHANNELS</span>
        </div>

        <button
          onClick={handleScrollToForm}
          className="flex items-center gap-2.5 text-[#F8F8F9] hover:text-[#FF7900] transition-colors cursor-pointer group"
        >
          <span className="tracking-[0.25em]">SCROLL TO CONNECT</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF7900] group-hover:translate-y-1 transition-transform" />
        </button>

        <div className="hidden sm:block text-right text-[11px] text-[#7A7A80]">
          OFFICE HOURS: 09:00 — 18:00 IST
        </div>
      </div>
    </section>
  );
}

