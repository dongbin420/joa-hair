import { fetchSelectedPosts } from '@/apis/instagramPostsApi';
import { InstagramPosts } from '@/types/InstagramPostsType';
import { useQuery } from '@tanstack/react-query';

export const useFetchSelectedPosts = () => {
  return useQuery({
    queryKey: ['selectedPosts'],
    queryFn: async (): Promise<Array<InstagramPosts>> => {
      const response = await fetchSelectedPosts();
      return response.data;
    },
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60,
  });
};
