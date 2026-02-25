"use client";

import { useState, useEffect, useCallback } from "react";

interface UseDeckNavigationOptions {
  totalSlides: number;
  swipeThreshold?: number;
}

interface UseDeckNavigationReturn {
  currentSlide: number;
  setCurrentSlide: (slide: number | ((prev: number) => number)) => void;
  goNext: () => void;
  goPrev: () => void;
}

export default function useDeckNavigation({
  totalSlides,
  swipeThreshold = 50,
}: UseDeckNavigationOptions): UseDeckNavigationReturn {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Touch/swipe navigation
  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev, swipeThreshold]);

  return {
    currentSlide,
    setCurrentSlide,
    goNext,
    goPrev,
  };
}
