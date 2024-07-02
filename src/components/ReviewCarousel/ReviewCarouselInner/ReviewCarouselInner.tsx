import { useEffect, useRef } from 'react';
import * as S from './ReviewCarouselInner.styles';
import type { PropsWithChildren } from 'react';
import { useReviewCarouselContext } from '@/hooks/useReviewCarouselContext';

function ReviewCarouselInner({ children }: PropsWithChildren) {
  const { activeIndex, isTransition, transitionEnd } = useReviewCarouselContext();
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    currentCarousel && currentCarousel.addEventListener('transitionend', transitionEnd);

    return () => {
      currentCarousel && currentCarousel.removeEventListener('transitionend', transitionEnd);
    };
  }, [transitionEnd]);

  return (
    <S.ReviewCarouselInnerContainer
      ref={carouselRef}
      activeIndex={activeIndex}
      isTransition={isTransition}
    >
      {children}
    </S.ReviewCarouselInnerContainer>
  );
}

export default ReviewCarouselInner;
