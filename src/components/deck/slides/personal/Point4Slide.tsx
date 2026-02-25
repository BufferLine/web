import { CardGridSlide } from "@/components/deck";
import { BarChart3, TrendingUp, Eye } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

export default function Point4Slide({ t }: Props) {
  return (
    <CardGridSlide
      title={t("point4.title")}
      subtitle={t("point4.subtitle")}
      cards={[
        {
          icon: BarChart3,
          title: t("point4.features.patterns.title"),
          description: t("point4.features.patterns.description"),
        },
        {
          icon: TrendingUp,
          title: t("point4.features.trends.title"),
          description: t("point4.features.trends.description"),
        },
        {
          icon: Eye,
          title: t("point4.features.insights.title"),
          description: t("point4.features.insights.description"),
        },
      ]}
      conclusion={t("point4.tagline")}
      theme="jdvp"
    />
  );
}
