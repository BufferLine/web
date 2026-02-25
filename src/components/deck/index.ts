export { default as DeckLayout, Slide, useDeckNavigation } from "./DeckLayout";
export type { DeckTheme } from "./DeckLayout";
export { default as ProgressBar } from "./ProgressBar";
export { default as NavControls } from "./NavControls";
export { default as KeyboardHint } from "./KeyboardHint";

// Theme utilities
export { getTheme, type ThemeColors } from "./theme";

// Primitives
export {
  InfoCard,
  ConclusionBox,
  TOCItem,
  SummaryPoint,
  CTAButtons,
  CodeBlock,
  MetricCard,
  PhaseCard,
  ComparisonBox,
  QuoteBox,
} from "./primitives";

// Templates
export {
  HookTemplate,
  TOCTemplate,
  SummaryTemplate,
  CardGridSlide,
} from "./templates";
