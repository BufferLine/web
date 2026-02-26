"use client";

import { useTranslations } from "next-intl";
import { DeckLayout } from "@/components/deck";
import {
  HookSlide,
  TrackIntroSlide,
  TOCSlide,
  Point1Slide,
  Point2Slide,
  Point3Slide,
  Point4Slide,
  Point5Slide,
  Point6Slide,
  Point7Slide,
  Point8Slide,
  SummarySlide,
} from "@/components/deck/slides/brand/institutional";

export default function DeckPage() {
  const t = useTranslations("deck_institution");

  const slides = [
    <HookSlide key="hook" t={t} />,
    <TrackIntroSlide key="track-intro" t={t} />,
    (setSlide: (n: number) => void) => <TOCSlide key="toc" t={t} setSlide={setSlide} />,
    <Point1Slide key="point1" t={t} />,
    <Point2Slide key="point2" t={t} />,
    <Point3Slide key="point3" t={t} />,
    <Point4Slide key="point4" t={t} />,
    <Point8Slide key="point8" t={t} />,
    <Point5Slide key="point5" t={t} />,
    <Point6Slide key="point6" t={t} />,
    <Point7Slide key="point7" t={t} />,
    <SummarySlide key="summary" t={t} />,
  ];

  return (
    <DeckLayout
      deckName="Institutional"
      slides={slides}
      theme="bufferline"
      keyboardHintText={t("controls.keyboard")}
      controlLabels={{
        prev: t("controls.prev"),
        next: t("controls.next"),
      }}
    />
  );
}
