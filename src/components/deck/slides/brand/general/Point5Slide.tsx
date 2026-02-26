import { Slide, PhaseCard } from "@/components/deck";

interface Props {
  t: (key: string) => string;
}

const phases = [
  { key: "phase1", variant: "active" as const, statusColor: "green" as const },
  { key: "phase2", variant: "current" as const, statusColor: "yellow" as const },
  { key: "phase3", variant: "upcoming" as const, statusColor: "slate" as const },
];

export default function Point5Slide({ t }: Props) {
  return (
    <Slide className="bg-slate-950">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t("point5.title")}
        </h2>
        <p className="text-lg text-slate-400 mb-4 sm:mb-8 text-center">
          {t("point5.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
          {phases.map(({ key, variant, statusColor }) => (
            <PhaseCard
              key={key}
              title={t(`point5.phases.${key}.title`)}
              status={t(`point5.phases.${key}.status`)}
              statusColor={statusColor}
              items={[0, 1, 2].map((i) => t(`point5.phases.${key}.items.${i}`))}
              theme="bufferline"
              variant={variant}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
