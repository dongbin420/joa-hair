import * as S from './MainPage.styles';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';
import Button from '@/components/Button/Button';
import InstagramGrid from '@/components/InstagramGrid/InstagramGrid';
import ReviewCarousel from '@/components/ReviewCarousel/ReviewCarousel';
import mainImg from '@/assets/imgs/webp/mainImg.webp';
import introImg from '@/assets/imgs/webp/introImg.webp';
import { INTRO_TEXT } from '@/constants/text';
import { RESERVATION_URL } from './../../constants/url';
import { useFetchSelectedPosts } from '@/hooks/useFetchSelectedPosts';
import { reviews } from '@/constants/reviewData';

function MainPage() {
  return (
    <S.MainPageContainer>
      <S.FirstSection>
        <S.MainContentWrapper>
          <S.MainTitleWrapper>
            <S.MainTitle>JOA</S.MainTitle>
            <S.MainTitleInlineWrapper>
              <S.MainTitle>HAIR</S.MainTitle>
              <S.MainTitle>SALON</S.MainTitle>
            </S.MainTitleInlineWrapper>
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
          <ImgWrapper img={introImg} borderRadius={15} customCss={S.IntroImgCustomCss} />
        </S.IntroContentWrapper>
      </S.SecondSection>
      <S.ThirdSection>
        <S.InstagramGridContainer>
          <S.InstagramGridWrapper>
            <S.InstagramGridTitle>Style Spotlights</S.InstagramGridTitle>
            <InstagramGrid
              isMainPage={true}
              useFetch={useFetchSelectedPosts}
              customCss={S.InstagramGridCustomCss}
            />
          </S.InstagramGridWrapper>
        </S.InstagramGridContainer>
      </S.ThirdSection>
      <S.FourthSection>
        <S.ReviewCarouselContainer>
          <S.StyledQuotesUp />
          <S.StyledQuotesDown />
          <S.ReviewTitle>HEAR FROM OUR PAST CLIENTS ABOUT THEIR EXPERIENCE</S.ReviewTitle>
          <ReviewCarousel total={reviews.length}>
            <ReviewCarousel.ReviewCarouselContainer width={'100%'} height={'100%'}>
              <ReviewCarousel.ReviewCarouselIndicator />
              <ReviewCarousel.ReviewCarouselInner>
                <ReviewCarousel.ReviewCarouselItem data={reviews[reviews.length - 1]} />
                {reviews.map((data, idx) => (
                  <ReviewCarousel.ReviewCarouselItem key={idx} data={data} />
                ))}
                <ReviewCarousel.ReviewCarouselItem data={reviews[0]} />
              </ReviewCarousel.ReviewCarouselInner>
              <ReviewCarousel.ReviewCarouselButton />
            </ReviewCarousel.ReviewCarouselContainer>
          </ReviewCarousel>
        </S.ReviewCarouselContainer>
      </S.FourthSection>
      <S.ButtonLink href={RESERVATION_URL} target="_blank">
        <Button size={'xxLarge'} customCss={S.ButtonCustomCss}>
          BOOK NOW
        </Button>
      </S.ButtonLink>
    </S.MainPageContainer>
  );
}

export default MainPage;
