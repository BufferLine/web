import { DeckTheme, getTheme } from "../theme";
import { LucideIcon } from "lucide-react";

interface CodeBlockProps {
  icon: LucideIcon;
  title: string;
  code: string;
  theme: DeckTheme;
  variant?: "default" | "themed";
}

export default function CodeBlock({
  icon: Icon,
  title,
  code,
  theme,
  variant = "default",
}: CodeBlockProps) {
  const colors = getTheme(theme);
  const isThemed = variant === "themed";

  return (
    <div
      className={`bg-surface-card rounded-xl overflow-hidden ${
        isThemed
          ? `border ${colors.border}`
          : "border border-surface-border"
      }`}
    >
      <div
        className={`flex items-center gap-2 px-4 py-2 border-b ${
          isThemed
            ? `${colors.bgLight} ${colors.border}`
            : "bg-surface-elevated border-surface-border"
        }`}
      >
        <Icon className={`w-4 h-4 ${colors.text}`} />
        <span
          className={`text-sm font-mono ${isThemed ? colors.textLight : "text-surface-muted"}`}
        >
          {title}
        </span>
      </div>
      <pre className="p-3 sm:p-4 text-xs overflow-x-auto text-neutral-300 font-mono leading-relaxed">
        {code}
      </pre>
    </div>
  );
}
