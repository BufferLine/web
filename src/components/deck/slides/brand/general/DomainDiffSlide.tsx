import { Slide, InfoCard } from "@/components/deck";
import { Eye, Brain, Shield } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const domains = [
  { key: "jdvp", icon: Eye },
  { key: "thinkprint", icon: Brain },
  { key: "metagov", icon: Shield },
] as const;

export default function DomainDiffSlide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("domainDiff.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-4 sm:mb-8 text-center">
          {t("domainDiff.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          {domains.map(({ key, icon }) => (
            <InfoCard
              key={key}
              icon={icon}
              title={t(`domainDiff.domains.${key}.title`)}
              description={t(`domainDiff.domains.${key}.description`)}
              theme="bufferline"
              variant="themed"
              footer={
                <p className="text-xs text-indigo-400/80">
                  {t(`domainDiff.domains.${key}.diff`)}
                </p>
              }
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
