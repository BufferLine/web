import { Slide, InfoCard, ConclusionBox } from "@/components/deck";
import { Users, Building } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const domainTags = {
  personal: ["Thinkprint", "JDVP"],
  institutional: ["JDVP", "Meta Governance", "Thinkprint"],
} as const;

export default function Point4Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point4.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-4 sm:mb-8 text-center">
          {t("point4.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
          <InfoCard
            icon={Users}
            title={t("point4.strategies.personal.title")}
            description={t("point4.strategies.personal.description")}
            theme="bufferline"
            variant="themed"
            footer={
              <div className="space-y-2">
                <p className="text-xs text-indigo-400/80 font-mono">
                  {t("point4.strategies.personal.model")}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {domainTags.personal.map((d) => (
                    <span key={d} className="px-2 py-0.5 rounded-full bg-indigo-900/40 text-indigo-300 text-[10px] font-mono">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            }
          />
          <InfoCard
            icon={Building}
            title={t("point4.strategies.institutional.title")}
            description={t("point4.strategies.institutional.description")}
            theme="bufferline"
            variant="themed"
            footer={
              <div className="space-y-2">
                <p className="text-xs text-indigo-400/80 font-mono">
                  {t("point4.strategies.institutional.model")}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {domainTags.institutional.map((d) => (
                    <span key={d} className="px-2 py-0.5 rounded-full bg-indigo-900/40 text-indigo-300 text-[10px] font-mono">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            }
          />
        </div>

        <ConclusionBox theme="bufferline">
          {t("point4.conclusion")}
        </ConclusionBox>
      </div>
    </Slide>
  );
}
