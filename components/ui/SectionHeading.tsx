import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  size?: "lg" | "md";
  className?: string;
  titleClassName?: string;
};

const titleSizes = {
  lg: "text-[32px] sm:text-[44px]",
  md: "text-[28px] sm:text-[36px]",
};

/** Centered section title + supporting paragraph. */
export function SectionHeading({
  title,
  description,
  size = "lg",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center", className)}>
      <h2
        className={cn(
          "font-display leading-[1.2] font-semibold tracking-heading text-heading",
          titleSizes[size],
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && <p className="text-base leading-[1.6] text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
