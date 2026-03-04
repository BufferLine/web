import { CardGridSlide } from "@/components/deck";
import { MessageSquareText, IdCard, FlaskConical, RefreshCcw } from "lucide-react";

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
          icon: MessageSquareText,
          title: t("point2.items.profiling.title"),
          description: t("point2.items.profiling.description"),
        },
        {
          icon: IdCard,
          title: t("point2.items.psychology.title"),
          description: t("point2.items.psychology.description"),
        },
        {
          icon: FlaskConical,
          title: t("point2.items.alignment.title"),
          description: t("point2.items.alignment.description"),
        },
        {
          icon: RefreshCcw,
          title: t("point2.items.cloning.title"),
          description: t("point2.items.cloning.description"),
        },
      ]}
      theme="thinkprint"
    />
  );
}
