import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          {
            "py-12 md:py-16": size === "sm",
            "py-16 md:py-24": size === "md",
            "py-24 md:py-32": size === "lg",
          },
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
