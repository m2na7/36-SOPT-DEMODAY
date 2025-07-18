'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface Props {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export default function ProductCard({
  name,
  category,
  description,
  imageUrl,
  onClick,
}: Props) {
  return (
    <motion.div
      className="flex cursor-pointer flex-col rounded-2xl"
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div className="relative mb-[1.2rem] size-[clamp(16.2rem,43.2vw,18.6rem)] overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </motion.div>

      <motion.div
        className="mb-[1rem] flex items-end gap-[1rem]"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="title2_sb_16 text-ellipsis whitespace-nowrap text-white">
          {name}
        </h3>
        <p className="caption1_m_11 text-white-70 text-ellipsis whitespace-nowrap">
          {category}
        </p>
      </motion.div>
      <motion.p className="body3_r_12 text-white">{description}</motion.p>
    </motion.div>
  );
}
