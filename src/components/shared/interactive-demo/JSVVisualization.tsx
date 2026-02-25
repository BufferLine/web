"use client";

import { useTranslations } from "next-intl";
import type { JSVState } from "./types";
import { getSpectrumPosition, getJSVColor, getGradientClass, getTextClass } from "./utils";

interface JSVVisualizationProps {
  jsv: JSVState | null;
  themeColor: string;
}

export default function JSVVisualization({ jsv, themeColor }: JSVVisualizationProps) {
  const t = useTranslations("interactive_demo");
  const gradient = getGradientClass(themeColor);

  const fields = [
    "judgment_holder",
    "delegation_awareness",
    "cognitive_engagement",
    "information_seeking",
  ] as const;

  // Translate JSV values
  const translateValue = (field: string, value: string): string => {
    try {
      return t(`values.${field}.${value}`);
    } catch {
      return value;
    }
  };

  return (
    <div className="rounded-xl bg-surface-card/70 border border-surface-border p-4 h-[250px]">
      <h4 className={`text-sm font-semibold ${getTextClass(themeColor)} mb-4`}>
        {t("jsv_title")}
      </h4>
      <div className="space-y-3">
        {jsv ? (
          fields.map((field) => {
            const value = jsv[field];
            const position = getSpectrumPosition(field, value);
            return (
              <div key={field}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-neutral-500">{t(`jsv.${field}`)}</span>
                  <span className={`font-medium ${getJSVColor(field, value)}`}>{translateValue(field, value)}</span>
                </div>
                <div className="h-2 bg-neutral-700/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500`}
                    style={{ width: `${position}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-neutral-500 py-6 text-sm">
            {t("placeholder_jsv")}
          </div>
        )}
      </div>
    </div>
  );
}
