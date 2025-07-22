'use client';

import { useRouter } from 'next/navigation';

import ProductCard from '@/components/card/ProductCard';
import FadeIn from '@/components/common/FadeIn';
import { useShuffledProducts } from '@/hooks/useShuffledProducts';

interface Product {
  id: string | number;
  name: string;
  category: string;
  description: string;
  thumbnailUrl?: string;
  logoUrl?: string;
}

interface Props {
  products: readonly Product[];
  shuffleProducts?: boolean;
}

export default function ProductSection({
  products,
  shuffleProducts = false,
}: Props) {
  const router = useRouter();
  const shuffledProducts = useShuffledProducts(products);
  const displayProducts = shuffleProducts ? shuffledProducts : products;

  const handleProductClick = (product: Product) => {
    if (product.name === 'SOPT makers') {
      window.location.href = 'https://makers.sopt.org';
    } else {
      router.push(`/detail/${product.name}`);
    }
  };

  return (
    <FadeIn
      className="bg-black px-[2rem] py-[2.4rem]"
      variant="fadeIn"
      duration={0.6}
    >
      <FadeIn
        className="grid grid-cols-2 gap-x-[1.2rem] gap-y-[2.4rem] sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:gap-y-[3rem]"
        variant="fadeInUp"
        distance={50}
        duration={0.6}
        delay={0.2}
      >
        {displayProducts.map((product) => (
          <FadeIn
            key={product.id}
            variant="fadeInUp"
            duration={0.5}
            delay={0.4}
          >
            <ProductCard
              {...product}
              onClick={() => handleProductClick(product)}
            />
          </FadeIn>
        ))}
      </FadeIn>
    </FadeIn>
  );
}
