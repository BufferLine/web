"use client";

import { useState } from "react";
import { Card } from "@/components/ui";
import { MessageCircleHeart, GitCompareArrows, TriangleAlert } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const projectKeys = ["blindDate", "persona", "difficulty"] as const;

const projectIcons = {
  blindDate: <MessageCircleHeart className="w-5 h-5 text-pink-300" />,
  persona: <GitCompareArrows className="w-5 h-5 text-sky-300" />,
  difficulty: <TriangleAlert className="w-5 h-5 text-rose-300" />,
};

export default function ThinkprintInteractiveDemo({ t }: Props) {
  const [active, setActive] = useState(0);
  const key = projectKeys[active];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Project tabs */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {projectKeys.map((k, i) => (
          <button
            key={k}
            type="button"
            onClick={() => setActive(i)}
            className={`text-center rounded-xl border px-3 py-3 transition-all duration-200 ${
              i === active
                ? "border-accent-thinkprint/60 bg-accent-thinkprint/15 shadow-lg shadow-accent-thinkprint/20"
                : "border-surface-border/70 bg-surface-card/45 hover:border-accent-thinkprint/35"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              {projectIcons[k]}
              <span className="text-xs text-accent-thinkprint-light font-medium">
                #{i + 1}
              </span>
            </div>
            <p className="text-sm font-semibold text-neutral-100">
              {t(`interactiveDemo.projects.${k}.title`)}
            </p>
          </button>
        ))}
      </div>

      {/* Demo card */}
      <Card variant="glass" className="p-6 md:p-8 space-y-6">
        {/* Input */}
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
            {t("interactiveDemo.tryLabel")}
          </p>
          <div className="rounded-xl bg-surface-card/75 border border-surface-border/70 px-5 py-4">
            <p className="text-base md:text-lg text-neutral-100 leading-relaxed">
              &ldquo;{t(`interactiveDemo.projects.${key}.input`)}&rdquo;
            </p>
          </div>
        </div>

        {/* Output */}
        <div>
          <p className="text-xs uppercase tracking-wide text-accent-thinkprint-light mb-2">
            {t("interactiveDemo.resultLabel")}
          </p>
          <div className="rounded-xl bg-accent-thinkprint/10 border border-accent-thinkprint/30 px-5 py-4 space-y-3">
            <p className="text-base md:text-lg font-semibold text-neutral-100">
              {t(`interactiveDemo.projects.${key}.output`)}
            </p>
            <p className="text-sm text-accent-thinkprint-subtle">
              {t(`interactiveDemo.projects.${key}.result`)}
            </p>
          </div>
        </div>
      </Card>

      <p className="text-center text-surface-muted mt-6 text-sm">
        {t("interactiveDemo.insight")}
      </p>
    </div>
  );
}
