import SoptLogo from '@/assets/sopt_logo.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex h-[21.3rem] flex-col justify-center gap-[2.4rem] bg-gray-900 px-[3rem]">
      <div className="mt-[3.6rem]">
        <Image
          src={SoptLogo}
          alt="메인 로고"
          className="w-[clamp(5.7rem,15.14vw,6.5rem)]"
        />
        <p className="title3_m_14 mt-[2.4rem] mb-[1.8rem]">
          2025 36th AT SOPT DEMODAY, Momentum:
        </p>
        <p className="body3_r_12 mb-[6rem]">
          SOPT (솝트, 대학생연합 IT벤처창업 동아리) <br />
          Copyright©2025.SOPT.All rights reserved.
        </p>
      </div>
    </footer>
  );
}
