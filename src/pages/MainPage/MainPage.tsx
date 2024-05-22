import * as S from './MainPage.styles';
import mainImg from '@/assets/imgs/jpg/mainImg.jpg';

function MainPage() {
  return (
    <S.MainPageContainer>
      <S.FirstSection>
        <S.MainContentWrapper>
          <S.MainTitleWrapper>
            <S.MainTitle>JOA</S.MainTitle>
            <S.MainTitle>HAIR SALON</S.MainTitle>
          </S.MainTitleWrapper>
          <S.MainTextWrapper>
            <S.MainText>A beautiful, relaxing</S.MainText>
            <S.MainText>salon designed for your unique style</S.MainText>
          </S.MainTextWrapper>
        </S.MainContentWrapper>
        <S.MainImgWrapper>
          <S.GradientBox />
          <S.MainImg src={mainImg}></S.MainImg>
        </S.MainImgWrapper>
      </S.FirstSection>
    </S.MainPageContainer>
  );
}

export default MainPage;
