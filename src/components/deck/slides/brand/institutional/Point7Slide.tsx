import { Slide, ConclusionBox } from "@/components/deck";
import { Briefcase, GraduationCap } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const icons = {
  enterprise: Briefcase,
  education: GraduationCap,
};

export default function Point7Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point7.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-5 sm:mb-10 text-center">
          {t("point7.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
          {(["enterprise", "education"] as const).map((key) => {
            const Icon = icons[key];
            return (
              <div
                key={key}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-700"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-lg font-bold text-indigo-300">
                    {t(`point7.cases.${key}.title`)}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  {t(`point7.cases.${key}.context`)}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="p-2 rounded bg-red-900/20 border border-red-800/30">
                    <p className="text-xs text-red-400 mb-1">Before</p>
                    <p className="text-sm text-slate-300">
                      {t(`point7.cases.${key}.before`)}
                    </p>
                  </div>
                  <div className="p-2 rounded bg-green-900/20 border border-green-800/30">
                    <p className="text-xs text-green-400 mb-1">After</p>
                    <p className="text-sm text-slate-300">
                      {t(`point7.cases.${key}.after`)}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded bg-indigo-900/30 mb-4">
                  <p className="text-sm text-indigo-300 font-semibold">
                    {t(`point7.cases.${key}.result`)}
                  </p>
                </div>

                <div className="border-l-2 border-indigo-500/30 pl-3">
                  <p className="text-sm text-slate-400 italic">
                    {t(`point7.cases.${key}.quote`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <ConclusionBox theme="bufferline">{t("point7.insight")}</ConclusionBox>
      </div>
    </Slide>
  );
}
