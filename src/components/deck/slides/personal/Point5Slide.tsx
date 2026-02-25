import { CardGridSlide } from "@/components/deck";
import { Pause, HelpCircle, RefreshCw } from "lucide-react";

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
          icon: Pause,
          title: t("point5.actions.pause.title"),
          description: t("point5.actions.pause.description"),
        },
        {
          icon: HelpCircle,
          title: t("point5.actions.challenge.title"),
          description: t("point5.actions.challenge.description"),
        },
        {
          icon: RefreshCw,
          title: t("point5.actions.reflect.title"),
          description: t("point5.actions.reflect.description"),
        },
      ]}
      conclusion={t("point5.outcome")}
      theme="bufferline"
    />
  );
}
