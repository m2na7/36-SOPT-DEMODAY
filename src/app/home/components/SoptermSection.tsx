import { useRef } from 'react';

import { useRouter } from 'next/navigation';

import { motion, useInView } from 'motion/react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="bg-black px-[2rem] py-[2.4rem]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="grid grid-cols-2 gap-x-[1.2rem] gap-y-[2.4rem]"
        initial={{ y: 50 }}
        animate={{ y: isInView && allImagesLoaded ? 0 : 50 }}
        transition={{
          duration: 0.6,
          delay: isInView && allImagesLoaded ? 0.2 : 0,
          ease: 'easeOut',
        }}
      >
        {shuffledProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView && allImagesLoaded ? 1 : 0,
              y: isInView && allImagesLoaded ? 0 : 30,
            }}
            transition={{
              duration: 0.5,
              delay: isInView && allImagesLoaded ? 0.4 + index * 0.1 : 0,
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
