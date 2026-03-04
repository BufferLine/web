import { CardGridSlide } from "@/components/deck";
import { Users, BriefcaseBusiness, TriangleAlert } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

export default function Point3Slide({ t }: Props) {
  return (
    <CardGridSlide
      title={t("point3.title")}
      subtitle={t("point3.subtitle")}
      cards={[
        {
          icon: Users,
          title: t("point3.projects.blindDate.title"),
          description: t("point3.projects.blindDate.description"),
        },
        {
          icon: BriefcaseBusiness,
          title: t("point3.projects.persona.title"),
          description: t("point3.projects.persona.description"),
        },
        {
          icon: TriangleAlert,
          title: t("point3.projects.difficulty.title"),
          description: t("point3.projects.difficulty.description"),
        },
      ]}
      theme="thinkprint"
    />
  );
}
