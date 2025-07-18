import ProductCard from '@/components/card/ProductCard';
import { MAKERS_PRODUCT } from '@/mocks/products';
import { useRouter } from 'next/navigation';

export default function MakersSection() {
  const router = useRouter();

  return (
    <section className="bg-black px-[2rem] py-[2.4rem]">
      <div className="grid grid-cols-2 gap-x-[1.2rem] gap-y-[2.4rem]">
        <ProductCard
          key={MAKERS_PRODUCT.id}
          {...MAKERS_PRODUCT}
          onClick={() => router.push(`/detail/${MAKERS_PRODUCT.name}`)}
        />
      </div>
    </section>
  );
}
