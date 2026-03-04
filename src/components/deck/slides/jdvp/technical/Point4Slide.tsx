import { Slide, CodeBlock } from "@/components/deck";
import { Database, Cpu, Terminal } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const dvCode = `from bufferline import JSV, DV

jsv_before = JSV(judgment_holder="Human", cognitive_engagement="Active", ...)
jsv_after  = JSV(judgment_holder="Shared", cognitive_engagement="Passive", ...)

# Calculate the delegation vector
dv = DV.calculate(jsv_before, jsv_after)

print(dv.delta_judgment_holder)        # +0.3 (Human → Shared)
print(dv.delta_cognitive_engagement)   # +0.7 (Active → Passive)`;

export default function Point4Slide({ t }: Props) {
  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-6 text-center">
          {t("point4.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div className="p-4 rounded-xl bg-surface-card/75 border border-surface-border">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-teal-400" />
              <h3 className="text-base font-semibold text-neutral-100">
                {t("point4.polarity.title")}
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-green-400 font-mono">+</span>{" "}
                <span className="text-neutral-500">→ AI</span>{" "}
                <span className="text-surface-muted">
                  {t("point4.polarity.positive")}
                </span>
              </p>
              <p>
                <span className="text-surface-muted font-mono">0</span>{" "}
                <span className="text-neutral-500">—</span>{" "}
                <span className="text-surface-muted">
                  {t("point4.polarity.zero")}
                </span>
              </p>
              <p>
                <span className="text-rose-400 font-mono">−</span>{" "}
                <span className="text-neutral-500">→ Human</span>{" "}
                <span className="text-surface-muted">
                  {t("point4.polarity.negative")}
                </span>
              </p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-surface-card/75 border border-surface-border">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-5 h-5 text-teal-400" />
              <h3 className="text-base font-semibold text-neutral-100">
                {t("point4.formula.title")}
              </h3>
            </div>
            <div className="bg-surface-elevated rounded p-3 font-mono text-sm text-center">
              <span className="text-teal-300">DV</span> ={" "}
              <span className="text-cyan-300">JSV</span>
              <sub className="text-surface-muted">t</sub> −{" "}
              <span className="text-cyan-300">JSV</span>
              <sub className="text-surface-muted">t-1</sub>
            </div>
            <p className="text-neutral-500 text-xs mt-2">
              {t("point4.formula.note")}
            </p>
          </div>
        </div>
        <CodeBlock
          icon={Terminal}
          title="Python DV Calculation"
          code={dvCode}
          theme="jdvp"
          variant="themed"
        />
      </div>
    </Slide>
  );
}
