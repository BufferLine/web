import { TrackIntroTemplate } from "@/components/deck";
import { SlidersHorizontal, Zap, BarChart3 } from "lucide-react";

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
          icon: SlidersHorizontal,
          title: t("trackIntro.pillars.architecture.title"),
          description: t("trackIntro.pillars.architecture.description"),
        },
        {
          icon: Zap,
          title: t("trackIntro.pillars.calculation.title"),
          description: t("trackIntro.pillars.calculation.description"),
        },
        {
          icon: BarChart3,
          title: t("trackIntro.pillars.extensibility.title"),
          description: t("trackIntro.pillars.extensibility.description"),
        },
      ]}
      conclusion={t("trackIntro.conclusion")}
      theme="jdvp"
    />
  );
}
