import Script from 'next/script';

import type { Metadata } from 'next';

import '@/styles/global.css';
import ScrollToTop from '@/components/common/ScrollToTop';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'SOPT 데모데이',
  description: '36기 AT SOPT 데모데이',
  keywords: ['SOPT', '데모데이', '36기', '서비스', '개발', '디자인'],
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'SOPT 데모데이',
    description: '36기 AT SOPT 데모데이',
    images: ['/assets/og-image.png'],
    url: 'https://demoday-at.sopt.org',
    siteName: 'SOPT 데모데이',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOPT 데모데이',
    description: '36기 AT SOPT 데모데이',
    images: ['/assets/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RQS707NM5T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQS707NM5T');
          `}
        </Script>
      </head>
      <body className="bg-black antialiased">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
