import { Slide } from "@/components/deck";
import { ArrowRightLeft, CircleCheckBig, TriangleAlert } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const flow = ["input", "output", "principle"] as const;
const goodKeys = ["1", "2"] as const;
const cautionKeys = ["1", "2"] as const;

export default function Point3Slide({ t }: Props) {
  const title = t("jdvp.title");
  const [label, ...restParts] = title.split(":");
  const rest = restParts.join(":").trim();

  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-100 mb-3 md:mb-4 text-center">
          {rest ? (
            <>
              <span className="text-accent-jdvp-light">{label}:</span>{" "}
              {rest}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-8 text-center">
          {t("jdvp.subtitle")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="lg:col-span-3 rounded-2xl border border-accent-jdvp/30 bg-accent-jdvp/[0.08] p-4 md:p-5">
            <div className="flex items-center gap-2 mb-4 text-accent-jdvp-light">
              <ArrowRightLeft className="w-5 h-5" />
              <h3 className="text-lg font-semibold">{t("jdvp.flowTitle")}</h3>
            </div>
            <div className="space-y-3">
              {flow.map((key, idx) => (
                <div key={key} className="rounded-lg border border-surface-border bg-surface-card/80 p-3">
                  <p className="text-xs text-surface-muted mb-1">STEP {idx + 1}</p>
                  <p className="text-neutral-100 font-medium">{t(`jdvp.items.${key}.title`)}</p>
                  <p className="text-xs md:text-sm text-neutral-300">{t(`jdvp.items.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-accent-bufferline/30 bg-accent-bufferline/[0.10] p-4 md:p-4">
              <div className="flex items-center gap-2 mb-2 text-accent-bufferline-light">
                <CircleCheckBig className="w-5 h-5" />
                <h4 className="font-semibold">{t("jdvp.good.title")}</h4>
              </div>
              <ul className="space-y-1 text-sm text-indigo-100">
                {goodKeys.map((key) => (
                  <li key={key} className={key === "2" ? "hidden md:list-item" : undefined}>- {t(`jdvp.good.items.${key}`)}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-4 md:p-4">
              <div className="flex items-center gap-2 mb-2 text-orange-300">
                <TriangleAlert className="w-5 h-5" />
                <h4 className="font-semibold">{t("jdvp.caution.title")}</h4>
              </div>
              <ul className="space-y-1 text-sm text-orange-100">
                {cautionKeys.map((key) => (
                  <li key={key} className={key === "2" ? "hidden md:list-item" : undefined}>- {t(`jdvp.caution.items.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm md:text-base text-accent-jdvp-light">
          {t("jdvp.talkTrack")}
        </p>
      </div>
    </Slide>
  );
}
