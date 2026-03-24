"use client";

import { Section, Card, Button } from "@/components/ui";
import { ArrowRight, Check, Presentation, X } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import InteractiveDemo from "./InteractiveDemo";

const conceptKeys = ["observer", "measure", "buffer", "temporal"] as const;
const stepKeys = ["step1", "step2", "step3", "step4"] as const;
const patternKeys = ["gradual", "rapid", "oscillation", "reclamation", "collaborative"] as const;
const resourceKeys = ["documentation", "tutorial", "glossary"] as const;

export default function JdvpPage() {
  const locale = useLocale();
  const tHero = useTranslations("hero");
  const tConcept = useTranslations("concept");
  const tConceptIcons = useTranslations("conceptIcons");
  const tHow = useTranslations("howItWorks");
  const tCta = useTranslations("getStarted");
  const tDeckSelection = useTranslations("deck_selection");
  const tDeckLinks = useTranslations("deckLinks");

  return (
    <>
      <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-jdvp/[0.08] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-accent-jdvp/10 blur-3xl pointer-events-none" />

        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-jdvp/20 bg-accent-jdvp/10 px-4 py-2 text-sm text-accent-jdvp-light mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-jdvp-light opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-jdvp" />
            </span>
            {tHero("badge")}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white mb-6 md:text-5xl lg:text-6xl">
            {tHero("headline.line1")}
            <br />
            <span className="text-gradient-jdvp">{tHero("headline.line2")}</span>
          </h1>

          <p className="mx-auto mb-4 max-w-3xl text-lg text-surface-muted md:text-xl">
            <span className="font-semibold text-accent-jdvp-light">{tHero("subtitle.protocol")}</span>
            {" "}
            {tHero("subtitle.description")}
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-neutral-500">{tHero("coreQuestion")}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent-jdvp hover:bg-accent-jdvp-hover focus:ring-accent-jdvp">
              <a href="#concept">{tHero("cta.explore")}</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="https://github.com/BufferLine/jdvp-protocol" target="_blank" rel="noopener noreferrer">
                {tHero("cta.github")}
              </a>
            </Button>
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-surface-border/50 bg-surface-elevated/35 p-5 text-left">
            <p className="text-sm text-neutral-300">
              <span className="font-medium text-accent-thinkprint">{tHero("keyPrinciple.label")}</span>{" "}
              {tHero.rich("keyPrinciple.text", {
                measures: (chunks) => <span className="font-medium text-white">{chunks}</span>,
                evaluates: (chunks) => <span className="font-medium text-white">{chunks}</span>,
              })}
            </p>
          </div>
        </div>
      </Section>

      <Section id="concept">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">{tConcept("title")}</h2>
          <p className="mx-auto max-w-2xl text-surface-muted">{tConcept("description")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {conceptKeys.map((key) => (
              <Card key={key} variant="bordered" className="h-full">
                <div className="mb-3 inline-flex rounded-full border border-accent-jdvp/20 bg-accent-jdvp/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-jdvp-light">
                  {tConceptIcons(key)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tConcept(`cards.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-surface-muted">
                  {tConcept(`cards.${key}.description`)}
                </p>
              </Card>
            ))}
          </div>

          <Card variant="bordered" className="border-accent-meta/[0.25] bg-accent-meta/[0.06]">
            <h3 className="text-lg font-semibold text-accent-meta mb-4">{tConcept("constraints.title")}</h3>
            <ul className="space-y-3">
              {(["noScoring", "noNormative", "noRecommendations", "noAggregation"] as const).map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm text-neutral-300">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-meta" />
                  {tConcept(`constraints.${key}`)}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="how-it-works" className="bg-surface-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">{tHow("title")}</h2>
          <p className="mx-auto max-w-2xl text-surface-muted">{tHow("description")}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stepKeys.map((key) => (
            <Card key={key} variant="bordered" className="h-full border-surface-border/70 bg-surface-bg/70 p-5">
              <p className="text-xs font-mono text-accent-jdvp-light mb-3">
                {tHow(`steps.${key}.number`)}
              </p>
              <h3 className="text-lg font-semibold text-white mb-2">
                {tHow(`steps.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-surface-muted">
                {tHow(`steps.${key}.description`)}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-surface-border/70 bg-surface-bg/60 p-5">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-4">
            {tHow("patterns.title")}
          </p>
          <div className="flex flex-wrap gap-3">
            {patternKeys.map((key) => (
              <div
                key={key}
                className="rounded-full border border-accent-jdvp/20 bg-accent-jdvp/10 px-4 py-2 text-sm text-accent-jdvp-light"
              >
                {tHow(`patterns.${key}.name`)}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div id="demo">
        <InteractiveDemo />
      </div>

      <Section id="data-structures">
        <div id="get-started" className="rounded-3xl border border-surface-border/70 bg-gradient-to-br from-surface-card/80 to-surface-bg/80 p-7 md:p-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-jdvp/20 bg-accent-jdvp/10 px-3 py-1 text-xs font-medium text-accent-jdvp-light mb-4">
                <Check className="h-3.5 w-3.5" />
                {tDeckLinks("badge")}
              </span>
              <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">{tCta("title")}</h2>
              <p className="max-w-xl text-surface-muted mb-8">{tCta("description")}</p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-accent-jdvp hover:bg-accent-jdvp-hover focus:ring-accent-jdvp">
                  <a
                    href="https://github.com/BufferLine/jdvp-protocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {tCta("cta.clone")}
                  </a>
                </Button>
                <NextLink href={`/${locale}/deck/technical`}>
                  <Button variant="outline" size="lg">
                    <Presentation className="mr-2 h-4 w-4" />
                    {tDeckSelection("viewDeck")}
                  </Button>
                </NextLink>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {resourceKeys.map((key) => (
                <Card key={key} variant="bordered" className="border-surface-border/70 bg-surface-elevated/30">
                  <p className="text-sm font-semibold text-white mb-1">{tCta(`resources.${key}.title`)}</p>
                  <p className="text-sm text-surface-muted">{tCta(`resources.${key}.description`)}</p>
                </Card>
              ))}

              <NextLink
                href={`/${locale}/deck`}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-jdvp-light transition-colors hover:text-accent-jdvp"
              >
                {tDeckLinks("more.cta")}
                <ArrowRight className="h-4 w-4" />
              </NextLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
