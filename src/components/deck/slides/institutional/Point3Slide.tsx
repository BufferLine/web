import { Slide } from "@/components/deck";
import { InteractiveDemo, type ConversationTurn } from "@/components/shared";

interface Props {
  t: (key: string) => string;
}

function getDemoConversation(t: (key: string) => string): ConversationTurn[] {
  return [
    {
      role: "user",
      text: t("point3_demo.conversation.turn1.text"),
      jsv: { judgment_holder: "Human", decision_status: "Undecided", responsibility_awareness: "Explicit", confidence_source: "Self", alternative_seeking: "Active" },
    },
    {
      role: "ai",
      text: t("point3_demo.conversation.turn2.text"),
      jsv: { judgment_holder: "Shared", decision_status: "Undecided", responsibility_awareness: "Explicit", confidence_source: "Mixed", alternative_seeking: "Passive" },
      dv: { delta_judgment_holder: 0.3, delta_confidence_externalization: 0.2 },
    },
    {
      role: "user",
      text: t("point3_demo.conversation.turn3.text"),
      jsv: { judgment_holder: "AI", decision_status: "Delegated", responsibility_awareness: "Implicit", confidence_source: "AI", alternative_seeking: "None" },
      dv: { delta_judgment_holder: 0.5, delta_confidence_externalization: 0.6, delta_responsibility_awareness: 0.4, delta_alternative_seeking: 0.5 },
    },
    {
      role: "ai",
      text: t("point3_demo.conversation.turn4.text"),
      jsv: { judgment_holder: "AI", decision_status: "Delegated", responsibility_awareness: "Implicit", confidence_source: "AI", alternative_seeking: "None" },
    },
    {
      role: "user",
      text: t("point3_demo.conversation.turn5.text"),
      jsv: { judgment_holder: "AI", decision_status: "Delegated", responsibility_awareness: "Absent", confidence_source: "AI", alternative_seeking: "None" },
      dv: { delta_judgment_holder: 0.1, delta_responsibility_awareness: 0.3 },
    },
  ];
}

export default function Point3Slide({ t }: Props) {
  const demoConversation = getDemoConversation(t);

  return (
    <Slide className="bg-slate-950">
      <InteractiveDemo
        title={t("point3_demo.title")}
        subtitle={t("point3_demo.subtitle")}
        conversation={demoConversation}
        speakerLabels={{
          user: t("point3_demo.scenario.client"),
          ai: t("point3_demo.scenario.advisor"),
        }}
        warning={{
          condition: (jsv, turn) => turn >= 5 && jsv?.responsibility_awareness === "Absent",
          title: t("point3_demo.warning.title"),
          message: t("point3_demo.warning.message"),
          action: t("point3_demo.warning.action"),
        }}
        insight={t("point3_demo.insight")}
        themeColor="bufferline"
        showDV={true}
        maxDVFields={2}
        reverseRoles={true}
      />
    </Slide>
  );
}
