import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Ornament, type OrnamentSpec } from "@/components/ui/Ornament";

const ornaments: (OrnamentSpec & { desktopOnly?: boolean })[] = [
  { src: "/images/ornaments/spring-lime-c.webp", size: 385, x: -838, y: -162 },
  { src: "/images/ornaments/spring-white-c-flipped.webp", size: 175, x: -542, y: 5, desktopOnly: true },
  { src: "/images/ornaments/cone-white.webp", size: 188, x: -768, y: 225 },
  { src: "/images/ornaments/torus-lime.webp", size: 342, x: -700, y: 299 },
  { src: "/images/ornaments/pyramid-lime.webp", size: 188, x: 360, y: 0, desktopOnly: true },
  { src: "/images/ornaments/cylinder-white.webp", size: 370, x: 506, y: 6 },
  { src: "/images/ornaments/spring-lime-b.webp", size: 330, x: 390, y: 289 },
];

export function CreatorCta() {
  return (
    <section id="creators" className="relative scroll-mt-6 overflow-hidden bg-primary py-24 lg:h-[488px] lg:py-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/decor/grid.svg"
          alt=""
          width={1442}
          height={1026}
          className="absolute -top-0.5 left-1/2 max-w-none -translate-x-1/2"
        />
        {ornaments.map(({ desktopOnly, ...o }) => (
          <Ornament key={o.src} {...o} className={desktopOnly ? "hidden lg:block" : "opacity-40 lg:opacity-100"} />
        ))}
      </div>

      <div className="relative mx-auto flex h-full max-w-[1004px] flex-col items-center justify-center gap-10 px-5 text-center text-surface">
        <h2 className="max-w-[710px] font-display text-[32px] leading-[1.2] font-semibold tracking-heading sm:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-base leading-[1.6] sm:text-lg">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href="/signup">Join as Creator</ButtonLink>
      </div>
    </section>
  );
}
