import { LucideIcon } from "lucide-react";
import { DeckTheme, getTheme } from "../theme";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  theme: DeckTheme;
  /** Optional additional content below description */
  footer?: React.ReactNode;
  /** Card variant */
  variant?: "default" | "themed";
}

export default function InfoCard({
  icon: Icon,
  title,
  description,
  theme,
  footer,
  variant = "default",
}: InfoCardProps) {
  const colors = getTheme(theme);

  const cardClasses =
    variant === "themed"
      ? `p-4 sm:p-6 rounded-xl ${colors.bg} border ${colors.border}`
      : "p-3 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800";

  return (
    <div className={cardClasses}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-5 h-5 ${colors.text}`} />
        <h3 className={`text-lg font-semibold ${colors.textLight}`}>{title}</h3>
      </div>
      <p className="text-slate-400 text-sm">{description}</p>
      {footer && (
        <div className="mt-3 p-2 rounded border border-slate-700/50 bg-slate-800/30">
          {footer}
        </div>
      )}
    </div>
  );
}
