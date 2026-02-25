import { CardGridSlide } from "@/components/deck";
import { Lightbulb, ShieldOff, User } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

export default function Point2Slide({ t }: Props) {
  return (
    <CardGridSlide
      title={t("point2.title")}
      subtitle={t("point2.subtitle")}
      cards={[
        {
          icon: Lightbulb,
          title: t("point2.costs.creativity.title"),
          description: t("point2.costs.creativity.description"),
        },
        {
          icon: ShieldOff,
          title: t("point2.costs.confidence.title"),
          description: t("point2.costs.confidence.description"),
        },
        {
          icon: User,
          title: t("point2.costs.identity.title"),
          description: t("point2.costs.identity.description"),
        },
      ]}
      conclusion={t("point2.insight")}
      theme="bufferline"
    />
  );
}
