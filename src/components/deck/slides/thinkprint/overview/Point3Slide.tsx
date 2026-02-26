import { Slide, PhaseCard } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

const steps = [
  { key: "extract", variant: "active" as const, statusColor: "green" as const },
  { key: "calibrate", variant: "current" as const, statusColor: "yellow" as const },
  { key: "deepen", variant: "current" as const, statusColor: "yellow" as const },
  { key: "freeze", variant: "upcoming" as const, statusColor: "slate" as const },
];

export default function Point3Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point3.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-4 sm:mb-8 text-center">
          {t("point3.subtitle")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {steps.map(({ key, variant, statusColor }) => (
            <PhaseCard
              key={key}
              title={t(`point3.steps.${key}.title`)}
              status={t(`point3.steps.${key}.number`)}
              statusColor={statusColor}
              items={[0, 1, 2].map((i) => t(`point3.steps.${key}.items.${i}`))}
              theme="thinkprint"
              variant={variant}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
