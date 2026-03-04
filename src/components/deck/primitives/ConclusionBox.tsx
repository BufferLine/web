import { DeckTheme, getTheme } from "../theme";

interface ConclusionBoxProps {
  children: React.ReactNode;
  theme: DeckTheme;
  /** Box variant */
  variant?: "accent" | "neutral";
  className?: string;
}

export default function ConclusionBox({
  children,
  theme,
  variant = "accent",
  className = "",
}: ConclusionBoxProps) {
  const colors = getTheme(theme);

  const boxClasses =
    variant === "accent"
      ? `p-4 rounded-xl ${colors.bg} border ${colors.border} text-center`
      : "p-4 rounded-xl bg-surface-card/75 border border-surface-border text-center";

  const textClasses = variant === "accent" ? colors.textLight : "text-neutral-300";

  return (
    <div className={`${boxClasses} ${className}`}>
      <p className={textClasses}>{children}</p>
    </div>
  );
}
