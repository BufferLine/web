import { SummaryTemplate } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

export default function SummarySlide({ t }: Props) {
  const points = [1, 2, 3].map((num) => ({
    label: t(`summary.point${num}.label`),
    text: t(`summary.point${num}.text`),
  }));

  return (
    <SummaryTemplate
      title={t("summary.title")}
      points={points}
      tagline={t("summary.tagline")}
      buttons={[
        { label: t("summary.cta.github"), href: "#", variant: "primary" },
        { label: t("summary.cta.home"), href: "#", variant: "secondary" },
      ]}
      theme="bufferline"
    />
  );
}
