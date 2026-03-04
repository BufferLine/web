"use client";

import { Card } from "@/components/ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

const deckGroups = [
  { key: "brand", deckKeys: ["general"] as const, accent: "group-hover:text-accent-bufferline-light" },
  { key: "jdvp", deckKeys: ["technical"] as const, accent: "group-hover:text-accent-jdvp-light" },
  { key: "thinkprint", deckKeys: ["overview"] as const, accent: "group-hover:text-accent-thinkprint-light" },
] as const;

export default function DeckSelectionPage() {
  const locale = useLocale();
  const t = useTranslations("deck_selection");
  const tNav = useTranslations("deck_nav");

  return (
    <main className="min-h-screen w-full bg-surface-bg text-surface-fg p-8">
      <div className="max-w-5xl w-full mx-auto mb-8">
        <NextLink
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-surface-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {tNav("home")}
        </NextLink>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-surface-muted max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-5xl w-full mx-auto space-y-8">
        {deckGroups.map((group) => (
          <section key={group.key} className="rounded-xl border border-surface-border/70 bg-surface-card/30 p-5 md:p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-white">
                {t(`groups.${group.key}.title`)}
              </h2>
              <p className="text-surface-muted text-sm mt-1">
                {t(`groups.${group.key}.description`)}
              </p>
            </div>

            <ul className="space-y-3">
              {group.deckKeys.map((key) => (
                <li key={key}>
                  <NextLink href={`/${locale}/deck/${key}`} passHref>
                    <Card
                      variant="bordered"
                      hover
                      className={`group cursor-pointer flex items-center justify-between gap-4 p-4 ${group.accent}`}
                    >
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white transition-colors">
                          {t(`decks.${key}.title`)}
                        </h3>
                        <p className="text-surface-muted text-sm mt-1">
                          {t(`decks.${key}.description`)}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-neutral-400 transition-colors">
                        {t("viewDeck")}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Card>
                  </NextLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
