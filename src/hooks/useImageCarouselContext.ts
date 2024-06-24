import { useContext } from 'react';
import { ImageCarouselContext } from '@/components/ImageCarousel/ImageCarouselProvider/ImageCarouselProvider';

export const useImageCarouselContext = () => {
  const context = useContext(ImageCarouselContext);

  if (!context) {
    throw new Error('useImageCarouselContext must be used within an ImageCarouselProvider');
  }

  return context;
};
