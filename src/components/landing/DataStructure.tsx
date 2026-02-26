"use client";

import { Section, Card } from "@/components/ui";
import { useState } from "react";
import { useTranslations } from "next-intl";

const jsvFieldKeys = [
  "judgment_holder",
  "delegation_awareness",
  "cognitive_engagement",
  "information_seeking",
] as const;

const dvFieldKeys = [
  "delta_judgment_holder",
  "delta_delegation_awareness",
  "delta_cognitive_engagement",
  "delta_information_seeking",
] as const;

export default function DataStructure() {
  const [activeTab, setActiveTab] = useState<"jsv" | "dv">("jsv");
  const t = useTranslations("dataStructure");

  return (
    <Section id="data-structures">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-surface-muted max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg bg-surface-elevated/50 p-1" role="tablist" aria-label={t("title")}>
          <button
            role="tab"
            aria-selected={activeTab === "jsv"}
            aria-controls="tabpanel-jsv"
            id="tab-jsv"
            onClick={() => setActiveTab("jsv")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === "jsv"
                ? "bg-accent-jdvp text-white"
                : "text-surface-muted hover:text-white"
            }`}
          >
            {t("tabs.jsv")}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "dv"}
            aria-controls="tabpanel-dv"
            id="tab-dv"
            onClick={() => setActiveTab("dv")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === "dv"
                ? "bg-accent-jdvp text-white"
                : "text-surface-muted hover:text-white"
            }`}
          >
            {t("tabs.dv")}
          </button>
        </div>
      </div>

      {/* JSV Content */}
      {activeTab === "jsv" && (
        <div id="tabpanel-jsv" role="tabpanel" aria-labelledby="tab-jsv" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code example */}
          <Card variant="bordered" className="overflow-hidden">
            <div className="bg-surface-card px-4 py-2 border-b border-surface-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-neutral-500 text-xs font-mono">jsv.ts</span>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="text-neutral-300">
                <span className="text-violet-400">type</span>{" "}
                <span className="text-cyan-400">JSV</span>{" "}
                <span className="text-neutral-500">=</span> {"{"}
                {"\n"}
                {"  "}
                <span className="text-emerald-400">judgment_holder</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-amber-300">&quot;Human&quot;</span>{" "}
                <span className="text-neutral-500">|</span>{" "}
                <span className="text-amber-300">&quot;AI&quot;</span>{" "}
                <span className="text-neutral-500">|</span>{" "}
                <span className="text-amber-300">&quot;Shared&quot;</span>
                <span className="text-neutral-500">;</span>
                {"\n"}
                {"  "}
                <span className="text-emerald-400">delegation_awareness</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-amber-300">&quot;Explicit&quot;</span>{" "}
                <span className="text-neutral-500">|</span>{" "}
                <span className="text-amber-300">&quot;Implicit&quot;</span>
                <span className="text-neutral-500">;</span>
                {"\n"}
                {"  "}
                <span className="text-emerald-400">cognitive_engagement</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-amber-300">&quot;Active&quot;</span>{" "}
                <span className="text-neutral-500">|</span>{" "}
                <span className="text-amber-300">&quot;Reactive&quot;</span>
                <span className="text-neutral-500">;</span>
                {"\n"}
                {"  "}
                <span className="text-emerald-400">information_seeking</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-amber-300">&quot;Active&quot;</span>{" "}
                <span className="text-neutral-500">|</span>{" "}
                <span className="text-amber-300">&quot;Passive&quot;</span>
                <span className="text-neutral-500">;</span>
                {"\n"}
                {"}"}<span className="text-neutral-500">;</span>
              </code>
            </pre>
          </Card>

          {/* Field descriptions */}
          <div className="space-y-3">
            {jsvFieldKeys.map((key) => (
              <div
                key={key}
                className="p-4 rounded-lg bg-surface-elevated/30 border border-surface-border/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <code className="text-accent-jdvp-light text-sm font-medium">
                      {t(`jsv.fields.${key}.name`)}
                    </code>
                    <p className="text-surface-muted text-sm mt-1">
                      {t(`jsv.fields.${key}.description`)}
                    </p>
                  </div>
                </div>
                <code className="text-xs text-neutral-500 mt-2 block">
                  {t(`jsv.fields.${key}.type`)}
                </code>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DV Content */}
      {activeTab === "dv" && (
        <div id="tabpanel-dv" role="tabpanel" aria-labelledby="tab-dv" className="space-y-8">
          {/* Polarity convention */}
          <Card variant="bordered" className="bg-accent-jdvp/[0.08] border-accent-jdvp/[0.15]">
            <h3 className="text-lg font-semibold text-accent-jdvp-light mb-4">
              {t("dv.polarityTitle")}
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-semantic-human/[0.08] border border-semantic-human/[0.15]">
                <span className="text-2xl font-bold text-semantic-human">{t("dv.polarity.positive.symbol")}</span>
                <p className="text-sm text-neutral-300 mt-2">{t("dv.polarity.positive.direction")}</p>
                <p className="text-xs text-neutral-500">
                  {t("dv.polarity.positive.description")}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-elevated/50 border border-surface-border/30">
                <span className="text-2xl font-bold text-surface-muted">{t("dv.polarity.zero.symbol")}</span>
                <p className="text-sm text-neutral-300 mt-2">{t("dv.polarity.zero.direction")}</p>
                <p className="text-xs text-neutral-500">{t("dv.polarity.zero.description")}</p>
              </div>
              <div className="p-4 rounded-lg bg-semantic-shared/[0.08] border border-semantic-shared/[0.15]">
                <span className="text-2xl font-bold text-semantic-shared">{t("dv.polarity.negative.symbol")}</span>
                <p className="text-sm text-neutral-300 mt-2">{t("dv.polarity.negative.direction")}</p>
                <p className="text-xs text-neutral-500">
                  {t("dv.polarity.negative.description")}
                </p>
              </div>
            </div>
          </Card>

          {/* DV fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dvFieldKeys.map((key) => (
              <Card key={key} variant="glass" className="p-4">
                <code className="text-accent-jdvp-light text-sm font-medium block mb-3">
                  {t(`dv.fields.${key}.name`)}
                </code>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-semantic-human font-mono">+</span>
                    <span className="text-surface-muted">{t(`dv.fields.${key}.positive`)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-semantic-shared font-mono">−</span>
                    <span className="text-surface-muted">{t(`dv.fields.${key}.negative`)}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Important note */}
          <div className="p-4 rounded-lg bg-accent-thinkprint/[0.08] border border-accent-thinkprint/[0.15] text-center">
            <p className="text-accent-thinkprint text-sm">
              <span className="font-semibold">{t("dv.important.label")}</span>{" "}
              {t("dv.important.text")}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}
