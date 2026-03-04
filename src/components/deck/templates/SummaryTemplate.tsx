import { Slide } from "@/components/deck";
import { SummaryPoint, CTAButtons } from "../primitives";
import { DeckTheme } from "../theme";

interface SummaryPointData {
  label: string;
  text: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface SummaryTemplateProps {
  title: string;
  points: SummaryPointData[];
  tagline: string;
  buttons: CTAButton[];
  theme: DeckTheme;
}

export default function SummaryTemplate({
  title,
  points,
  tagline,
  buttons,
  theme,
}: SummaryTemplateProps) {
  // Map theme to gradient background color
  const gradientMap: Record<DeckTheme, string> = {
    bufferline: "via-indigo-950/20",
    jdvp: "via-teal-950/20",
    thinkprint: "via-amber-950/20",
  };
  const gradientVia = gradientMap[theme];

  return (
    <Slide className={`bg-gradient-to-b from-slate-950 ${gradientVia} to-slate-950`}>
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6 sm:mb-12">{title}</h2>
        <div className="space-y-3 sm:space-y-6 mb-8 sm:mb-16">
          {points.map((point, index) => (
            <SummaryPoint
              key={index}
              label={point.label}
              text={point.text}
              theme={theme}
            />
          ))}
        </div>
        <div className="mb-6 sm:mb-12">
          <p className="text-lg sm:text-2xl text-neutral-100 font-medium mb-4">{tagline}</p>
        </div>
        <CTAButtons buttons={buttons} theme={theme} />
      </div>
    </Slide>
  );
}
