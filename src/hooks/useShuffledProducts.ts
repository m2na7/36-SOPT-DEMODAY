import { useEffect, useState } from 'react';

export function useShuffledProducts<T>(originalArray: readonly T[]): T[] {
  const [shuffledProducts, setShuffledProducts] = useState<T[]>([
    ...originalArray,
  ]);

  useEffect(() => {
    setShuffledProducts([...originalArray].sort(() => Math.random() - 0.5));
  }, [originalArray]);

  return shuffledProducts;
}
