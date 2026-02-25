"use client";

interface NavControlsProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

export default function NavControls({
  current,
  total,
  onPrev,
  onNext,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
}: NavControlsProps) {
  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
      <span className="text-neutral-500 text-sm font-mono">
        {current + 1} / {total}
      </span>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-2 rounded-lg bg-surface-elevated/80 hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
          aria-label={prevLabel}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-2 rounded-lg bg-surface-elevated/80 hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
          aria-label={nextLabel}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
