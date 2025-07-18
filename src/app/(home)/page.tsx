import Image from 'next/image';

import ImgPoster from '@/assets/img_poster.png';
import DemodayButton from '@/components/button/DemodayButton';

import DescriptionSection from './components/DescriptionSection';
import IntroduceSection from './components/IntroduceSection';

export default function HomePage() {
  return (
    <main>
      <Image
        src={ImgPoster}
        alt="포스터"
        className="mb-[2.8rem] w-full px-[2rem] pt-[2rem]"
      />

      <DescriptionSection />

      <DemodayButton />

      <div className="h-[0.05rem] bg-white" />

      <IntroduceSection />
    </main>
  );
}
