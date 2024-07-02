import * as S from './ReviewCarouselContainer.styles';
import { useState, useEffect } from 'react';
import { useReviewCarouselContext } from '@/hooks/useReviewCarouselContext';
import type { PropsWithChildren } from 'react';

interface ReviewCarouselContainerProps {
  width?: string;
  height?: string;
}

function ReviewCarouselContainer({
  children,
  width,
  height,
}: PropsWithChildren<ReviewCarouselContainerProps>) {
  const { moveNextImage } = useReviewCarouselContext();
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(moveNextImage, 8000);

    return () => clearInterval(interval);
  }, [moveNextImage, isPaused]);

  return (
    <S.ReviewCarouselContainer
      width={width}
      height={height}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {children}
    </S.ReviewCarouselContainer>
  );
}

export default ReviewCarouselContainer;
