"use client";

import { Card } from "@/components/ui";
import { ArrowRight, Brain, Rocket, SlidersHorizontal } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

const brandDeckKeys = ["general"] as const;
const jdvpDeckKeys = ["technical"] as const;
const thinkprintDeckKeys = ["overview"] as const;

const deckIcons = {
  general: <Rocket className="w-10 h-10 text-accent-bufferline-light" />,
  technical: <SlidersHorizontal className="w-10 h-10 text-accent-jdvp" />,
  overview: <Brain className="w-10 h-10 text-accent-thinkprint-light" />,
};

const deckHoverText = {
  general: "group-hover:text-accent-bufferline-light",
  technical: "group-hover:text-accent-jdvp",
  overview: "group-hover:text-accent-thinkprint-light",
};

const deckActionText = {
  general: "text-accent-bufferline-light group-hover:text-accent-bufferline-subtle",
  technical: "text-accent-jdvp-light group-hover:text-accent-jdvp",
  overview: "text-accent-thinkprint-light group-hover:text-accent-thinkprint-subtle",
};

export default function DeckSelectionPage() {
  const locale = useLocale();
  const t = useTranslations("deck_selection");
  const deckGroups = [
    { key: "brand", deckKeys: brandDeckKeys },
    { key: "jdvp", deckKeys: jdvpDeckKeys },
    { key: "thinkprint", deckKeys: thinkprintDeckKeys },
  ] as const;

  return (
    <main className="min-h-screen w-full bg-surface-bg text-surface-fg p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-surface-muted max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-7xl w-full mx-auto space-y-12">
        {deckGroups.map((group) => (
          <section key={group.key} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                {t(`groups.${group.key}.title`)}
              </h2>
              <p className="text-surface-muted">
                {t(`groups.${group.key}.description`)}
              </p>
            </div>

            <div className={group.key === "brand" ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
              {group.deckKeys.map((key) => (
                <NextLink href={`/${locale}/deck/${key}`} key={key} passHref>
                  <Card
                    variant="bordered"
                    hover
                    className="group cursor-pointer h-full flex flex-col"
                  >
                    <div className="flex-grow">
                      <div className="mb-4">{deckIcons[key]}</div>
                      <h3 className={`text-xl font-semibold text-white mb-2 transition-colors ${deckHoverText[key]}`}>
                        {t(`decks.${key}.title`)}
                      </h3>
                      <p className="text-surface-muted text-sm">
                        {t(`decks.${key}.description`)}
                      </p>
                    </div>
                    <div className={`mt-6 flex items-center justify-end text-sm font-medium transition-colors ${deckActionText[key]}`}>
                      {t("viewDeck")}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </NextLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
