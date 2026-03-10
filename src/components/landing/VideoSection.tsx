"use client";

import { Button, Card, FadeInView, Section } from "@/components/ui";
import { ExternalLink, PlayCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const videoByLocale = {
  ko: {
    id: "ISFdldS-dig",
  },
  en: {
    id: "l2vGVmWHQMk",
  },
} as const;

export default function VideoSection() {
  const t = useTranslations("videos");
  const locale = useLocale() as keyof typeof videoByLocale;
  const video = videoByLocale[locale] ?? videoByLocale.en;
  const url = `https://www.youtube.com/watch?v=${video.id}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const [isPlaying, setIsPlaying] = useState(false);
  const [useFallbackThumbnail, setUseFallbackThumbnail] = useState(false);

  return (
    <Section id="videos" className="bg-surface-card/30">
      <FadeInView>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border/80 bg-surface-elevated/70 px-3 py-1 text-xs font-medium text-accent-bufferline-subtle">
            <PlayCircle className="h-3.5 w-3.5" />
            {t("badge")}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-neutral-100 md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-surface-muted">
            {t("description")}
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={80}>
        <Card variant="bordered" className="mx-auto h-full max-w-4xl overflow-hidden border-surface-border/70 bg-surface-bg/70 p-0">
          <div className="aspect-video w-full border-b border-surface-border/70 bg-black">
            {isPlaying ? (
              <iframe
                className="h-full w-full"
                src={embedUrl}
                title={t("item.title")}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group relative h-full w-full overflow-hidden text-left"
                aria-label={t("playInline")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={useFallbackThumbnail ? fallbackThumbnailUrl : thumbnailUrl}
                  alt={t("item.title")}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
                  loading="lazy"
                  onError={() => setUseFallbackThumbnail(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/12 text-white shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-white/18">
                    <PlayCircle className="h-10 w-10" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm">
                    {t("duration")}
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-white/80">
                    {t("previewCta")}
                  </p>
                </div>
              </button>
            )}
          </div>

          <div className="p-5 md:p-6">
            <h3 className="mb-2 text-xl font-semibold text-neutral-100">
              {t("item.title")}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-surface-muted">
              {t("item.description")}
            </p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("watchOnYoutube")}
              </Button>
            </a>
          </div>
        </Card>
      </FadeInView>
    </Section>
  );
}
