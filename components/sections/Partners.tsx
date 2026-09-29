import Image from "next/image";
import { partnerLogos } from "@/lib/data";

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-surface py-14 lg:h-[202px] lg:py-0 lg:pt-20">
      <ul className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-center gap-x-10 gap-y-8 px-5 lg:gap-[72px]">
        {partnerLogos.map(({ src, width, height }, i) => (
          <li key={src}>
            <Image
              src={src}
              alt={`Partner logo ${i + 1}`}
              width={width}
              height={height}
              className="h-8 w-auto opacity-90 transition hover:opacity-100 sm:h-[41px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
