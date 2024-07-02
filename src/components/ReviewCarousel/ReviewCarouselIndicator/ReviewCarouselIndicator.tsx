import * as S from './ReviewCarouselIndicator.styles';
import { useReviewCarouselContext } from '@/hooks/useReviewCarouselContext';

function ReviewCarouselIndicator() {
  const { total, clickIndicator, activeIndex } = useReviewCarouselContext();

  return (
    <S.ReviewCarouselIndicatorContainer>
      {[...Array(total)].map((_, idx) => (
        <S.StyledCircleIcon
          key={idx}
          onClick={() => clickIndicator(idx)}
          isActive={activeIndex - 1 === idx}
        />
      ))}
    </S.ReviewCarouselIndicatorContainer>
  );
}

export default ReviewCarouselIndicator;
