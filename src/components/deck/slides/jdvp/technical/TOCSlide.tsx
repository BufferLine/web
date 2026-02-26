import { TOCTemplate } from "@/components/deck";

interface Props {
  t: (key: string) => string;
  setSlide: (n: number) => void;
}

export default function TOCSlide({ t, setSlide }: Props) {
  const tocOrder = [1, 2, 4, 3, 5] as const;
  const items = tocOrder.map((num) => ({
    title: t(`toc.point${num}.title`),
    subtitle: t(`toc.point${num}.subtitle`),
  }));

  return (
    <TOCTemplate
      title={t("toc.title")}
      items={items}
      theme="jdvp"
      setSlide={setSlide}
      startSlideIndex={3}
    />
  );
}
