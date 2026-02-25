"use client";

import { Section, Card } from "@/components/ui";
import { useTranslations } from "next-intl";

const conceptKeys = ["observer", "measure", "buffer", "temporal"] as const;

const conceptIcons = {
  observer: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  measure: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  buffer: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  temporal: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function Concept() {
  const t = useTranslations("concept");

  return (
    <Section id="concept">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-surface-muted max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conceptKeys.map((key) => (
          <Card key={key} variant="bordered" hover>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-jdvp/10 flex items-center justify-center text-accent-jdvp-light">
                {conceptIcons[key]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="text-surface-muted text-sm">{t(`cards.${key}.description`)}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Hard constraints callout */}
      <aside className="mt-12 p-6 rounded-xl bg-accent-meta/[0.08] border border-accent-meta/[0.15]">
        <h3 className="text-lg font-semibold text-accent-meta mb-3 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {t("constraints.title")}
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-neutral-300">
          <li className="flex items-center gap-2">
            <span className="text-accent-meta">×</span> {t("constraints.noScoring")}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-meta">×</span> {t("constraints.noNormative")}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-meta">×</span> {t("constraints.noRecommendations")}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-meta">×</span> {t("constraints.noAggregation")}
          </li>
        </ul>
      </aside>
    </Section>
  );
}
