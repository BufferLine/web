import { Slide, ComparisonBox, QuoteBox } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

const metricKeys = ["complaints", "audit", "trust"] as const;
const resultKeys = ["reduction", "audit", "trust"] as const;

export default function Point5Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point5.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-4 sm:mb-8 text-center">
          {t("point5.subtitle")}
        </p>

        <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/50 mb-4 sm:mb-8 text-center">
          <p className="text-indigo-300 font-semibold">
            {t("point5.company.name")}
          </p>
          <p className="text-slate-400 text-sm mt-1">
            {t("point5.company.context")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
          <ComparisonBox
            title={t("point5.metrics.before.title")}
            items={metricKeys.map((key) => t(`point5.metrics.before.${key}`))}
            variant="before"
          />
          <ComparisonBox
            title={t("point5.metrics.after.title")}
            items={metricKeys.map((key) => t(`point5.metrics.after.${key}`))}
            variant="after"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-4 sm:mb-8">
          {resultKeys.map((key) => (
            <span
              key={key}
              className="px-4 py-2 rounded-full bg-indigo-900/50 text-indigo-300 font-semibold text-sm"
            >
              {t(`point5.results.${key}`)}
            </span>
          ))}
        </div>

        <QuoteBox
          quote={t("point5.quote")}
          author={t("point5.quote_author")}
          theme="bufferline"
        />
      </div>
    </Slide>
  );
}
