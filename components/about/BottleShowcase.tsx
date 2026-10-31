"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { bottleFrames } from "@/lib/imageManifest";
import { ArrowDown, Sparkles, Aperture, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Chapter = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
  align: "left" | "right";
  range: [number, number];
};

const CHAPTERS: Chapter[] = [
  {
    id: "form",
    index: "01",
    eyebrow: "Architectural Form",
    title: "A silhouette built from light.",
    copy: "Precision-milled glass, weighted for balance and engineered to preserve every degree of cold.",
    align: "left",
    range: [0.06, 0.26],
  },
  {
    id: "botanical",
    index: "02",
    eyebrow: "Botanical Depth",
    title: "Valencia, captured raw.",
    copy: "Cold-pressed citrus oils remain suspended in their most vivid, unfiltered state.",
    align: "right",
    range: [0.31, 0.51],
  },
  {
    id: "refraction",
    index: "03",
    eyebrow: "Refraction",
    title: "Colour becomes atmosphere.",
    copy: "Light fractures through micro-droplets, turning the bottle into a living source of amber.",
    align: "left",
    range: [0.56, 0.76],
  },
  {
    id: "signature",
    index: "04",
    eyebrow: "Signature Edition",
    title: "Bottled artistry.",
    copy: "Natural. Uncompromising. A definitive expression of modern refreshment.",
    align: "right",
    range: [0.81, 0.99],
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function BottleShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const frameLabelRef = useRef<HTMLSpanElement | null>(null);
  const percentLabelRef = useRef<HTMLSpanElement | null>(null);

  const bottleLayerRef = useRef<HTMLDivElement | null>(null);
  const glowLayerRef = useRef<HTMLDivElement | null>(null);
  const gridLayerRef = useRef<HTMLDivElement | null>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeFrameRef = useRef(0);
  const drawRafRef = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index];

    if (!canvas || !image?.complete) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(
      image,
      (width - drawWidth) / 2,
      (height - drawHeight) / 2,
      drawWidth,
      drawHeight
    );
  }, []);

  useEffect(() => {
    if (!bottleFrames.length) return;

    let mounted = true;
    let loadedCount = 0;
    const images = new Array<HTMLImageElement>(bottleFrames.length);

    const handleLoad = (index: number, image: HTMLImageElement) => {
      if (!mounted) return;

      images[index] = image;
      loadedCount += 1;

      if (index === 0) {
        imagesRef.current[0] = image;
        drawFrame(0);
      }

      if (loadedCount === bottleFrames.length) {
        imagesRef.current = images;
        setLoaded(true);
        drawFrame(activeFrameRef.current);
      }
    };

    bottleFrames.forEach((src, index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      image.onload = () => handleLoad(index, image);
      image.onerror = () => handleLoad(index, image);
    });

    return () => {
      mounted = false;
    };
  }, [drawFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;

    if (!canvas || !parent) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      drawFrame(activeFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;

    if (!section || !stage || !canvas || !bottleFrames.length) return;

    const totalFrames = bottleFrames.length;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4200",
          pin: stage,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const value = self.progress;

            setProgress(value);

            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${value})`;
            }

            if (percentLabelRef.current) {
              percentLabelRef.current.textContent = `${Math.round(value * 100)}%`;
            }

            const nextFrame = clamp(
              Math.round(value * (totalFrames - 1)),
              0,
              totalFrames - 1
            );

            if (nextFrame !== activeFrameRef.current) {
              activeFrameRef.current = nextFrame;

              if (frameLabelRef.current) {
                frameLabelRef.current.textContent = `${String(
                  nextFrame + 1
                ).padStart(3, "0")} / ${totalFrames}`;
              }

              if (drawRafRef.current) {
                cancelAnimationFrame(drawRafRef.current);
              }

              drawRafRef.current = requestAnimationFrame(() => {
                drawFrame(nextFrame);
              });
            }

            chapterRefs.current.forEach((chapter, index) => {
              if (!chapter) return;

              const [start, end] = CHAPTERS[index].range;
              const visible = value >= start && value <= end;

              const enter = clamp((value - start) / 0.07, 0, 1);
              const exit = clamp((end - value) / 0.07, 0, 1);
              const intensity = Math.min(enter, exit);

              chapter.style.opacity = String(intensity);
              chapter.style.transform = `translate3d(0, ${(1 - intensity) * 28
                }px, 0)`;
              chapter.style.pointerEvents = intensity > 0.6 ? "auto" : "none";
            });
          },
        },
      });

      timeline
        .fromTo(
          bottleLayerRef.current,
          { scale: 1.14, yPercent: 4, rotateX: 7 },
          { scale: 1, yPercent: 0, rotateX: 0, duration: 0.25 },
          0
        )
        .fromTo(
          glowLayerRef.current,
          { opacity: 0.15, scale: 0.75 },
          { opacity: 1, scale: 1.15, duration: 0.45 },
          0
        )
        .fromTo(
          gridLayerRef.current,
          { opacity: 0, yPercent: 12 },
          { opacity: 0.55, yPercent: 0, duration: 0.3 },
          0
        )
        .to(
          bottleLayerRef.current,
          { scale: 1.06, yPercent: -2, rotateX: -4, duration: 0.7 },
          0.3
        )
        .to(
          glowLayerRef.current,
          { xPercent: 12, rotate: 12, duration: 0.7 },
          0.3
        )
        .to(
          bottleLayerRef.current,
          { scale: 1.18, yPercent: 2, rotateX: 5, duration: 0.7 },
          0.65
        )
        .to(
          glowLayerRef.current,
          { xPercent: -12, rotate: -12, duration: 0.7 },
          0.65
        );

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    }, section);

    return () => {
      context.revert();

      if (drawRafRef.current) {
        cancelAnimationFrame(drawRafRef.current);
      }
    };
  }, [drawFrame]);

  return (
    <section
      id="bottle-showcase"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-[#050505] text-white"
    >
      <div
        ref={stageRef}
        className="relative flex h-[100svh] w-full flex-col overflow-hidden"
      >
        {/* Deep cinematic backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,#181006_0%,#070707_55%,#020202_100%)]" />

        {/* Perspective floor grid */}
        <div
          ref={gridLayerRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[45%] opacity-0 [perspective:700px]"
        >
          <div className="absolute inset-0 origin-bottom [transform:rotateX(72deg)] bg-[linear-gradient(to_right,rgba(255,121,0,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,121,0,0.14)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>

        {/* Moving amber light source */}
        <div
          ref={glowLayerRef}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[85vmin] w-[85vmin] -translate-x-1/2 -translate-y-1/2 opacity-15"
        >
          <div className="h-full w-full rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,rgba(255,121,0,0.35)_80deg,rgba(255,190,80,0.18)_150deg,transparent_240deg)] blur-3xl" />
        </div>

        {/* 3D bottle stage */}
        <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center [perspective:1400px]">
          <div
            ref={bottleLayerRef}
            className="relative h-full w-full max-w-6xl [transform-style:preserve-3d]"
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full object-contain"
            />

            {/* Reflection */}
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[18%] w-[46%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(255,121,0,0.20),transparent)] blur-2xl" />
          </div>

          {/* Loading state */}
          <AnimatePresence>
            {!loaded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, filter: "blur(12px)" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-[#050505]"
              >
                <div className="w-full max-w-xs px-8 text-center">
                  <Aperture className="mx-auto mb-6 h-8 w-8 animate-spin text-[#FF7900]" />

                  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">
                    Rendering Bottle
                  </p>

                  <div className="h-px w-full overflow-hidden bg-white/10">
                    <div
                      className="h-full bg-[#FF7900] transition-[width] duration-200"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>

                  <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-white/30">
                    {Math.round(progress * 100)}%
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cinematic vignette and grain */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.72)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.035] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,white_0_1px,transparent_1px_3px)]" />

        {/* Top HUD */}
        <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF7900]" />
            Bottle Sequence
          </div>

          <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 sm:flex">
            <Layers className="h-3 w-3 text-[#FF7900]" />
            3D Cinematic Exhibit
          </div>
        </div>

        {/* Chapters */}
        <div className="pointer-events-none absolute inset-0 z-30">
          {CHAPTERS.map((chapter, index) => (
            <div
              key={chapter.id}
              ref={(element) => {
                chapterRefs.current[index] = element;
              }}
              style={{ opacity: 0 }}
              className={`absolute top-1/2 w-[min(88vw,26rem)] -translate-y-1/2 ${chapter.align === "left"
                  ? "left-5 text-left sm:left-10"
                  : "right-5 text-right sm:right-10"
                }`}
            >
              <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl sm:p-7">
                <div
                  className={`mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-[#FF7900] ${chapter.align === "right" ? "justify-end" : ""
                    }`}
                >
                  <span>{chapter.index}</span>
                  <span className="h-px w-8 bg-[#FF7900]/50" />
                  <span className="text-white/50">{chapter.eyebrow}</span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
                  {chapter.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  {chapter.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom cinematic HUD */}
        <div className="absolute inset-x-0 bottom-0 z-30 px-5 pb-6 sm:px-8">
          <div className="mx-auto flex max-w-6xl items-end justify-between gap-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              <span ref={frameLabelRef}>001 / {bottleFrames.length || 150}</span>
            </div>

            <div className="hidden flex-1 items-center gap-4 sm:flex">
              <div className="h-px flex-1 bg-white/10">
                <div
                  ref={progressRef}
                  className="h-full origin-left scale-x-0 bg-gradient-to-r from-[#FF7900] via-[#FFB347] to-white"
                />
              </div>

              <span
                ref={percentLabelRef}
                className="font-mono text-[10px] tracking-[0.25em] text-white/50"
              >
                0%
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              <Sparkles className="h-3 w-3 text-[#FF7900]" />
              Scroll
              <ArrowDown className="h-3 w-3 animate-bounce text-[#FF7900]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}