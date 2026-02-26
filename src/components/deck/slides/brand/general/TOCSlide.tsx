import { TOCTemplate } from "@/components/deck";

interface Props {
  t: (key: string) => string;
  setSlide: (n: number) => void;
}

export default function TOCSlide({ t, setSlide }: Props) {
  const tocKeys = ["point1", "point2", "point4", "domainDiff", "point3", "point5"] as const;
  const items = tocKeys.map((key) => ({
    title: t(`toc.${key}.title`),
    subtitle: t(`toc.${key}.subtitle`),
  }));

  return (
    <TOCTemplate
      title={t("toc.title")}
      items={items}
      theme="bufferline"
      setSlide={setSlide}
      startSlideIndex={3}
    />
  );
}
