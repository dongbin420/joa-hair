import * as S from './InstagramGrid.styles';
import { Link } from 'react-router-dom';
import InstagramPost from './InstagramPost/InstagramPost';
import { INSTAGRAM_URL } from '@/constants/url';
import instagramIcon from '@/assets/imgs/svg/instagram.svg';
import type { CSSProp } from 'styled-components';
import { InstagramPosts } from '@/types/InstagramPostsType';
import { QueryStatus, FetchNextPageOptions, UseInfiniteQueryResult } from '@tanstack/react-query';

export interface InstagramGridProps {
  pageType: string;
  queryState: {
    data: InstagramPosts[] | undefined;
    error: Error | null;
    fetchNextPage?: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>;
    hasNextPage?: boolean;
    isFetching?: boolean;
    status: QueryStatus;
  };
  customCss?: {
    post?: CSSProp;
    grid?: CSSProp;
  };
}

function InstagramGrid({ queryState, customCss, pageType }: InstagramGridProps) {
  const { data, status, error, fetchNextPage, hasNextPage, isFetching } = queryState;

  const handleLoadMore = () => {
    if (!hasNextPage) {
      alert('No more posts to load.');

      return;
    }
    // 옵셔널 체이닝은 함수 호출에도 동일하게 사용 가능.
    fetchNextPage?.();
  };

  return (
    <S.Container>
      {status === 'error' && error ? (
        <S.ErrorMessage>{error.message}</S.ErrorMessage>
      ) : (
        <>
          {data && data.length > 0 && (
            <S.GridWrapper customCss={customCss?.grid}>
              {data.map((post, idx) => (
                <InstagramPost key={idx} post={post} customCss={customCss} />
              ))}
            </S.GridWrapper>
          )}
          <S.ButtonContainer>
            {pageType === 'gallery' && (
              <>
                <S.LoadMoreButton onClick={() => handleLoadMore()} disabled={isFetching}>
                  {!isFetching && data && data.length > 0 ? 'Load More...' : <S.Spinner />}
                </S.LoadMoreButton>
                <S.InstagramButton>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                    <S.InstagramButtonContentWrapper>
                      <img src={instagramIcon} alt="instagram button" />
                      Follow on Instagram
                    </S.InstagramButtonContentWrapper>
                  </a>
                </S.InstagramButton>
              </>
            )}
            {pageType === 'main' && (
              <>
                <Link to="/gallery">
                  <S.SeeMoreButton>
                    {!isFetching && data && data.length > 0 ? 'See More...' : <S.Spinner />}
                  </S.SeeMoreButton>
                </Link>
                <S.InstagramButton>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                    <S.InstagramButtonContentWrapper>
                      <img src={instagramIcon} alt="instagram button" />
                      Follow on Instagram
                    </S.InstagramButtonContentWrapper>
                  </a>
                </S.InstagramButton>
              </>
            )}
          </S.ButtonContainer>
        </>
      )}
    </S.Container>
  );
}

export default InstagramGrid;
