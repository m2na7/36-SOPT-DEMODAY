import type { Metadata } from 'next';

import {
  APPJAM_PRODUCTS,
  SOPTERM_PRODUCTS,
  MAKERS_PRODUCT,
} from '@/mocks/products';

interface Props {
  params: { name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedName = decodeURIComponent(params.name);
  const allProducts = [...APPJAM_PRODUCTS, ...SOPTERM_PRODUCTS, MAKERS_PRODUCT];
  const product = allProducts.find((p) => p.name === decodedName);

  if (!product) {
    return {
      title: 'SOPT 데모데이 - 페이지를 찾을 수 없습니다',
      description: '요청하신 페이지를 찾을 수 없습니다.',
    };
  }

  return {
    title: `SOPT 데모데이 - ${product.name}`,
    description: `${product.name}: ${product.description}`,
    openGraph: {
      title: `SOPT 데모데이 - ${product.name}`,
      description: `${product.name}: ${product.description}`,
      images: [
        product.mainImageUrl || product.logoUrl || '/assets/og-image.png',
      ],
      url: `https://demoday-at.sopt.org/detail/${encodeURIComponent(product.name)}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `SOPT 데모데이 - ${product.name}`,
      description: `${product.name}: ${product.description}`,
      images: [
        product.mainImageUrl || product.logoUrl || '/assets/og-image.png',
      ],
    },
  };
}

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
