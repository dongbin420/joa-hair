import * as S from './AboutPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import bannerImg1 from '@/assets/imgs/webp/bannerImg1.webp';
import { ABOUT_CONTENT } from '@/constants/bannerContent';
import { ABOUT_INTRODUCE_TEXT } from '@/constants/text';

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
          <S.TitleFirst>&quot;Where Your Beauty Dreams Come True&quot;</S.TitleFirst>
          <S.TitleSecond>Hello, We Are JOA HAIR.</S.TitleSecond>
        </S.TitleSection>
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
