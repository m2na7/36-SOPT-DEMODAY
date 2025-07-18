import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOPT 데모데이 - 서비스 소개',
  description:
    '36기 AT SOPT 데모데이 서비스 소개 페이지입니다. 앱잼, 솝텀, 메이커스 팀의 다양한 서비스들을 만나보세요.',
  openGraph: {
    title: 'SOPT 데모데이 - 서비스 소개',
    description:
      '36기 AT SOPT 데모데이 서비스 소개 페이지입니다. 앱잼, 솝텀, 메이커스 팀의 다양한 서비스들을 만나보세요.',
    images: ['/assets/og-image.png'],
    url: 'https://demoday-at.sopt.org/service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOPT 데모데이 - 서비스 소개',
    description:
      '36기 AT SOPT 데모데이 서비스 소개 페이지입니다. 앱잼, 솝텀, 메이커스 팀의 다양한 서비스들을 만나보세요.',
    images: ['/assets/og-image.png'],
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
