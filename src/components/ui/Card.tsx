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
            "bg-white/5 backdrop-blur-sm": variant === "glass",
            "bg-[var(--surface-bg)] border border-[var(--surface-border)]": variant === "bordered",
          },
          hover && "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-bufferline/10",
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
