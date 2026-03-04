"use client";

import { Section, Button } from "@/components/ui";
import { ArrowRight, Presentation } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function JdvpDeckCta() {
  const locale = useLocale();
  const t = useTranslations("deckLinks");

  return (
    <Section id="decks">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent-jdvp/10 text-accent-jdvp-light border border-accent-jdvp/20 mb-4">
          <Presentation className="w-3.5 h-3.5" />
          {t("badge")}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-surface-muted max-w-2xl mx-auto mb-8">
          {t("description")}
        </p>
        <NextLink href={`/${locale}/deck`}>
          <Button size="lg" className="bg-accent-jdvp hover:bg-accent-jdvp-hover focus:ring-accent-jdvp">
            {t("cta")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </NextLink>
      </div>
    </Section>
  );
}
