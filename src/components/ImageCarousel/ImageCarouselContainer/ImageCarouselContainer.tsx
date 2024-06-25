import * as S from './ImageCarouselContainer.styles';
import { useState, useEffect } from 'react';
import { useImageCarouselContext } from '@/hooks/useImageCarouselContext';
import type { PropsWithChildren } from 'react';

interface ImageCarouselContainerProps {
  width?: string;
  height?: string;
}

function ImageCarouselContainer({
  children,
  width,
  height,
}: PropsWithChildren<ImageCarouselContainerProps>) {
  const { moveNextImage } = useImageCarouselContext();
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(moveNextImage, 7000);

    return () => clearInterval(interval);
  }, [moveNextImage, isPaused]);

  return (
    <S.ImageCarouselContainer
      width={width}
      height={height}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {children}
    </S.ImageCarouselContainer>
  );
}

export default ImageCarouselContainer;
