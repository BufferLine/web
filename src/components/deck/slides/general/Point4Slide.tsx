import { CardGridSlide } from "@/components/deck";
import { Users, Building } from "lucide-react";

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
          icon: Users,
          title: t("point4.strategies.personal.title"),
          description: t("point4.strategies.personal.description"),
          footer: (
            <p className="text-xs text-indigo-400/70 font-mono">
              {t("point4.strategies.personal.model")}
            </p>
          ),
        },
        {
          icon: Building,
          title: t("point4.strategies.institutional.title"),
          description: t("point4.strategies.institutional.description"),
          footer: (
            <p className="text-xs text-indigo-400/70 font-mono">
              {t("point4.strategies.institutional.model")}
            </p>
          ),
        },
      ]}
      theme="bufferline"
      columns={2}
    />
  );
}
