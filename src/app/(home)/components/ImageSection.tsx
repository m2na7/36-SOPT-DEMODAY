'use client';

import Image from 'next/image';

import ImgPoster from '@/assets/img_poster.png';
import FadeIn from '@/components/common/FadeIn';

export default function ImageSection() {
  return (
    <FadeIn duration={0.8} delay={0.3}>
      <Image
        src={ImgPoster}
        alt="포스터"
        className="mb-[2.8rem] w-full px-[2rem] pt-[2rem]"
      />
    </FadeIn>
  );
}
