import { LucideIcon } from "lucide-react";
import { Slide } from "@/components/deck";
import { InfoCard, ConclusionBox } from "../primitives";
import { DeckTheme, getTheme } from "../theme";

interface TrackPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TrackIntroTemplateProps {
  badge: string;
  title: string;
  subtitle: string;
  pillars: TrackPillar[];
  conclusion?: string;
  theme: DeckTheme;
}

export default function TrackIntroTemplate({
  badge,
  title,
  subtitle,
  pillars,
  conclusion,
  theme,
}: TrackIntroTemplateProps) {
  const colors = getTheme(theme);

  return (
    <Slide className="bg-slate-950">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-10">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${colors.bg} border ${colors.border} ${colors.text}`}>
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            {title}
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <InfoCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              theme={theme}
              variant="themed"
            />
          ))}
        </div>

        {conclusion && (
          <ConclusionBox theme={theme} className="mt-8">
            {conclusion}
          </ConclusionBox>
        )}
      </div>
    </Slide>
  );
}
