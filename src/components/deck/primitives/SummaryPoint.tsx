import { DeckTheme, getTheme } from "../theme";

interface SummaryPointProps {
  label: string;
  text: string;
  theme: DeckTheme;
}

export default function SummaryPoint({ label, text, theme }: SummaryPointProps) {
  const colors = getTheme(theme);

  return (
    <div className="p-4 sm:p-6 rounded-xl bg-slate-900/50 border border-slate-700">
      <p className="text-base sm:text-xl text-slate-300">
        <span className={`${colors.text} font-semibold`}>{label}</span> {text}
      </p>
    </div>
  );
}
