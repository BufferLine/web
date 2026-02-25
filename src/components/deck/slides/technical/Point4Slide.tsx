import { Slide, CodeBlock } from "@/components/deck";
import { Database, Cpu, Terminal } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const dvCode = `from bufferline import JSV, DV

jsv_before = JSV(judgment_holder="Human", confidence_source="Self", ...)
jsv_after  = JSV(judgment_holder="Shared", confidence_source="AI", ...)

# Calculate the delegation vector
dv = DV.calculate(jsv_before, jsv_after)

print(dv.delta_judgment_holder)        # +0.5 (Human → Shared)
print(dv.delta_confidence_externalization)  # +0.8 (Self → AI)`;

export default function Point4Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          {t("point4.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-teal-400" />
              <h3 className="text-base font-semibold text-white">
                {t("point4.polarity.title")}
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-green-400 font-mono">+</span>{" "}
                <span className="text-slate-500">→ AI</span>{" "}
                <span className="text-slate-400">
                  {t("point4.polarity.positive")}
                </span>
              </p>
              <p>
                <span className="text-slate-400 font-mono">0</span>{" "}
                <span className="text-slate-500">—</span>{" "}
                <span className="text-slate-400">
                  {t("point4.polarity.zero")}
                </span>
              </p>
              <p>
                <span className="text-rose-400 font-mono">−</span>{" "}
                <span className="text-slate-500">→ Human</span>{" "}
                <span className="text-slate-400">
                  {t("point4.polarity.negative")}
                </span>
              </p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-5 h-5 text-teal-400" />
              <h3 className="text-base font-semibold text-white">
                {t("point4.formula.title")}
              </h3>
            </div>
            <div className="bg-slate-800 rounded p-3 font-mono text-sm text-center">
              <span className="text-teal-300">DV</span> ={" "}
              <span className="text-cyan-300">JSV</span>
              <sub className="text-slate-400">t</sub> −{" "}
              <span className="text-cyan-300">JSV</span>
              <sub className="text-slate-400">t-1</sub>
            </div>
            <p className="text-slate-500 text-xs mt-2">
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
