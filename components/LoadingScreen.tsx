"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  progress: number;
  isLoading: boolean;
}

export function LoadingScreen({ progress, isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none font-sans"
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Ambient background glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF7A00]/15 to-[#FFA726]/10 blur-[130px] pointer-events-none" />

          {/* Center Brand Identity */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-white">
                JRINK
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FFA726] tracking-widest uppercase">
                Orange // 01
              </span>
            </motion.div>

            {/* Circular Progress & Percentage */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-white/[0.08]"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[#FF7A00] transition-all duration-300 ease-out"
                  strokeWidth="2.5"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * progress) / 100}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold tracking-tight text-white tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-[11px] tracking-[0.3em] text-[#8E8E93] uppercase font-mono">
              [ INITIALIZING SEQUENCE ]
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
