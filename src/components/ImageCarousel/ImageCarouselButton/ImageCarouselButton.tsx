import * as S from './ImageCarouselButton.styles';
import { useImageCarouselContext } from '@/hooks/useImageCarouselContext';

function ImageCarouselButton() {
  const { clickPrevious, moveNextImage } = useImageCarouselContext();

  return (
    <S.ImageCarouselButtonContainer>
      <S.CarouselPrevButton onClick={clickPrevious}>
        <S.StyledPreviousIcon />
      </S.CarouselPrevButton>
      <S.CarouselNextButton onClick={moveNextImage}>
        <S.StyledNextIcon />
      </S.CarouselNextButton>
    </S.ImageCarouselButtonContainer>
  );
}

export default ImageCarouselButton;
