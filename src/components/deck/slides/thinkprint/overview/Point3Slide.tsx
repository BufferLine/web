import { Slide, PhaseCard } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

const phases = [
  { key: "extract", variant: "active" as const, statusColor: "green" as const },
  { key: "release", variant: "current" as const, statusColor: "yellow" as const },
];

export default function Point3Slide({ t }: Props) {
  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4 text-center">
          {t("point3.title")}
        </h2>
        <p className="text-lg text-surface-muted mb-4 sm:mb-8 text-center">
          {t("point3.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
          {phases.map(({ key, variant, statusColor }) => (
            <PhaseCard
              key={key}
              title={t(`point3.phases.${key}.title`)}
              status={t(`point3.phases.${key}.status`)}
              statusColor={statusColor}
              items={[0, 1, 2].map((i) => t(`point3.phases.${key}.items.${i}`))}
              theme="thinkprint"
              variant={variant}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
