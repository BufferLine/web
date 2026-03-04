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
  const gradientViaMap: Record<DeckTheme, string> = {
    bufferline: "via-indigo-950/20",
    jdvp: "via-teal-950/20",
    thinkprint: "via-amber-950/20",
  };
  const gradientVia = gradientViaMap[theme];

  return (
    <Slide className={`bg-gradient-to-b from-slate-950 ${gradientVia} to-slate-950`}>
      <div className="text-center max-w-6xl w-full min-h-[calc(100vh-12rem)] md:min-h-0 flex flex-col justify-center">
        <div className="mb-6 md:mb-12 opacity-60">
          <Logo />
        </div>
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-8 leading-tight">
          {line1}
          <br />
          <span
            className={`inline-block md:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientText}`}
          >
            {line2}
          </span>
        </h1>
        <p className="text-base md:text-2xl text-slate-400 px-2">{question}</p>
        <div className="mt-6 md:mt-16 text-slate-600 text-xs md:text-sm animate-bounce">{navigateHint}</div>
      </div>
    </Slide>
  );
}
