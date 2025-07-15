import type { Metadata } from 'next';
import './globals.css';

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
