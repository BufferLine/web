import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6",
          {
            "bg-[var(--surface-card)]": variant === "default",
            "bg-[var(--surface-card)]/85 backdrop-blur-sm border border-[var(--surface-border)]/60": variant === "glass",
            "bg-[var(--surface-bg)] border border-[var(--surface-border)]": variant === "bordered",
          },
          hover && "transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-600 hover:shadow-brand-base",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
