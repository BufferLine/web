import { TOCTemplate } from "@/components/deck";

interface Props {
  t: (key: string) => string;
  setSlide: (n: number) => void;
}

export default function TOCSlide({ t, setSlide }: Props) {
  const items = [1, 2, 3, 4, 5].map((num) => ({
    title: t(`toc.point${num}.title`),
    subtitle: t(`toc.point${num}.subtitle`),
  }));

  return (
    <TOCTemplate
      title={t("toc.title")}
      items={items}
      theme="bufferline"
      setSlide={setSlide}
    />
  );
}
