import { Slide } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

export default function Point1Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 text-center">{t("point1.title")}</h2>
        <div className="text-center mb-4 sm:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-slate-300 font-mono text-sm md:text-base">
            <div className="p-3 md:p-4 border border-slate-700 rounded-lg bg-slate-900/50">Observer</div>
            <div className="text-teal-400">→</div>
            <div className="p-3 md:p-4 border border-slate-700 rounded-lg bg-slate-900/50">Analyzer</div>
            <div className="text-teal-400">→</div>
            <div className="p-3 md:p-4 border border-slate-700 rounded-lg bg-slate-900/50">Reporter</div>
          </div>
        </div>
        <div className="space-y-3 text-sm md:text-base">
          <p><strong className="text-teal-400">Observer:</strong> {t("point1.observer")}</p>
          <p><strong className="text-teal-400">Analyzer:</strong> {t("point1.analyzer")}</p>
          <p><strong className="text-teal-400">Reporter:</strong> {t("point1.reporter")}</p>
        </div>
        <p className="text-center text-lg mt-6 text-slate-400">{t("point1.conclusion")}</p>
      </div>
    </Slide>
  );
}
