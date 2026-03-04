"use client";

import { Section, Card, FadeInView } from "@/components/ui";
import { ArrowRight, LayoutGrid, Rocket } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function DeckLinks() {
  const locale = useLocale();
  const t = useTranslations("deckLinks");
  const tDecks = useTranslations("deck_selection");

  return (
    <Section id="decks" className="bg-surface-card/35">
      <FadeInView>
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-surface-elevated/70 text-accent-bufferline-subtle border border-surface-border/80 mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
            {t("title")}
          </h2>
          <p className="text-surface-muted max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </FadeInView>

      <nav aria-label={t("title")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <FadeInView delay={80}>
            <NextLink href={`/${locale}/deck/general`} passHref>
              <Card
                variant="bordered"
                hover
                className="group cursor-pointer h-full flex flex-col p-5"
              >
                <div className="flex-grow">
                  <p className="text-xs uppercase tracking-wide text-neutral-500 mb-3">
                    {tDecks("groups.brand.title")}
                  </p>
                  <div className="mb-3">
                    <Rocket className="w-8 h-8 text-accent-bufferline-light" />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-2 transition-colors group-hover:text-accent-bufferline-subtle">
                    {tDecks("decks.general.title")}
                  </h4>
                  <p className="text-surface-muted text-sm leading-relaxed">
                    {tDecks("decks.general.description")}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-neutral-500 transition-colors group-hover:text-accent-bufferline-subtle">
                  {t("cta")}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </NextLink>
          </FadeInView>

          <FadeInView delay={160}>
            <NextLink href={`/${locale}/deck`} passHref>
              <Card
                variant="bordered"
                hover
                className="group cursor-pointer h-full flex flex-col p-5"
              >
                <div className="flex-grow">
                  <p className="text-xs uppercase tracking-wide text-neutral-500 mb-3">
                    {t("more.badge")}
                  </p>
                  <div className="mb-3">
                    <LayoutGrid className="w-8 h-8 text-accent-jdvp-light" />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-2 transition-colors group-hover:text-accent-jdvp-light">
                    {t("more.title")}
                  </h4>
                  <p className="text-surface-muted text-sm leading-relaxed">
                    {t("more.description")}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-neutral-500 transition-colors group-hover:text-accent-jdvp-light">
                  {t("more.cta")}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </NextLink>
          </FadeInView>
        </div>
      </nav>
    </Section>
  );
}
