import * as S from './ServicesPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import bannerImg2 from '@/assets/imgs/webp/bannerImg2.webp';
import { SERVICES_CONTENT } from '@/constants/bannerContent';

function ServicesPage() {
  return (
    <>
      <PageBanner img={bannerImg2} content={SERVICES_CONTENT} />
      <S.ServicesPageContainer></S.ServicesPageContainer>
    </>
  );
}

export default ServicesPage;
