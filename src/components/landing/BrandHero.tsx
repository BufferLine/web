"use client";

import { Section, Button } from "@/components/ui";
import { useTranslations, useLocale } from "next-intl";

export default function BrandHero() {
  const t = useTranslations("brandHero");
  const locale = useLocale();

  return (
    <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-bufferline/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-bufferline/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-bufferline/10 border border-accent-bufferline/20 text-accent-bufferline-subtle text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-bufferline-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-bufferline"></span>
          </span>
          {t("badge")}
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          {t("headline.line1")}
          <br />
          <span className="text-gradient">
            {t("headline.line2")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-surface-muted max-w-2xl mx-auto mb-4">
          {t("subtitle")}
        </p>

        {/* Description */}
        <p className="text-neutral-500 mb-10 max-w-xl mx-auto">
          {t("description")}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">
            <a href={`/${locale}/jdvp`}>{t("cta.explore")}</a>
          </Button>
          <Button variant="outline" size="lg">
            <a href="https://github.com/BufferLine" target="_blank" rel="noopener noreferrer">
              {t("cta.github")}
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
