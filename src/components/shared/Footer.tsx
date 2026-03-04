"use client";

import Logo from "./Logo";
import NextLink from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--surface-border)] bg-[var(--surface-card)]/75">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size="sm" />
            <p className="mt-4 text-surface-muted text-sm max-w-md">
              {t("brand.description")}
            </p>
            <p className="mt-4 text-neutral-500 text-xs">
              {t("brand.note")}
            </p>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-neutral-100 mb-4">{t("community.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/BufferLine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-muted hover:text-neutral-100 transition-colors"
                >
                  {t("community.github")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-neutral-100 mb-4">{t("company.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NextLink href={`/${locale}/about`} className="text-surface-muted hover:text-neutral-100 transition-colors">
                  {t("company.about")}
                </NextLink>
              </li>
              <li>
                <a
                  href="mailto:info@bufferline.org"
                  className="text-surface-muted hover:text-neutral-100 transition-colors"
                >
                  {t("company.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--surface-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            {t("copyright", { year: currentYear })}
          </p>
          <p className="text-neutral-600 text-xs">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
