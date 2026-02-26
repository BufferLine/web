import { CardGridSlide } from "@/components/deck";
import { BarChart3, TrendingUp, Eye } from "lucide-react";

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
          icon: BarChart3,
          title: t("point2.features.jsv.title"),
          description: t("point2.features.jsv.description"),
        },
        {
          icon: TrendingUp,
          title: t("point2.features.dv.title"),
          description: t("point2.features.dv.description"),
        },
        {
          icon: Eye,
          title: t("point2.features.citizenai.title"),
          description: t("point2.features.citizenai.description"),
        },
      ]}
      conclusion={t("point2.principle")}
      theme="bufferline"
    />
  );
}
