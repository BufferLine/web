"use client";

import { Section, Button, FadeInView } from "@/components/ui";
import NextLink from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function BrandHero() {
  const t = useTranslations("brandHero");
  const locale = useLocale();

  return (
    <Section size="lg" className="pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-bufferline/[0.1] via-transparent to-transparent" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-accent-bufferline/[0.07] rounded-full blur-[120px]" />
      </div>

      <div className="relative text-center max-w-3xl mx-auto">
        <FadeInView delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-bufferline/10 border border-accent-bufferline/20 text-accent-bufferline-subtle text-sm mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-bufferline-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-bufferline"></span>
            </span>
            {t("badge")}
          </div>
        </FadeInView>

        <FadeInView delay={80}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-white mb-6 leading-[1.12]">
            {t("headline.line1")}
            <br />
            <span className="text-gradient inline-block text-[1.03em]" style={{ textWrap: "balance" }}>
              {t("headline.line2")}
            </span>
          </h1>
        </FadeInView>

        <FadeInView delay={160}>
          <p className="text-lg text-surface-muted mb-4">
            {t("subtitle")}
          </p>
        </FadeInView>

        <FadeInView delay={240}>
          <p className="text-surface-muted/80 mb-8 text-sm md:text-base">
            {t("description")}
          </p>
        </FadeInView>

        <FadeInView delay={320}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#system"
            >
              <Button size="lg">{t("cta.explore")}</Button>
            </a>
            <NextLink href={`/${locale}/deck/general`}>
              <Button variant="outline" size="lg">{t("cta.projectDeck")}</Button>
            </NextLink>
          </div>
        </FadeInView>
      </div>
    </Section>
  );
}
