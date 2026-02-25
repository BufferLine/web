import { DeckTheme, getTheme } from "../theme";

type StatusColor = "green" | "yellow" | "slate";

interface PhaseCardProps {
  title: string;
  status?: string;
  statusColor?: StatusColor;
  items: string[];
  theme: DeckTheme;
  variant?: "active" | "current" | "upcoming";
}

const statusColorMap: Record<StatusColor, string> = {
  green: "text-green-400",
  yellow: "text-yellow-400",
  slate: "text-slate-500",
};

export default function PhaseCard({
  title,
  status,
  statusColor = "slate",
  items,
  theme,
  variant = "upcoming",
}: PhaseCardProps) {
  const colors = getTheme(theme);

  const variantStyles = {
    active: `${colors.bgLight} ${colors.border}`,
    current: `bg-slate-900/70 ${colors.border}`,
    upcoming: "bg-slate-900/70 border-slate-700",
  };

  return (
    <div className={`p-5 rounded-xl border ${variantStyles[variant]}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-lg font-bold ${colors.textLight}`}>{title}</h3>
        {status && (
          <span className={`text-xs font-mono ${statusColorMap[statusColor]}`}>
            {status}
          </span>
        )}
      </div>
      <ul className="space-y-1 text-sm text-slate-400">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
