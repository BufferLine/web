import { Slide, InfoCard } from "@/components/deck";
import { Eye, TrendingUp, Users, Briefcase, GraduationCap, HeartPulse } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const benefitIcons = {
  awareness: Eye,
  growth: TrendingUp,
  balance: Users,
};

const domainIcons = {
  enterprise: Briefcase,
  education: GraduationCap,
  healthcare: HeartPulse,
};

export default function Point6Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point6.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-4 text-center">
          {t("point6.subtitle")}
        </p>
        <p className="text-base text-slate-500 mb-10 text-center">
          {t("point6.intro")}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {(["awareness", "growth", "balance"] as const).map((key) => (
            <InfoCard
              key={key}
              icon={benefitIcons[key]}
              title={t(`point6.benefits.${key}.title`)}
              description={t(`point6.benefits.${key}.description`)}
              theme="bufferline"
            />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {(["enterprise", "education", "healthcare"] as const).map((key) => {
            const Icon = domainIcons[key];
            return (
              <div
                key={key}
                className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-semibold text-indigo-300">
                    {t(`point6.domains.${key}.title`)}
                  </h4>
                </div>
                <p className="text-xs text-slate-500">
                  {t(`point6.domains.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
