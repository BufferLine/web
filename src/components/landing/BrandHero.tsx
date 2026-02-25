"use client";

import { Section, Button, FadeInView } from "@/components/ui";
import NextLink from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function BrandHero() {
  const t = useTranslations("brandHero");
  const locale = useLocale();

  return (
    <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-bufferline/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] md:w-[800px] md:h-[400px] bg-accent-bufferline/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative text-center">
        {/* Badge */}
        <FadeInView delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-bufferline/10 border border-accent-bufferline/20 text-accent-bufferline-subtle text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-bufferline-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-bufferline"></span>
            </span>
            {t("badge")}
          </div>
        </FadeInView>

        {/* Main headline */}
        <FadeInView delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            {t("headline.line1")}
            <br />
            <span className="text-gradient">
              {t("headline.line2")}
            </span>
          </h1>
        </FadeInView>

        {/* Subtitle */}
        <FadeInView delay={200}>
          <p className="text-lg md:text-xl text-surface-muted max-w-2xl mx-auto mb-4">
            {t("subtitle")}
          </p>
        </FadeInView>

        {/* Description */}
        <FadeInView delay={300}>
          <p className="text-surface-muted/70 mb-10 max-w-xl mx-auto text-sm md:text-base">
            {t("description")}
          </p>
        </FadeInView>

        {/* CTA buttons */}
        <FadeInView delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NextLink href={`/${locale}/jdvp`}>
              <Button size="lg">{t("cta.explore")}</Button>
            </NextLink>
            <a
              href="https://github.com/BufferLine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">{t("cta.github")}</Button>
            </a>
          </div>
        </FadeInView>
      </div>
    </Section>
  );
}
