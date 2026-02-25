"use client";

import { Section, Card, FadeInView } from "@/components/ui";
import { ArrowRight, Briefcase, Heart, Rocket, SlidersHorizontal } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

const deckKeys = ["general", "personal", "institutional", "technical"] as const;

const deckIcons = {
  general: <Rocket className="w-8 h-8 text-accent-bufferline-light" />,
  personal: <Heart className="w-8 h-8 text-accent-bufferline-light" />,
  institutional: <Briefcase className="w-8 h-8 text-accent-bufferline-light" />,
  technical: <SlidersHorizontal className="w-8 h-8 text-accent-jdvp" />,
};

const deckColors = {
  general: "group-hover:text-accent-bufferline-light",
  personal: "group-hover:text-accent-bufferline-light",
  institutional: "group-hover:text-accent-bufferline-light",
  technical: "group-hover:text-accent-jdvp",
};

export default function DeckLinks() {
  const locale = useLocale();
  const t = useTranslations("deckLinks");
  const tDecks = useTranslations("deck_selection");

  return (
    <Section id="decks" className="bg-surface-card/20">
      <FadeInView>
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-bufferline/10 text-accent-bufferline-light border border-accent-bufferline/20 mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-surface-muted max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </FadeInView>

      <nav aria-label={t("title")} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {deckKeys.map((key, i) => (
          <FadeInView key={key} delay={i * 80}>
            <NextLink href={`/${locale}/deck/${key}`} passHref>
              <Card
                variant="bordered"
                hover
                className="group cursor-pointer h-full flex flex-col p-5"
              >
                <div className="flex-grow">
                  <div className="mb-3">{deckIcons[key]}</div>
                  <h3 className={`text-lg font-semibold text-white mb-2 transition-colors ${deckColors[key]}`}>
                    {tDecks(`decks.${key}.title`)}
                  </h3>
                  <p className="text-surface-muted text-sm leading-relaxed">
                    {tDecks(`decks.${key}.description`)}
                  </p>
                </div>
                <div className={`mt-4 flex items-center text-sm font-medium text-neutral-500 transition-colors ${deckColors[key]}`}>
                  {tDecks("viewDeck")}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </NextLink>
          </FadeInView>
        ))}
      </nav>
    </Section>
  );
}
