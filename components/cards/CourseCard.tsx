import Image from "next/image";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { SignalIcon, StarRoundedIcon } from "@/components/ui/icons";
import type { Course } from "@/lib/data";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  /** Colour of the rating star; the grid uses grey, showcase cards use lime. */
  accent?: "muted" | "lime";
  bubble?: "lime" | "dark";
  /** Disable hover motion, e.g. when the card is part of a decorative composition. */
  interactive?: boolean;
  className?: string;
};

const metaPill = "rounded-3xl px-3 py-1.5 text-xs leading-5 font-medium";

export function CourseCard({
  course,
  accent = "muted",
  bubble = "lime",
  interactive = true,
  className,
}: CourseCardProps) {
  return (
    <article
      className={cn(
        "group flex w-full max-w-[373px] flex-col gap-5 rounded-3xl border border-line bg-white p-[15px] pb-6",
        interactive && "transition hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <div className="relative h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className={cn("object-cover", interactive && "transition duration-500 group-hover:scale-105")}
        />
        <ul className="absolute bottom-3 left-3 flex flex-wrap gap-3">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((label) => (
            <li key={label} className={cn(metaPill, "bg-[rgb(246_246_246/0.6)] text-gray-700 backdrop-blur-[4px]")}>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 px-0.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-xl leading-[1.2] font-semibold tracking-heading text-black">
              {course.title}
            </h3>
            <p className="text-xs leading-[1.6] text-gray-700">
              by <span className="text-primary">{course.author}</span>
            </p>
          </div>
          <p className="flex shrink-0 items-center text-lg leading-[1.6] text-gray-700">
            {course.rating}
            <StarRoundedIcon className={accent === "lime" ? "text-lime" : "text-line"} />
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className={cn(metaPill, "flex items-center gap-1 bg-surface text-body")}>
            <SignalIcon />
            {course.level}
          </span>
          <AvatarGroup avatars={course.learners} extra={course.learnersExtra} bubble={bubble} />
        </div>

        <p className="flex items-end">
          <span className="font-display text-xl leading-[1.2] font-semibold tracking-heading text-primary">
            ${course.price}
          </span>
          <span className="text-xs leading-[1.6] text-gray-700">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
