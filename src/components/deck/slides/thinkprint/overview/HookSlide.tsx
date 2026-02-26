import { HookTemplate } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

export default function HookSlide({ t }: Props) {
  return (
    <HookTemplate
      line1={t("hook.line1")}
      line2={t("hook.line2")}
      question={t("hook.question")}
      navigateHint={t("hook.navigate")}
      theme="thinkprint"
    />
  );
}
