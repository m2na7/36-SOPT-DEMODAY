'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, AnimatePresence } from 'motion/react';

import ArrowUp from '@/assets/arrow_up.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-[clamp(7.2rem,19.2vw,8.2rem)] right-0 left-0 z-40 mx-auto max-w-[430px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            className="h-[180px] bg-black shadow-lg"
            initial={{ y: -180, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -180, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <nav className="title1_sb_18 flex h-full flex-col">
              <Link
                href="/"
                className={`active:text-navy5 flex h-[60px] items-center border-b border-gray-800 px-[2rem] transition-colors hover:bg-gray-900 ${
                  pathname === '/' ? 'bg-gray-900' : ''
                }`}
                onClick={onClose}
              >
                About | 행사 개요
              </Link>
              <Link
                href="/service"
                className={`active:text-navy5 flex h-[60px] items-center border-b border-gray-800 px-[2rem] transition-colors hover:bg-gray-900 ${
                  pathname === '/service' ? 'text-navy5' : ''
                }`}
                onClick={onClose}
              >
                Product | 서비스 소개
              </Link>
              <Link
                href="https://sopt.org"
                target="_blank"
                rel="noopener noreferrer"
                className="active:text-navy5 flex h-[60px] items-center border-b border-white px-[2rem] transition-colors hover:bg-gray-900"
                onClick={onClose}
              >
                SOPT 공식 홈페이지 바로가기
                <Image
                  src={ArrowUp}
                  alt="arrow-up"
                  className="ml-[0.8rem] h-[1.6rem] w-[1.6rem]"
                />
              </Link>
            </nav>
          </motion.div>

          <div className="fixed inset-0 -z-10" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
