
"use client";

import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
  Check,
  Minus,
  Plus,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Our Story", href: "#story", id: "story" },
  { name: "Ingredients", href: "#features", id: "features" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      for (const sec of navLinks) {
        const element = document.getElementById(sec.id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${scrolled
            ? "bg-[#050505]/85 backdrop-blur-2xl border-b border-white/[0.07] py-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-b from-black/50 to-transparent py-6"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group relative z-10"
          >
            <div className="relative">
              <span className="text-[25px] sm:text-[28px] font-bold tracking-[-0.07em] text-white transition-colors group-hover:text-[#FFA726]">
                JRINK
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF7A00] group-hover:w-full transition-all duration-500" />
            </div>

            <span className="text-[#FF7A00] font-mono text-sm font-bold">
              //
            </span>

            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#FFA726] border border-[#FF7A00]/30 bg-[#FF7A00]/10 rounded-full px-2.5 py-1">
              ORANGE
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ${isActive
                      ? "text-white bg-white/[0.09]"
                      : "text-white/45 hover:text-white hover:bg-white/[0.05]"
                    }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF7A00] shadow-[0_0_8px_#FF7A00]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">

            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
              className="hidden sm:flex items-center gap-3 px-5 py-3 rounded-full bg-[#FF7A00] text-black text-[10px] font-bold uppercase tracking-[0.13em] hover:bg-[#FFA726] hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all duration-300 group"
            >
              Explore Product
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* CART */}
            <button
              onClick={() => setBagOpen(true)}
              aria-label="Open shopping bag"
              className="relative w-11 h-11 flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-white hover:text-[#FFA726] hover:border-[#FF7A00]/40 hover:bg-[#FF7A00]/10 transition-all duration-300"
            >
              <ShoppingBag size={17} strokeWidth={1.6} />

              <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full bg-[#FF7A00] text-black text-[9px] font-bold flex items-center justify-center shadow-[0_0_10px_rgba(255,122,0,0.5)]">
                {itemCount}
              </span>
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:text-[#FFA726] transition-all"
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ${mobileMenuOpen
              ? "max-h-[450px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
            }`}
        >
          <div className="bg-[#080808]/95 backdrop-blur-3xl border-b border-white/[0.08] px-6 py-7">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] text-[#FF7A00] font-mono tracking-[0.2em]">
                EXPLORE JRINK
              </span>
              <Sparkles size={15} className="text-[#FF7A00]" />
            </div>

            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-4 border-b border-white/[0.06] group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-[#FF7A00]/60">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/30 group-hover:text-[#FF7A00] transition-colors"
                  />
                </a>
              ))}
            </nav>

            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
              className="mt-6 flex items-center justify-center gap-3 w-full py-4 rounded-full bg-[#FF7A00] text-black text-[10px] font-bold uppercase tracking-[0.15em]"
            >
              Explore Product
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* SHOPPING BAG DRAWER */}
      {bagOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end font-sans">

          {/* OVERLAY */}
          <button
            aria-label="Close shopping bag"
            onClick={() => setBagOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-fade-in"
          />

          {/* DRAWER */}
          <div className="relative w-full max-w-[430px] h-full bg-[#090909] border-l border-white/[0.08] shadow-[-20px_0_80px_rgba(0,0,0,0.6)] flex flex-col justify-between p-6 sm:p-9 animate-slide-in">

            <div>
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between pb-7 border-b border-white/[0.08]">
                <div>
                  <span className="text-[9px] font-mono tracking-[0.25em] text-[#FF7A00]">
                    YOUR SELECTION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Shopping Bag
                  </h3>
                </div>

                <button
                  onClick={() => setBagOpen(false)}
                  aria-label="Close drawer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* PRODUCT */}
              <div className="mt-8 flex gap-5 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07]">
                <div className="relative w-24 h-28 rounded-xl overflow-hidden bg-black shrink-0">
                  <Image
                    src="/orange-hero.png"
                    alt="Jrink Orange"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 py-1">
                  <span className="text-[9px] font-mono text-[#FF7A00] tracking-[0.15em]">
                    PREMIUM COLLECTION
                  </span>

                  <h4 className="text-sm font-bold text-white mt-2 leading-snug">
                    Jrink Orange
                  </h4>

                  <p className="text-[10px] text-white/40 mt-1">
                    6 × 330ml · Reserve Edition
                  </p>

                  <div className="flex items-center justify-between mt-5">
                    <span className="text-lg font-bold text-[#FFA726]">
                      $36.00
                    </span>

                    <div className="flex items-center gap-3 px-2.5 py-1.5 rounded-full bg-black border border-white/10">
                      <button
                        onClick={() =>
                          setItemCount((count) => Math.max(1, count - 1))
                        }
                        aria-label="Decrease quantity"
                        className="text-white/50 hover:text-white"
                      >
                        <Minus size={12} />
                      </button>

                      <span className="text-xs font-bold min-w-3 text-center">
                        {itemCount}
                      </span>

                      <button
                        onClick={() =>
                          setItemCount((count) => count + 1)
                        }
                        aria-label="Increase quantity"
                        className="text-white/50 hover:text-[#FF7A00]"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* BENEFITS */}
              <div className="mt-7 space-y-4">
                {[
                  "Complimentary insulated shipping",
                  "Freshness guaranteed upon arrival",
                  "Premium packaging experience",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-[11px] text-white/45"
                  >
                    <Check size={14} className="text-[#FF7A00]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* CHECKOUT */}
            <div className="pt-7 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="text-2xl font-bold text-white">
                  ${(36 * itemCount).toFixed(2)}
                </span>
              </div>

              <p className="text-[10px] text-white/30 mb-6">
                Shipping and taxes calculated at checkout.
              </p>

              <button
                onClick={() => {
                  alert(
                    "Thank you for your interest in Jrink Orange!"
                  );
                  setBagOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-[#FF7A00] text-black text-[10px] font-bold uppercase tracking-[0.16em] hover:bg-[#FFA726] hover:shadow-[0_0_35px_rgba(255,122,0,0.3)] transition-all duration-300"
              >
                Proceed To Reserve
                <ArrowUpRight size={15} />
              </button>

              <p className="text-center text-[9px] text-white/25 mt-5 tracking-widest uppercase">
                Experience the freshness of Jrink
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
