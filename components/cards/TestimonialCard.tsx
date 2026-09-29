import Image from "next/image";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { avatar, name, role, quote } = testimonial;
  return (
    <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image src={avatar} alt={name} width={80} height={80} className="size-20 rounded-full object-cover" />
      <figcaption>
        <p className="font-display text-xl leading-7 font-semibold tracking-heading text-black">{name}</p>
        <p className="text-lg leading-[1.6] text-primary">{role}</p>
      </figcaption>
      <blockquote className="text-lg leading-[1.6] text-gray-700">&ldquo;{quote}&rdquo;</blockquote>
    </figure>
  );
}
