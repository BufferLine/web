"use client";

import { Section, Card } from "@/components/ui";
import { useTranslations, useLocale } from "next-intl";
import NextLink from "next/link";

export default function MetaGovernancePage() {
  const t = useTranslations("metagovernance");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-bufferline/[0.05] via-transparent to-transparent pointer-events-none" />

        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-bufferline/10 border border-accent-bufferline/20 text-accent-bufferline-subtle text-sm mb-8">
            {t("badge")}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            <span className="text-gradient">{t("title")}</span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-lg text-surface-muted leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>
      </Section>

      {/* What is Meta Governance */}
      <Section>
        <Card variant="bordered">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("sections.what.title")}
          </h2>
          <p className="text-surface-muted leading-relaxed">
            {t("sections.what.description")}
          </p>
        </Card>
      </Section>

      {/* Current Status */}
      <Section>
        <Card variant="bordered">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("sections.status.title")}
          </h2>
          <p className="text-surface-muted leading-relaxed">
            {t("sections.status.description")}
          </p>
        </Card>
      </Section>

      {/* Back to Home */}
      <Section>
        <NextLink
          href={`/${locale}`}
          className="text-accent-bufferline-subtle hover:text-neutral-100 transition-colors text-sm"
        >
          ← {t("backToHome")}
        </NextLink>
      </Section>
    </>
  );
}
