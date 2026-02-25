"use client";

import { useTranslations } from "next-intl";
import type { DVState } from "./types";
import { getBorderClass, getTextClass } from "./utils";

interface DVVisualizationProps {
  dv: DVState | null;
  themeColor: string;
  maxFields?: number;
}

export default function DVVisualization({ dv, themeColor, maxFields = 4 }: DVVisualizationProps) {
  const t = useTranslations("interactive_demo");
  const borderClass = getBorderClass(themeColor);
  const textClass = getTextClass(themeColor);

  const allDvFields = [
    "delta_judgment_holder",
    "delta_responsibility_awareness",
    "delta_confidence_externalization",
    "delta_alternative_seeking",
  ] as const;

  // Filter to only fields that have values and limit to maxFields
  const dvFields = dv
    ? allDvFields.filter((field) => dv[field] !== undefined).slice(0, maxFields)
    : allDvFields.slice(0, maxFields);

  return (
    <div
      className={`rounded-xl border ${borderClass} p-4 h-[150px] transition-opacity duration-300 ${
        dv ? "opacity-100" : "opacity-30"
      }`}
    >
      <h4 className={`text-sm font-semibold ${textClass} mb-3`}>{t("dv_title")}</h4>
      {dv ? (
        <div className="grid grid-cols-2 gap-2">
          {dvFields.map((field) => {
            const value = dv[field];
            if (value === undefined) return null;
            return (
              <div key={field} className={`p-2.5 rounded-lg border ${borderClass}`}>
                <code className="text-[9px] text-neutral-500 block mb-0.5">
                  Δ {t(`dv.${field}`)}
                </code>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-base font-bold ${textClass}`}>
                    {value > 0 ? "+" : ""}
                    {value.toFixed(1)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-neutral-500 py-3 text-sm">
          {t("placeholder_dv")}
        </div>
      )}
    </div>
  );
}
