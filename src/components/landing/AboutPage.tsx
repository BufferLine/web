"use client";

import { Section, Card } from "@/components/ui";
import { useTranslations, useLocale } from "next-intl";
import NextLink from "next/link";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <Section size="lg" className="pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-bufferline/[0.05] via-transparent to-transparent pointer-events-none" />

        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-bufferline/10 border border-accent-bufferline/20 text-accent-bufferline-subtle text-sm mb-8">
            {t("badge")}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            {t("headline.line1")}
            <br />
            <span className="text-gradient">
              {t("headline.line2")}
            </span>
          </h1>

          {/* Mission */}
          <div className="max-w-2xl">
            <p className="text-lg text-surface-muted leading-relaxed">
              {t("mission.description")}
            </p>
          </div>
        </div>
      </Section>

      {/* What we build */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t("stack.title")}
        </h2>
        <p className="text-surface-muted mb-8">
          {t("stack.description")}
        </p>

        <div className="space-y-4">
          <NextLink href={`/${locale}/jdvp`}>
            <Card variant="bordered" hover className="group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-jdvp mt-2 flex-shrink-0" />
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {t("stack.jdvp")}
                </p>
              </div>
            </Card>
          </NextLink>

          <NextLink href={`/${locale}/thinkprint`}>
            <Card variant="bordered" hover className="group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-thinkprint mt-2 flex-shrink-0" />
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {t("stack.thinkprint")}
                </p>
              </div>
            </Card>
          </NextLink>

          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-meta mt-2 flex-shrink-0" />
              <p className="text-neutral-500 text-sm leading-relaxed">
                {t("stack.metagovernance")}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Company Information */}
      <Section className="bg-surface-card/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {t("company.title")}
            </h2>

            <dl className="space-y-4">
              <div>
                <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("company.labels.name")}</dt>
                <dd className="text-white font-medium">{t("company.name")}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("company.labels.uen")}</dt>
                <dd className="text-neutral-300 font-mono text-sm">{t("company.uen")}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("company.labels.incorporated")}</dt>
                <dd className="text-neutral-300">{t("company.incorporated")}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("company.labels.type")}</dt>
                <dd className="text-neutral-300 text-sm">{t("company.type")}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("company.labels.address")}</dt>
                <dd className="text-neutral-300 text-sm">{t("company.address")}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("company.labels.activities")}</dt>
                <dd className="text-neutral-300 text-sm">
                  {t("company.activity.primary")}
                  <br />
                  <span className="text-neutral-500">{t("company.activity.secondary")}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="space-y-10">
            {/* Founder */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {t("founder.title")}
              </h2>

              <Card variant="bordered" className="p-5">
                <div className="flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-accent-bufferline/20 flex items-center justify-center text-accent-bufferline-light font-bold text-lg flex-shrink-0">
                    S
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{t("founder.name")}</h3>
                    <p className="text-accent-bufferline-light text-sm">{t("founder.role")}</p>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm mt-4 leading-relaxed">
                  {t("founder.bio")}
                </p>

                <div className="mt-4 space-y-1.5">
                  <p className="text-neutral-500 text-xs">{t("founder.education.draper")}</p>
                  <p className="text-neutral-500 text-xs">{t("founder.education.hanyang")}</p>
                </div>

                <div className="mt-4">
                  <a
                    href="https://www.linkedin.com/in/sangwon-seo-sean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-surface-muted hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {t("contact.title")}
              </h2>

              <dl className="space-y-4">
                <div>
                  <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("contact.labels.email")}</dt>
                  <dd>
                    <a
                      href="mailto:info@bufferline.org"
                      className="text-accent-bufferline-light hover:text-accent-bufferline-subtle transition-colors"
                    >
                      {t("contact.email")}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{t("contact.labels.github")}</dt>
                  <dd>
                    <a
                      href="https://github.com/BufferLine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-bufferline-light hover:text-accent-bufferline-subtle transition-colors"
                    >
                      {t("contact.github")}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
