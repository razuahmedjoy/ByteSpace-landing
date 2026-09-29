import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/data";

export function LearningPaths() {
  return (
    <section id="categories" className="scroll-mt-6 pb-[120px]">
      <Container>
        <SectionHeading
          size="md"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <ul className="mt-[68px] grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <li key={category.name}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
