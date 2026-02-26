import { CardGridSlide } from "@/components/deck";
import { FileText, Terminal, FileJson } from "lucide-react";

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
      ]}
      theme="thinkprint"
      cardVariant="themed"
    />
  );
}
