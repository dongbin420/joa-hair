import * as S from './ImageCarouselInner.styles';
import type { PropsWithChildren } from 'react';
import { useImageCarouselContext } from '@/hooks/useImageCarouselContext';

function ImageCarouselInner({ children }: PropsWithChildren) {
  const { activeIndex } = useImageCarouselContext();

  return (
    <S.ImageCarouselInnerContainer activeIndex={activeIndex}>
      {children}
    </S.ImageCarouselInnerContainer>
  );
}

export default ImageCarouselInner;
