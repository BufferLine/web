"use client";

import { useTranslations } from "next-intl";
import { DeckLayout } from "@/components/deck";
import {
  HookSlide,
  TOCSlide,
  Point1Slide,
  Point2Slide,
  Point3Slide,
  Point4Slide,
  Point5Slide,
  SummarySlide,
} from "@/components/deck/slides/personal";

export default function DeckPage() {
  const t = useTranslations("deck_personal");

  const slides = [
    <HookSlide key="hook" t={t} />,
    (setSlide: (n: number) => void) => <TOCSlide key="toc" t={t} setSlide={setSlide} />,
    <Point1Slide key="point1" t={t} />,
    <Point2Slide key="point2" t={t} />,
    <Point3Slide key="point3" t={t} />,
    <Point4Slide key="point4" t={t} />,
    <Point5Slide key="point5" t={t} />,
    <SummarySlide key="summary" t={t} />,
  ];

  return (
    <DeckLayout
      deckName="Personal"
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
