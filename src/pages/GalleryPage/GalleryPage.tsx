import * as S from './GalleryPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import bannerImg3 from '@/assets/imgs/webp/bannerImg3.webp';
import { GALLERY_CONTENT } from '@/constants/bannerContent';
import InstagramGrid from '@/components/InstagramGrid/InstagramGrid';
import { useFetchGalleryPosts } from '@/hooks/useFetchGalleryPosts';

function GalleryPage() {
  const { data, error, fetchNextPage, hasNextPage, isFetching, status } = useFetchGalleryPosts();
  const flattenedData = data ? data.pages.flat() : undefined;
  const queryState = {
    data: flattenedData,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,
  };

  return (
    <>
      <PageBanner img={bannerImg3} content={GALLERY_CONTENT} />
      <S.GalleryPageContainer>
        <InstagramGrid pageType="gallery" queryState={queryState} />
      </S.GalleryPageContainer>
    </>
  );
}

export default GalleryPage;
