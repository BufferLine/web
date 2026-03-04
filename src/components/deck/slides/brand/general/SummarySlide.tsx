"use client";

import NextLink from "next/link";
import { useLocale } from "next-intl";
import { Slide } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

const summaryKeys = ["1", "2", "3"] as const;

export default function SummarySlide({ t }: Props) {
  const locale = useLocale();

  return (
    <Slide className="bg-gradient-to-b from-slate-950 via-indigo-950/25 to-slate-950">
      <div className="max-w-4xl w-full text-center">
        <p className="inline-flex px-3 py-1 rounded-full text-xs font-medium border border-indigo-400/30 bg-indigo-500/10 text-indigo-200 mb-5">
          {t("close.badge")}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-100 mb-4 md:mb-5">
          {t("close.title")}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-8">
          {t("close.subtitle")}
        </p>

        <div className="space-y-3 text-left mb-8">
          {summaryKeys.map((key) => (
            <div key={key} className="rounded-lg border border-surface-border bg-surface-card/80 px-3.5 md:px-4 py-3 text-neutral-100 text-sm md:text-base">
              {t(`close.points.${key}`)}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <NextLink
            href={`/${locale}/deck`}
            className="px-6 py-3 rounded-lg bg-accent-bufferline hover:bg-accent-bufferline-hover text-neutral-100 font-medium transition-colors"
          >
            {t("close.cta.deck")}
          </NextLink>
          <NextLink
            href={`/${locale}/about`}
            className="px-6 py-3 rounded-lg border border-surface-border/80 hover:border-neutral-500 text-neutral-200 hover:text-neutral-100 font-medium transition-colors"
          >
            {t("close.cta.about")}
          </NextLink>
        </div>
      </div>
    </Slide>
  );
}
