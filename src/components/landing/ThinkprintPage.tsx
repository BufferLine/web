"use client";

import { Section, Card, Button } from "@/components/ui";
import { ArrowRight, Check, X } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

const stepKeys = ["extract", "calibrate", "deepen", "freeze"] as const;
const outputKeys = ["declaration", "prompt", "metadata"] as const;
const HEADLINE_VARIANT = "a" as const;

const outputIcons = {
  declaration: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  prompt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  metadata: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
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
              <a href="https://github.com/BufferLine/thinkprint/blob/main/docs/whitepaper_v0.4.md" target="_blank" rel="noopener noreferrer">
                {t("cta.whitepaper")}
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* What it is / What it is not */}
      <Section>
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

      {/* Pipeline */}
      <Section className="bg-surface-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("pipeline.title")}
          </h2>
          <p className="text-surface-muted max-w-2xl mx-auto">
            {t("pipeline.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepKeys.map((key) => (
            <Card key={key} variant="glass" className="relative">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-accent-thinkprint to-accent-thinkprint-light" />
              <div className="pt-2">
                <span className="text-4xl font-bold text-gradient-thinkprint">
                  {t(`pipeline.steps.${key}.number`)}
                </span>
                <h3 className="text-lg font-semibold text-white mt-3 mb-2">
                  {t(`pipeline.steps.${key}.title`)}
                </h3>
                <p className="text-surface-muted text-sm">
                  {t(`pipeline.steps.${key}.description`)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Output Structure */}
      <Section>
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
    </>
  );
}
