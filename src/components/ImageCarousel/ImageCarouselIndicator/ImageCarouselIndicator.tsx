import * as S from './ImageCarouselIndicator.styles';
import { useImageCarouselContext } from '@/hooks/useImageCarouselContext';

function ImageCarouselIndicator() {
  const { total, clickIndicator, activeIndex } = useImageCarouselContext();

  return (
    <S.ImageCarouselIndicatorContainer>
      {[...Array(total)].map((_, idx) => (
        <S.StyledIndicatorIcon
          key={idx}
          onClick={() => clickIndicator(idx)}
          isActive={activeIndex - 1 === idx}
        />
      ))}
    </S.ImageCarouselIndicatorContainer>
  );
}

export default ImageCarouselIndicator;
