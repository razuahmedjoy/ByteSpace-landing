import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarGroupProps = {
  avatars: string[];
  /** Label rendered in the trailing bubble, e.g. "26+". */
  extra: string;
  size?: "sm" | "md";
  /** Colour of the trailing bubble. */
  bubble?: "lime" | "dark";
  className?: string;
};

const sizes = {
  sm: { px: 32, avatar: "size-8 -mr-2", bubble: "size-8 text-xs font-medium" },
  md: { px: 43, avatar: "size-[43px] -mr-4", bubble: "size-[43px] text-xs font-bold" },
};

const bubbles = {
  lime: "bg-lime text-ink",
  dark: "bg-ink text-surface",
};

export function AvatarGroup({ avatars, extra, size = "sm", bubble = "lime", className }: AvatarGroupProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={s.px}
          height={s.px}
          className={cn("shrink-0 rounded-full object-cover", s.avatar)}
        />
      ))}
      <span className={cn("relative grid shrink-0 place-items-center rounded-full leading-5", s.bubble, bubbles[bubble])}>
        {extra}
      </span>
    </div>
  );
}
