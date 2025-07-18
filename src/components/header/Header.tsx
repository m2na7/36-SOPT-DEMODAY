'use client';

import Image from 'next/image';
import MainLogo from '@/assets/main_logo.svg';
import MenuOutline from '@/assets/menu_outline.svg';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header
      className="flex h-[clamp(7.2rem,19.2vw,8.2rem)] items-center justify-between bg-black px-[2rem]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Image
            src={MainLogo}
            alt="메인 로고"
            className="w-[clamp(15.1rem,40.27vw,17.3rem)] cursor-pointer"
          />
        </motion.div>
      </Link>

      <Image
        src={MenuOutline}
        alt="메뉴 아이콘"
        className="w-[clamp(2rem,5.33vw,2.67rem)] cursor-pointer"
      />
    </motion.header>
  );
}
