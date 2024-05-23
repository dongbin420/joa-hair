import * as S from './MainPage.styles';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import mainImg from '@/assets/imgs/jpg/mainImg.jpg';
import introImg from '@/assets/imgs/jpg/introImg.jpg';
import { INTRO_TEXT } from '@/constants/text';

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
          width={'600px'}
          height={'750px'}
          borderRadius={20}
          showGradient={true}
          customCss={S.MainImgCustomCss}
        />
      </S.FirstSection>
      <S.SecondSection>
        <S.IntroContentWrapper>
          <S.IntroTextWrapper>
            <S.IntroTextHeading>WELCOME TO</S.IntroTextHeading>
            <S.IntroTextTitle margin={'right'}>JOA</S.IntroTextTitle>
            <S.IntroTextTitle margin={'bottom'}>HAIR SALON</S.IntroTextTitle>
            <S.IntroTextContent margin={'bottom'}>{INTRO_TEXT.FIRST}</S.IntroTextContent>
            <S.IntroTextContent margin={'bottom'}>{INTRO_TEXT.SECOND}</S.IntroTextContent>
            <S.IntroTextContent>{INTRO_TEXT.THIRD}</S.IntroTextContent>
          </S.IntroTextWrapper>
          <ImgWrapper
            img={introImg}
            width={'650px'}
            height={'450px'}
            borderRadius={15}
            customCss={S.IntroImgCustomCss}
          />
        </S.IntroContentWrapper>
      </S.SecondSection>
    </S.MainPageContainer>
  );
}

export default MainPage;
