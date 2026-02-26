import { TrackIntroTemplate } from "@/components/deck";
import { Rocket, BarChart3, Briefcase } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

export default function TrackIntroSlide({ t }: Props) {
  return (
    <TrackIntroTemplate
      badge={t("trackIntro.badge")}
      title={t("trackIntro.title")}
      subtitle={t("trackIntro.subtitle")}
      pillars={[
        {
          icon: Rocket,
          title: t("trackIntro.pillars.narrative.title"),
          description: t("trackIntro.pillars.narrative.description"),
        },
        {
          icon: BarChart3,
          title: t("trackIntro.pillars.measurement.title"),
          description: t("trackIntro.pillars.measurement.description"),
        },
        {
          icon: Briefcase,
          title: t("trackIntro.pillars.adoption.title"),
          description: t("trackIntro.pillars.adoption.description"),
        },
      ]}
      conclusion={t("trackIntro.conclusion")}
      theme="bufferline"
    />
  );
}
