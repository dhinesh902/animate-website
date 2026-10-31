"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "HOME", href: "/#hero" },
    { name: "EXPERIENCE", href: "/#cinema" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#") && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#070707] text-[#F8F8F9] pt-14 pb-8 px-4 sm:px-6 border-t border-white/[0.08] font-sans select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Massive Spanning JRINK® Wordmark */}
        <div className="overflow-hidden pb-8">
          <span className="block text-[15vw] font-bold tracking-[-0.06em] leading-none text-white/95">
            JRINK®
          </span>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-[1px] bg-white/10 my-8" />

        {/* Middle Row: Statement, Navigation, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-6 text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80]">
          {/* Left: Short Brand Statement */}
          <div className="md:col-span-5">
            <p className="text-sm font-light text-[#F4EFE6]/80 leading-relaxed max-w-sm normal-case font-sans">
              An independent digital brand study exploring the boundaries of citrus storytelling, product art direction, and interactive cinema.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-white/40 mb-1">[ DIRECTORY ]</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#F76707] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-white/40 mb-1">[ DISPATCHES ]</span>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F76707] transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F76707] transition-colors"
              >
                FACEBOOK
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex items-center justify-between pt-12 border-t border-white/[0.08] text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80]">
          <div>© 2026 JRINK STUDIO. ALL RIGHTS RESERVED.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#F76707] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

