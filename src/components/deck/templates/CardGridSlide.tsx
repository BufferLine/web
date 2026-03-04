import { LucideIcon } from "lucide-react";
import { Slide } from "@/components/deck";
import { InfoCard, ConclusionBox } from "../primitives";
import { DeckTheme } from "../theme";

interface CardData {
  icon: LucideIcon;
  title: string;
  description: string;
  footer?: React.ReactNode;
}

interface CardGridSlideProps {
  title: string;
  subtitle?: string;
  cards: CardData[];
  conclusion?: string;
  theme: DeckTheme;
  /** Card variant */
  cardVariant?: "default" | "themed";
  /** Number of columns (default: auto based on card count) */
  columns?: 2 | 3;
}

export default function CardGridSlide({
  title,
  subtitle,
  cards,
  conclusion,
  theme,
  cardVariant = "default",
  columns,
}: CardGridSlideProps) {
  // Auto-determine columns: 2 for 2 or 4 cards, 3 otherwise
  const cols = columns ?? (cards.length === 2 || cards.length === 4 ? 2 : 3);
  const gridCols = cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <Slide className="bg-surface-bg">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4 text-center">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-surface-muted mb-4 sm:mb-8 text-center">{subtitle}</p>
        )}
        <div className={`grid grid-cols-1 ${gridCols} gap-3 sm:gap-6`}>
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              footer={card.footer}
              theme={theme}
              variant={cardVariant}
            />
          ))}
        </div>
        {conclusion && (
          <ConclusionBox theme={theme} className="mt-4 sm:mt-8">
            {conclusion}
          </ConclusionBox>
        )}
      </div>
    </Slide>
  );
}
