import { Slide } from "@/components/deck";
import { CircleCheckBig, Repeat2, TriangleAlert, UserRound } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const inputKeys = ["1", "2", "3"] as const;
const outputKeys = ["1", "2"] as const;

export default function Point4Slide({ t }: Props) {
  const title = t("thinkprint.title");
  const [label, ...restParts] = title.split(":");
  const rest = restParts.join(":").trim();

  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-100 mb-3 md:mb-4 text-center">
          {rest ? (
            <>
              <span className="text-accent-thinkprint-light">{label}:</span>{" "}
              {rest}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-8 text-center">
          {t("thinkprint.subtitle")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="rounded-2xl border border-accent-thinkprint/30 bg-accent-thinkprint/[0.08] p-4 md:p-5">
            <div className="flex items-center gap-2 mb-3 text-accent-thinkprint-light">
              <UserRound className="w-5 h-5" />
              <h3 className="text-lg font-semibold">{t("thinkprint.inputTitle")}</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-neutral-100">
              {inputKeys.map((key) => (
                <li key={key} className={key === "3" ? "hidden md:list-item" : undefined}>- {t(`thinkprint.items.input.${key}`)}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent-thinkprint/30 bg-surface-card/85 p-4 md:p-5">
            <div className="flex items-center gap-2 mb-3 text-accent-thinkprint-light">
              <Repeat2 className="w-5 h-5" />
              <h3 className="text-lg font-semibold">{t("thinkprint.outputTitle")}</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-neutral-100">
              {outputKeys.map((key) => (
                <li key={key} className={key === "2" ? "hidden md:list-item" : undefined}>- {t(`thinkprint.items.output.${key}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-accent-bufferline/30 bg-accent-bufferline/[0.10] p-4 md:p-4">
            <div className="flex items-center gap-2 mb-2 text-accent-bufferline-light">
              <CircleCheckBig className="w-5 h-5" />
              <p className="font-semibold">{t("thinkprint.good.title")}</p>
            </div>
            <p className="text-sm text-indigo-100">{t("thinkprint.good.body")}</p>
          </div>
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-4 md:p-4">
            <div className="flex items-center gap-2 mb-2 text-orange-300">
              <TriangleAlert className="w-5 h-5" />
              <p className="font-semibold">{t("thinkprint.caution.title")}</p>
            </div>
            <p className="text-sm text-orange-100">{t("thinkprint.caution.body")}</p>
          </div>
        </div>

        <p className="text-center text-sm md:text-base text-accent-thinkprint-light mt-6">
          {t("thinkprint.talkTrack")}
        </p>
      </div>
    </Slide>
  );
}
