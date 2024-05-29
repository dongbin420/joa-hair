import * as S from './AboutPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import bannerImg1 from '@/assets/imgs/webp/bannerImg1.webp';
import { ABOUT_CONTENT } from '@/constants/bannerContent';

function AboutPage() {
  return (
    <>
      <PageBanner img={bannerImg1} content={ABOUT_CONTENT} />
      <S.AboutPageContainer>Coming Soon!</S.AboutPageContainer>
    </>
  );
}

export default AboutPage;
