"use client";

import { DeckNav } from "@/components/shared";
import ProgressBar, { DeckTheme } from "./ProgressBar";
import NavControls from "./NavControls";
import KeyboardHint from "./KeyboardHint";
import useDeckNavigation from "./useDeckNavigation";

type SlideElement = React.ReactNode | ((setSlide: (n: number) => void) => React.ReactNode);

interface DeckLayoutProps {
  /** Deck name shown in navigation */
  deckName: string;
  /** Array of slide elements or functions that receive setCurrentSlide */
  slides: SlideElement[];
  /** Theme color for progress bar and accents */
  theme?: DeckTheme;
  /** Keyboard hint text */
  keyboardHintText?: string;
  /** Labels for accessibility */
  controlLabels?: {
    prev?: string;
    next?: string;
  };
}

export default function DeckLayout({
  deckName,
  slides,
  theme = "bufferline",
  keyboardHintText = "to navigate",
  controlLabels = {},
}: DeckLayoutProps) {
  const { currentSlide, setCurrentSlide, goNext, goPrev } = useDeckNavigation({
    totalSlides: slides.length,
  });

  return (
    <main className="bg-slate-950 text-slate-100 overflow-hidden">
      <DeckNav deckName={deckName} />
      <div
        className="transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-screen overflow-y-auto md:overflow-hidden">
            {typeof slide === "function"
              ? (slide as (setSlide: (n: number) => void) => React.ReactNode)(setCurrentSlide)
              : slide}
          </div>
        ))}
      </div>
      <ProgressBar current={currentSlide} total={slides.length} theme={theme} />
      <NavControls
        current={currentSlide}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
        prevLabel={controlLabels.prev}
        nextLabel={controlLabels.next}
      />
      <KeyboardHint hintText={keyboardHintText} />
    </main>
  );
}

// Re-export for convenience
export { default as Slide } from "./Slide";
export { default as useDeckNavigation } from "./useDeckNavigation";
export type { DeckTheme } from "./ProgressBar";
