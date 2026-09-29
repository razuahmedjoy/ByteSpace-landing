import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "light" | "dark";
  /** Hide the wordmark and show only the mark (used on auth pages). */
  markOnly?: boolean;
  className?: string;
};

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={cn("inline-flex items-center gap-2", className)}>
      <Image src="/logo-mark.svg" alt="" width={29} height={32} priority />
      {!markOnly && (
        <span
          className={cn(
            "mt-1.5 font-brand text-2xl leading-none font-bold",
            tone === "light" ? "text-surface" : "text-ink",
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
