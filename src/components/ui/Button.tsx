"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-bg disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-accent-bufferline text-white hover:bg-accent-bufferline-hover focus:ring-accent-bufferline":
              variant === "primary",
            "bg-surface-elevated text-white hover:bg-neutral-700 focus:ring-neutral-500":
              variant === "secondary",
            "border-2 border-surface-border text-neutral-300 hover:bg-surface-elevated focus:ring-neutral-500":
              variant === "outline",
            "text-neutral-300 hover:text-white hover:bg-surface-elevated focus:ring-neutral-500":
              variant === "ghost",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-4 py-2 text-base": size === "md",
            "px-6 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
