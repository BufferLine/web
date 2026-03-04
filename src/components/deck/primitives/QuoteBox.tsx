import { DeckTheme, getTheme } from "../theme";
import { Quote } from "lucide-react";

interface QuoteBoxProps {
  quote: string;
  author?: string;
  theme: DeckTheme;
}

export default function QuoteBox({ quote, author, theme }: QuoteBoxProps) {
  const colors = getTheme(theme);

  return (
    <div className="p-3 sm:p-5 rounded-xl bg-surface-card/75 border border-surface-border text-center">
      <Quote
        className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.text} mx-auto mb-3 opacity-50`}
      />
      <p className="text-neutral-300 italic mb-2">{quote}</p>
      {author && <p className="text-neutral-500 text-sm">{author}</p>}
    </div>
  );
}
