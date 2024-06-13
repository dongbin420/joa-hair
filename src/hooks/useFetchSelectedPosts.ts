import axios from 'axios';
import { useState, useCallback } from 'react';
import { fetchSelectedPosts } from '@/apis/instagramPosts';
import { InstagramPosts } from '@/types/InstagramPosts';
import { UseFetchPostsReturn } from '@/hooks/useFetchGalleryPosts';

export const useFetchSelectedPosts = (): UseFetchPostsReturn => {
  const [data, setData] = useState<InstagramPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (postSizeCount?: number, startPost?: number) => {
    console.log(postSizeCount, startPost);

    setLoading(true);
    setError(null);

    try {
      const response = await fetchSelectedPosts();
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
