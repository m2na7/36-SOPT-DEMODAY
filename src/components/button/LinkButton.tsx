'use client';

import { useRef } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { motion, useInView } from 'motion/react';

import ArrowRight from '@/assets/arrow-up-line.svg';

interface DemodayButtonProps {
  withInViewAnimation?: boolean;
  animationDelay?: number;
}

export default function DemodayButton({
  withInViewAnimation = true,
  animationDelay = 0,
}: DemodayButtonProps) {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerProps = withInViewAnimation
    ? {
        ref,
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.6, ease: 'easeOut' },
      }
    : {};

  const buttonProps = !withInViewAnimation
    ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.6,
          delay: animationDelay,
          ease: 'easeOut',
        },
      }
    : {};
  return (
    <motion.div
      className="mt-[3.8rem] mb-[4rem] flex justify-center"
      {...containerProps}
      transition={{ duration: 0.6, ease: ['easeOut'] }}
    >
      <motion.button
        className="title1_sb_18 bg-navy5 text-navy1 hover:bg-navy4 active:bg-navy3 flex h-[clamp(50px,14.4vw,62px)] w-[clamp(320px,85.33vw,366px)] cursor-pointer items-center justify-center gap-[0.4rem] rounded-[clamp(27px,7.2vw,50px)] transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: animationDelay, ease: 'easeOut' }}
        onClick={() => {
          router.push('/service');
        }}
      >
        다른 데모데이 서비스 보러 가기
        <Image
          src={ArrowRight}
          alt="arrow-right"
          className="h-[2.4rem] w-[2.4rem]"
        />
      </motion.button>
    </motion.div>
  );
}
