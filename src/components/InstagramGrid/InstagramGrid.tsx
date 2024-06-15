import * as S from './InstagramGrid.styles';
import { useEffect, useState, useRef } from 'react';
import { UseFetchPostsReturn } from '@/hooks/useFetchGalleryPosts';
import InstagramPost from './InstagramPost/InstagramPost';

export interface InstagramGridProps {
  useFetch: () => UseFetchPostsReturn;
  isGalleryPage?: boolean;
}

function InstagramGrid({ useFetch, isGalleryPage }: InstagramGridProps) {
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
    <>
      <S.GridWrapper>
        {data &&
          data.length > 0 &&
          data.map((post, idx) => <InstagramPost key={idx} post={post} />)}
      </S.GridWrapper>
      {isGalleryPage && <button onClick={loadMore}>load more</button>}
    </>
  );
}

export default InstagramGrid;
