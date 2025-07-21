import ProductCard from '@/components/card/ProductCard';
import FadeIn from '@/components/common/FadeIn';
import { MAKERS_PRODUCT } from '@/mocks/products';

export default function MakersSection() {
  return (
    <FadeIn
      className="bg-black px-[2rem] py-[2.4rem]"
      variant="fadeIn"
      duration={0.6}
    >
      <FadeIn
        className="grid grid-cols-2 gap-x-[1.2rem] gap-y-[2.4rem]"
        variant="fadeInUp"
        distance={50}
        duration={0.6}
        delay={0.2}
      >
        <FadeIn variant="fadeInUp" duration={0.5} delay={0.4}>
          <ProductCard
            key={MAKERS_PRODUCT.id}
            {...MAKERS_PRODUCT}
            onClick={() => {
              window.location.href = 'https://makers.sopt.org';
            }}
          />
        </FadeIn>
      </FadeIn>
    </FadeIn>
  );
}
