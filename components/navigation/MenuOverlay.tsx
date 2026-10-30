"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const menuItems = [
    { number: "01", title: "HOME", href: "#hero", tag: "THE OPENING" },
    { number: "02", title: "THE ORANGE", href: "#editorial", tag: "VISUAL STUDY" },
    { number: "03", title: "THE EXPERIENCE", href: "#cinema", tag: "SCROLL CINEMA" },
    { number: "04", title: "OUR WORLD", href: "#freshness", tag: "THE ATTITUDE" },
    { number: "05", title: "CONTACT", href: "#footer", tag: "GET IN TOUCH" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#070707] text-[#F8F8F9] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Header Row in Overlay */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight">JRINK®</span>
              <span className="text-xs font-mono text-[#F76707] uppercase tracking-widest">
                // BRAND INDEX
              </span>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <span>CLOSE</span>
              <div className="p-1.5 rounded-full border border-white/20 hover:border-white transition-colors">
                <X className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="my-auto py-12 max-w-5xl">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group border-b border-white/[0.06] pb-4"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="flex items-baseline justify-between py-2 group-hover:text-[#F76707] transition-colors"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-12">
                      <span className="text-xs sm:text-sm font-mono text-[#7A7A80] group-hover:text-[#F76707] transition-colors">
                        {item.number}
                      </span>
                      <span className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase group-hover:translate-x-3 transition-transform duration-300">
                        {item.title}
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-4 text-xs font-mono tracking-widest text-[#7A7A80] uppercase">
                      <span>{item.tag}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Row in Overlay */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80]">
            <div>JRINK — THE ORANGE CHAPTER // 2026</div>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                INSTAGRAM
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                FACEBOOK
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

