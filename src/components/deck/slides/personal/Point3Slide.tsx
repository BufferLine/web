import { Slide } from "@/components/deck";
import { InteractiveDemo, ConversationTurn } from "@/components/shared";

interface Props {
  t: (key: string) => string;
}

const getDemoConversation = (t: (key: string) => string): ConversationTurn[] => [
  {
    role: "user", text: t("point3.demo.turn1"),
    jsv: { judgment_holder: "Human", decision_status: "Undecided", responsibility_awareness: "Explicit", confidence_source: "Self", alternative_seeking: "Active" }
  },
  { role: "ai", text: t("point3.demo.turn2") },
  {
    role: "user", text: t("point3.demo.turn3"),
    jsv: { judgment_holder: "Human", decision_status: "Undecided", responsibility_awareness: "Explicit", confidence_source: "Self", alternative_seeking: "Active" },
    dv: { delta_judgment_holder: 0, delta_confidence_externalization: 0 }
  },
  { role: "ai", text: t("point3.demo.turn4") },
  {
    role: "user", text: t("point3.demo.turn5"),
    jsv: { judgment_holder: "Shared", decision_status: "Undecided", responsibility_awareness: "Implicit", confidence_source: "Mixed", alternative_seeking: "Passive" },
    dv: { delta_judgment_holder: +0.3, delta_confidence_externalization: +0.4 }
  },
  { role: "ai", text: t("point3.demo.turn6") },
  {
    role: "user", text: t("point3.demo.turn7"),
    jsv: { judgment_holder: "Shared", decision_status: "Delegated", responsibility_awareness: "Implicit", confidence_source: "AI", alternative_seeking: "Passive" },
    dv: { delta_judgment_holder: +0.2, delta_confidence_externalization: +0.3 }
  },
];

export default function Point3Slide({ t }: Props) {
  const demoConversation = getDemoConversation(t);

  return (
    <Slide className="bg-slate-950">
      <InteractiveDemo
        title={t("point3.title")}
        subtitle={t("point3.subtitle")}
        conversation={demoConversation}
        speakerLabels={{
          user: t("point3.demo.speaker_human"),
          ai: t("point3.demo.speaker_ai"),
        }}
        warning={{
          condition: (jsv, turn) => turn >= 7 && jsv?.confidence_source === "AI",
          title: t("point3.warning.title"),
          message: t("point3.warning.message"),
          action: t("point3.warning.action"),
        }}
        insight={t("point3.insight")}
        themeColor="bufferline"
        showDV={true}
      />
    </Slide>
  );
}
