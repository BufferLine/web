"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, Button } from "@/components/ui";
import { Play, Pause, RotateCcw } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const stageKeys = ["extract", "generate", "project", "update"] as const;

export default function ThinkprintInteractiveDemo({ t }: Props) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stages = useMemo(
    () =>
      stageKeys.map((key) => ({
        title: t(`interactiveDemo.stages.${key}.title`),
        subtitle: t(`interactiveDemo.stages.${key}.subtitle`),
        user: t(`interactiveDemo.stages.${key}.user`),
        agent: t(`interactiveDemo.stages.${key}.agent`),
        cardLabel: t(`interactiveDemo.stages.${key}.cardLabel`),
        cardValue: t(`interactiveDemo.stages.${key}.cardValue`),
        result: t(`interactiveDemo.stages.${key}.result`),
      })),
    [t]
  );

  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      setIndex((prev) => {
        if (prev >= stages.length - 1) {
          setPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2200);
    return () => clearTimeout(timer);
  }, [playing, stages.length, index]);

  const stage = stages[index];

  return (
    <div className="w-full max-w-6xl">
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 text-center mb-3">
        {t("interactiveDemo.panelTitle")}
      </h3>
      <p className="text-surface-muted text-center mb-8">
        {t("interactiveDemo.panelSubtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="glass" className="space-y-4">
          <div className="text-xs uppercase tracking-wider text-accent-thinkprint-light">
            {stage.title}
          </div>
          <p className="text-sm text-surface-muted">{stage.subtitle}</p>
          <div className="space-y-3">
            <div className="rounded-lg bg-surface-card/70 border border-surface-border/70 px-4 py-3 text-sm text-neutral-200">
              {stage.user}
            </div>
            <div className="rounded-lg bg-accent-thinkprint/10 border border-accent-thinkprint/25 px-4 py-3 text-sm text-accent-thinkprint-light">
              {stage.agent}
            </div>
          </div>
        </Card>

        <Card variant="glass" className="space-y-4">
          <div className="rounded-lg border border-accent-thinkprint/25 bg-accent-thinkprint/8 p-4">
            <p className="text-xs text-accent-thinkprint-light mb-1">{stage.cardLabel}</p>
            <p className="text-lg font-semibold text-neutral-100">{stage.cardValue}</p>
          </div>
          <div className="rounded-lg border border-surface-border/70 bg-surface-card/70 p-4">
            <p className="text-xs text-surface-muted mb-1">{t("interactiveDemo.projectResultLabel")}</p>
            <p className="text-sm text-neutral-100">{stage.result}</p>
          </div>
          <div className="w-full bg-surface-elevated/70 rounded-full h-2 overflow-hidden">
            <div
              className="h-2 bg-gradient-to-r from-accent-thinkprint to-accent-thinkprint-light transition-all duration-500"
              style={{ width: `${((index + 1) / stages.length) * 100}%` }}
            />
          </div>
        </Card>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <Button
          size="sm"
          className="bg-accent-thinkprint hover:bg-accent-thinkprint-hover focus:ring-accent-thinkprint"
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? <Pause className="w-4 h-4 mr-1.5" /> : <Play className="w-4 h-4 mr-1.5" />}
          {playing ? t("interactiveDemo.controls.pause") : t("interactiveDemo.controls.play")}
        </Button>
        <Button size="sm" variant="outline" onClick={() => { setPlaying(false); setIndex(0); }}>
          <RotateCcw className="w-4 h-4 mr-1.5" />
          {t("interactiveDemo.controls.reset")}
        </Button>
      </div>
      <p className="text-center text-surface-muted mt-4 text-sm">{t("interactiveDemo.insight")}</p>
    </div>
  );
}

