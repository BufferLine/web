"use client";

import { Card } from "@/components/ui";
import { ArrowRight, Briefcase, Heart, Rocket, SlidersHorizontal } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

const deckKeys = ["general", "personal", "institutional", "technical"] as const;

const deckIcons = {
  general: <Rocket className="w-10 h-10 text-accent-bufferline-light" />,
  personal: <Heart className="w-10 h-10 text-accent-bufferline-light" />,
  institutional: <Briefcase className="w-10 h-10 text-accent-bufferline-light" />,
  technical: <SlidersHorizontal className="w-10 h-10 text-accent-jdvp" />,
};

export default function DeckSelectionPage() {
  const locale = useLocale();
  const t = useTranslations("deck_selection");

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-surface-bg text-surface-fg p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-surface-muted max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {deckKeys.map((key) => (
          <NextLink href={`/${locale}/deck/${key}`} key={key} passHref>
            <Card
              variant="bordered"
              hover
              className="group cursor-pointer h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="mb-4">{deckIcons[key]}</div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-bufferline-light transition-colors">
                  {t(`decks.${key}.title`)}
                </h2>
                <p className="text-surface-muted text-sm">
                  {t(`decks.${key}.description`)}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-end text-sm font-medium text-accent-bufferline-light group-hover:text-accent-bufferline-subtle">
                {t("viewDeck")}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </NextLink>
        ))}
      </div>
    </main>
  );
}
