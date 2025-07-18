import { useMemo, useState, useEffect } from 'react';

export function useShuffledProducts<T>(originalArray: readonly T[]): T[] {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shuffledProducts = useMemo(() => {
    if (!isClient) {
      return [...originalArray];
    }
    return [...originalArray].sort(() => Math.random() - 0.5);
  }, [originalArray, isClient]);

  return shuffledProducts;
}
