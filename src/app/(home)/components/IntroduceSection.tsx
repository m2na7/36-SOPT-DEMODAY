'use client';

import { useRef } from 'react';

import Image from 'next/image';

import { motion, useInView } from 'motion/react';

import ImgAppjam from '@/assets/img_appjam.png';
import ImgCircular from '@/assets/img_circle.svg';
import ImgSponsor from '@/assets/img_sponsor.svg';

export default function IntroduceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      className="mt-[4rem] px-[2rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2
        className="title1_sb_18 mb-[2rem]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        행사 개요
      </motion.h2>

      <motion.div
        className="flex flex-col gap-[1.2rem]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <div className="flex">
          <p className="body2_r_14 text-white-70 w-[5.3rem]">행사명</p>
          <p className="title3_m_14">AT SOPT APPJAM 데모데이, Momentum:</p>
        </div>

        <div className="flex">
          <p className="body2_r_14 text-white-70 w-[5.3rem]">장소</p>
          <p className="title3_m_14">국회의사당 국회의원회관 대회의실</p>
        </div>

        <div className="flex">
          <p className="body2_r_14 text-white-70 w-[5.3rem]">일시</p>
          <p className="title3_m_14">2025년 7월 19일 토요일 10:00 ~ 18:00</p>
        </div>
      </motion.div>

      <motion.div
        className="mt-[6rem]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      >
        <h3 className="title1_sb_18 mb-[1.2rem]">AT SOPT APPJAM 데모데이</h3>
        <p className="body3_r_12 text-white-70">
          이번 앱잼 데모데이 Momentum: 에서는 SOPT의 꽃 ‘앱잼(APPJAM)’ 뿐만
          아니라 SOPT를 수료한 명예 회원들만의 프로젝트 ‘솝텀(SOPT-Term)’,
          그리고 SOPT를 위한 프로덕트를 만드는 ‘메이커스(SOPT Makers)’의
          결과물까지 함께 만나보실 수 있습니다.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
      >
        <Image
          src={ImgAppjam}
          alt="앱잼 포스터"
          className="mt-[2rem] w-full rounded-[1.2rem]"
        />
      </motion.div>

      <motion.div
        className="mt-[2rem]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
      >
        <h3 className="title1_sb_18 mb-[1.2rem]">Shout Our Passion Together</h3>
        <p className="body3_r_12 text-white-70">
          SOPT(솝트)는 국내 최대 규모의 <br />
          대학생연합 IT벤처창업 동아리입니다.
        </p>
        <br />
        <p className="body3_r_12 text-white-70">
          2008년에 창립되어 18년째 대학생 창업 생태계 발전을 위해 노력하고
          있습니다. IT 창업 및 기획, 디자인, 개발에 관심 있는 대학생들이 모여
          함께 열정을 외치며 지금까지 3,700명 이상의 회원이 400개가 넘는
          프로덕트를 만들었습니다.
        </p>
        <br />
        <p className="body3_r_12 text-white-70">
          SOPT는 Shout Our Passion Together라는 이름 뜻처럼,
          <br />
          앞으로도 많은 사람들의 열정을 외치며 더욱 크게 도전하고자 합니다.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
      >
        <Image
          src={ImgCircular}
          alt="구분선"
          className="my-[4rem] w-[clamp(54px,14.4vw,70px)]"
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-end justify-end gap-[1.2rem]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1.4, ease: 'easeOut' }}
      >
        <div className="flex gap-[1.6rem]">
          <p className="body2_r_14 text-white-70">SOPT website</p>
          <p className="title3_m_14">sopt.org</p>
        </div>

        <div className="flex gap-[1.6rem]">
          <p className="body2_r_14 text-white-70">Instagram</p>
          <p className="title3_m_14">@sopt_official</p>
        </div>

        <div className="flex gap-[1.6rem]">
          <p className="body2_r_14 text-white-70">Youtube</p>
          <p className="title3_m_14">@soptmedia</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1.6, ease: 'easeOut' }}
      >
        <h4 className="body3_r_12 text-white-50 mt-[4rem]">후원사 및 협력사</h4>

        <Image
          src={ImgSponsor}
          alt="후원사 및 협력사"
          className="mt-[2rem] mb-[4rem] w-[clamp(265px,70.7vw,303px)]"
        />
      </motion.div>
    </motion.section>
  );
}
