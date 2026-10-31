"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, ArrowUpRight } from "lucide-react";

export const CONTACT_DETAILS = {
  email: "hello@jrink.com",
  phone: "+91 XXXXX XXXXX",
  location: "Tamil Nadu, India",
  enquiries: "Let's create something refreshing together.",
  postalNote: "REGIONAL DISPATCH & BOTANICAL LAB",
  operatingHours: "MONDAY — FRIDAY / 09:00 — 18:00 IST",
  socials: [
    { name: "INSTAGRAM", href: "https://instagram.com" },
    { name: "FACEBOOK", href: "https://facebook.com" },
    { name: "TWITTER / X", href: "https://twitter.com" },
  ],
};

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="flex flex-col justify-between h-full py-4 select-none">
      <div>
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FF7900] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
          <span>DIRECT CHANNELS</span>
          <span className="text-white/20">—</span>
          <span className="text-[#929292]">WE'RE JUST A MESSAGE AWAY</span>
        </div>

        {/* Lead Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-[0.95] text-white mb-6">
          REACH OUT DIRECTLY.
        </h2>

        <p className="text-base text-[#F4EFE5]/75 font-light leading-relaxed max-w-md mb-12">
          Whether you're looking for wholesale distribution, brand collaborations, or just curious about our cold-crafted citrus, our inbox is always open.
        </p>

        {/* Editorial Information Grid (Not Cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-8"
        >
          {/* Email Item */}
          <motion.div variants={itemVariants} className="group border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] mb-2">
              <Mail className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>ELECTRONIC MAIL</span>
            </div>
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#FF7900] transition-colors"
            >
              <span>{CONTACT_DETAILS.email}</span>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#FF7900] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Phone Item */}
          <motion.div variants={itemVariants} className="group border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] mb-2">
              <Phone className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>DIRECT LINE</span>
            </div>
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white hover:text-[#FF7900] transition-colors"
            >
              <span>{CONTACT_DETAILS.phone}</span>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#FF7900] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#7A7A80] mt-1">
              {CONTACT_DETAILS.operatingHours}
            </div>
          </motion.div>

          {/* Location Item */}
          <motion.div variants={itemVariants} className="border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>STUDIO & LAB LOCATION</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {CONTACT_DETAILS.location}
            </div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#7A7A80] mt-1">
              {CONTACT_DETAILS.postalNote}
            </div>
          </motion.div>

          {/* Business Enquiries Statement */}
          <motion.div variants={itemVariants} className="border-l-2 border-[#FF7900] pl-5 py-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FF7900] mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BUSINESS ENQUIRIES</span>
            </div>
            <p className="text-lg font-medium text-[#F4EFE5] leading-snug">
              {CONTACT_DETAILS.enquiries}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Media Row at Bottom */}
      <div className="pt-10 border-t border-white/[0.08] mt-12">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#7A7A80] block mb-3">
          DISPATCHES // CONNECT WITH US
        </span>
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-[#F8F8F9]">
          {CONTACT_DETAILS.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF7900] transition-colors flex items-center gap-1.5 group"
            >
              <span>{social.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7A80] group-hover:text-[#FF7900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

