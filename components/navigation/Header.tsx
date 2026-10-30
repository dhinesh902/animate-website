"use client";

import { useState, useEffect } from "react";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 font-sans ${scrolled ? "bg-[#070707]/90 py-3.5 border-b border-white/[0.08]" : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Top Left: JRINK® Wordmark */}
          <a href="#hero" className="flex items-baseline gap-2 group cursor-pointer focus:outline-none">
            <span className="text-2xl sm:text-3xl font-bold tracking-[-0.04em] text-white">
              JRINK®
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.25em] text-[#7A7A80] group-hover:text-[#F76707] transition-colors">
              / THE ORANGE CHAPTER
            </span>
          </a>

          {/* Top Right: INDEX / MENU button */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#F8F8F9] hover:text-[#F76707] transition-colors cursor-pointer py-1"
            >
              <span className="hidden sm:inline-block text-[#7A7A80] group-hover:text-[#F76707] transition-colors">
                [ 00 ]
              </span>
              <span className="font-semibold">INDEX / MENU</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F76707] group-hover:scale-150 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Editorial Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
