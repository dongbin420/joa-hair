import * as S from './ReviewCarouselItem.styles';
import { ReviewData } from '@/types/reviewDataType';

interface ReviewCarouselItemProps {
  data: ReviewData;
}
function ReviewCarouselItem({ data }: ReviewCarouselItemProps) {
  return (
    <S.ReviewCarouselItemContainer>
      <S.ContentsWrapper>
        <S.ReviewProfile src={data.photoUri} />
        <S.ReviewText>{data.text}</S.ReviewText>
        <S.ReviewName>{data.displayName}</S.ReviewName>
      </S.ContentsWrapper>
    </S.ReviewCarouselItemContainer>
  );
}

export default ReviewCarouselItem;
