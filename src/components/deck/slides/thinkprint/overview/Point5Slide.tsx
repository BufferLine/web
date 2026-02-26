import { CardGridSlide } from "@/components/deck";
import { Shield, Link, Zap } from "lucide-react";

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
          icon: Shield,
          title: t("point5.connections.independence.title"),
          description: t("point5.connections.independence.description"),
        },
        {
          icon: Link,
          title: t("point5.connections.synergy.title"),
          description: t("point5.connections.synergy.description"),
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
