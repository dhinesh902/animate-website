"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BottleData } from "./BottleDetails";

interface BottleItemProps {
  bottle: BottleData;
  index: number;
  activeIndex: number;
  total: number;
  onSelect: (index: number) => void;
}

export function BottleItem({
  bottle,
  index,
  activeIndex,
  total,
  onSelect,
}: BottleItemProps) {
  // Calculate shortest wrapped relative offset (-1, 0, 1, 2)
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  const isActive = diff === 0;
  const isPrev = diff === -1;
  const isNext = diff === 1;
  const isHidden = Math.abs(diff) >= 2;

  // 3D positioning mapping
  const getTransformProps = () => {
    if (isActive) {
      return {
        x: "0%",
        scale: 1,
        rotateY: 0,
        z: 80,
        opacity: 1,
        zIndex: 30,
        filter: "brightness(1) contrast(1.05)",
      };
    }
    if (isNext) {
      return {
        x: "68%",
        scale: 0.76,
        rotateY: -32,
        z: -160,
        opacity: 0.45,
        zIndex: 15,
        filter: "brightness(0.65) contrast(0.9)",
      };
    }
    if (isPrev) {
      return {
        x: "-68%",
        scale: 0.76,
        rotateY: 32,
        z: -160,
        opacity: 0.45,
        zIndex: 15,
        filter: "brightness(0.65) contrast(0.9)",
      };
    }
    return {
      x: diff > 0 ? "130%" : "-130%",
      scale: 0.5,
      rotateY: diff > 0 ? -45 : 45,
      z: -320,
      opacity: 0,
      zIndex: 5,
      filter: "brightness(0.4)",
    };
  };

  const transform = getTransformProps();

  return (
    <motion.div
      onClick={() => onSelect(index)}
      animate={{
        x: transform.x,
        scale: transform.scale,
        rotateY: transform.rotateY,
        z: transform.z,
        opacity: transform.opacity,
        zIndex: transform.zIndex,
        filter: transform.filter,
      }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 26,
        mass: 0.85,
      }}
      style={{
        transformStyle: "preserve-3d",
        cursor: isActive ? "default" : "pointer",
        pointerEvents: isHidden ? "none" : "auto",
      }}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[380px] sm:h-[460px] md:h-[520px] select-none flex items-center justify-center"
    >
      {/* Active Ambient Backlight Glow */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.38)_0%,rgba(255,121,0,0.08)_50%,transparent_75%)] blur-3xl pointer-events-none"
        />
      )}

      {/* Floating Levitation Wrapper for Active Bottle */}
      <motion.div
        animate={
          isActive
            ? {
                y: [0, -12, 0],
              }
            : { y: 0 }
        }
        transition={
          isActive
            ? {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : { duration: 0.4 }
        }
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Bottle Image */}
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          <Image
            src={bottle.image}
            alt={bottle.name}
            fill
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 400px"
            priority={isActive}
            className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Dynamic Studio Reflection / Dark Vignette Blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none opacity-40" />

        {/* Realistic Floor Contact Shadow */}
        <motion.div
          animate={
            isActive
              ? {
                  scale: [1, 0.92, 1],
                  opacity: [0.75, 0.55, 0.75],
                }
              : { scale: 0.7, opacity: 0.3 }
          }
          transition={
            isActive
              ? {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { duration: 0.4 }
          }
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-6 rounded-full bg-black/90 blur-md pointer-events-none -z-10"
        />
      </motion.div>
    </motion.div>
  );
}

