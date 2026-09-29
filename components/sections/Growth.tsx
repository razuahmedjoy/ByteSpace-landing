import Image from "next/image";
import type { ReactNode } from "react";
import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard, LearningProgressCard, RevenueCard } from "@/components/cards/StatCards";
import { Container } from "@/components/ui/Container";
import { CheckCircleIcon } from "@/components/ui/icons";
import { Ornament } from "@/components/ui/Ornament";
import { courses, creatorPerks, platformStats } from "@/lib/data";
import { cn } from "@/lib/cn";

const heading = "font-display text-[32px] leading-[1.2] font-semibold tracking-heading text-ink sm:text-[44px]";

export function Growth() {
  return (
    <section className="relative overflow-hidden bg-canvas py-20 lg:pt-[120px] lg:pb-[120px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Ornament src="/decor/growth-glow.svg" size={2536} height={2471} x={-1268} y={-506} />
        <Ornament src="/decor/growth-glow-lime.svg" size={752} x={-1047} y={906} />
      </div>

      <Container className="relative flex flex-col gap-20 lg:gap-[72px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-[63px]">
          <div className="flex max-w-[577px] flex-col gap-10">
            <h2 className={heading}>Your Path to Professional Growth Starts Here!</h2>
            <p className="max-w-[477px] text-lg leading-[1.6] text-body">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
              career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>
            <dl className="flex gap-10 sm:gap-14">
              {platformStats.map(({ value, label }) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="text-lg leading-[1.6] text-body">{label}</dt>
                  <dd className="font-display text-4xl leading-11 font-medium tracking-heading text-primary">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Stage width={621} height={552}>
            <CourseCard
              course={courses[0]}
              accent="lime"
              bubble="dark"
              interactive={false}
              className="absolute top-0 left-0"
            />
            <Image
              src="/images/people/student-boy.webp"
              alt="Student learning on a laptop"
              width={577}
              height={540}
              className="absolute top-3 left-0 h-[540px] w-[577px] object-cover drop-shadow-float"
            />
            <LearningProgressCard className="absolute top-[213px] left-[345px]" />
            <Image
              src="/images/ornaments/spring-lime-d.webp"
              alt=""
              width={215}
              height={215}
              aria-hidden="true"
              className="absolute top-[67px] left-[406px]"
            />
          </Stage>
        </div>

        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-[79px]">
          <Stage width={541} height={596}>
            <RevenueCard
              title="Total Revenue"
              period="July 1-28"
              amount="$120.29"
              delta="+12$"
              showProgress
              className="absolute top-11 left-0"
            />
            <RevenueCard
              title="Year to Date"
              period="2023"
              amount="$1,200.38"
              delta="+12$"
              className="absolute top-[194px] left-0 w-[134px]"
            />
            <div className="absolute top-0 left-7 h-[596px] w-[435px] overflow-hidden drop-shadow-float">
              <Image
                src="/images/people/student-girl.webp"
                alt="Smiling creator with headphones holding a tablet"
                width={683}
                height={683}
                className="absolute top-0 -left-[124px] size-[683px] max-w-none"
              />
            </div>
            <HappyStudentsCard className="absolute top-[413px] left-[283px]" />
            <Image
              src="/images/ornaments/spring-lime-e.webp"
              alt=""
              width={215}
              height={215}
              aria-hidden="true"
              className="absolute top-[114px] left-[305px]"
            />
          </Stage>

          <div className="flex max-w-[580px] flex-col gap-10">
            <h2 className={cn(heading, "max-w-[391px]")}>Create &amp; Manage Courses Easily.</h2>
            <p className="text-lg leading-[1.6] text-body">
              <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-end gap-2 text-lg leading-[1.2] font-medium text-ink">
                  <CheckCircleIcon className="shrink-0 text-primary" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Fixed-size artboard for layered visuals; zoomed down to fit narrow screens. */
function Stage({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  return (
    <div
      className="relative shrink-0 max-sm:[zoom:0.55] sm:max-lg:[zoom:0.9]"
      style={{ width, height }}
    >
      {children}
    </div>
  );
}
