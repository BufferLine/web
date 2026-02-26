export type DeckTheme = "bufferline" | "jdvp" | "thinkprint";

export interface ThemeColors {
  // Text colors
  text: string;
  textLight: string;
  textHover: string;

  // Border colors
  border: string;
  borderHover: string;

  // Background colors
  bg: string;
  bgLight: string;

  // Gradient
  gradient: string;
  gradientText: string;

  // Button
  button: string;
  buttonHover: string;
}

const themeMap: Record<DeckTheme, ThemeColors> = {
  bufferline: {
    text: "text-accent-bufferline-light",
    textLight: "text-accent-bufferline-subtle",
    textHover: "group-hover:text-accent-bufferline-subtle",
    border: "border-accent-bufferline/[0.15]",
    borderHover: "hover:border-accent-bufferline/50",
    bg: "bg-accent-bufferline/[0.08]",
    bgLight: "bg-accent-bufferline/[0.05]",
    gradient: "from-accent-bufferline to-accent-bufferline-light",
    gradientText: "from-accent-bufferline-light to-accent-bufferline-subtle",
    button: "bg-accent-bufferline",
    buttonHover: "hover:bg-accent-bufferline-hover",
  },
  jdvp: {
    text: "text-accent-jdvp-light",
    textLight: "text-accent-jdvp-light",
    textHover: "group-hover:text-accent-jdvp-light",
    border: "border-accent-jdvp/[0.15]",
    borderHover: "hover:border-accent-jdvp/50",
    bg: "bg-accent-jdvp/[0.08]",
    bgLight: "bg-accent-jdvp/[0.05]",
    gradient: "from-accent-jdvp to-semantic-shared",
    gradientText: "from-accent-jdvp-light to-semantic-shared",
    button: "bg-accent-jdvp",
    buttonHover: "hover:bg-accent-jdvp-hover",
  },
  thinkprint: {
    text: "text-accent-thinkprint-light",
    textLight: "text-accent-thinkprint-subtle",
    textHover: "group-hover:text-accent-thinkprint-subtle",
    border: "border-accent-thinkprint/[0.15]",
    borderHover: "hover:border-accent-thinkprint/50",
    bg: "bg-accent-thinkprint/[0.08]",
    bgLight: "bg-accent-thinkprint/[0.05]",
    gradient: "from-accent-thinkprint to-accent-thinkprint-light",
    gradientText: "from-accent-thinkprint-light to-accent-thinkprint-subtle",
    button: "bg-accent-thinkprint",
    buttonHover: "hover:bg-accent-thinkprint-hover",
  },
};

export function getTheme(theme: DeckTheme): ThemeColors {
  return themeMap[theme];
}

// Convenience function for gradient backgrounds
export function getGradientBg(theme: DeckTheme): string {
  const colorMap: Record<DeckTheme, string> = {
    bufferline: "via-accent-bufferline/[0.08]",
    jdvp: "via-accent-jdvp/[0.08]",
    thinkprint: "via-accent-thinkprint/[0.08]",
  };
  return colorMap[theme];
}
