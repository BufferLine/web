import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bufferline.org";

  const homeRoutes = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
  }));

  const jdvpRoutes = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/jdvp`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/jdvp`])
      ),
    },
  }));

  const thinkprintRoutes = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/thinkprint`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/thinkprint`])
      ),
    },
  }));

  const aboutRoutes = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/about`])
      ),
    },
  }));

  return [...homeRoutes, ...jdvpRoutes, ...thinkprintRoutes, ...aboutRoutes];
}
