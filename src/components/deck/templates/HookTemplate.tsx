import { Logo } from "@/components/shared";
import { Slide } from "@/components/deck";
import { DeckTheme, getTheme } from "../theme";

interface HookTemplateProps {
  line1: string;
  line2: string;
  question: string;
  navigateHint: string;
  theme: DeckTheme;
}

export default function HookTemplate({
  line1,
  line2,
  question,
  navigateHint,
  theme,
}: HookTemplateProps) {
  const colors = getTheme(theme);
  const gradientVia =
    theme === "jdvp"
      ? "via-teal-950/20"
      : "via-indigo-950/20";

  return (
    <Slide className={`bg-gradient-to-b from-slate-950 ${gradientVia} to-slate-950`}>
      <div className="text-center max-w-4xl">
        <div className="mb-12 opacity-60">
          <Logo />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          {line1}
          <br />
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientText}`}
          >
            {line2}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400">{question}</p>
        <div className="mt-16 text-slate-600 text-sm animate-bounce">{navigateHint}</div>
      </div>
    </Slide>
  );
}
