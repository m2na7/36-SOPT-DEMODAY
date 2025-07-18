import ProductCard from '@/components/card/ProductCard';
import { APPJAM_PRODUCTS } from '@/mocks/products';
import { useRouter } from 'next/navigation';

export default function AppJamSection() {
  const router = useRouter();
  return (
    <section className="bg-black px-[2rem] py-[2.4rem]">
      <div className="grid grid-cols-2 gap-x-[1.2rem] gap-y-[2.4rem]">
        {APPJAM_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => router.push(`/detail/${product.name}`)}
          />
        ))}
      </div>
    </section>
  );
}
