import { useRouter } from 'next/navigation';

import { motion } from 'motion/react';

import ProductCard from '@/components/card/ProductCard';
import { MAKERS_PRODUCT } from '@/mocks/products';

export default function MakersSection() {
  const router = useRouter();

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
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: 'easeOut',
          }}
        >
          <ProductCard
            key={MAKERS_PRODUCT.id}
            {...MAKERS_PRODUCT}
            onClick={() => router.push(`/detail/${MAKERS_PRODUCT.name}`)}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
