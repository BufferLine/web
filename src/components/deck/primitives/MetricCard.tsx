import { DeckTheme, getTheme } from "../theme";

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  theme: DeckTheme;
}

export default function MetricCard({
  label,
  value,
  description,
  theme,
}: MetricCardProps) {
  const colors = getTheme(theme);

  return (
    <div className="p-3 sm:p-5 rounded-xl bg-surface-card/85 border border-surface-border text-center">
      <p className={`${colors.text} font-mono text-sm mb-1`}>{label}</p>
      <p className="text-2xl sm:text-4xl font-bold text-neutral-100 mb-2">{value}</p>
      <p className="text-surface-muted text-sm">{description}</p>
    </div>
  );
}
