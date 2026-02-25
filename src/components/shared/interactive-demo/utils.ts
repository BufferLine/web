export const getSpectrumPosition = (field: string, value: string): number => {
  const spectrums: Record<string, Record<string, number>> = {
    judgment_holder: { Human: 0, Shared: 50, AI: 100, Undefined: 50 },
    decision_status: { Undecided: 0, Deferred: 25, Delegated: 75, Completed: 100 },
    responsibility_awareness: { Explicit: 0, Implicit: 50, Absent: 100 },
    confidence_source: { Self: 0, Mixed: 33, External: 66, AI: 100 },
    alternative_seeking: { Active: 0, Passive: 50, None: 100 },
  };
  return spectrums[field]?.[value] ?? 50;
};

export const getJSVColor = (field: string, value: string): string => {
  const position = getSpectrumPosition(field, value);
  if (position <= 25) return "text-semantic-human";
  if (position <= 50) return "text-yellow-400";
  if (position <= 75) return "text-orange-400";
  return "text-accent-meta";
};

export const getGradientClass = (themeColor: string): string => {
  const gradients: Record<string, string> = {
    bufferline: "from-accent-bufferline to-accent-bufferline-light",
    jdvp: "from-accent-jdvp to-semantic-shared",
    green: "from-semantic-human to-semantic-human-hover",
  };
  return gradients[themeColor] || gradients.bufferline;
};

export const getAccentBg = (themeColor: string): string => {
  const accents: Record<string, string> = {
    bufferline: "bg-accent-bufferline",
    jdvp: "bg-accent-jdvp",
    green: "bg-semantic-human",
  };
  return accents[themeColor] || accents.bufferline;
};

export const getAccentClass = (themeColor: string): string => {
  const accents: Record<string, string> = {
    bufferline: "bg-accent-bufferline hover:bg-accent-bufferline-hover",
    jdvp: "bg-accent-jdvp hover:bg-accent-jdvp-hover",
    green: "bg-semantic-human hover:bg-semantic-human-hover",
  };
  return accents[themeColor] || accents.bufferline;
};

export const getBorderClass = (themeColor: string): string => {
  const borders: Record<string, string> = {
    bufferline: "border-accent-bufferline/[0.15] bg-accent-bufferline/[0.08]",
    jdvp: "border-accent-jdvp/[0.15] bg-accent-jdvp/[0.08]",
    green: "border-semantic-human/[0.15] bg-semantic-human/[0.08]",
  };
  return borders[themeColor] || borders.bufferline;
};

export const getTextClass = (themeColor: string): string => {
  const texts: Record<string, string> = {
    bufferline: "text-accent-bufferline-light",
    jdvp: "text-accent-jdvp-light",
    green: "text-semantic-human",
  };
  return texts[themeColor] || texts.bufferline;
};
