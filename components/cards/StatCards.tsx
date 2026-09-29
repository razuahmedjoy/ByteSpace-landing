import type { CSSProperties } from "react";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { StarIcon } from "@/components/ui/icons";
import { happyStudentAvatars } from "@/lib/data";
import { cn } from "@/lib/cn";

type FloatingProps = { className?: string; style?: CSSProperties };

const floating = "rounded-2xl p-4 backdrop-blur-[10px]";

function ProgressBar({ value, track = "bg-track" }: { value: number; track?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-[200px] overflow-hidden rounded-3xl", track)}
    >
      <div className="h-full rounded-3xl bg-lime" style={{ width: `${value}%` }} />
    </div>
  );
}

export function LearningProgressCard({ value = 55, className, style }: FloatingProps & { value?: number }) {
  return (
    <div className={cn(floating, "flex flex-col gap-2 bg-white", className)} style={style}>
      <p className="text-sm leading-[1.2] font-medium text-ink">Learning Progress</p>
      <p className="font-display text-5xl leading-[1.2] font-semibold tracking-heading text-ink">{value}%</p>
      <ProgressBar value={value} />
    </div>
  );
}

export function HappyStudentsCard({
  tone = "white",
  className,
  style,
}: FloatingProps & { tone?: "white" | "lime" }) {
  const isLime = tone === "lime";
  return (
    <div
      className={cn(floating, "flex w-[258px] flex-col gap-2", isLime ? "bg-lime" : "bg-white", className)}
      style={style}
    >
      <div>
        <p className="text-base leading-[1.2] font-medium text-ink">Happy Students</p>
        <p className="flex items-center text-xs leading-[1.6] text-muted">
          <span className="font-bold text-ink">4.5&nbsp;</span>
          <span className={cn(isLime && "text-ink-800")}>(240)</span>
          <StarIcon className={isLime ? "text-primary" : "text-lime"} />
        </p>
      </div>
      <AvatarGroup avatars={happyStudentAvatars} extra="2K+" size="md" bubble={isLime ? "dark" : "lime"} />
    </div>
  );
}

export function TopicCard({ className, style }: FloatingProps) {
  return (
    <div className={cn(floating, "bg-white", className)} style={style}>
      <p className="text-base leading-[1.2] font-medium text-ink">UI/UX Design</p>
      <p className="flex items-center gap-2 text-xs leading-[1.6] text-muted">
        <span>200 Courses</span>
        <span className="text-[10px]" aria-hidden="true">
          •
        </span>
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

type RevenueCardProps = FloatingProps & {
  title: string;
  period: string;
  amount: string;
  delta: string;
  showProgress?: boolean;
};

export function RevenueCard({ title, period, amount, delta, showProgress, className, style }: RevenueCardProps) {
  const badge = (
    <span className="rounded-3xl bg-lime-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-ink">{delta}</span>
  );
  return (
    <div className={cn(floating, "flex flex-col items-start gap-2 bg-primary text-surface", className)} style={style}>
      <div className="leading-[1.2]">
        <p className="text-base font-medium">{title}</p>
        <p className="text-[10px]">{period}</p>
      </div>
      {showProgress ? (
        <>
          <div className="flex w-[200px] items-center justify-between">
            <p className="font-display text-2xl leading-8 font-semibold tracking-heading">{amount}</p>
            {badge}
          </div>
          <ProgressBar value={56} track="bg-white" />
        </>
      ) : (
        <>
          <p className="font-display text-2xl leading-8 font-semibold tracking-heading">{amount}</p>
          {badge}
        </>
      )}
    </div>
  );
}
