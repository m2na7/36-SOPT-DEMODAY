'use client';

import Image from 'next/image';

import LinkButton from '@/components/button/LinkButton';
import ProfileCard from '@/components/card/ProfileCard';
import FadeIn from '@/components/common/FadeIn';
import { Product } from '@/types/product';

import MemberSection from './MemberSection';

interface Props {
  product: Product;
}

export default function DetailContents({ product }: Props) {
  return (
    <FadeIn
      className="bg-black px-[2rem] py-[2.4rem] text-white"
      distance={0}
      duration={0.5}
    >
      <FadeIn
        className="w-[clamp(33.5rem, 89vw, 43rem)] relative mb-[2rem] aspect-[335/210] max-w-[100%] overflow-hidden rounded-[5px]"
        variant="scaleIn"
        duration={0.6}
        delay={0.2}
      >
        <Image src={product.mainImageUrl} alt={product.name} fill />
      </FadeIn>

      <FadeIn distance={20} delay={0.4}>
        <ProfileCard
          name={product.name}
          category={product.category}
          service={product.service as '앱 서비스' | '웹 서비스'}
          logoUrl={product.logoUrl}
        />
      </FadeIn>

      <FadeIn className="my-[1.6rem]" variant="scaleInX" delay={0.6}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="2"
          viewBox="0 0 335 2"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 1H335" stroke="#3C3E41" strokeDasharray="3 3" />
        </svg>
      </FadeIn>

      <FadeIn
        className="flex items-center gap-[0.6rem]"
        variant="fadeInRight"
        distance={20}
        delay={0.7}
      >
        <p className="body2_r_14 whitespace-pre-line text-gray-200">
          {product.introduction}
        </p>
      </FadeIn>

      <FadeIn delay={0.8}>
        <MemberSection members={product.members} />
      </FadeIn>

      <FadeIn className="mt-[2.4rem] flex flex-col" delay={0.9}>
        {product.descriptionImageUrl.map((url, idx) => (
          <div key={idx}>
            <Image
              src={url}
              alt={`${product.name} 설명 이미지 ${idx + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        ))}
      </FadeIn>

      <FadeIn delay={1.0}>
        <div className="mt-[3.8rem] mb-[4rem] flex justify-center">
          <LinkButton withInViewAnimation={false} animationDelay={0.6} />
        </div>
      </FadeIn>
    </FadeIn>
  );
}
