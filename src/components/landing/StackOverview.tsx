"use client";

import { Section, Card, FadeInView } from "@/components/ui";
import { ArrowRight } from "lucide-react";
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
    hoverText: "",
    href: null,
  },
] as const;

export default function StackOverview() {
  const t = useTranslations("system");
  const locale = useLocale();

  return (
    <Section id="system" className="bg-surface-card/30">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain, i) => {
          const hasLink = domain.href !== null;

          const content = (
            <Card
              variant="bordered"
              hover={hasLink}
              className={`group h-full flex flex-col ${hasLink ? "cursor-pointer" : ""}`}
            >
              {/* Status badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${domain.accentBg} border ${domain.accentBorder} text-xs font-medium ${domain.accentText} mb-4 w-fit`}>
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${domain.accentDot}`} />
                {t(`${domain.key}.status`)}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold text-white mb-1 transition-colors ${domain.hoverText}`}>
                {t(`${domain.key}.title`)}
              </h3>
              <p className={`text-sm ${domain.accentText} mb-3`}>
                {t(`${domain.key}.subtitle`)}
              </p>

              {/* Description */}
              <p className="text-surface-muted text-sm leading-relaxed flex-grow">
                {t(`${domain.key}.description`)}
              </p>

              {/* CTA */}
              {hasLink && (
                <div className={`mt-4 flex items-center text-sm font-medium text-neutral-500 transition-colors ${domain.hoverText}`}>
                  {t(`${domain.key}.cta`)}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </Card>
          );

          return (
            <FadeInView key={domain.key} delay={i * 100}>
              {hasLink ? (
                <NextLink href={`/${locale}${domain.href}`} className="h-full">
                  {content}
                </NextLink>
              ) : (
                <div className="h-full">{content}</div>
              )}
            </FadeInView>
          );
        })}
      </div>
    </Section>
  );
}
