import { useRouter } from 'next/navigation';

import ProductCard from '@/components/card/ProductCard';
import FadeIn from '@/components/common/FadeIn';
import { useShuffledProducts } from '@/hooks/useShuffledProducts';
import { SOPTERM_PRODUCTS } from '@/mocks/products';

export default function SoptermSection() {
  const router = useRouter();
  const shuffledProducts = useShuffledProducts(SOPTERM_PRODUCTS);

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
        {shuffledProducts.map((product, index) => (
          <FadeIn
            key={product.id}
            variant="fadeInUp"
            duration={0.5}
            delay={0.4}
          >
            <ProductCard
              {...product}
              onClick={() => router.push(`/detail/${product.name}`)}
            />
          </FadeIn>
        ))}
      </FadeIn>
    </FadeIn>
  );
}
