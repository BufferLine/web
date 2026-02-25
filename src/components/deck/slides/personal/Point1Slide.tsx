import { CardGridSlide } from "@/components/deck";
import { Utensils, Tv, MessageSquare } from "lucide-react";

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
          icon: Utensils,
          title: t("point1.examples.restaurant.title"),
          description: t("point1.examples.restaurant.description"),
        },
        {
          icon: Tv,
          title: t("point1.examples.entertainment.title"),
          description: t("point1.examples.entertainment.description"),
        },
        {
          icon: MessageSquare,
          title: t("point1.examples.communication.title"),
          description: t("point1.examples.communication.description"),
        },
      ]}
      conclusion={t("point1.conclusion")}
      theme="bufferline"
    />
  );
}
