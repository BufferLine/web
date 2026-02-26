export type DeckTheme = "bufferline" | "jdvp" | "thinkprint";

const gradientMap: Record<DeckTheme, string> = {
  bufferline: "from-accent-bufferline to-accent-bufferline-light",
  jdvp: "from-accent-jdvp to-semantic-shared",
  thinkprint: "from-accent-thinkprint to-accent-thinkprint-light",
};

interface ProgressBarProps {
  current: number;
  total: number;
  theme?: DeckTheme;
}

export default function ProgressBar({ current, total, theme = "bufferline" }: ProgressBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-surface-elevated z-50">
      <div
        className={`h-full bg-gradient-to-r ${gradientMap[theme]} transition-all duration-300`}
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  );
}
