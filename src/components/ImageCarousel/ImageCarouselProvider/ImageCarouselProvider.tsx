import { createContext, useState, useCallback } from 'react';
import type { PropsWithChildren } from 'react';

interface ImageCarouselProviderContextProps {
  activeIndex: number;
  total: number;
  clickPrevious: () => void;
  moveNextImage: () => void;
  clickIndicator: (index: number) => void;
}

export const ImageCarouselContext = createContext<ImageCarouselProviderContextProps | undefined>(
  undefined,
);

function ImageCarouselProvider({ children, total }: PropsWithChildren<{ total: number }>) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const clickPrevious = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  }, [total]);

  const moveNextImage = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  }, [total]);

  const clickIndicator = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <ImageCarouselContext.Provider
      value={{
        activeIndex,
        total,
        clickPrevious,
        moveNextImage,
        clickIndicator,
      }}
    >
      {children}
    </ImageCarouselContext.Provider>
  );
}

export default ImageCarouselProvider;
