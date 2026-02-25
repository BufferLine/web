"use client";

import { Section, Button, Card } from "@/components/ui";
import { useTranslations } from "next-intl";

const resourceKeys = ["documentation", "tutorial", "glossary"] as const;

const resourceIcons = {
  documentation: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  tutorial: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  glossary: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

export default function GetStarted() {
  const t = useTranslations("getStarted");

  return (
    <Section id="get-started" className="bg-gradient-to-b from-surface-card to-neutral-950">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-surface-muted max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {resourceKeys.map((key) => (
          <Card
            key={key}
            variant="bordered"
            className="group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-jdvp/10 flex items-center justify-center text-accent-jdvp-light mb-4">
                {resourceIcons[key]}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t(`resources.${key}.title`)}
              </h3>
              <p className="text-surface-muted text-sm">{t(`resources.${key}.description`)}</p>
              <span className="inline-block mt-3 text-xs text-accent-jdvp-light/60">{t("comingSoon")}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-accent-jdvp/[0.12] to-accent-jdvp-light/[0.08] border border-accent-jdvp/[0.15]">
        <h3 className="text-2xl font-bold text-white mb-4">
          {t("cta.title")}
        </h3>
        <p className="text-surface-muted mb-6 max-w-xl mx-auto">
          {t("cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-accent-jdvp hover:bg-accent-jdvp-hover focus:ring-accent-jdvp">
            <a
              href="https://github.com/sangwon0001/bufferline-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              {t("cta.clone")}
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a
              href="https://github.com/sangwon0001/bufferline-protocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("cta.readSpec")}
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
