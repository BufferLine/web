import { CardGridSlide } from "@/components/deck";
import { FileCode, Puzzle } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

export default function Point5Slide({ t }: Props) {
  return (
    <CardGridSlide
      title={t("point5.title")}
      cards={[
        {
          icon: FileCode,
          title: t("point5.markers.title"),
          description: t("point5.markers.description"),
        },
        {
          icon: Puzzle,
          title: t("point5.fields.title"),
          description: t("point5.fields.description"),
        },
      ]}
      conclusion={t("point5.example")}
      theme="jdvp"
      columns={2}
    />
  );
}
