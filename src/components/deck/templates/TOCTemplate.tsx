import { Slide } from "@/components/deck";
import { TOCItem } from "../primitives";
import { DeckTheme } from "../theme";

interface TOCItemData {
  title: string;
  subtitle: string;
}

interface TOCTemplateProps {
  title: string;
  items: TOCItemData[];
  theme: DeckTheme;
  setSlide: (n: number) => void;
  /** Starting slide index for first item (default: 2, assuming Hook=0, TOC=1) */
  startSlideIndex?: number;
}

export default function TOCTemplate({
  title,
  items,
  theme,
  setSlide,
  startSlideIndex = 2,
}: TOCTemplateProps) {
  // Use compact mode if more than 5 items
  const compact = items.length > 5;
  const spacing = compact ? "space-y-3" : "space-y-4";

  return (
    <Slide className="bg-slate-950">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          {title}
        </h2>
        <div className={spacing}>
          {items.map((item, index) => (
            <TOCItem
              key={index}
              number={index + 1}
              title={item.title}
              subtitle={item.subtitle}
              theme={theme}
              onClick={() => setSlide(startSlideIndex + index)}
              compact={compact}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
