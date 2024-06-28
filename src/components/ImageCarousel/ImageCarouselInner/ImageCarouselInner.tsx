import { useEffect, useRef } from 'react';
import * as S from './ImageCarouselInner.styles';
import type { PropsWithChildren } from 'react';
import { useImageCarouselContext } from '@/hooks/useImageCarouselContext';

function ImageCarouselInner({ children }: PropsWithChildren) {
  const { activeIndex, isTransition, transitionEnd } = useImageCarouselContext();
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    currentCarousel && currentCarousel.addEventListener('transitionend', transitionEnd);

    return () => {
      currentCarousel && currentCarousel.removeEventListener('transitionend', transitionEnd);
    };
  }, [transitionEnd]);

  return (
    <S.ImageCarouselInnerContainer
      ref={carouselRef}
      activeIndex={activeIndex}
      isTransition={isTransition}
    >
      {children}
    </S.ImageCarouselInnerContainer>
  );
}

export default ImageCarouselInner;
