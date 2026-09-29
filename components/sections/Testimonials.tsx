import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-canvas py-20 lg:pt-[74px] lg:pb-[57px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Ornament src="/decor/glow-lime.svg" size={1217} x={82} y={-281} />
        <Ornament src="/decor/glow-lime-sm.svg" size={752} x={-365} y={-178} />
        <Ornament src="/decor/glow-blue.svg" size={1217} x={-1202} y={109} />
      </div>

      <Container className="relative flex flex-col gap-12 lg:gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-[43px]">
          <h2 className="max-w-[577px] font-display text-[32px] leading-[1.2] font-semibold tracking-heading text-black sm:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-lg leading-[1.6] text-gray-700">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => (
            <li key={t.name}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
