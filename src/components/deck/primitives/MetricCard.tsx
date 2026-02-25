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
    <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-700 text-center">
      <p className={`${colors.text} font-mono text-sm mb-1`}>{label}</p>
      <p className="text-4xl font-bold text-white mb-2">{value}</p>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}
