import { Slide, InfoCard } from "@/components/deck";
import { Users, Building } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
          <InfoCard
            icon={Users}
            title={t("point4.strategies.personal.title")}
            description={t("point4.strategies.personal.description")}
            theme="bufferline"
            variant="themed"
            footer={
              <p className="text-xs text-indigo-400/80 font-mono">
                {t("point4.strategies.personal.model")}
              </p>
            }
          />
          <InfoCard
            icon={Building}
            title={t("point4.strategies.institutional.title")}
            description={t("point4.strategies.institutional.description")}
            theme="bufferline"
            variant="themed"
            footer={
              <p className="text-xs text-indigo-400/80 font-mono">
                {t("point4.strategies.institutional.model")}
              </p>
            }
          />
        </div>
      </div>
    </Slide>
  );
}
