import { Slide, InfoCard, ConclusionBox } from "@/components/deck";
import { FileCode, Bot, Layers } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const methods = [
  { key: "marker", icon: FileCode, variant: "default" as const },
  { key: "ai", icon: Bot, variant: "default" as const },
  { key: "hybrid", icon: Layers, variant: "themed" as const },
];

export default function Point3Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point3.title")}
        </h2>
        <p className="text-slate-400 text-center mb-6">{t("point3.subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
          {methods.map(({ key, icon, variant }) => (
            <InfoCard
              key={key}
              icon={icon}
              title={t(`point3.methods.${key}.title`)}
              description={t(`point3.methods.${key}.description`)}
              theme="jdvp"
              variant={variant}
              footer={
                <div className="text-xs space-y-1">
                  <p className="text-green-400">
                    ✓ {t(`point3.methods.${key}.pros`)}
                  </p>
                  <p className="text-slate-500">
                    ✗ {t(`point3.methods.${key}.cons`)}
                  </p>
                </div>
              }
            />
          ))}
        </div>
        <ConclusionBox theme="jdvp">{t("point3.recommendation")}</ConclusionBox>
      </div>
    </Slide>
  );
}
