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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(75,137,169,0.22),transparent_54%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-bufferline/50 to-transparent" />
      </div>

      <div className="relative text-center max-w-3xl mx-auto">
        <FadeInView delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card/80 border border-surface-border/80 text-accent-bufferline-subtle text-sm mb-7">
            <span className="inline-flex rounded-full h-2 w-2 bg-accent-bufferline" />
            {t("badge")}
          </div>
        </FadeInView>

        <FadeInView delay={80}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-neutral-100 mb-6 leading-[1.12]">
            {t("headline.line1")}
            <br />
            <span className="text-accent-bufferline-subtle inline-block text-[1.03em]" style={{ textWrap: "balance" }}>
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
