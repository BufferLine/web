import { DeckTheme, getTheme } from "../theme";

interface TOCItemProps {
  number: number;
  title: string;
  subtitle: string;
  theme: DeckTheme;
  onClick: () => void;
  /** Compact mode for decks with many items */
  compact?: boolean;
}

export default function TOCItem({
  number,
  title,
  subtitle,
  theme,
  onClick,
  compact = false,
}: TOCItemProps) {
  const colors = getTheme(theme);
  const padding = compact ? "p-3" : "p-4";
  const titleSize = compact ? "text-base" : "text-lg";
  const subtitleMargin = compact ? "mt-0.5" : "mt-1";

  return (
    <button
      onClick={onClick}
      className={`w-full text-left ${padding} rounded-xl bg-surface-card/75 border border-surface-border ${colors.borderHover} hover:bg-surface-elevated/70 transition-all group`}
    >
      <div className="flex items-start gap-4">
        <span className={`${colors.text} font-mono text-lg`}>
          {number.toString().padStart(2, "0")}
        </span>
        <div>
          <h3
            className={`${titleSize} font-semibold text-neutral-100 ${colors.textHover} transition-colors`}
          >
            {title}
          </h3>
          <p className={`text-surface-muted text-sm ${subtitleMargin}`}>{subtitle}</p>
        </div>
      </div>
    </button>
  );
}
