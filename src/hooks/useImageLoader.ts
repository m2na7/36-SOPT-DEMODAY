import { useState, useEffect, useMemo } from 'react';

interface Props {
  imageUrls: string[];
  delay?: number;
}

export const useImageLoader = ({ imageUrls, delay = 0 }: Props) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const imageUrlsString = useMemo(() => JSON.stringify(imageUrls), [imageUrls]);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setAllImagesLoaded(true);
      return;
    }

    setLoadedImages(new Set());
    setAllImagesLoaded(false);

    const loadImage = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prev) => new Set(prev).add(url));
          resolve();
        };
        img.onerror = () => {
          setLoadedImages((prev) => new Set(prev).add(url));
          resolve();
        };
        img.src = url;
      });
    };

    const loadAllImages = async () => {
      await Promise.all(imageUrls.map(loadImage));

      if (delay > 0) {
        setTimeout(() => {
          setAllImagesLoaded(true);
        }, delay);
      } else {
        setAllImagesLoaded(true);
      }
    };

    loadAllImages();
  }, [imageUrlsString, delay]);

  return {
    loadedImages,
    allImagesLoaded,
    loadedCount: loadedImages.size,
    totalCount: imageUrls.length,
  };
};
