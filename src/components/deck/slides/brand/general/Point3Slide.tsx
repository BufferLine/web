import { Slide, MetricCard } from "@/components/deck";
import { Zap } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const metrics = ["tam", "sam", "som"] as const;

export default function Point3Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point3.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-4 sm:mb-8 text-center">
          {t("point3.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
          {metrics.map((key) => (
            <MetricCard
              key={key}
              label={t(`point3.market.${key}.label`)}
              value={t(`point3.market.${key}.value`)}
              description={t(`point3.market.${key}.description`)}
              theme="bufferline"
            />
          ))}
        </div>
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
          <h4 className="text-indigo-300 font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Market Drivers
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-slate-400">
            <p>• {t("point3.drivers.regulation")}</p>
            <p>• {t("point3.drivers.trust")}</p>
            <p>• {t("point3.drivers.incidents")}</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
