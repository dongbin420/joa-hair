import axios from 'axios';
import { useState, useCallback } from 'react';
import { fetchGalleryPosts } from '@/apis/instagramPostsApi';
import { InstagramPosts } from '@/types/InstagramPostsType';

export interface UseFetchPostsReturn {
  data: InstagramPosts[] | null;
  loading: boolean;
  error: string | null;
  fetchData: (postSizeCount?: number, startPost?: number) => Promise<void>;
}

export const useFetchGalleryPosts = (): UseFetchPostsReturn => {
  const [data, setData] = useState<InstagramPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (postSizeCount?: number, startPost?: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchGalleryPosts(postSizeCount, startPost);

      if (response.data.length === 0) {
        alert('No more posts to load.');

        return;
      }

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
