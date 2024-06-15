import * as S from './InstagramGrid.styles';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UseFetchPostsReturn } from '@/hooks/useFetchGalleryPosts';
import InstagramPost from './InstagramPost/InstagramPost';
import { INSTAGRAM_URL } from '@/constants/url';
import instagramIcon from '@/assets/imgs/svg/instagram.svg';

export interface InstagramGridProps {
  useFetch: () => UseFetchPostsReturn;
  isGalleryPage?: boolean;
  isMainPage?: boolean;
}

function InstagramGrid({ useFetch, isGalleryPage, isMainPage }: InstagramGridProps) {
  const initialStartPost = 17;
  const loadMorePostSize = 8;
  const { data, loading, error, fetchData } = useFetch();
  const [startPost, setStartPost] = useState<number>(initialStartPost);
  const hasFetchedInitialData = useRef(false);

  useEffect(() => {
    if (!hasFetchedInitialData.current) {
      fetchData();
      hasFetchedInitialData.current = true;
    }
  }, [fetchData]);

  const loadMore = async () => {
    if (data && data.length + 1 >= startPost) {
      fetchData(8, startPost);
      setStartPost((prevStartPost) => prevStartPost + loadMorePostSize);
    } else {
      alert('No more posts to load.');
    }
  };

  return (
    <S.Container>
      <S.GridWrapper>
        {data &&
          data.length > 0 &&
          data.map((post, idx) => <InstagramPost key={idx} post={post} />)}
      </S.GridWrapper>
      <S.ButtonContainer>
        {isGalleryPage && (
          <>
            <S.LoadMoreButton onClick={loadMore} disabled={loading}>
              {loading ? <S.Spinner /> : 'Load More...'}
            </S.LoadMoreButton>
            <S.InstagramButton>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <S.InstagramButtonContentWrapper>
                  <img src={instagramIcon} />
                  Follow on Instagram
                </S.InstagramButtonContentWrapper>
              </a>
            </S.InstagramButton>
          </>
        )}
        {isMainPage && (
          <S.SeeMoreButton>
            <Link to="/gallery">See More...</Link>
          </S.SeeMoreButton>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
}

export default InstagramGrid;
