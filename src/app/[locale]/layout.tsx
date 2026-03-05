import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_KR, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bufferline.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const title = t("title");
  const description = t("description");

  return {
    title: {
      default: title,
      template: `%s | BufferLine`,
    },
    description,
    keywords: [
      "BufferLine",
      "JDVP",
      "Thinkprint",
      "AI",
      "human judgment",
      "AI decision making",
      "human-AI interaction",
      "judgment observation",
      "reasoning patterns",
      "AI governance",
      locale === "ko" ? "AI 판단" : "",
      locale === "ko" ? "사고 패턴" : "",
    ].filter(Boolean),
    authors: [{ name: "BufferLine" }],
    creator: "BufferLine",
    publisher: "BufferLine",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ko: "/ko",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? "en_US" : "ko_KR",
      siteName: "BufferLine",
      url: `${baseUrl}/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      creator: "@bufferline",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add verification tokens when available
      // google: "your-google-verification-code",
    },
    category: "technology",
    classification: "Protocol Specification",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "ko")) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <meta name="theme-color" content="#2f6e8f" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansKr.variable} ${spaceGrotesk.variable} font-sans antialiased bg-surface-bg text-surface-fg`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
