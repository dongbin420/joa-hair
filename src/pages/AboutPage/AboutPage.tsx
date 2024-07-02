import * as S from './AboutPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';
import bannerImg1 from '@/assets/imgs/webp/bannerImg1.webp';
import { ABOUT_CONTENT } from '@/constants/bannerContent';
import { ABOUT_INTRODUCE_TEXT } from '@/constants/text';
import { salonImgCarouselSrc } from '@/constants/imgCarouselSrc';

function AboutPage() {
  return (
    <>
      <PageBanner img={bannerImg1} content={ABOUT_CONTENT} />
      <S.AboutPageContainer>
        <S.LogoContainer>
          <S.LogoWrapper>
            <S.LogoTop>JOA</S.LogoTop>
            <S.LogoBottom>HAIR</S.LogoBottom>
          </S.LogoWrapper>
        </S.LogoContainer>
        <S.TitleSection>
          <S.TitleFirst>&quot;Where your beauty dreams come true&quot;</S.TitleFirst>
          <S.TitleSecond>Hello, we are JOA HAIR.</S.TitleSecond>
        </S.TitleSection>
        <S.CarouselContainer>
          <ImageCarousel total={salonImgCarouselSrc.length}>
            <ImageCarousel.ImageCarouselContainer width={'550px'} height={'700px'}>
              <ImageCarousel.ImageCarouselIndicator />
              <ImageCarousel.ImageCarouselInner>
                <ImageCarousel.ImageCarouselItem
                  imgSrc={salonImgCarouselSrc[salonImgCarouselSrc.length - 1]}
                />
                {salonImgCarouselSrc.map((src, idx) => (
                  <ImageCarousel.ImageCarouselItem key={idx} imgSrc={src} />
                ))}
                <ImageCarousel.ImageCarouselItem imgSrc={salonImgCarouselSrc[0]} />
              </ImageCarousel.ImageCarouselInner>
              <ImageCarousel.ImageCarouselButton />
            </ImageCarousel.ImageCarouselContainer>
          </ImageCarousel>
        </S.CarouselContainer>
        <S.IntroduceTextContainer>
          {ABOUT_INTRODUCE_TEXT.map((text, idx) => (
            <S.IntroduceText key={idx} index={idx}>
              {text}
            </S.IntroduceText>
          ))}
        </S.IntroduceTextContainer>
      </S.AboutPageContainer>
    </>
  );
}

export default AboutPage;
