
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { orangeFrames } from "@/lib/imageManifest";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SceneOverlay {
  tag: string;
  title: string;
  subtitle: string;
  positionClass: string;
}

const CINEMA_SCENES: SceneOverlay[] = [
  {
    tag: "01 // ORIGIN",
    title: "IT STARTS WITH ONE.",
    subtitle:
      "A singular fruit selected for exceptional vitality and solar depth.",
    positionClass: "top-5 sm:top-8 left-4 sm:left-8 text-left max-w-[280px] sm:max-w-sm",
  },
  {
    tag: "02 // CHARACTER",
    title: "NATURALLY BOLD.",
    subtitle:
      "Raw citrus oil and aromatic terpenes captured in suspension.",
    positionClass: "bottom-14 sm:bottom-16 right-4 sm:right-8 text-right max-w-[280px] sm:max-w-sm ml-auto",
  },
  {
    tag: "03 // PRESENCE",
    title: "IMPOSSIBLE TO IGNORE.",
    subtitle:
      "Colour that commands attention without speaking a word.",
    positionClass: "top-5 sm:top-8 right-4 sm:right-8 text-right max-w-[280px] sm:max-w-sm ml-auto",
  },
  {
    tag: "04 // HARVEST",
    title: "THE BEAUTY OF ORANGE.",
    subtitle:
      "Nature's architecture transformed into bottled art.",
    positionClass: "bottom-14 sm:bottom-16 left-4 sm:left-8 text-left max-w-[280px] sm:max-w-sm",
  },
];

export function OrangeCinema() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const textScenesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Draw image frame with responsive cinematic adaptive scaling
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[index];

    if (
      !img ||
      !img.complete ||
      img.naturalWidth === 0 ||
      img.naturalHeight === 0
    ) {
      return;
    }

    const width = canvas.width;
    const height = canvas.height;

    // Background
    ctx.fillStyle = "#070707";
    ctx.fillRect(0, 0, width, height);

    // Image dimensions
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const canvasAspect = width / height;
    const imageAspect = imgWidth / imgHeight;

    let drawWidth: number;
    let drawHeight: number;
    let drawX: number;
    let drawY: number;

    // Safe clearances to ensure the bottle cap and full subject are never clipped by the header or viewport edge
    const topPadding = Math.max(28, Math.round(height * 0.055));
    const bottomPadding = Math.max(28, Math.round(height * 0.045));
    const availHeight = height - topPadding - bottomPadding;
    const availWidth = width * 0.95;

    if (canvasAspect >= imageAspect) {
      // Wide desktop & ultrawide:
      // Fit within available bounds with guaranteed top headroom below the header
      const scale = Math.min(availWidth / imgWidth, availHeight / imgHeight);
      drawWidth = imgWidth * scale;
      drawHeight = imgHeight * scale;
      drawX = (width - drawWidth) / 2;
      drawY = topPadding + (availHeight - drawHeight) * 0.45;
    } else if (canvasAspect >= 0.8) {
      // Standard laptop & landscape tablet:
      // Proportionally fit with safe top clearance
      const scale = Math.min(width / imgWidth, availHeight / imgHeight);
      drawWidth = imgWidth * scale;
      drawHeight = imgHeight * scale;
      drawX = (width - drawWidth) / 2;
      drawY = topPadding + (availHeight - drawHeight) / 2;
    } else {
      // Mobile portrait & vertical tablet:
      // Proportionally scale without cutting the top cap under mobile header
      const mobileScale = Math.min(1.45, Math.max(1.05, (availHeight / (width / imageAspect)) * 0.78));
      drawWidth = width * mobileScale;
      drawHeight = drawWidth / imageAspect;
      drawX = (width - drawWidth) / 2;
      drawY = topPadding + Math.max(0, (availHeight - drawHeight) * 0.25);
    }

    // High quality interpolation
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      img,
      drawX,
      drawY,
      drawWidth,
      drawHeight
    );
  }, []);

  // Preload image sequence
  useEffect(() => {
    if (!orangeFrames || orangeFrames.length === 0) return;

    let isMounted = true;

    const total = orangeFrames.length;
    let loadedCount = 0;

    const loadedImages: HTMLImageElement[] = new Array(total);

    const onFrameLoad = (
      index: number,
      img: HTMLImageElement
    ) => {
      if (!isMounted) return;

      loadedImages[index] = img;
      loadedCount++;

      if (index === 0) {
        imagesRef.current[0] = img;
        drawFrame(0);
      }

      if (loadedCount >= total) {
        imagesRef.current = loadedImages;
        setIsLoaded(true);
        drawFrame(currentFrameIndexRef.current);
      }
    };

    orangeFrames.forEach((src, index) => {
      const img = new Image();

      img.onload = () => onFrameLoad(index, img);

      img.onerror = () => {
        console.error("Failed to load image:", src);
        onFrameLoad(index, img);
      };

      img.src = src;
    });

    return () => {
      isMounted = false;
    };
  }, [drawFrame]);

  // Canvas resize with device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas || !canvas.parentElement) return;

    const dpr = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    drawFrame(currentFrameIndexRef.current);
  }, [drawFrame]);

  // Resize listener
  useEffect(() => {
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  // GSAP ScrollTrigger animation
  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;

    if (
      !container ||
      !sticky ||
      !canvas ||
      !orangeFrames.length
    ) {
      return;
    }

    const totalFrames = orangeFrames.length;

    const ctx = gsap.context(() => {
      const getHeaderOffset = () =>
        window.innerWidth >= 640 ? 80 : 64;

      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,

        start: () => `top ${getHeaderOffset()}px`,

        end: "+=3800",

        pin: sticky,

        pinSpacing: true,

        scrub: 0.35,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          const progress = self.progress;

          // Progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width =
              `${progress * 100}%`;
          }

          // Calculate frame index
          const targetIndex = Math.min(
            totalFrames - 1,
            Math.max(
              0,
              Math.floor(progress * (totalFrames - 1))
            )
          );

          // Draw frame
          if (
            currentFrameIndexRef.current !== targetIndex
          ) {
            currentFrameIndexRef.current = targetIndex;

            if (rafIdRef.current) {
              cancelAnimationFrame(rafIdRef.current);
            }

            rafIdRef.current = requestAnimationFrame(() => {
              drawFrame(targetIndex);
            });
          }

          // Text animation
          textScenesRef.current.forEach((sceneEl, i) => {
            if (!sceneEl) return;

            let start = 0;
            let peakStart = 0;
            let peakEnd = 0;
            let end = 0;

            if (i === 0) {
              start = 0.02;
              peakStart = 0.08;
              peakEnd = 0.18;
              end = 0.24;
            } else if (i === 1) {
              start = 0.27;
              peakStart = 0.33;
              peakEnd = 0.44;
              end = 0.50;
            } else if (i === 2) {
              start = 0.53;
              peakStart = 0.59;
              peakEnd = 0.70;
              end = 0.76;
            } else if (i === 3) {
              start = 0.79;
              peakStart = 0.85;
              peakEnd = 0.94;
              end = 0.99;
            }

            let opacity = 0;
            let translateY = 15;

            if (progress >= start && progress <= end) {
              if (progress < peakStart) {
                const t =
                  (progress - start) /
                  (peakStart - start);

                opacity = t;
                translateY = (1 - t) * 15;
              } else if (progress <= peakEnd) {
                opacity = 1;
                translateY = 0;
              } else {
                const t =
                  (progress - peakEnd) /
                  (end - peakEnd);

                opacity = 1 - t;
                translateY = -t * 15;
              }
            }

            sceneEl.style.opacity = opacity.toString();

            sceneEl.style.transform =
              `translate3d(0, ${translateY}px, 0)`;

            sceneEl.style.pointerEvents =
              opacity > 0.5 ? "auto" : "none";
          });
        },
      });

      return () => {
        scrollTriggerInstance.kill();
      };
    }, container);

    return () => {
      ctx.revert();

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawFrame]);

  return (
    <section
      id="cinema"
      ref={containerRef}
      className="relative w-full bg-[#070707] text-[#F8F8F9] select-none font-sans"
    >
      {/* Pinned Viewport Stage - Height dynamically fits below header across devices */}
      <div
        ref={stickyRef}
        className="relative w-full h-[calc(100dvh-4rem)] sm:h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle Warm Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none z-[5] bg-[radial-gradient(ellipse_at_center,rgba(247,103,7,0.06)_0%,transparent_65%)]" />

        {/* Canvas Image Sequence */}
        <div className="relative w-full h-full flex-1 flex items-center justify-center min-h-0 overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
          />

          {/* Loading Indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#070707]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#F76707] animate-spin" />

                <span className="text-[10px] tracking-[0.3em] font-mono text-white/50 uppercase">
                  Loading Experience
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Vignette Overlay for Seamless Dark Integration */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,7,7,0.65)_75%,#070707_100%)]" />

        {/* Editorial Text Overlays - Responsive Frosted Editorial Cards */}
        <div className="absolute inset-0 pointer-events-none z-20 max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {CINEMA_SCENES.map((scene, idx) => (
            <div
              key={idx}
              ref={(el) => {
                textScenesRef.current[idx] = el;
              }}
              style={{
                opacity: 0,
                transform: "translate3d(0, 15px, 0)",
              }}
              className={`absolute transition-none ${scene.positionClass}`}
            >
              <div className="backdrop-blur-md bg-[#070707]/40 sm:bg-transparent border-l-2 border-[#F76707] pl-3.5 sm:pl-5 pr-4 py-2 sm:py-1 rounded-sm sm:rounded-none shadow-sm sm:shadow-none">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#F76707] font-semibold block mb-1">
                  {scene.tag}
                </span>

                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase text-white leading-tight sm:leading-none mb-1.5 sm:mb-2">
                  {scene.title}
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#F4EFE6]/80 leading-relaxed">
                  {scene.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Scrub Bar & Telemetry */}
        <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 z-30 flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7A7A80] pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F76707] shadow-[0_0_8px_#F76707] animate-pulse" />

            <span className="tracking-[0.18em] sm:tracking-[0.25em]">
              SCROLL
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/50">
            <span className="hidden sm:inline">SCROLL TO EVOLVE</span>

            <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F76707] animate-bounce" />
          </div>
        </div>

        {/* Progress Bar with Amber Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.08] z-30">
          <div
            ref={progressBarRef}
            className="h-full w-0 bg-gradient-to-r from-[#F76707] to-[#FFA726] shadow-[0_0_10px_rgba(247,103,7,0.7)] transition-[width] duration-75"
          />
        </div>
      </div>
    </section>
  );
}
