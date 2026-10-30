"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Loader2, ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface OrangeSequenceProps {
  initialFrames?: string[];
}

interface SceneInfo {
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  alignment: "left" | "center" | "right";
}

const SCENES: SceneInfo[] = [
  {
    tag: "PURITY",
    badge: "[ 01 // PURITY ]",
    title: "PURE. NATURAL. UNFILTERED.",
    subtitle: "Nature's finest orange experience.",
    alignment: "center",
  },
  {
    tag: "ESSENCE",
    badge: "[ 02 // ESSENCE ]",
    title: "ONE FRUIT. ENDLESS FRESHNESS.",
    subtitle: "A vibrant expression of nature.",
    alignment: "left",
  },
  {
    tag: "MOMENTUM",
    badge: "[ 03 // MOMENTUM ]",
    title: "FRESHNESS IN EVERY MOMENT.",
    subtitle: "Discover the beauty of orange.",
    alignment: "right",
  },
  {
    tag: "METAMORPHOSIS",
    badge: "[ 04 // METAMORPHOSIS ]",
    title: "FEEL THE ORANGE.",
    subtitle: "A refreshing visual experience.",
    alignment: "center",
  },
];

export function OrangeSequence({ initialFrames = [] }: OrangeSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textScenesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [frames, setFrames] = useState<string[]>(initialFrames);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Fetch frames from API if not provided via props
  useEffect(() => {
    if (initialFrames.length > 0) {
      setFrames(initialFrames);
      return;
    }

    let isSubscribed = true;
    fetch("/api/frames")
      .then((res) => res.json())
      .then((data) => {
        if (isSubscribed && data.frames && data.frames.length > 0) {
          setFrames(data.frames);
        }
      })
      .catch((err) => console.error("Error fetching frames:", err));

    return () => {
      isSubscribed = false;
    };
  }, [initialFrames]);

  // Preload images into memory
  useEffect(() => {
    if (frames.length === 0) return;

    let isMounted = true;
    const total = frames.length;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(total);

    const onFrameLoad = (index: number, img: HTMLImageElement) => {
      if (!isMounted) return;
      loadedImages[index] = img;
      loadedCount++;

      const pct = Math.round((loadedCount / total) * 100);
      setLoadProgress(pct);

      if (index === 0 && canvasRef.current) {
        imagesRef.current[0] = img;
        drawFrame(0);
      }

      if (loadedCount >= total) {
        imagesRef.current = loadedImages;
        setIsLoaded(true);
      }
    };

    // Load Frame 0 first
    const firstImg = new Image();
    firstImg.src = frames[0];
    firstImg.onload = () => onFrameLoad(0, firstImg);
    firstImg.onerror = () => onFrameLoad(0, firstImg);

    // Preload remaining frames
    for (let i = 1; i < total; i++) {
      const img = new Image();
      img.src = frames[i];
      img.onload = () => onFrameLoad(i, img);
      img.onerror = () => onFrameLoad(i, img);
    }

    return () => {
      isMounted = false;
    };
  }, [frames]);

  // Draw frame on canvas with aspect ratio preservation
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Fill background with black
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, width, height);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = width / height;

    let drawW: number;
    let drawH: number;

    const isMobile = width < 768;
    const scaleFactor = isMobile ? 1.05 : 0.98;

    if (canvasAspect > imgAspect) {
      drawH = height * scaleFactor;
      drawW = drawH * imgAspect;
    } else {
      drawW = width * scaleFactor;
      drawH = drawW / imgAspect;
    }

    const drawX = (width - drawW) / 2;
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
    if (!container || !sticky || !canvas || frames.length === 0) return;

    const totalFrames = frames.length;

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

          // Animate Storytelling Text Scenes
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
            let translateY = 20;
            let scale = 0.96;

            if (progress >= start && progress <= end) {
              if (progress < peakStart) {
                const t = (progress - start) / (peakStart - start);
                opacity = t;
                translateY = (1 - t) * 20;
                scale = 0.96 + t * 0.04;
              } else if (progress <= peakEnd) {
                opacity = 1;
                translateY = 0;
                scale = 1;
              } else {
                const t = (progress - peakEnd) / (end - peakEnd);
                opacity = 1 - t;
                translateY = -t * 20;
                scale = 1 - t * 0.04;
              }
            }

            sceneEl.style.opacity = opacity.toString();
            sceneEl.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
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
  }, [frames, drawFrame]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white select-none font-sans"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={stickyRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Ambient Atmosphere Lights */}
        <div className="absolute inset-0 bg-[#050505] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#FF7A00]/12 via-[#FFA726]/6 to-transparent rounded-full blur-[170px] pointer-events-none" />

        {/* Viewfinder Corner Crosshairs for high-fashion technical look */}
        <div className="absolute top-8 left-8 text-white/20 font-mono text-sm pointer-events-none hidden sm:block">
          + 38°43'20"N
        </div>
        <div className="absolute top-8 right-8 text-white/20 font-mono text-sm pointer-events-none hidden sm:block">
          + 00°24'45"W
        </div>
        <div className="absolute bottom-12 left-8 text-white/20 font-mono text-sm pointer-events-none hidden sm:block">
          + RES. 4K
        </div>
        <div className="absolute bottom-12 right-8 text-white/20 font-mono text-sm pointer-events-none hidden sm:block">
          + CITRUS // 01
        </div>

        {/* HTML5 Canvas */}
        <div className="relative w-full h-full flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(5,5,5,0.75)_80%,#050505_100%)]" />

        {/* Storytelling Text Overlays with Space Grotesk */}
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center px-6 sm:px-12 max-w-7xl mx-auto">
          {SCENES.map((scene, idx) => (
            <div
              key={idx}
              ref={(el) => {
                textScenesRef.current[idx] = el;
              }}
              style={{ opacity: 0, transform: "translate3d(0, 20px, 0) scale(0.96)" }}
              className={`absolute transition-none max-w-xl flex flex-col ${
                scene.alignment === "left"
                  ? "left-6 sm:left-16 text-left items-start"
                  : scene.alignment === "right"
                  ? "right-6 sm:right-16 text-right items-end"
                  : "text-center items-center"
              }`}
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-[#09090b]/80 backdrop-blur-xl border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col items-inherit">
                {/* Scene Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FF7A00]/30 backdrop-blur-md mb-3.5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#FFA726] uppercase font-semibold">
                    {scene.badge}
                  </span>
                </div>

                {/* Scene Title */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] uppercase leading-[0.92] mb-3 text-white">
                  {scene.title}
                </h2>

                {/* Scene Subtext */}
                <p className="text-base sm:text-lg font-normal text-[#8E8E93] tracking-normal max-w-md">
                  {scene.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Luxury Experience Footer (No Frame Counts) */}
        <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-30 flex items-center justify-between text-xs text-[#8E8E93] pointer-events-none font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse shadow-[0_0_10px_#FF7A00]" />
            <span className="tracking-[0.25em] uppercase text-[10px] font-medium text-white/90">
              [ METAMORPHOSIS // SEQUENCE ACTIVE ]
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.2em]">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FFA726]" />
          </div>
        </div>

        {/* Sleek Glowing Progress Bar along bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06] z-30">
          <div
            ref={progressBarRef}
            className="h-full w-0 bg-gradient-to-r from-[#FF7A00] via-[#FFA726] to-[#FF7A00] shadow-[0_0_12px_#FF7A00] transition-[width] duration-75"
          />
        </div>

        {/* Discreet Preload Indicator (Only when preloading) */}
        {!isLoaded && (
          <div className="absolute top-6 right-6 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#09090b]/90 border border-white/10 backdrop-blur-xl font-mono">
            <Loader2 className="w-3.5 h-3.5 text-[#FF7A00] animate-spin" />
            <span className="text-xs text-white/90 font-medium">
              Synchronizing Experience...
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
