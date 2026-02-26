import { TrackIntroTemplate } from "@/components/deck";
import { Heart, Eye, TrendingUp } from "lucide-react";

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
          title: t("trackIntro.pillars.awareness.title"),
          description: t("trackIntro.pillars.awareness.description"),
        },
        {
          icon: Eye,
          title: t("trackIntro.pillars.visibility.title"),
          description: t("trackIntro.pillars.visibility.description"),
        },
        {
          icon: TrendingUp,
          title: t("trackIntro.pillars.improvement.title"),
          description: t("trackIntro.pillars.improvement.description"),
        },
      ]}
      conclusion={t("trackIntro.conclusion")}
      theme="bufferline"
    />
  );
}
