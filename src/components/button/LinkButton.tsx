'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { motion } from 'motion/react';

import ArrowRight from '@/assets/arrow-up-line.svg';
import FadeIn from '@/components/common/FadeIn';

interface Props {
  withInViewAnimation?: boolean;
  animationDelay?: number;
}

export default function LinkButton({ animationDelay = 0 }: Props) {
  const router = useRouter();

  return (
    <FadeIn
      className="mt-[3.8rem] mb-[4rem] flex justify-center"
      delay={animationDelay}
    >
      <motion.button
        className="title1_sb_18 bg-navy5 text-navy1 hover:bg-navy4 active:bg-navy3 flex h-[clamp(50px,14.4vw,62px)] w-[clamp(320px,85.33vw,366px)] cursor-pointer items-center justify-center gap-[0.4rem] rounded-[clamp(27px,7.2vw,50px)] transition-colors duration-300"
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
    </FadeIn>
  );
}
