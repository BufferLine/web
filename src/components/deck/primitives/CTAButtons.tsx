import { DeckTheme, getTheme } from "../theme";

interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface CTAButtonsProps {
  buttons: CTAButton[];
  theme: DeckTheme;
}

export default function CTAButtons({ buttons, theme }: CTAButtonsProps) {
  const colors = getTheme(theme);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          className={
            button.variant === "primary"
              ? `px-8 py-3 rounded-lg ${colors.button} ${colors.buttonHover} text-white font-medium transition-colors`
              : "px-8 py-3 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium transition-colors"
          }
        >
          {button.label}
        </a>
      ))}
    </div>
  );
}
