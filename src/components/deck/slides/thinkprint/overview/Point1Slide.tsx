import { CardGridSlide } from "@/components/deck";
import { Sparkles, Eye, FileEdit } from "lucide-react";

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
          icon: Sparkles,
          title: t("point1.features.toy.title"),
          description: t("point1.features.toy.description"),
        },
        {
          icon: Eye,
          title: t("point1.features.reflection.title"),
          description: t("point1.features.reflection.description"),
        },
        {
          icon: FileEdit,
          title: t("point1.features.declaration.title"),
          description: t("point1.features.declaration.description"),
        },
      ]}
      theme="thinkprint"
    />
  );
}
