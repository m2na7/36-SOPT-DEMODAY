import Image from 'next/image';
import MainLogo from '@/assets/main_logo.svg';
import MenuOutline from '@/assets/menu_outline.svg';

export default function Header() {
  return (
    <header className="flex h-[clamp(7.2rem,19.2vw,8.2rem)] items-center justify-between bg-black px-[2rem]">
      <div className="flex items-center justify-between">
        <Image
          src={MainLogo}
          alt="메인 로고"
          className="h-auto w-[clamp(151px,40.27vw,173px)] cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-[clamp(1.2rem,3.2vw,1.6rem)]">
        <Image
          src={MenuOutline}
          alt="메뉴 아이콘"
          className="h-auto w-[clamp(2rem,5.33vw,2.67rem)] cursor-pointer"
        />
      </div>
    </header>
  );
}
