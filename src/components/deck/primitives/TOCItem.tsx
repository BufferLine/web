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
      className={`w-full text-left ${padding} rounded-xl bg-slate-900/50 border border-slate-800 ${colors.borderHover} hover:bg-slate-800/50 transition-all group`}
    >
      <div className="flex items-start gap-4">
        <span className={`${colors.text} font-mono text-lg`}>
          {number.toString().padStart(2, "0")}
        </span>
        <div>
          <h3
            className={`${titleSize} font-semibold text-white ${colors.textHover} transition-colors`}
          >
            {title}
          </h3>
          <p className={`text-slate-400 text-sm ${subtitleMargin}`}>{subtitle}</p>
        </div>
      </div>
    </button>
  );
}
