interface KeyboardHintProps {
  hintText?: string;
}

export default function KeyboardHint({ hintText = "to navigate" }: KeyboardHintProps) {
  return (
    <div className="fixed bottom-8 left-8 text-neutral-600 text-xs hidden md:block">
      <kbd className="px-2 py-1 rounded bg-surface-elevated mr-1">←</kbd>
      <kbd className="px-2 py-1 rounded bg-surface-elevated mr-1">→</kbd>
      <span className="ml-2">{hintText}</span>
    </div>
  );
}
