import { CardGridSlide } from "@/components/deck";
import { Activity, Brain, Zap } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

export default function Point5Slide({ t }: Props) {
  return (
    <CardGridSlide
      title={t("point5.title")}
      subtitle={t("point5.subtitle")}
      cards={[
        {
          icon: Activity,
          title: t("point5.connections.jdvp.title"),
          description: t("point5.connections.jdvp.description"),
        },
        {
          icon: Brain,
          title: t("point5.connections.thinkprint.title"),
          description: t("point5.connections.thinkprint.description"),
        },
        {
          icon: Zap,
          title: t("point5.connections.future.title"),
          description: t("point5.connections.future.description"),
        },
      ]}
      theme="thinkprint"
      cardVariant="themed"
    />
  );
}
