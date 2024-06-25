import * as S from './PromiseBox.styles';
import { PROMISE_TEXT } from '@/constants/text';

function PromiseBox() {
  return (
    <S.PromiseBoxContainerContainer>
      <S.PromiseBoxTitle>Our Promise</S.PromiseBoxTitle>
      <S.PromiseBoxContainer>
        <S.InformationWrapper>
          <S.StyledScissorsIcon />
          <S.InformationTitle>{PROMISE_TEXT[0].title}</S.InformationTitle>
          <S.InformationText>{PROMISE_TEXT[0].text}</S.InformationText>
        </S.InformationWrapper>
        <S.InformationWrapper>
          <S.StyledProductsIcon />
          <S.InformationTitle>{PROMISE_TEXT[1].title}</S.InformationTitle>
          <S.InformationText>{PROMISE_TEXT[1].text}</S.InformationText>
        </S.InformationWrapper>
        <S.InformationWrapper>
          <S.StyledUserHeartIcon />
          <S.InformationTitle>{PROMISE_TEXT[2].title}</S.InformationTitle>
          <S.InformationText>{PROMISE_TEXT[2].text}</S.InformationText>
        </S.InformationWrapper>
        <S.InformationWrapper>
          <S.StyledTwoHeartsIcon />
          <S.InformationTitle>{PROMISE_TEXT[3].title}</S.InformationTitle>
          <S.InformationText>{PROMISE_TEXT[3].text}</S.InformationText>
        </S.InformationWrapper>
      </S.PromiseBoxContainer>
    </S.PromiseBoxContainerContainer>
  );
}

export default PromiseBox;
