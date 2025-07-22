import type { Metadata } from 'next';

import LinkButton from '@/components/button/LinkButton';

import DescriptionSection from './components/DescriptionSection';
import ImageSection from './components/ImageSection';
import IntroduceSection from './components/IntroduceSection';

export const metadata: Metadata = {
  title: 'AT SOPT 데모데이',
  description:
    '36기 AT SOPT 데모데이 공식 웹 페이지입니다. 다양한 서비스들을 만나보세요.',
  openGraph: {
    title: 'AT SOPT 데모데이',
    description:
      '36기 AT SOPT 데모데이 공식 웹 페이지입니다. 다양한 서비스들을 만나보세요.',
    images: ['/assets/og-image.png'],
    url: 'https://demoday-at.sopt.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AT SOPT 데모데이',
    description:
      '36기 AT SOPT 데모데이 공식 웹 페이지입니다. 다양한 서비스들을 만나보세요.',
    images: ['/assets/og-image.png'],
  },
};

export default function HomePage() {
  return (
    <main>
      <ImageSection />

      <DescriptionSection />

      <LinkButton withInViewAnimation={false} animationDelay={0.6} />

      <IntroduceSection />
    </main>
  );
}
