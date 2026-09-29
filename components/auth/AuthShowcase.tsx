import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/StatCards";
import { courses } from "@/lib/data";
import { cn } from "@/lib/cn";

const [, digitalAsset, bigData] = courses;

const shapes = [
  { src: "/images/ornaments/spring-white-a-flipped.webp", size: 175, left: 373, top: 321 },
  { src: "/images/ornaments/torus-lime.webp", size: 146, left: 54, top: 15 },
  { src: "/images/ornaments/pyramid-lime.webp", size: 188, left: 0, top: 397 },
];

/** Decorative stack of course cards shown beside the auth forms (desktop only). */
export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("h-[585px] w-[548px] -translate-x-[25px]", className)}>
      <CourseCard
        course={digitalAsset}
        accent="lime"
        bubble="dark"
        interactive={false}
        className="absolute top-[89px] left-[25px]"
      />
      <CourseCard
        course={bigData}
        accent="lime"
        bubble="dark"
        interactive={false}
        className="absolute top-0 left-[136px]"
      />
      <HappyStudentsCard tone="lime" className="absolute top-[435px] left-[251px]" />
      {shapes.map(({ src, size, left, top }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="absolute max-w-none"
          style={{ left, top, width: size, height: size }}
        />
      ))}
    </div>
  );
}
