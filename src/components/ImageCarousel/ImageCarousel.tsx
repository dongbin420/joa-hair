import ImageCarouselContainer from './ImageCarouselContainer/ImageCarouselContainer';
import ImageCarouselIndicator from './ImageCarouselIndicator/ImageCarouselIndicator';
import ImageCarouselButton from './ImageCarouselButton/ImageCarouselButton';
import ImageCarouselInner from './ImageCarouselInner/ImageCarouselInner';
import ImageCarouselItem from './ImageCarouselItem/ImageCarouselItem';
import ImageCarouselProvider from './ImageCarouselProvider/ImageCarouselProvider';
import type { PropsWithChildren } from 'react';

interface ImageCarouselProps {
  total: number;
}

function ImageCarousel({ children, total }: PropsWithChildren<ImageCarouselProps>) {
  return <ImageCarouselProvider total={total}>{children}</ImageCarouselProvider>;
}

ImageCarousel.ImageCarouselContainer = ImageCarouselContainer;
ImageCarousel.ImageCarouselIndicator = ImageCarouselIndicator;
ImageCarousel.ImageCarouselButton = ImageCarouselButton;
ImageCarousel.ImageCarouselInner = ImageCarouselInner;
ImageCarousel.ImageCarouselItem = ImageCarouselItem;

export default ImageCarousel;
