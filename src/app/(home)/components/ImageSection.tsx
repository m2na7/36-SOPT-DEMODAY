'use client';

import Image from 'next/image';

import { motion } from 'motion/react';

import ImgPoster from '@/assets/img_poster.png';

export default function ImageSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Image
        src={ImgPoster}
        alt="포스터"
        className="mb-[2.8rem] w-full px-[2rem] pt-[2rem]"
      />
    </motion.div>
  );
}
