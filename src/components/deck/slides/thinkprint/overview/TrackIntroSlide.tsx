import { TrackIntroTemplate } from "@/components/deck";
import { Heart, Route, Sparkles } from "lucide-react";

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
          icon: Heart,
          title: t("trackIntro.pillars.extraction.title"),
          description: t("trackIntro.pillars.extraction.description"),
        },
        {
          icon: Route,
          title: t("trackIntro.pillars.calibration.title"),
          description: t("trackIntro.pillars.calibration.description"),
        },
        {
          icon: Sparkles,
          title: t("trackIntro.pillars.connection.title"),
          description: t("trackIntro.pillars.connection.description"),
        },
      ]}
      conclusion={t("trackIntro.conclusion")}
      theme="thinkprint"
    />
  );
}
