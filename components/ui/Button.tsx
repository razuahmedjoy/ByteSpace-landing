import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex shrink-0 items-center justify-center rounded-3xl px-6 py-3 text-lg leading-[1.2] font-medium whitespace-nowrap transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  lime: "bg-lime text-ink hover:bg-lime-500 focus-visible:outline-lime active:scale-[0.98]",
  outline: "border border-line bg-white text-ink hover:bg-surface focus-visible:outline-primary",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };
type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function Button({ variant = "lime", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({ variant = "lime", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}
