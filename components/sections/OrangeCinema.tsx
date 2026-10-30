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
    subtitle: "A singular fruit selected for exceptional vitality and solar depth.",
    positionClass: "top-10 left-4 sm:left-6 text-left max-w-sm",
  },
  {
    tag: "02 // CHARACTER",
    title: "NATURALLY BOLD.",
    subtitle: "Raw citrus oil and aromatic terpenes captured in suspension.",
    positionClass: "bottom-14 right-4 sm:right-6 text-right max-w-sm ml-auto",
  },
  {
    tag: "03 // PRESENCE",
    title: "IMPOSSIBLE TO IGNORE.",
    subtitle: "Colour that commands attention without speaking a word.",
    positionClass: "top-12 right-4 sm:right-6 text-right max-w-sm ml-auto",
  },
  {
    tag: "04 // HARVEST",
    title: "THE BEAUTY OF ORANGE.",
    subtitle: "Nature's architecture transformed into bottled art.",
    positionClass: "bottom-14 left-4 sm:left-6 text-left max-w-sm",
  },
];

export function OrangeCinema() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textScenesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Preload image sequence into memory
  useEffect(() => {
    if (!orangeFrames || orangeFrames.length === 0) return;

    let isMounted = true;
    const total = orangeFrames.length;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(total);

    const onFrameLoad = (index: number, img: HTMLImageElement) => {
      if (!isMounted) return;
      loadedImages[index] = img;
      loadedCount++;

      // When first frame is ready, draw immediately
      if (index === 0 && canvasRef.current) {
        imagesRef.current[0] = img;
        drawFrame(0);
      }

      if (loadedCount >= total) {
        imagesRef.current = loadedImages;
        setIsLoaded(true);
      }
    };

    // Load Frame 0
    const firstImg = new Image();
    firstImg.src = orangeFrames[0];
    firstImg.onload = () => onFrameLoad(0, firstImg);
    firstImg.onerror = () => onFrameLoad(0, firstImg);

    // Preload remaining frames progressively
    for (let i = 1; i < total; i++) {
      const img = new Image();
      img.src = orangeFrames[i];
      img.onload = () => onFrameLoad(i, img);
      img.onerror = () => onFrameLoad(i, img);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw frame on canvas with aspect ratio preservation (centered contain)
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Fill background with deep ink black
    ctx.fillStyle = "#070707";
    ctx.fillRect(0, 0, width, height);

    // Fit strictly by width
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const drawW = width;
    const drawH = width / imgAspect;
    const drawX = 0;
    const drawY = (height - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Handle Canvas Resize and Retina DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawFrame(currentFrameIndexRef.current);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Setup GSAP ScrollTrigger Sequence Timeline
  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    if (!container || !sticky || !canvas || orangeFrames.length === 0) return;

    const totalFrames = orangeFrames.length;

    const ctx = gsap.context(() => {
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=3800",
        pin: sticky,
        pinSpacing: true,
        scrub: 0.35,
        onUpdate: (self) => {
          const progress = self.progress;

          // Scrub bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress * 100}%`;
          }

          const targetIndex = Math.min(
            totalFrames - 1,
            Math.max(0, Math.floor(progress * (totalFrames - 1)))
          );

          if (currentFrameIndexRef.current !== targetIndex) {
            currentFrameIndexRef.current = targetIndex;

            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = requestAnimationFrame(() => {
              drawFrame(targetIndex);
            });
          }

          // Animate Editorial Text Scenes with staggered timing
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
                const t = (progress - start) / (peakStart - start);
                opacity = t;
                translateY = (1 - t) * 15;
              } else if (progress <= peakEnd) {
                opacity = 1;
                translateY = 0;
              } else {
                const t = (progress - peakEnd) / (end - peakEnd);
                opacity = 1 - t;
                translateY = -t * 15;
              }
            }

            sceneEl.style.opacity = opacity.toString();
            sceneEl.style.transform = `translate3d(0, ${translateY}px, 0)`;
            sceneEl.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
          });
        },
      });

      return () => {
        scrollTriggerInstance.kill();
      };
    }, container);

    return () => {
      ctx.revert();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  return (
    <section
      id="cinema"
      ref={containerRef}
      className="relative w-full bg-[#070707] text-[#F8F8F9] select-none font-sans"
    >
      {/* Pinned Viewport Stage */}
      <div
        ref={stickyRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Editorial Viewfinder Crosshairs in corners */}
        <div className="absolute top-5 left-5 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">
          + SEQ // 01.CINEMA
        </div>
        <div className="absolute top-5 right-5 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">
          + NATURAL LIGHTING
        </div>
        <div className="absolute bottom-8 left-5 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">
          + BOTANICAL DISSECTION
        </div>
        <div className="absolute bottom-8 right-5 text-white/20 font-mono text-xs pointer-events-none hidden sm:block">
          + ZERO COMPRESSION
        </div>

        {/* HTML5 Canvas */}
        <div className="relative w-full h-full flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>

        {/* Subtle Vignette to merge canvas into pure ink black */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(7,7,7,0.7)_80%,#070707_100%)]" />

        {/* Asymmetrical Editorial Text Overlays positioned around the frame */}
        <div className="absolute inset-0 pointer-events-none z-20 max-w-7xl mx-auto px-4 sm:px-6">
          {CINEMA_SCENES.map((scene, idx) => (
            <div
              key={idx}
              ref={(el) => {
                textScenesRef.current[idx] = el;
              }}
              style={{ opacity: 0, transform: "translate3d(0, 15px, 0)" }}
              className={`absolute transition-none ${scene.positionClass}`}
            >
              <div className="border-l-2 border-[#F76707] pl-4 sm:pl-5">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#F76707] font-semibold block mb-1">
                  {scene.tag}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] uppercase text-white leading-none mb-2">
                  {scene.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-[#F4EFE6]/80 leading-relaxed">
                  {scene.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Scrub Bar & Telemetry */}
        <div className="absolute bottom-5 left-4 sm:left-6 right-4 sm:right-6 z-30 flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#7A7A80] pointer-events-none">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F76707]" />
            <span>SCROLL CINEMA // CHAPTER 01</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span>SCROLL TO EVOLVE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#F76707]" />
          </div>
        </div>

        {/* Minimal Hairline Progress Scrub */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.08] z-30">
          <div
            ref={progressBarRef}
            className="h-full w-0 bg-[#F76707] transition-[width] duration-75"
          />
        </div>
      </div>
    </section>
  );
}

