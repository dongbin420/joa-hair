import { useEffect, useState, useRef } from 'react';
import { UseFetchPostsReturn } from '@/hooks/useFetchGalleryPosts';

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
    <div>
      <div>
        {data &&
          data.length > 0 &&
          data.map((post, idx) => (
            <div key={idx}>
              {post.id} : {post.caption}
              <div>{idx}</div>
            </div>
          ))}
      </div>
      {isGalleryPage && <button onClick={loadMore}>load more</button>}
    </div>
  );
}

export default InstagramGrid;
