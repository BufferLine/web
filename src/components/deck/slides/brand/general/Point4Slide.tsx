import { Slide, InfoCard } from "@/components/deck";
import { Users, Building, Sparkles } from "lucide-react";

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
        <p className="text-lg text-slate-400 mb-8 text-center">
          {t("point4.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        <div className="p-5 rounded-xl bg-accent-bufferline/[0.08] border border-accent-bufferline/[0.15]">
          <h3 className="text-lg font-semibold text-accent-bufferline-light mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t("point4.differentiation.title")}
          </h3>
          <p className="text-slate-300 text-sm mb-4">
            {t("point4.differentiation.summary")}
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            {(["protocol", "declaration", "governance"] as const).map((key) => (
              <li key={key} className="flex items-start gap-2">
                <span className="text-accent-bufferline-light mt-0.5">•</span>
                <span>{t(`point4.differentiation.items.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
}
