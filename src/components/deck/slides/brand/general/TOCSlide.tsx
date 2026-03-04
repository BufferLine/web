import { Slide } from "@/components/deck";
import { CircleCheckBig, CircleHelp, CirclePause } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const checks = [
  { key: "1", icon: CirclePause, tone: "border-accent-jdvp/30 text-accent-jdvp-light" },
  { key: "2", icon: CircleHelp, tone: "border-accent-thinkprint/30 text-accent-thinkprint-light" },
  { key: "3", icon: CircleCheckBig, tone: "border-rose-500/30 text-rose-300" },
] as const;

export default function TOCSlide({ t }: Props) {
  return (
    <Slide className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 text-center">
          {t("awareness.title")}
        </h2>
        <p className="text-base md:text-lg text-slate-300 mb-6 md:mb-10 text-center">
          {t("awareness.subtitle")}
        </p>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {checks.map(({ key, icon: Icon, tone }) => (
            <div key={key} className={`rounded-xl border bg-slate-900/70 p-3.5 md:p-5 ${tone}`}>
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-base md:text-lg text-white mb-1">
                    {t(`awareness.points.${key}.title`)}
                  </p>
                  <p className="text-sm md:text-base text-slate-300">
                    {t(`awareness.points.${key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-slate-200">
          {t("awareness.talkTrack")}
        </p>
      </div>
    </Slide>
  );
}
