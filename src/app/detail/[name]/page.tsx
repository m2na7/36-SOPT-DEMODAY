import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import {
  APPJAM_PRODUCTS,
  SOPTERM_PRODUCTS,
  MAKERS_PRODUCT,
} from '@/mocks/products';

import DetailContents from './components/DetailContents';

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  const allProducts = [...APPJAM_PRODUCTS, ...SOPTERM_PRODUCTS, MAKERS_PRODUCT];
  const product = allProducts.find((p) => p.name === decodedName);

  if (!product) {
    return {
      title: '존재하지 않는 페이지',
      description: 'SOPT 데모데이',
    };
  }

  return {
    title: `SOPT 데모데이 - ${product.name}`,
    description: product.description,
    keywords: [product.name, 'SOPT', 'AT SOPT', '데모데이', '36기', '앱잼'],
    openGraph: {
      title: `SOPT 데모데이 - ${product.name}`,
      description: product.description,
      images: [product.mainImageUrl],
      url: `https://demoday-at.sopt.org/detail/${encodeURIComponent(product.name)}`,
      siteName: 'SOPT 데모데이',
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `SOPT 데모데이 - ${product.name}`,
      description: product.description,
      images: [product.mainImageUrl],
    },
  };
}

export default async function DetailPage({ params }: Props) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  const allProducts = [...APPJAM_PRODUCTS, ...SOPTERM_PRODUCTS, MAKERS_PRODUCT];
  const product = allProducts.find((p) => p.name === decodedName);

  if (!product) {
    notFound();
  }

  return <DetailContents product={product} />;
}
