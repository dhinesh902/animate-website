"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contact" className="relative bg-[#050505] text-[#8E8E93] pt-24 pb-12 px-6 border-t border-white/[0.08] font-sans">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Left: Brand Identity */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <span className="text-2xl font-bold tracking-[-0.04em] text-white">
                JRINK
              </span>
              <span className="text-[#FF7A00] font-mono text-sm tracking-tighter font-semibold">
                //
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFA726] px-2 py-0.5 rounded border border-[#FF7A00]/30 bg-[#FF7A00]/10">
                ORANGE
              </span>
            </a>
            <p className="text-sm font-normal leading-relaxed max-w-sm mb-6 text-[#8E8E93]">
              Bringing freshness and vibrant experiences to every moment. Crafted for those who appreciate pure citrus character.
            </p>

            {/* Batch / Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#8E8E93]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Small Batch Production No. 082</span>
            </div>
          </div>

          {/* Center Navigation */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs uppercase font-mono tracking-[0.25em] font-semibold text-white mb-6">
              [ NAVIGATION ]
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm hover:text-[#FFA726] transition-colors duration-200 inline-block uppercase tracking-wider text-xs font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Socials & Connect */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs uppercase font-mono tracking-[0.25em] font-semibold text-white mb-6">
              [ CONNECT ]
            </h4>
            <p className="text-xs text-[#8E8E93] mb-4">
              Join the conversation and explore behind-the-scenes citrus harvesting.
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8E8E93] hover:text-[#FF7A00] hover:border-[#FF7A00]/40 hover:bg-[#FF7A00]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8E8E93] hover:text-[#FF7A00] hover:border-[#FF7A00]/40 hover:bg-[#FF7A00]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8E8E93] hover:text-[#FF7A00] hover:border-[#FF7A00]/40 hover:bg-[#FF7A00]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon fill="#050505" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© 2026 JRINK. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">
              Terms of Experience
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#FFA726] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
