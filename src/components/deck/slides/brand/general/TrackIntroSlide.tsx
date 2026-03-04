import { Slide } from "@/components/deck";
import { HeartPulse, Lightbulb, Users } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const scenes = [
  { key: "1", icon: HeartPulse },
  { key: "2", icon: Lightbulb },
  { key: "3", icon: Users },
] as const;

export default function TrackIntroSlide({ t }: Props) {
  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-100 mb-3 md:mb-4 text-center">
          {t("everydayShift.title")}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-10 text-center">
          {t("everydayShift.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-5 md:mb-8">
          {scenes.map(({ key, icon: Icon }) => (
            <div key={key} className="rounded-2xl border border-accent-bufferline/25 bg-accent-bufferline/[0.08] p-3.5 md:p-5">
              <div className="flex items-center gap-2 mb-3 text-accent-bufferline-light">
                <Icon className="w-5 h-5" />
                <p className="text-xs font-semibold tracking-wide uppercase">{t(`everydayShift.items.${key}.tag`)}</p>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-neutral-100">
                {t(`everydayShift.items.${key}.text`)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-indigo-200">
          {t("everydayShift.talkTrack")}
        </p>
      </div>
    </Slide>
  );
}
