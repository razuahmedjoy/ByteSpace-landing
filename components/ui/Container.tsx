import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Centers content on the 1200px content grid used throughout the design. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5", className)} {...props} />;
}
