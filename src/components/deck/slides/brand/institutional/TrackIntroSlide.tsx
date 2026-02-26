import { TrackIntroTemplate } from "@/components/deck";
import { Briefcase, CheckCircle, Users } from "lucide-react";

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
          icon: Briefcase,
          title: t("trackIntro.pillars.operations.title"),
          description: t("trackIntro.pillars.operations.description"),
        },
        {
          icon: CheckCircle,
          title: t("trackIntro.pillars.control.title"),
          description: t("trackIntro.pillars.control.description"),
        },
        {
          icon: Users,
          title: t("trackIntro.pillars.capability.title"),
          description: t("trackIntro.pillars.capability.description"),
        },
      ]}
      conclusion={t("trackIntro.conclusion")}
      theme="bufferline"
    />
  );
}
