import * as S from './ReviewCarouselButton.styles';
import { useReviewCarouselContext } from '@/hooks/useReviewCarouselContext';

function ReviewCarouselButton() {
  const { clickPrevious, moveNextImage } = useReviewCarouselContext();

  return (
    <S.ReviewCarouselButtonContainer>
      <S.CarouselPrevButton onClick={clickPrevious} aria-label="Carousel previous button">
        <S.StyledPreviousIcon />
      </S.CarouselPrevButton>
      <S.CarouselNextButton onClick={moveNextImage} aria-label="Carousel next button">
        <S.StyledNextIcon />
      </S.CarouselNextButton>
    </S.ReviewCarouselButtonContainer>
  );
}

export default ReviewCarouselButton;
