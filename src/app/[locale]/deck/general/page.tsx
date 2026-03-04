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
  SummarySlide,
} from "@/components/deck/slides/brand/general";

export default function DeckPage() {
  const t = useTranslations("deck_general");

  const slides = [
    <HookSlide key="hook" t={t} />,
    <TrackIntroSlide key="everyday-shift" t={t} />,
    <TOCSlide key="awareness" t={t} />,
    <Point1Slide key="core-gap" t={t} />,
    <Point2Slide key="cognitive-os" t={t} />,
    <Point3Slide key="jdvp" t={t} />,
    <Point4Slide key="thinkprint" t={t} />,
    <Point5Slide key="metagov" t={t} />,
    <SummarySlide key="close" t={t} />,
  ];

  return (
    <DeckLayout
      deckName="General"
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
