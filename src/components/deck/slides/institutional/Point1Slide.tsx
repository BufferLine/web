import { Slide, ConclusionBox } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

export default function Point1Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {t("point1.title")}
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          {t("point1.problem1")}
        </p>
        <p className="text-xl md:text-2xl text-indigo-300 font-semibold mb-8">
          {t("point1.problem2")}
        </p>
        <p className="text-lg text-slate-400 mb-8">{t("point1.problem3")}</p>
        <ConclusionBox theme="bufferline">{t("point1.conclusion")}</ConclusionBox>
      </div>
    </Slide>
  );
}
