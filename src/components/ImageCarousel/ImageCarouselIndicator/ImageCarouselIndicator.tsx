import * as S from './ImageCarouselIndicator.styles';
import { useImageCarouselContext } from '@/hooks/useImageCarouselContext';

function ImageCarouselIndicator() {
  const { activeIndex, total, clickIndicator } = useImageCarouselContext();

  return (
    <S.ImageCarouselIndicatorContainer>
      {[...Array(total)].map((_, idx) => (
        <S.StyledIndicatorIcon
          key={idx}
          onClick={() => clickIndicator(idx)}
          isActive={activeIndex === idx}
        />
      ))}
    </S.ImageCarouselIndicatorContainer>
  );
}

export default ImageCarouselIndicator;
