"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  progress: number;
  isLoading: boolean;
}

export function Preloader({ progress, isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-14 bg-[#070707] text-[#F8F8F9] select-none font-sans"
        >
          {/* Top header row */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80]">
            <span>JRINK® STUDIO</span>
            <span>ISSUE NO. 01 / ORANGE</span>
          </div>

          {/* Center Brand Statement */}
          <div className="my-auto max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#F76707] mb-4">
              [ AN INDEPENDENT DIGITAL BRAND EXPERIENCE ]
            </p>
            <h2 className="text-4xl sm:text-6xl font-editorial-serif italic font-normal tracking-tight text-white mb-6">
              The Art of Orange.
            </h2>
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-4">
              <motion.div
                className="h-full bg-[#F76707]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="flex items-end justify-between font-mono text-xs uppercase tracking-[0.2em] text-[#7A7A80]">
            <span>LOADING ARCHIVE</span>
            <span className="text-[#F8F8F9] text-base font-bold tabular-nums">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

