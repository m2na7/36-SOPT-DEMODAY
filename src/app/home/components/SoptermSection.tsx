import { useRouter } from 'next/navigation';

import { motion } from 'motion/react';

import ProductCard from '@/components/card/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';
import { useShuffledProducts } from '@/hooks/useShuffledProducts';
import { SOPTERM_PRODUCTS } from '@/mocks/products';

export default function SoptermSection() {
  const router = useRouter();
  const shuffledProducts = useShuffledProducts(SOPTERM_PRODUCTS);
  const { allImagesLoaded } = useImageLoader({
    imageUrls: shuffledProducts.map((product) => product.logoUrl),
  });

  return (
    <motion.section
      className="bg-black px-[2rem] py-[2.4rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="grid grid-cols-2 gap-x-[1.2rem] gap-y-[2.4rem]"
        initial={{ y: 50 }}
        animate={{ y: allImagesLoaded ? 0 : 50 }}
        transition={{
          duration: 0.6,
          delay: allImagesLoaded ? 0.2 : 0,
          ease: 'easeOut',
        }}
      >
        {shuffledProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: allImagesLoaded ? 1 : 0,
              y: allImagesLoaded ? 0 : 30,
            }}
            transition={{
              duration: 0.5,
              delay: allImagesLoaded ? 0.4 + index * 0.1 : 0,
              ease: 'easeOut',
            }}
          >
            <ProductCard
              {...product}
              onClick={() => router.push(`/detail/${product.name}`)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
