import { Slide } from "@/components/deck";
import { EyeOff, ScrollText, ShieldAlert } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const gaps = [
  { key: "observation", icon: EyeOff, tone: "border-accent-jdvp/30 bg-accent-jdvp/[0.08] text-accent-jdvp-light" },
  { key: "policy", icon: ScrollText, tone: "border-accent-thinkprint/30 bg-accent-thinkprint/[0.08] text-accent-thinkprint-light" },
  { key: "authority", icon: ShieldAlert, tone: "border-rose-500/30 bg-rose-500/10 text-rose-300" },
] as const;

export default function Point1Slide({ t }: Props) {
  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-100 mb-3 md:mb-4 text-center">
          {t("coreGap.title")}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-8 text-center">
          {t("coreGap.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {gaps.map(({ key, icon: Icon, tone }) => (
            <article key={key} className={`rounded-2xl border p-4 md:p-5 ${tone}`}>
              <Icon className="w-6 h-6 mb-3" />
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                {t(`coreGap.items.${key}.title`)}
              </h3>
              <p className="text-sm md:text-base text-neutral-200">
                {t(`coreGap.items.${key}.description`)}
              </p>
            </article>
          ))}
        </div>

        <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-center text-violet-100 text-sm md:text-base">
          {t("coreGap.talkTrack")}
        </div>
      </div>
    </Slide>
  );
}
