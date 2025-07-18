'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  APPJAM_PRODUCTS,
  SOPTERM_PRODUCTS,
  MAKERS_PRODUCT,
} from '@/mocks/products';
import ProfileCard from '@/components/card/ProfileCard';
import MemberSection from './components/MemberSection';
import Link from 'next/link';
import ArrowRight from '@/assets/arrow-up-line.svg';

export default function DetailPage() {
  const { name } = useParams();

  const decodedName = decodeURIComponent(name as string);

  const allProducts = [...APPJAM_PRODUCTS, ...SOPTERM_PRODUCTS, MAKERS_PRODUCT];
  const product = allProducts.find((p) => p.name === decodedName);

  if (!product) {
    return (
      <main className="bg-black px-[2rem] py-[2.4rem] text-white">
        <p>존재하지 않는 페이지입니다.</p>
      </main>
    );
  }

  return (
    <main className="bg-black px-[2rem] py-[2.4rem] text-white">
      <div className="w-[clamp(33.5rem, 89vw, 43rem)] relative mb-[2rem] aspect-[335/210] max-w-[100%] overflow-hidden rounded-[5px]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <ProfileCard
        name={product.name}
        category={product.category}
        // service={product.service}
        imageUrl={product.imageUrl}
      />

      <div className="my-[1.6rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="335"
          height="2"
          viewBox="0 0 335 2"
          fill="none"
        >
          <path d="M0 1H335" stroke="#3C3E41" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="flex items-center gap-[0.6rem]">
        <h4 className="body3_r_12 text-white-50">{product.introduction}</h4>
      </div>

      <MemberSection members={product.members} />

      {/* TODO: 이미지 추가 */}
      <div className="mt-[2.4rem] flex flex-col gap-[1.2rem]">
        <div className="w-[clamp(33.5rem, 89vw, 43rem)] relative mb-[2rem] aspect-[335/210] max-w-[100%] overflow-hidden">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
      </div>

      <Link href="/" className="mt-[3.8rem] mb-[4rem] flex justify-center">
        <button className="title1_sb_18 bg-navy5 text-navy1 flex h-[clamp(50px,14.4vw,62px)] w-[clamp(320px,85.33vw,366px)] items-center justify-center gap-[0.4rem] rounded-[clamp(27px,7.2vw,50px)]">
          다른 데모데이 서비스 보러 가기
          <Image
            src={ArrowRight}
            alt="arrow-right"
            className="h-[2.4rem] w-[2.4rem]"
          />
        </button>
      </Link>
    </main>
  );
}
