"use client";

import { Section, Card } from "@/components/ui";
import { useTranslations, useLocale } from "next-intl";
import NextLink from "next/link";
import { Zap, ArrowRightLeft, Shield, Layers } from "lucide-react";

const coreCards = [
  { key: "formation", icon: Zap },
  { key: "flow", icon: ArrowRightLeft },
  { key: "stabilization", icon: Shield },
  { key: "meta", icon: Layers },
] as const;

const vocabKeys = [
  "authorityArchitecture",
  "powerFlow",
  "captureDefense",
  "selfCorrection",
] as const;

export default function MetaGovernancePage() {
  const t = useTranslations("metagovernance");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-meta/[0.05] via-transparent to-transparent pointer-events-none" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-meta/10 border border-accent-meta/20 text-accent-meta text-sm mb-8">
            {t("badge")}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            {t("headline")}
          </h1>
          <p className="text-xl md:text-2xl text-surface-muted mb-6">
            {t("subtitle")}
          </p>

          <div className="max-w-2xl">
            <p className="text-lg text-surface-muted leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>
      </Section>

      {/* What is Meta Governance */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t("sections.what.title")}
        </h2>
        <p className="text-surface-muted leading-relaxed max-w-3xl">
          {t("sections.what.description")}
        </p>
      </Section>

      {/* Core Question + Cards */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t("sections.core.title")}
        </h2>
        <p className="text-surface-muted leading-relaxed mb-8 max-w-3xl">
          {t("sections.core.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreCards.map(({ key, icon: Icon }) => (
            <Card key={key} variant="bordered">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-meta/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent-meta" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {t(`sections.core.cards.${key}.title`)}
                  </h3>
                  <p className="text-surface-muted text-sm leading-relaxed">
                    {t(`sections.core.cards.${key}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Connection */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t("sections.connection.title")}
        </h2>
        <p className="text-surface-muted leading-relaxed mb-6 max-w-3xl">
          {t("sections.connection.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NextLink href={`/${locale}/jdvp`}>
            <Card variant="bordered" hover className="group cursor-pointer h-full">
              <div className="flex items-start gap-3">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-jdvp mt-1.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-accent-jdvp-light transition-colors">JDVP</h3>
                  <p className="text-surface-muted text-sm leading-relaxed">{t("sections.connection.jdvp")}</p>
                </div>
              </div>
            </Card>
          </NextLink>
          <NextLink href={`/${locale}/thinkprint`}>
            <Card variant="bordered" hover className="group cursor-pointer h-full">
              <div className="flex items-start gap-3">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-thinkprint mt-1.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-accent-thinkprint-light transition-colors">Thinkprint</h3>
                  <p className="text-surface-muted text-sm leading-relaxed">{t("sections.connection.thinkprint")}</p>
                </div>
              </div>
            </Card>
          </NextLink>
        </div>
      </Section>

      {/* Key Concepts */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          {t("vocabulary.title")}
        </h2>

        <div className="space-y-4">
          {vocabKeys.map((key) => (
            <div key={key} className="border-l-2 border-accent-meta/30 pl-4">
              <dt className="text-white font-semibold text-sm">
                {t(`vocabulary.terms.${key}.term`)}
              </dt>
              <dd className="text-surface-muted text-sm leading-relaxed mt-1">
                {t(`vocabulary.terms.${key}.definition`)}
              </dd>
            </div>
          ))}
        </div>
      </Section>

      {/* Current Status */}
      <Section className="bg-surface-card/50">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t("sections.status.title")}
        </h2>
        <p className="text-surface-muted leading-relaxed mb-6">
          {t("sections.status.description")}
        </p>

        <ul className="space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-meta mt-1.5 flex-shrink-0" />
              {t(`sections.status.items.${i}`)}
            </li>
          ))}
        </ul>
      </Section>

      {/* Back */}
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
