import Image from "next/image";
import Form from "next/form";
import { HappyStudentsCard, LearningProgressCard, TopicCard } from "@/components/cards/StatCards";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SearchIcon } from "@/components/ui/icons";
import { Ornament, type OrnamentSpec } from "@/components/ui/Ornament";

// Positions are taken from the 1440px Figma frame, expressed as offsets from its centre.
const backdropOrnaments: OrnamentSpec[] = [
  { src: "/images/ornaments/spring-lime-a.webp", size: 385, x: -838, y: 221 },
  { src: "/images/ornaments/cylinder-lime.webp", size: 370, x: 511, y: 221 },
  { src: "/images/ornaments/spring-white-a-flipped.webp", size: 175, x: -537, y: 477 },
  { src: "/images/ornaments/pyramid-white.webp", size: 188, x: 386, y: 464 },
];

const sceneOrnaments: OrnamentSpec[] = [
  { src: "/images/ornaments/torus-white.webp", size: 342, x: -702, y: 170 },
  { src: "/images/ornaments/spring-white-b.webp", size: 330, x: 407, y: 160 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/decor/grid.svg"
          alt=""
          width={1442}
          height={1026}
          priority
          className="absolute -top-0.5 left-1/2 max-w-none -translate-x-1/2"
        />
        <div className="hidden lg:block">
          {backdropOrnaments.map((o) => (
            <Ornament key={o.src} {...o} />
          ))}
        </div>
      </div>

      <Navbar />

      <Container className="relative z-10 flex flex-col items-center gap-10 pt-8 text-center lg:gap-[60px] lg:pt-[49px]">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h1 className="max-w-[935px] font-display text-[40px] leading-[1.2] font-semibold tracking-heading text-white sm:text-[56px] lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[820px] text-base leading-[1.6] text-line-soft sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <Form action="/" scroll={false} className="flex w-full max-w-[562px] flex-col gap-3 sm:flex-row sm:gap-4">
          <label className="flex h-[52px] w-full items-center gap-2 rounded-3xl bg-white px-6 focus-within:ring-2 focus-within:ring-lime">
            <SearchIcon className="shrink-0 text-muted" />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-lg leading-[1.6] text-ink placeholder:text-muted focus:outline-none"
            />
          </label>
          <Button type="submit">Search</Button>
        </Form>
      </Container>

      <HeroScene />
    </section>
  );
}

/** The student photo with its floating cards; a fixed 1440×512 stage scaled down on small screens. */
function HeroScene() {
  return (
    <div className="mt-6 flex justify-center lg:mt-0">
      <div className="relative h-[512px] w-[1440px] shrink-0 max-sm:[zoom:0.45] sm:max-lg:[zoom:0.75]">
        <Image
          src="/decor/hero-ring.svg"
          alt=""
          width={1149}
          height={1149}
          aria-hidden="true"
          className="absolute top-[70px] left-[145px] max-w-none"
        />
        <Image
          src="/images/people/student-boy.webp"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541}
          priority
          className="absolute top-0 left-[431px] h-[541px] w-[578px] object-cover drop-shadow-float"
        />
        <LearningProgressCard className="absolute top-[139px] left-[842px]" />
        <HappyStudentsCard className="absolute top-[325px] left-[328px]" />
        {sceneOrnaments.map((o) => (
          <Ornament key={o.src} {...o} />
        ))}
        <TopicCard className="absolute top-[127px] left-[404px]" />
      </div>
    </div>
  );
}
