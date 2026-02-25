import { Slide, CodeBlock } from "@/components/deck";
import { Code2, Terminal } from "lucide-react";

interface Props {
  t: (key: string) => string;
}

const schemaCode = `{
  "judgment_holder": "Human" | "Shared" | "AI",
  "decision_status": "Undecided" | "Delegated",
  "responsibility_awareness": "Explicit" | "Implicit",
  "confidence_source": "Self" | "AI" | "Mixed",
  "alternative_seeking": "Active" | "Passive" | "None"
}`;

const pythonCode = `from bufferline import JSV

# Create a JSV snapshot
jsv = JSV(
    judgment_holder="Human",
    decision_status="Undecided",
    responsibility_awareness="Explicit",
    confidence_source="Self",
    alternative_seeking="Active"
)

# Serialize to JSON
jsv.to_json()  # Ready for storage`;

export default function Point2Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          {t("point2.title")}
        </h2>
        <p className="text-slate-400 text-center mb-6">{t("point2.subtitle")}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            icon={Code2}
            title="jsv-schema.json"
            code={schemaCode}
            theme="jdvp"
          />
          <CodeBlock
            icon={Terminal}
            title="Python Usage"
            code={pythonCode}
            theme="jdvp"
            variant="themed"
          />
        </div>
      </div>
    </Slide>
  );
}
