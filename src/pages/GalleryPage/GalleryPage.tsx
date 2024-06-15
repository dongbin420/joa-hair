import * as S from './GalleryPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import bannerImg3 from '@/assets/imgs/webp/bannerImg3.webp';
import { GALLERY_CONTENT } from '@/constants/bannerContent';
import InstagramGrid from '@/components/InstagramGrid/InstagramGrid';
import { useFetchGalleryPosts } from '@/hooks/useFetchGalleryPosts';

function GalleryPage() {
  return (
    <>
      <PageBanner img={bannerImg3} content={GALLERY_CONTENT} />
      <S.GalleryPageContainer>
        <InstagramGrid isGalleryPage={true} useFetch={useFetchGalleryPosts} />
      </S.GalleryPageContainer>
    </>
  );
}

export default GalleryPage;
