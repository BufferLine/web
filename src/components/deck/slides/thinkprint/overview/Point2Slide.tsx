import { CardGridSlide } from "@/components/deck";
import { ShieldOff, BrainCircuit, Scale, UserX } from "lucide-react";

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
          icon: ShieldOff,
          title: t("point2.items.profiling.title"),
          description: t("point2.items.profiling.description"),
        },
        {
          icon: BrainCircuit,
          title: t("point2.items.psychology.title"),
          description: t("point2.items.psychology.description"),
        },
        {
          icon: Scale,
          title: t("point2.items.alignment.title"),
          description: t("point2.items.alignment.description"),
        },
        {
          icon: UserX,
          title: t("point2.items.cloning.title"),
          description: t("point2.items.cloning.description"),
        },
      ]}
      theme="thinkprint"
    />
  );
}
