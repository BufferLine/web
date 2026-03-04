"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, Button } from "@/components/ui";
import { Play, Pause, RotateCcw, Sparkles, MessageCircleHeart, GitCompareArrows, TriangleAlert } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const stageKeys = ["blindDate", "persona", "difficulty"] as const;

const stageBoardScores: Record<(typeof stageKeys)[number], [number, number, number]> = {
  blindDate: [88, 77, 69],
  persona: [82, 85, 74],
  difficulty: [71, 54, 43],
};

export default function ThinkprintInteractiveDemo({ t }: Props) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stages = useMemo(
    () =>
      stageKeys.map((key) => ({
        title: t(`interactiveDemo.projects.${key}.title`),
        subtitle: t(`interactiveDemo.projects.${key}.subtitle`),
        brief: t(`interactiveDemo.projects.${key}.brief`),
        user: t(`interactiveDemo.projects.${key}.user`),
        agent: t(`interactiveDemo.projects.${key}.agent`),
        cardLabel: t(`interactiveDemo.projects.${key}.cardLabel`),
        cardValue: t(`interactiveDemo.projects.${key}.cardValue`),
        result: t(`interactiveDemo.projects.${key}.result`),
        scoreNote: t(`interactiveDemo.projects.${key}.scoreNote`),
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
    }, 3000);
    return () => clearTimeout(timer);
  }, [playing, stages.length, index]);

  const stage = stages[index];
  const activeKey = stageKeys[index];
  const scoreItems = (["1", "2", "3"] as const).map((n, i) => ({
    key: n,
    label: t(`interactiveDemo.boards.${activeKey}.items.${n}.label`),
    value: stageBoardScores[activeKey][i],
    tone:
      i === 0
        ? "from-accent-thinkprint-light to-accent-thinkprint"
        : i === 1
          ? "from-fuchsia-400 to-pink-300"
          : "from-rose-500 to-orange-400",
  }));

  return (
    <div className="w-full max-w-6xl">
      <h3 className="text-3xl md:text-4xl font-bold text-neutral-100 text-center mb-3">
        {t("interactiveDemo.panelTitle")}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {stages.map((item, i) => (
          <button
            key={stageKeys[i]}
            type="button"
            onClick={() => {
              setPlaying(false);
              setIndex(i);
            }}
            className={`text-left rounded-xl border px-4 py-3 transition-all duration-300 ${
              i === index
                ? "border-accent-thinkprint/60 bg-accent-thinkprint/15 shadow-lg shadow-accent-thinkprint/20"
                : "border-surface-border/70 bg-surface-card/45 hover:border-accent-thinkprint/35"
            }`}
          >
            <div className="text-xs uppercase tracking-wider text-accent-thinkprint-light mb-1">
              {t("interactiveDemo.projectLabel")} #{i + 1}
            </div>
            <p className="text-sm font-semibold text-neutral-100">{item.title}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
        <Card variant="glass" className="space-y-5 p-7 md:p-8">
          <div>
            <div className="text-xs uppercase tracking-wider text-accent-thinkprint-light mb-2">
              {stage.title}
            </div>
            <p className="text-sm md:text-base text-surface-muted">{stage.subtitle}</p>
          </div>

          <div className="rounded-xl border border-accent-thinkprint/30 bg-accent-thinkprint/10 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-accent-thinkprint-light mb-2">{t("interactiveDemo.briefLabel")}</p>
            <p className="text-lg md:text-xl font-semibold text-neutral-100">{stage.brief}</p>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-surface-card/75 border border-surface-border/70 px-4 py-4">
              <p className="text-xs text-neutral-500 mb-2">{t("interactiveDemo.signals.user")}</p>
              <p className="text-base text-neutral-100">{stage.user}</p>
            </div>
            <div className="rounded-xl bg-accent-thinkprint/10 border border-accent-thinkprint/30 px-4 py-4">
              <p className="text-xs text-accent-thinkprint-light mb-2">{t("interactiveDemo.signals.agent")}</p>
              <p className="text-base text-accent-thinkprint-light">{stage.agent}</p>
            </div>
          </div>

          <div className="rounded-xl border border-surface-border/70 bg-surface-card/70 p-4">
            <p className="text-xs text-surface-muted mb-1">{stage.cardLabel}</p>
            <p className="text-xl font-semibold text-neutral-100">{stage.cardValue}</p>
          </div>
          <div className="rounded-xl border border-surface-border/70 bg-surface-card/70 p-4">
              <p className="text-xs text-surface-muted mb-1">{t("interactiveDemo.resultLabel")}</p>
              <p className="text-base text-neutral-100">{stage.result}</p>
            </div>
        </Card>

        <Card variant="glass" className="space-y-5 p-7 md:p-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-accent-thinkprint-light">{t("interactiveDemo.scoreboardTitle")}</p>
              <h4 className="text-xl md:text-2xl font-semibold text-neutral-100 mt-1">{t(`interactiveDemo.boards.${activeKey}.title`)}</h4>
            </div>
            {activeKey === "blindDate" ? (
              <MessageCircleHeart className="w-6 h-6 text-pink-300" />
            ) : activeKey === "persona" ? (
              <GitCompareArrows className="w-6 h-6 text-sky-300" />
            ) : activeKey === "difficulty" ? (
              <TriangleAlert className="w-6 h-6 text-rose-300" />
            ) : (
              <Sparkles className="w-6 h-6 text-accent-thinkprint-light" />
            )}
          </div>

          <div className="space-y-4">
            {scoreItems.map((item) => (
              <div key={item.key} className="rounded-xl border border-surface-border/70 bg-surface-card/70 p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-neutral-200">{item.label}</p>
                  <p className="text-lg font-semibold text-neutral-100">{item.value}</p>
                </div>
                <div className="h-3 w-full rounded-full bg-surface-elevated/70 overflow-hidden">
                  <div
                    className={`h-3 bg-gradient-to-r ${item.tone} transition-all duration-700`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-accent-thinkprint/25 bg-accent-thinkprint/[0.07] p-4">
            <p className="text-xs text-accent-thinkprint-light mb-2">{t("interactiveDemo.scoreboardRoleLabel")}</p>
            <p className="text-xs text-accent-thinkprint-subtle mb-2">{t("interactiveDemo.scoreboardRole")}</p>
            <p className="text-sm md:text-base text-neutral-100">{stage.scoreNote}</p>
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
      <p className="text-center text-surface-muted mt-4 text-sm md:text-base">{t("interactiveDemo.insight")}</p>
    </div>
  );
}
