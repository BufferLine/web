import { Slide, InfoCard, ConclusionBox } from "@/components/deck";
import { TrendingUp, Shield, Lightbulb } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const icons = {
  trust: TrendingUp,
  safety: Shield,
  innovation: Lightbulb,
};

export default function Point4Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point4.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-10 text-center">
          {t("point4.subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {(["trust", "safety", "innovation"] as const).map((key) => (
            <InfoCard
              key={key}
              icon={icons[key]}
              title={t(`point4.benefits.${key}.title`)}
              description={t(`point4.benefits.${key}.description`)}
              theme="bufferline"
              variant="themed"
              footer={
                <p className="text-xs text-indigo-400 font-mono">
                  KPI: {t(`point4.benefits.${key}.kpi`)}
                </p>
              }
            />
          ))}
        </div>

        <ConclusionBox theme="bufferline" variant="neutral">
          {t("point4.tagline")}
        </ConclusionBox>
      </div>
    </Slide>
  );
}
