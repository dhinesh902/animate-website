"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "business-enquiries",
    number: "01",
    question: "How can I contact JRINK for business enquiries?",
    answer:
      "You can reach our commercial partnerships desk directly by filling out the contact form above with the subject set to 'Wholesale & Distribution' or 'Brand Collaboration', or by emailing us directly at hello@jrink.com. Our team responds within 24 operational hours.",
  },
  {
    id: "where-to-find",
    number: "02",
    question: "Where can I find JRINK products?",
    answer:
      "JRINK is currently available through select independent specialty stockists, luxury boutique hospitality partners, and curated cultural spaces across India. For regional availability and direct batch allocations, please connect with our dispatch team.",
  },
  {
    id: "collaborations",
    number: "03",
    question: "Can I collaborate with JRINK?",
    answer:
      "Yes. We actively collaborate with visual artists, culinary innovators, industrial designers, and creative studios who share our passion for raw botanical purity and contemporary aesthetics. Reach out via the form with your concept brief or portfolio.",
  },
  {
    id: "customer-support",
    number: "04",
    question: "How can I get support?",
    answer:
      "For product support, batch details, or order inquiries, write directly to hello@jrink.com or contact our phone line during studio operating hours (Monday to Friday, 09:00 — 18:00 IST). We are dedicated to ensuring every experience is seamless.",
  },
];

export function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#080808] text-[#F8F8F9] select-none border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-16 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[#FF7900] font-bold">05</span>
            <span>/ COMMON QUERIES</span>
          </div>
          <div className="hidden sm:block">QUICK DISCLOSURES</div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF7900] block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-tight text-white">
            CLARITY BEFORE CONNECTION.
          </h2>
        </div>

        {/* Minimalist Editorial Accordion */}
        <div className="border-t border-white/[0.1] divide-y divide-white/[0.08]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-6 sm:py-8 transition-colors duration-300">
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start sm:items-center justify-between gap-6 text-left cursor-pointer group focus:outline-none"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="text-xs sm:text-sm font-mono text-[#7A7A80] group-hover:text-[#FF7900] transition-colors">
                      {item.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase text-white group-hover:text-[#FF7900] transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  {/* Animated Plus / Cross Icon */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "border-[#FF7900] bg-[#FF7900] text-black"
                        : "border-white/20 text-white group-hover:border-white/40"
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Animated Expandable Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 sm:pt-8 pl-8 sm:pl-16 pr-4 sm:pr-16 max-w-3xl">
                        <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

