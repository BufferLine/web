"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("header");
  const tLang = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isJdvpPage = pathname.includes("/jdvp");
  const isThinkprintPage = pathname.includes("/thinkprint");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const navLinks = isJdvpPage
    ? [
        { href: "#concept", label: t("nav.concept") },
        { href: "#how-it-works", label: t("nav.howItWorks") },
        { href: "#demo", label: t("nav.demo") },
        { href: "#data-structures", label: t("nav.dataStructures") },
      ]
    : [
        ...(!isThinkprintPage
          ? [{ href: "#system", label: t("nav.system") }]
          : []),
        { href: `/${locale}/jdvp`, label: t("nav.jdvp") },
        { href: `/${locale}/thinkprint`, label: t("nav.thinkprint") },
      ];
  const ctaHref = isJdvpPage ? "#get-started" : `/${locale}#system`;
  const ctaLabel = isJdvpPage ? t("getStarted") : t("exploreBrand");

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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 font-heading text-sm tracking-tight">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-surface-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${locale}/deck`}
              className="text-accent-bufferline-light hover:text-accent-bufferline-subtle font-medium transition-colors duration-200"
            >
              {t("nav.decks")}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div
              className="flex items-center rounded-lg bg-surface-elevated/50 p-0.5"
              role="group"
              aria-label={tLang("label")}
            >
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

            {/* Desktop-only: GitHub + CTA */}
            <a
              href="https://github.com/sangwon0001/bufferline-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-surface-elevated"
            >
              {t("github")}
            </a>
            <NextLink
              href={ctaHref}
              className="hidden md:inline-flex"
            >
              <Button size="sm">{ctaLabel}</Button>
            </NextLink>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-surface-muted hover:text-white transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 bg-[var(--surface-bg)]/95 backdrop-blur-xl transition-all duration-300 ease-out",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "container mx-auto px-6 pt-8 pb-6 flex flex-col gap-6 transition-transform duration-300 ease-out",
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <div className="flex flex-col gap-4 font-heading text-lg tracking-tight">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-surface-muted hover:text-white transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${locale}/deck`}
              onClick={() => setMobileOpen(false)}
              className="text-accent-bufferline-light hover:text-accent-bufferline-subtle font-medium transition-colors duration-200 py-1"
            >
              {t("nav.decks")}
            </a>
          </div>

          <hr className="border-surface-border" />

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/sangwon0001/bufferline-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
            >
              {t("github")}
            </a>
            <NextLink
              href={ctaHref}
              onClick={() => setMobileOpen(false)}
            >
              <Button size="md" className="w-full">
                {ctaLabel}
              </Button>
            </NextLink>
          </div>
        </div>
      </div>
    </header>
  );
}
