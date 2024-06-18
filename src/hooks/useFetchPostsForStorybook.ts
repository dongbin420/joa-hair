import axios from 'axios';
import { useState, useCallback } from 'react';
import { InstagramPosts } from '@/types/InstagramPostsType';
import { UseFetchPostsReturn } from '@/hooks/useFetchGalleryPosts';
import { fetchPostsForStorybook } from '@/apis/instagramPostsApi';

export const useFetchPostsForStorybook = (): UseFetchPostsReturn => {
  const [data, setData] = useState<InstagramPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (postSizeCount?: number, startPost?: number) => {
    console.log(postSizeCount, startPost);

    setLoading(true);
    setError(null);

    try {
      const response = await fetchPostsForStorybook();
      setData((prevData) => [...prevData, ...response.data]);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};
