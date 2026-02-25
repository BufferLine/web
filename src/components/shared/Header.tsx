"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("header");
  const tLang = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isJdvpPage = pathname.includes("/jdvp");
  const isPersonaForgePage = pathname.includes("/personaforge");
  const isSubPage = isJdvpPage || isPersonaForgePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Get path without current locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--surface-card)]/80 backdrop-blur-lg border-b border-[var(--surface-border)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <nav className="flex items-center justify-between h-16">
          <NextLink href={`/${locale}`}>
            <Logo size="sm" />
          </NextLink>

          <div className="hidden md:flex items-center gap-8 font-heading text-sm tracking-tight">
            {isJdvpPage ? (
              <>
                <a href="#concept" className="text-surface-muted hover:text-white transition-colors duration-200">
                  {t("nav.concept")}
                </a>
                <a href="#how-it-works" className="text-surface-muted hover:text-white transition-colors duration-200">
                  {t("nav.howItWorks")}
                </a>
                <a href="#demo" className="text-surface-muted hover:text-white transition-colors duration-200">
                  {t("nav.demo")}
                </a>
                <a href="#data-structures" className="text-surface-muted hover:text-white transition-colors duration-200">
                  {t("nav.dataStructures")}
                </a>
              </>
            ) : (
              <>
                {!isPersonaForgePage && (
                  <a href="#stack" className="text-surface-muted hover:text-white transition-colors duration-200">
                    {t("nav.stack")}
                  </a>
                )}
                <a href={`/${locale}/jdvp`} className="text-surface-muted hover:text-white transition-colors duration-200">
                  {t("nav.jdvp")}
                </a>
                <a href={`/${locale}/personaforge`} className="text-surface-muted hover:text-white transition-colors duration-200">
                  {t("nav.personaforge")}
                </a>
              </>
            )}
            <a href={`/${locale}/deck`} className="text-accent-bufferline-light hover:text-accent-bufferline-subtle font-medium transition-colors duration-200">
              {t("nav.decks")}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center rounded-lg bg-surface-elevated/50 p-0.5" role="group" aria-label={tLang("label")}>
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  aria-label={tLang(`switch.${loc}`)}
                  aria-current={locale === loc ? "true" : undefined}
                  className={cn(
                    "px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-200",
                    locale === loc
                      ? "bg-accent-bufferline text-white"
                      : "text-surface-muted hover:text-white"
                  )}
                >
                  {tLang(loc)}
                </button>
              ))}
            </div>

            <a
              href="https://github.com/sangwon0001/bufferline-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-surface-elevated"
            >
              {t("github")}
            </a>
            <Button size="sm">
              {isJdvpPage ? (
                <a href="#get-started">{t("getStarted")}</a>
              ) : (
                <a href={`/${locale}/jdvp`}>{t("getStarted")}</a>
              )}
            </Button>

          </div>
        </nav>
      </div>
    </header>
  );
}
