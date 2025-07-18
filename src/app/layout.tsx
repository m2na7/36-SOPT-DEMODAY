import type { Metadata } from 'next';

import '@/styles/global.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'SOPT 36th Demo Day',
  description: 'SOPT 36th Demo Day',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-black antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
