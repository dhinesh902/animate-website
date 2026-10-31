"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, ArrowUpRight } from "lucide-react";

export function ContactMap() {
  const mapCoordinates = {
    region: "Tamil Nadu, India",
    lat: "11.1271° N",
    lng: "78.6569° E",
    elevation: "220M // SOLAR BELT",
    status: "DISPATCH DESK ACTIVE",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tamil+Nadu,+India",
  };

  return (
    <section
      id="map-section"
      className="relative py-24 sm:py-36 px-4 sm:px-8 bg-[#080808] text-[#F8F8F9] select-none border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] max-w-[800px] max-h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pb-8 border-b border-white/[0.08] mb-14 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[#FF7900] font-bold">04</span>
            <span>/ PHYSICAL CARTOGRAPHY</span>
          </div>
          <div className="hidden sm:block">STUDIO & BOTANICAL LAB</div>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF7900] block mb-3">
              GEOGRAPHIC PRESENCE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[0.92] text-white">
              ROOTED IN{" "}
              <span className="font-editorial-serif italic font-normal text-[#F4EFE5] lowercase tracking-normal">
                tamil
              </span>{" "}
              <span className="text-[#FF7900]">NADU.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm sm:text-base text-[#F4EFE5]/75 font-light leading-relaxed">
              Our central laboratory, small-batch cold-press unit, and citrus research desk situated in southern India.
            </p>
          </div>
        </div>

        {/* Cinematic Map Container */}
        <div className="relative w-full h-[450px] sm:h-[520px] md:h-[580px] border border-white/10 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)] group">
          {/* Styled Dark Inverted Google Map */}
          <iframe
            title="JRINK Studio Location Map"
            src="https://maps.google.com/maps?q=Tamil%20Nadu,%20India&t=&z=9&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full filter invert-[93%] hue-rotate-180 contrast-[1.25] brightness-[0.95] opacity-75 group-hover:opacity-90 transition-opacity duration-700 border-0 pointer-events-auto"
            loading="lazy"
          />

          {/* Vignette Overlay for Edge Blending */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(8,8,8,0.75)_80%,#080808_100%)]" />

          {/* Corner Viewfinder Crosshairs */}
          <div className="absolute top-4 left-4 z-20 text-[10px] font-mono tracking-widest uppercase text-white/50 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 hidden sm:flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>LAT: {mapCoordinates.lat}</span>
          </div>

          <div className="absolute top-4 right-4 z-20 text-[10px] font-mono tracking-widest uppercase text-white/50 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 hidden sm:flex items-center gap-2">
            <Navigation className="w-3.5 h-3.5 text-[#FF7900]" />
            <span>LNG: {mapCoordinates.lng}</span>
          </div>

          {/* Floating Editorial Studio Information Plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-20 bg-[#080808]/90 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-2xl"
          >
            {/* Status Beacon */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7A7A80] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7900] shadow-[0_0_8px_#FF7900] animate-pulse" />
                <span className="text-[#FF7900] font-semibold">{mapCoordinates.status}</span>
              </div>
              <span>{mapCoordinates.elevation}</span>
            </div>

            {/* Studio Details */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#FF7900] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase text-white leading-tight">
                  JRINK BOTANICAL LAB
                </h3>
                <p className="text-xs sm:text-sm text-[#F4EFE5]/80 font-light mt-1">
                  {mapCoordinates.region}
                </p>
              </div>
            </div>

            <p className="text-xs font-light text-[#7A7A80] leading-relaxed mb-5">
              Dedicated cold-craft facility and citrus research archive. Visited by appointment for commercial clients and design collaborators.
            </p>

            {/* Direct Action Link */}
            <a
              href={mapCoordinates.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-[0.2em] text-white bg-white/5 hover:bg-[#FF7900] hover:text-black px-4 py-3 border border-white/10 hover:border-[#FF7900] transition-all duration-300"
            >
              <span className="font-semibold">GET DIRECTIONS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

