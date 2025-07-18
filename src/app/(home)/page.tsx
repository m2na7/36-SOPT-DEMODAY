import type { Metadata } from 'next';

import DescriptionSection from './components/DescriptionSection';
import GoDemodayButton from './components/GoDemodayButton';
import ImageSection from './components/ImageSection';
import IntroduceSection from './components/IntroduceSection';

export const metadata: Metadata = {
  title: 'SOPT 데모데이 - 행사 개요',
  description:
    '36기 AT SOPT 데모데이 행사 개요 페이지입니다. 다양한 서비스들을 만나보세요.',
  openGraph: {
    title: 'SOPT 데모데이 - 행사 개요',
    description:
      '36기 AT SOPT 데모데이 행사 개요 페이지입니다. 다양한 서비스들을 만나보세요.',
    images: ['/assets/og-image.png'],
    url: 'https://demoday-at.sopt.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOPT 데모데이 - 행사 개요',
    description:
      '36기 AT SOPT 데모데이 행사 개요 페이지입니다. 다양한 서비스들을 만나보세요.',
    images: ['/assets/og-image.png'],
  },
};

export default function HomePage() {
  return (
    <main>
      <ImageSection />

      <DescriptionSection />

      <GoDemodayButton />

      <div className="h-[0.05rem] bg-white" />

      <IntroduceSection />
    </main>
  );
}
