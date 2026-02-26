import { Slide, ConclusionBox } from "@/components/deck";
import { CheckCircle, Clock } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const phases = ["phase1", "phase2", "phase3"] as const;
const phaseColors = {
  phase1: "from-indigo-500 to-violet-500",
  phase2: "from-violet-500 to-indigo-400",
  phase3: "from-indigo-400 to-indigo-300",
};

export default function Point8Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point8.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-5 sm:mb-10 text-center">
          {t("point8.subtitle")}
        </p>

        <div className="relative">
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-300 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            {phases.map((phase, idx) => (
              <div key={phase} className="relative">
                <div
                  className={`hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r ${phaseColors[phase]} items-center justify-center mx-auto mb-4 relative z-10`}
                >
                  <span className="text-white font-bold text-sm">{idx + 1}</span>
                </div>
                <div className="flex md:hidden w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">{idx + 1}</span>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-700 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm text-indigo-300">
                      {t(`point8.phases.${phase}.duration`)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t(`point8.phases.${phase}.title`)}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {t(`point8.phases.${phase}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {[0, 1, 2].map((actIdx) => (
                      <li
                        key={actIdx}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {t(`point8.phases.${phase}.activities.${actIdx}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ConclusionBox theme="bufferline" className="mt-5 sm:mt-10">
          {t("point8.cta")}
        </ConclusionBox>
      </div>
    </Slide>
  );
}
