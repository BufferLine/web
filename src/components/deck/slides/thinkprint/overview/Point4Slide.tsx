import { Slide, PhaseCard } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

const groups = [
  { key: "core", variant: "active" as const, statusColor: "green" as const },
  { key: "packaging", variant: "current" as const, statusColor: "yellow" as const },
];

export default function Point4Slide({ t }: Props) {
  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4 text-center">
          {t("point4.title")}
        </h2>
        <p className="text-lg text-surface-muted mb-4 sm:mb-8 text-center">
          {t("point4.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
          {groups.map(({ key, variant, statusColor }) => (
            <PhaseCard
              key={key}
              title={t(`point4.groups.${key}.title`)}
              status={t(`point4.groups.${key}.status`)}
              statusColor={statusColor}
              items={[0, 1, 2].map((i) => t(`point4.groups.${key}.items.${i}`))}
              theme="thinkprint"
              variant={variant}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
