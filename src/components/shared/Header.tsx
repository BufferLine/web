"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui";
import NextLink from "next/link";
import { useState, useEffect, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    typeof window !== "undefined" && window.location.hash
      ? window.location.hash.replace("#", "")
      : null
  );
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

  const navLinks = useMemo(
    () =>
      isJdvpPage
        ? [
            { href: "#concept", label: t("nav.concept") },
            { href: "#how-it-works", label: t("nav.howItWorks") },
            { href: "#demo", label: t("nav.demo") },
            { href: "#data-structures", label: t("nav.dataStructures") },
          ]
        : isThinkprintPage
          ? [
              { href: "#overview", label: t("nav.overview") },
              { href: "#flow", label: t("nav.flow") },
              { href: "#projects", label: t("nav.projects") },
              { href: "#artifacts", label: t("nav.artifacts") },
            ]
          : [
              { href: "#system", label: t("nav.system") },
              { href: `/${locale}/jdvp`, label: t("nav.jdvp") },
              { href: `/${locale}/thinkprint`, label: t("nav.thinkprint") },
              { href: `/${locale}/about`, label: t("nav.about") },
            ],
    [isJdvpPage, isThinkprintPage, locale, t]
  );
  const ctaHref = isJdvpPage ? "#get-started" : isThinkprintPage ? "#deck" : `/${locale}#system`;
  const ctaLabel = isJdvpPage ? t("getStarted") : isThinkprintPage ? t("viewDeck") : t("exploreBrand");
  const firstHashSection = navLinks.find((link) => link.href.startsWith("#"))?.href.slice(1) ?? null;

  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    if (sectionIds.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    const handleTop = () => {
      if (window.scrollY < 120) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener("hashchange", updateFromHash);
    window.addEventListener("scroll", handleTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("scroll", handleTop);
    };
  }, [navLinks]);

  const navLinkClass = (href: string) => {
    const isHashLink = href.startsWith("#");
    const currentSection = activeSection ?? firstHashSection;
    const isActive = isHashLink && currentSection === href.slice(1);

    return cn(
      "transition-colors duration-200",
      isActive
        ? "text-neutral-100 font-medium"
        : "text-surface-muted hover:text-neutral-100"
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--surface-card)]/88 backdrop-blur-lg border-b border-[var(--surface-border)]"
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
                className={navLinkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${locale}/deck`}
              className="text-accent-bufferline-subtle hover:text-neutral-100 font-medium transition-colors duration-200"
            >
              {t("nav.decks")}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div
              className="flex items-center rounded-lg bg-surface-elevated/70 p-0.5 border border-surface-border/70"
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
                      ? "bg-accent-bufferline text-neutral-0"
                      : "text-surface-muted hover:text-neutral-100"
                  )}
                >
                  {tLang(loc)}
                </button>
              ))}
            </div>

            {/* Desktop-only: GitHub + CTA */}
            <a
              href="https://github.com/BufferLine/jdvp-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 px-3 py-1.5 text-sm text-neutral-300 hover:text-neutral-100 hover:bg-surface-elevated"
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
              className="md:hidden p-2 text-surface-muted hover:text-neutral-100 transition-colors"
              aria-label={mobileOpen ? t("aria.closeMenu") : t("aria.openMenu")}
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
          "md:hidden fixed inset-x-0 top-16 bottom-0 bg-[var(--surface-bg)]/96 backdrop-blur-xl transition-all duration-300 ease-out",
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
                className={cn("py-1", navLinkClass(link.href))}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${locale}/deck`}
              onClick={() => setMobileOpen(false)}
              className="text-accent-bufferline-subtle hover:text-neutral-100 font-medium transition-colors duration-200 py-1"
            >
              {t("nav.decks")}
            </a>
          </div>

          <hr className="border-surface-border" />

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/BufferLine/jdvp-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-neutral-100 transition-colors text-sm"
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
