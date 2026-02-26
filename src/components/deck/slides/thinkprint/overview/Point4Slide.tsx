import { CardGridSlide } from "@/components/deck";
import { FileText, Terminal, FileJson, Package, FlaskConical, ClipboardCheck } from "lucide-react";

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
          icon: FileText,
          title: t("point4.artifacts.declaration.title"),
          description: t("point4.artifacts.declaration.description"),
        },
        {
          icon: Terminal,
          title: t("point4.artifacts.prompt.title"),
          description: t("point4.artifacts.prompt.description"),
        },
        {
          icon: FileJson,
          title: t("point4.artifacts.metadata.title"),
          description: t("point4.artifacts.metadata.description"),
        },
        {
          icon: Package,
          title: t("point4.artifacts.manifest.title"),
          description: t("point4.artifacts.manifest.description"),
        },
        {
          icon: FlaskConical,
          title: t("point4.artifacts.scenarios.title"),
          description: t("point4.artifacts.scenarios.description"),
        },
        {
          icon: ClipboardCheck,
          title: t("point4.artifacts.evaluation.title"),
          description: t("point4.artifacts.evaluation.description"),
        },
      ]}
      theme="thinkprint"
      cardVariant="themed"
    />
  );
}
