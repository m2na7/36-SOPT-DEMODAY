'use client';

import { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion, useInView } from 'motion/react';

import ArrowRight from '@/assets/arrow-up-line.svg';

export default function DemodayButton() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="mt-[3.8rem] mb-[4rem] flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Link href="/service">
        <motion.button
          className="title1_sb_18 bg-navy5 text-navy1 hover:bg-navy4 active:bg-navy3 flex h-[clamp(50px,14.4vw,62px)] w-[clamp(320px,85.33vw,366px)] cursor-pointer items-center justify-center gap-[0.4rem] rounded-[clamp(27px,7.2vw,50px)] transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          다른 데모데이 서비스 보러 가기
          <Image
            src={ArrowRight}
            alt="arrow-right"
            className="h-[2.4rem] w-[2.4rem]"
          />
        </motion.button>
      </Link>
    </motion.div>
  );
}
