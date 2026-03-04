import { Slide } from "@/components/deck";
import { BadgeCheck, RefreshCcw, Shield, TriangleAlert } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const blocks = [
  { key: "signal", icon: BadgeCheck },
  { key: "renewal", icon: RefreshCcw },
  { key: "defense", icon: Shield },
] as const;

export default function Point5Slide({ t }: Props) {
  const title = t("metagov.title");
  const [label, ...restParts] = title.split(":");
  const rest = restParts.join(":").trim();

  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-100 mb-3 md:mb-4 text-center">
          {rest ? (
            <>
              <span className="text-rose-300">{label}:</span>{" "}
              {rest}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-8 text-center">
          {t("metagov.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {blocks.map(({ key, icon: Icon }) => (
            <article key={key} className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 md:p-5">
              <Icon className="w-6 h-6 text-rose-300 mb-3" />
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                {t(`metagov.items.${key}.title`)}
              </h3>
              <p className="text-xs md:text-base text-rose-100 leading-relaxed">
                {t(`metagov.items.${key}.description`)}
              </p>
            </article>
          ))}
        </div>

        <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-4 md:p-4 mb-5">
          <div className="flex items-start gap-2 text-violet-200">
            <TriangleAlert className="w-5 h-5 mt-0.5 shrink-0" />
            <p className="text-sm md:text-base">{t("metagov.caution")}</p>
          </div>
        </div>

        <p className="text-center text-sm md:text-base text-rose-200">
          {t("metagov.talkTrack")}
        </p>
      </div>
    </Slide>
  );
}
