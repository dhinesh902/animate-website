"use client";

import { useState, useEffect, useRef } from "react";

interface UseImageSequenceOptions {
  framePaths?: string[];
  autoLoad?: boolean;
}

interface UseImageSequenceReturn {
  imagesRef: React.MutableRefObject<HTMLImageElement[]>;
  progress: number;
  isLoading: boolean;
  isLoaded: boolean;
  totalFrames: number;
  loadedFramesCount: number;
}

export function useImageSequence({
  framePaths = [],
  autoLoad = true,
}: UseImageSequenceOptions = {}): UseImageSequenceReturn {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [loadedFramesCount, setLoadedFramesCount] = useState<number>(0);
  const totalFrames = framePaths.length;

  useEffect(() => {
    if (!autoLoad || totalFrames === 0) {
      if (totalFrames === 0) {
        setIsLoading(false);
      }
      return;
    }

    let isMounted = true;
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(totalFrames);

    // Progressive update throttler
    let lastReportedProgress = 0;

    const onImageSettled = (index: number, img: HTMLImageElement) => {
      if (!isMounted) return;
      images[index] = img;
      loadedCount++;

      const currentPercent = Math.min(
        100,
        Math.round((loadedCount / totalFrames) * 100)
      );

      // Report progress in smooth increments
      if (currentPercent > lastReportedProgress || loadedCount === totalFrames) {
        lastReportedProgress = currentPercent;
        setProgress(currentPercent);
        setLoadedFramesCount(loadedCount);
      }

      if (loadedCount >= totalFrames) {
        imagesRef.current = images;
        setIsLoaded(true);
        // Small delay to allow canvas render before removing loading state
        setTimeout(() => {
          if (isMounted) setIsLoading(false);
        }, 300);
      }
    };

    // Load initial first frame with high priority for instant first render
    const firstImg = new Image();
    firstImg.src = framePaths[0];
    firstImg.onload = () => onImageSettled(0, firstImg);
    firstImg.onerror = () => onImageSettled(0, firstImg);

    // Load remaining frames
    for (let i = 1; i < totalFrames; i++) {
      const img = new Image();
      img.src = framePaths[i];
      img.onload = () => onImageSettled(i, img);
      img.onerror = () => onImageSettled(i, img);
    }

    return () => {
      isMounted = false;
      // Clear image references
      images.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, [framePaths, autoLoad, totalFrames]);

  return {
    imagesRef,
    progress,
    isLoading,
    isLoaded,
    totalFrames,
    loadedFramesCount,
  };
}

