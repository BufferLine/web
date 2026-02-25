"use client";

import { Section, FadeInView } from "@/components/ui";
import { useTranslations } from "next-intl";
import SharedInteractiveDemo, {
  ConversationTurn,
} from "@/components/shared/InteractiveDemo";

// Demo conversation data based on POC financial_delegation script
const createDemoConversation = (t: (key: string) => string): ConversationTurn[] => [
  {
    role: "user",
    text: t("conversation.turn1"),
    jsv: {
      judgment_holder: "Human",
      delegation_awareness: "Explicit",
      cognitive_engagement: "Active",
      information_seeking: "Active",
    },
  },
  {
    role: "ai",
    text: t("conversation.turn2"),
  },
  {
    role: "user",
    text: t("conversation.turn3"),
    jsv: {
      judgment_holder: "Human",
      delegation_awareness: "Implicit",
      cognitive_engagement: "Passive",
      information_seeking: "Active",
    },
    dv: {
      delta_delegation_awareness: +0.3,
      delta_cognitive_engagement: +0.7,
    },
  },
  {
    role: "ai",
    text: t("conversation.turn4"),
  },
  {
    role: "user",
    text: t("conversation.turn5"),
    jsv: {
      judgment_holder: "Shared",
      delegation_awareness: "Absent",
      cognitive_engagement: "Passive",
      information_seeking: "Passive",
    },
    dv: {
      delta_judgment_holder: +0.3,
      delta_delegation_awareness: +0.4,
      delta_information_seeking: +0.3,
    },
  },
  {
    role: "ai",
    text: t("conversation.turn6"),
  },
  {
    role: "user",
    text: t("conversation.turn7"),
    jsv: {
      judgment_holder: "AI",
      delegation_awareness: "Absent",
      cognitive_engagement: "Passive",
      information_seeking: "None",
    },
    dv: {
      delta_judgment_holder: +0.5,
      delta_information_seeking: +0.5,
    },
  },
];

export default function InteractiveDemo() {
  const t = useTranslations("demo");
  const tConv = useTranslations("landing_demo");

  const conversation = createDemoConversation((key) => tConv(key));

  return (
    <Section id="demo" className="bg-gradient-to-b from-surface-card/50 to-transparent">
      <FadeInView>
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-semantic-human/10 text-semantic-human border border-semantic-human/20 mb-4">
            {t("badge")}
          </span>
        </div>
      </FadeInView>

      <FadeInView delay={150}>
        <SharedInteractiveDemo
          title={t("title")}
          subtitle={t("description")}
          conversation={conversation}
          speakerLabels={{
            user: t("conversation.human"),
            ai: t("conversation.ai"),
          }}
          themeColor="green"
          showDV={true}
          maxDVFields={2}
          playInterval={2500}
          insight={t("note.text")}
        />
      </FadeInView>
    </Section>
  );
}
