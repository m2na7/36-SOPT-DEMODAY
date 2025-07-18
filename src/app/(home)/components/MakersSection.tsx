import ProductCard from '@/components/card/ProductCard';
import { MAKERS_PRODUCT } from '@/mocks/products';

export default function MakersSection() {
  return (
    <div className="bg-black px-[2rem] py-[2.4rem]">
      <div className="grid grid-cols-2 gap-x-[1.2rem] gap-y-[2.4rem]">
        <ProductCard key={MAKERS_PRODUCT.id} {...MAKERS_PRODUCT} />
      </div>
    </div>
  );
}
