"use client";

import { Section, Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-jdvp/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-jdvp/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-jdvp/10 border border-accent-jdvp/20 text-accent-jdvp-light text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-jdvp-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-jdvp"></span>
          </span>
          {t("badge")}
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          {t("headline.line1")}
          <br />
          <span className="text-gradient-jdvp">
            {t("headline.line2")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-surface-muted max-w-2xl mx-auto mb-4">
          <span className="text-accent-jdvp-light font-semibold">{t("subtitle.protocol")}</span>
          {" "}{t("subtitle.description")}
        </p>

        {/* Core question */}
        <p className="text-neutral-500 italic mb-10">
          {t("coreQuestion")}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-accent-jdvp hover:bg-accent-jdvp-hover focus:ring-accent-jdvp">
            <a href="#concept">{t("cta.explore")}</a>
          </Button>
          <Button variant="outline" size="lg">
            <a href="https://github.com/sangwon0001/bufferline-protocol" target="_blank" rel="noopener noreferrer">
              {t("cta.github")}
            </a>
          </Button>
        </div>

        {/* Key principle */}
        <div className="mt-16 p-4 rounded-lg bg-surface-elevated/30 border border-surface-border/50 max-w-xl mx-auto">
          <p className="text-neutral-300 text-sm">
            <span className="text-accent-personaforge font-medium">{t("keyPrinciple.label")}</span>{" "}
            {t.rich("keyPrinciple.text", {
              measures: (chunks) => <span className="text-white font-medium">{chunks}</span>,
              evaluates: (chunks) => <span className="text-white font-medium">{chunks}</span>,
            })}
          </p>
        </div>
      </div>
    </Section>
  );
}
