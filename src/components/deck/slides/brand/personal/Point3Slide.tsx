import { Slide } from "@/components/deck";
import { InteractiveDemo, ConversationTurn } from "@/components/shared";

interface Props {
  t: (key: string) => string;
}

const getDemoConversation = (t: (key: string) => string): ConversationTurn[] => [
  {
    role: "user", text: t("point3.demo.turn1"),
    jsv: { judgment_holder: "Human", delegation_awareness: "Explicit", cognitive_engagement: "Active", information_seeking: "Active" }
  },
  { role: "ai", text: t("point3.demo.turn2") },
  {
    role: "user", text: t("point3.demo.turn3"),
    jsv: { judgment_holder: "Human", delegation_awareness: "Explicit", cognitive_engagement: "Active", information_seeking: "Active" },
    dv: { delta_judgment_holder: 0, delta_cognitive_engagement: 0 }
  },
  { role: "ai", text: t("point3.demo.turn4") },
  {
    role: "user", text: t("point3.demo.turn5"),
    jsv: { judgment_holder: "Shared", delegation_awareness: "Implicit", cognitive_engagement: "Reactive", information_seeking: "Passive" },
    dv: { delta_judgment_holder: +0.3, delta_cognitive_engagement: +0.3 }
  },
  { role: "ai", text: t("point3.demo.turn6") },
  {
    role: "user", text: t("point3.demo.turn7"),
    jsv: { judgment_holder: "Shared", delegation_awareness: "Implicit", cognitive_engagement: "Passive", information_seeking: "Passive" },
    dv: { delta_judgment_holder: +0.2, delta_cognitive_engagement: +0.4 }
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
          condition: (jsv, turn) => turn >= 7 && jsv?.cognitive_engagement === "Passive",
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
