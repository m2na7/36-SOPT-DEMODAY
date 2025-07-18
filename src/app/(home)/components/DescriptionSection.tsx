'use client';

import { useRef } from 'react';

import { motion, useInView } from 'motion/react';

export default function DescriptionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="px-[2rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="title1_sb_18 mb-[2rem]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        Momentum: <br />
        축적된 움직임이 그려낸 단 하나의 궤도
      </motion.h1>

      <motion.div
        className="body2_r_14"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <p>
          국내 최대 규모 대학생연합 IT벤처창업 동아리 SOPT에서 데모데이
          &lt;Momentum: 축적된 움직임이 그려낸 단 하나의 궤도&gt;를 개최합니다.
        </p>
        <br />
        <p>
          SOPT는 2008년 창립 이후 IT 창업, 기획, 디자인, 개발에 관심 있는
          대학생들이 모여 함께 열정을 외치며, 지금까지 약 3400명 이상의 회원이
          누적 300개 이상의 프로덕트를 만들어왔습니다.
        </p>
        <br />
        <p>
          이번 36기 앱잼 데모데이 &apos;Momentum:&apos;에서는 물체가 한 방향으로
          지속적으로 변동하는 모습에서 비롯하여 오늘날의 데모데이가 여러분에게
          한 번 더 추진력을 얻어 앞으로 나아갈 수 있는 계기가 되어볼 수 있기를
          바래봅니다.
        </p>
        <br />
        <p>
          지금 이 순간의 Momentum:을 위해 끊임없이 노력하고 움직여온 시간들이
          모여 단 하나의 프로덕트로 빛날 수 있도록, 우리는 오늘도 한 걸음 앞으로
          나아갑니다.
        </p>
      </motion.div>
    </motion.section>
  );
}
