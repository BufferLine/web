"use client";

import { Section, FadeInView } from "@/components/ui";
import { ArrowRight, Dot } from "lucide-react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";

const domains = [
  {
    key: "jdvp",
    accentText: "text-accent-jdvp",
    accentBg: "bg-accent-jdvp/10",
    accentBorder: "border-accent-jdvp/20",
    accentDot: "bg-accent-jdvp",
    hoverText: "group-hover:text-accent-jdvp-light",
    href: "/jdvp",
  },
  {
    key: "thinkprint",
    accentText: "text-accent-thinkprint",
    accentBg: "bg-accent-thinkprint/10",
    accentBorder: "border-accent-thinkprint/20",
    accentDot: "bg-accent-thinkprint",
    hoverText: "group-hover:text-accent-thinkprint-light",
    href: "/thinkprint",
  },
  {
    key: "metagovernance",
    accentText: "text-accent-meta",
    accentBg: "bg-accent-meta/10",
    accentBorder: "border-accent-meta/20",
    accentDot: "bg-accent-meta",
    hoverText: "group-hover:text-accent-meta-light",
    href: "/metagovernance",
  },
] as const;

export default function StackOverview() {
  const t = useTranslations("system");
  const locale = useLocale();

  return (
    <Section id="system" className="bg-surface-card/40">
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

      <div className="rounded-2xl border border-surface-border/70 bg-surface-bg/70 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-8">
          <FadeInView direction="right">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-3">
                {t("layoutLabel")}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-3">
                BufferLine
              </h3>
              <p className="text-sm md:text-base text-surface-muted">
                {t("description")}
              </p>
              <div className="mt-6 rounded-xl border border-surface-border/70 bg-surface-card/80 p-4">
                <p className="text-xs text-neutral-400 uppercase tracking-wide mb-2">
                  {t("coreRuleTitle")}
                </p>
                <p className="text-sm text-neutral-200">
                  {t("coreRuleDescription")}
                </p>
              </div>
            </div>
          </FadeInView>

          <div className="space-y-4">
            {domains.map((domain, i) => {
              const hasLink = domain.href !== null;
              const rowContent = (
                <div
                  className={`group rounded-xl border p-5 md:p-6 transition-colors ${
                    hasLink
                      ? `${domain.accentBorder} ${domain.accentBg} hover:border-surface-border`
                      : "border-surface-border/70 bg-surface-card/65"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${domain.accentBorder} ${domain.accentBg} ${domain.accentText} w-fit`}>
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${domain.accentDot}`} />
                      {t(`${domain.key}.status`)}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg md:text-xl font-semibold text-neutral-100 ${domain.hoverText}`}>
                        {t(`${domain.key}.title`)}
                      </h4>
                      <p className={`text-sm ${domain.accentText} mt-1`}>{t(`${domain.key}.subtitle`)}</p>
                      <p className="text-sm text-surface-muted mt-3 leading-relaxed">
                        {t(`${domain.key}.description`)}
                      </p>
                    </div>
                    {hasLink && (
                      <div className={`text-sm font-medium inline-flex items-center gap-1 ${domain.hoverText}`}>
                        {t(`${domain.key}.cta`)}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </div>
              );

              return (
                <FadeInView key={domain.key} delay={i * 90}>
                  <div className="flex items-stretch gap-2">
                    <div className="hidden sm:flex flex-col items-center pt-3" aria-hidden="true">
                      <Dot className={`w-5 h-5 ${domain.accentText}`} />
                      {i < domains.length - 1 && <div className="w-px flex-1 bg-surface-border/70" />}
                    </div>
                    {hasLink ? (
                      <NextLink href={`/${locale}${domain.href}`} className="flex-1">
                        {rowContent}
                      </NextLink>
                    ) : (
                      <div className="flex-1">{rowContent}</div>
                    )}
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
