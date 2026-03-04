"use client";

import { Section, Card, Button } from "@/components/ui";
import { ArrowRight, Check, Presentation, Users, BriefcaseBusiness, TriangleAlert, X } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import ThinkprintInteractiveDemo from "./ThinkprintInteractiveDemo";

const outputKeys = ["model", "evidence", "safety"] as const;
const demoKeys = ["blindDate", "persona", "difficulty"] as const;
const HEADLINE_VARIANT = "a" as const;

const outputIcons = {
  model: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3v2.25m4.5-2.25v2.25M4.5 8.25h15m-13.5 12h10.5a2.25 2.25 0 002.25-2.25V8.25H3.75V18a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  evidence: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6m3 6V7m3 10v-4m3 8H6a2 2 0 01-2-2V5a2 2 0 012-2h8l4 4v12a2 2 0 01-2 2z" />
    </svg>
  ),
  safety: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7.5 4.5v6c0 4.5-3.1 7.8-7.5 8.9-4.4-1.1-7.5-4.4-7.5-8.9v-6L12 3z" />
    </svg>
  ),
};

const demoIcons = {
  blindDate: <Users className="w-5 h-5" />,
  persona: <BriefcaseBusiness className="w-5 h-5" />,
  difficulty: <TriangleAlert className="w-5 h-5" />,
};

export default function ThinkprintPage() {
  const t = useTranslations("thinkprint");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-thinkprint/[0.08] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-thinkprint/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-thinkprint/10 border border-accent-thinkprint/20 text-accent-thinkprint-light text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-thinkprint-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-thinkprint"></span>
            </span>
            {t("badge")}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {t(`headlineVariants.${HEADLINE_VARIANT}.line1`)}
            <br />
            <span className="text-gradient-thinkprint">
              {t(`headlineVariants.${HEADLINE_VARIANT}.line2`)}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-surface-muted max-w-2xl mx-auto mb-4">
            {t("tagline")}
          </p>

          {/* Description */}
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            {t("description")}
          </p>

          {/* Status badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-surface-elevated/50 border border-surface-border/50 text-sm mb-10">
            <span className="text-neutral-500">{t("status.label")}</span>
            <span className="text-accent-thinkprint font-medium">{t("status.value")}</span>
            <span className="text-neutral-600">—</span>
            <span className="text-neutral-400">{t("status.note")}</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent-thinkprint hover:bg-accent-thinkprint-hover focus:ring-accent-thinkprint">
              <a href="https://github.com/BufferLine/thinkprint" target="_blank" rel="noopener noreferrer">
                {t("cta.github")}
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="https://github.com/BufferLine/thinkprint/blob/main/packages/thinkprint-core/docs/00_governance/thinkprint-v1-whitepaper.md" target="_blank" rel="noopener noreferrer">
                {t("cta.whitepaper")}
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* What it is / What it is not */}
      <Section id="overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="bordered">
            <h3 className="text-lg font-semibold text-accent-thinkprint-light mb-4">
              {t("whatItIs.title")}
            </h3>
            <ul className="space-y-3">
              {(["toy", "reflection", "declaration"] as const).map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-accent-thinkprint mt-0.5 flex-shrink-0" />
                  {t(`whatItIs.items.${key}`)}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="bordered">
            <h3 className="text-lg font-semibold text-neutral-400 mb-4">
              {t("whatItIsNot.title")}
            </h3>
            <ul className="space-y-3">
              {(["profiling", "psychology", "alignment", "cloning"] as const).map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm text-neutral-500">
                  <X className="w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0" />
                  {t(`whatItIsNot.items.${key}`)}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Output Structure */}
      <Section id="projects" className="bg-surface-card/35">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("demo.title")}
          </h2>
          <p className="text-surface-muted max-w-2xl mx-auto">
            {t("demo.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoKeys.map((key) => (
            <Card key={key} variant="bordered">
              <div className="w-10 h-10 rounded-lg bg-accent-thinkprint/10 flex items-center justify-center text-accent-thinkprint-light mb-4">
                {demoIcons[key]}
              </div>
              <h3 className="text-base font-semibold text-neutral-100 mb-2">
                {t(`demo.cards.${key}.title`)}
              </h3>
              <p className="text-surface-muted text-sm">
                {t(`demo.cards.${key}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Interactive Demo */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("interactiveDemo.title")}
          </h2>
          <p className="text-surface-muted max-w-2xl mx-auto">
            {t("interactiveDemo.description")}
          </p>
        </div>

        <ThinkprintInteractiveDemo t={t} />
      </Section>

      {/* Technical Corner */}
      <Section id="artifacts">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("output.title")}
          </h2>
          <p className="text-surface-muted max-w-2xl mx-auto">
            {t("output.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outputKeys.map((key) => (
            <Card key={key} variant="bordered">
              <div className="w-10 h-10 rounded-lg bg-accent-thinkprint/10 flex items-center justify-center text-accent-thinkprint-light mb-4">
                {outputIcons[key]}
              </div>
              <h3 className="font-mono text-sm text-accent-thinkprint-light font-medium mb-2">
                {t(`output.${key}.title`)}
              </h3>
              <p className="text-surface-muted text-sm">
                {t(`output.${key}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Connection to BufferLine */}
      <Section className="bg-gradient-to-b from-surface-card/50 to-neutral-950/50">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-accent-thinkprint/[0.08] to-accent-bufferline/[0.08] border border-surface-border/50">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t("connection.title")}
          </h3>
          <p className="text-surface-muted mb-6 max-w-xl mx-auto">
            {t("connection.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent-jdvp/10 border border-accent-jdvp/20">
              <span className="inline-block h-2 w-2 rounded-full bg-accent-jdvp" />
              <span className="text-accent-jdvp-light">{t("connection.jdvp")}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600 hidden sm:block" />
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent-thinkprint/10 border border-accent-thinkprint/20">
              <span className="inline-block h-2 w-2 rounded-full bg-accent-thinkprint" />
              <span className="text-accent-thinkprint-light">{t("connection.thinkprint")}</span>
            </div>
          </div>

          <p className="text-neutral-600 text-xs mt-4 italic">
            {t("connection.future")}
          </p>

          <div className="mt-6">
            <NextLink
              href={`/${locale}/jdvp`}
              className="inline-flex items-center gap-2 text-sm text-accent-jdvp-light hover:text-accent-jdvp transition-colors"
            >
              Explore JDVP
              <ArrowRight className="w-4 h-4" />
            </NextLink>
          </div>
        </div>
      </Section>

      {/* Deck CTA */}
      <Section id="deck">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent-thinkprint/10 text-accent-thinkprint-light border border-accent-thinkprint/20 mb-4">
            <Presentation className="w-3.5 h-3.5" />
            {t("deck.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("deck.title")}
          </h2>
          <p className="text-surface-muted max-w-2xl mx-auto mb-8">
            {t("deck.description")}
          </p>
          <NextLink href={`/${locale}/deck/overview`}>
            <Button size="lg" className="bg-accent-thinkprint hover:bg-accent-thinkprint-hover focus:ring-accent-thinkprint">
              {t("deck.cta")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </NextLink>
        </div>
      </Section>
    </>
  );
}
