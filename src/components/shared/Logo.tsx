import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Buffer icon - represents the observation buffer */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="BufferLine logo"
        className={cn("text-accent-bufferline-light", {
          "w-6 h-6": size === "sm",
          "w-8 h-8": size === "md",
          "w-10 h-10": size === "lg",
        })}
      >
        {/* Outer ring - observation boundary */}
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        {/* Inner flow lines - judgment flow */}
        <path
          d="M8 16h4m4 0h4m4 0h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Center dot - observation point */}
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
      <span
        className={cn("font-heading font-semibold tracking-tight", {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        })}
      >
        <span className="text-surface-fg">Buffer</span>
        <span className="text-accent-bufferline-subtle">Line</span>
      </span>
    </div>
  );
}
