import Image from "next/image";
import { cn } from "@/lib/cn";

export type OrnamentSpec = {
  src: string;
  /** Rendered width in px; also the height unless `height` is given. */
  size: number;
  height?: number;
  /** Offset in px from the horizontal centre of the parent. */
  x: number;
  /** Offset in px from the top of the parent. */
  y: number;
  className?: string;
};

/**
 * Decorative 3D shape or glow. Positioned relative to the parent's centre so it keeps
 * hugging the same spot as the design regardless of viewport width.
 */
export function Ornament({ src, size, height = size, x, y, className }: OrnamentSpec) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={height}
      aria-hidden="true"
      className={cn("pointer-events-none absolute max-w-none select-none", className)}
      style={{ left: `calc(50% + ${x}px)`, top: y, width: size, height }}
    />
  );
}
