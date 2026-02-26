import { CardGridSlide } from "@/components/deck";
import { EyeOff, Ruler, AlertTriangle } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

export default function Point1Slide({ t }: Props) {
  return (
    <CardGridSlide
      title={t("point1.title")}
      subtitle={t("point1.subtitle")}
      cards={[
        {
          icon: EyeOff,
          title: t("point1.problems.invisible.title"),
          description: t("point1.problems.invisible.description"),
        },
        {
          icon: Ruler,
          title: t("point1.problems.nostandard.title"),
          description: t("point1.problems.nostandard.description"),
        },
        {
          icon: AlertTriangle,
          title: t("point1.problems.risk.title"),
          description: t("point1.problems.risk.description"),
        },
      ]}
      conclusion={t("point1.conclusion")}
      theme="bufferline"
    />
  );
}
