import * as S from './ImageCarouselButton.styles';
import { useImageCarouselContext } from '@/hooks/useImageCarouselContext';

function ImageCarouselButton() {
  const { clickPrevious, moveNextImage } = useImageCarouselContext();

  return (
    <S.ImageCarouselButtonContainer>
      <S.CarouselPrevButton onClick={clickPrevious} aria-label="Carousel previous button">
        <S.StyledPreviousIcon />
      </S.CarouselPrevButton>
      <S.CarouselNextButton onClick={moveNextImage} aria-label="Carousel next button">
        <S.StyledNextIcon />
      </S.CarouselNextButton>
    </S.ImageCarouselButtonContainer>
  );
}

export default ImageCarouselButton;
