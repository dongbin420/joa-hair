import * as S from './ImageCarouselItem.styles';

interface ImageCarouselItemProps {
  imgSrc: string;
}

function ImageCarouselItem({ imgSrc }: ImageCarouselItemProps) {
  return (
    <S.ImageCarouselItemContainer>
      <S.ImageCarouselImage src={imgSrc} />
    </S.ImageCarouselItemContainer>
  );
}

export default ImageCarouselItem;
