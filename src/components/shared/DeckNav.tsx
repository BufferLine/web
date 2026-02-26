"use client";

import { Home, Grid2X2 } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface DeckNavProps {
  deckName?: string;
}

export default function DeckNav({ deckName }: DeckNavProps) {
  const locale = useLocale();
  const t = useTranslations("deck_nav");

  return (
    <div className="fixed top-2 left-2 sm:top-4 sm:left-4 z-50 flex items-center gap-1.5 sm:gap-2">
      <NextLink
        href={`/${locale}`}
        className="p-1.5 sm:p-2 rounded-lg bg-surface-elevated/80 hover:bg-neutral-700 transition-colors duration-200"
        aria-label={t("home")}
        title={t("home")}
      >
        <Home className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300" />
      </NextLink>
      <NextLink
        href={`/${locale}/deck`}
        className="p-1.5 sm:p-2 rounded-lg bg-surface-elevated/80 hover:bg-neutral-700 transition-colors duration-200"
        aria-label={t("deckSelection")}
        title={t("deckSelection")}
      >
        <Grid2X2 className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300" />
      </NextLink>
      {deckName && (
        <span className="ml-2 text-xs text-neutral-500 font-mono hidden md:block">
          {deckName}
        </span>
      )}
    </div>
  );
}
