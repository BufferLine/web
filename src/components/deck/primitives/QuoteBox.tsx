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
    <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 text-center">
      <Quote
        className={`w-8 h-8 ${colors.text} mx-auto mb-3 opacity-50`}
      />
      <p className="text-slate-300 italic mb-2">{quote}</p>
      {author && <p className="text-slate-500 text-sm">{author}</p>}
    </div>
  );
}
