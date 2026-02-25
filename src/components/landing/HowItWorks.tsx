"use client";

import { Section, Card } from "@/components/ui";
import { useTranslations } from "next-intl";

const stepKeys = ["step1", "step2", "step3", "step4"] as const;
const patternKeys = ["gradual", "rapid", "oscillation", "reclamation", "collaborative"] as const;

const stepColors = {
  step1: "from-blue-500 to-cyan-500",
  step2: "from-indigo-500 to-violet-500",
  step3: "from-violet-500 to-purple-500",
  step4: "from-purple-500 to-pink-500",
};

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <Section id="how-it-works" className="bg-surface-card/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-surface-muted max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Process steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stepKeys.map((key) => (
          <Card key={key} variant="glass" className="relative">
            <div
              className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${stepColors[key]}`}
            />
            <div className="pt-2">
              <span
                className={`text-4xl font-bold bg-gradient-to-r ${stepColors[key]} bg-clip-text text-transparent`}
              >
                {t(`steps.${key}.number`)}
              </span>
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="text-surface-muted text-sm">{t(`steps.${key}.description`)}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* State transition patterns */}
      <div className="bg-surface-elevated/30 rounded-xl p-6 border border-surface-border/50">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">
          {t("patterns.title")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {patternKeys.map((key) => (
            <div
              key={key}
              className="p-4 rounded-lg bg-surface-card/50 border border-surface-border/30"
            >
              <h4 className="font-medium text-white text-sm mb-2">
                {t(`patterns.${key}.name`)}
              </h4>
              <p className="text-accent-jdvp-light text-xs font-mono mb-1">
                {t(`patterns.${key}.flow`)}
              </p>
              <p className="text-neutral-500 text-xs">{t(`patterns.${key}.signature`)}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
