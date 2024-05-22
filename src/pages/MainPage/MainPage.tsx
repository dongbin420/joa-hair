import * as S from './MainPage.styles';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
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
        <ImgWrapper
          img={mainImg}
          width={625}
          height={750}
          showGradient={true}
          customCss={S.ImgWrapperCumstomCss}
        />
      </S.FirstSection>
      <S.SecondSection>
        <S.IntroContentWrapper></S.IntroContentWrapper>
      </S.SecondSection>
    </S.MainPageContainer>
  );
}

export default MainPage;
