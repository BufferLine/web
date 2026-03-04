import { Slide } from "@/components/deck";
import { Activity, ArrowRight, Brain, Shield } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const layers = [
  {
    key: "jdvp",
    icon: Activity,
    tone: "border-accent-jdvp/30 bg-accent-jdvp/[0.08] text-accent-jdvp-light",
  },
  {
    key: "thinkprint",
    icon: Brain,
    tone: "border-accent-thinkprint/30 bg-accent-thinkprint/[0.08] text-accent-thinkprint-light",
  },
  {
    key: "metagov",
    icon: Shield,
    tone: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  },
] as const;

export default function Point2Slide({ t }: Props) {
  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-100 mb-3 md:mb-4 text-center">
          {t("cognitiveOs.title")}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-10 text-center">
          {t("cognitiveOs.subtitle")}
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-stretch mb-6 md:mb-8">
          {layers.map(({ key, icon: Icon, tone }, idx) => (
            <div key={key} className="flex items-center md:flex-1">
              <div className={`w-full rounded-xl border p-3.5 md:p-5 ${tone}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5" />
                  <h3 className="font-semibold text-neutral-100 text-base md:text-lg">
                    {t(`cognitiveOs.layers.${key}.title`)}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-neutral-200">
                  {t(`cognitiveOs.layers.${key}.description`)}
                </p>
              </div>
              {idx < layers.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-neutral-500 mx-2 shrink-0" />
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-indigo-200">
          {t("cognitiveOs.talkTrack")}
        </p>
      </div>
    </Slide>
  );
}
