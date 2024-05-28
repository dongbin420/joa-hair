import * as S from './GalleryPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import bannerImg3 from '@/assets/imgs/webp/bannerImg3.webp';
import { GALLERY_CONTENT } from '@/constants/bannerContent';

function GalleryPage() {
  return (
    <>
      <PageBanner img={bannerImg3} content={GALLERY_CONTENT} />
      <S.GalleryPageContainer></S.GalleryPageContainer>
    </>
  );
}

export default GalleryPage;
