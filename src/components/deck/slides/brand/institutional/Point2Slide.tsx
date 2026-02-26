import { CardGridSlide } from "@/components/deck";
import { Eye, Ruler, Ban } from "lucide-react";

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
          icon: Eye,
          title: t("point2.principles.observer.title"),
          description: t("point2.principles.observer.description"),
        },
        {
          icon: Ruler,
          title: t("point2.principles.measure.title"),
          description: t("point2.principles.measure.description"),
        },
        {
          icon: Ban,
          title: t("point2.principles.buffer.title"),
          description: t("point2.principles.buffer.description"),
        },
      ]}
      theme="bufferline"
    />
  );
}
