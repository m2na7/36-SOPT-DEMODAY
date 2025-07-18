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
import { motion } from 'motion/react';

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
    <motion.main
      className="bg-black px-[2rem] py-[2.4rem] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-[clamp(33.5rem, 89vw, 43rem)] relative mb-[2rem] aspect-[335/210] max-w-[100%] overflow-hidden rounded-[5px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={product.logoUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ProfileCard
          name={product.name}
          category={product.category}
          // service={product.service}
          logoUrl={product.logoUrl}
        />
      </motion.div>

      <motion.div
        className="my-[1.6rem]"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
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
      </motion.div>

      <motion.div
        className="flex items-center gap-[0.6rem]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="body2_r_14 text-gray-200">{product.introduction}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <MemberSection members={product.members} />
      </motion.div>

      {/* TODO: 이미지 추가 */}
      <motion.div
        className="mt-[2.4rem] flex flex-col gap-[1.2rem]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="w-[clamp(33.5rem, 89vw, 43rem)] relative mb-[2rem] aspect-[335/210] max-w-[100%] overflow-hidden">
          <Image src={product.logoUrl} alt={product.name} fill />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <Link href="/" className="mt-[3.8rem] mb-[4rem] flex justify-center">
          <motion.button
            className="title1_sb_18 bg-navy5 text-navy1 flex h-[clamp(50px,14.4vw,62px)] w-[clamp(320px,85.33vw,366px)] cursor-pointer items-center justify-center gap-[0.4rem] rounded-[clamp(27px,7.2vw,50px)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
    </motion.main>
  );
}
