import { fetchGalleryPosts } from '@/apis/instagramPostsApi';
import { InstagramPosts } from '@/types/InstagramPostsType';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useFetchGalleryPosts = () => {
  const POST_SIZE = 16;

  return useInfiniteQuery({
    queryKey: ['galleryPosts', POST_SIZE],
    queryFn: async ({ pageParam }): Promise<Array<InstagramPosts>> => {
      const res = await fetchGalleryPosts(POST_SIZE, pageParam);
      return res.data;
    },
    // 첫번째 페칭에서 queryFn에서 매개변수로 사용될 pageParam
    initialPageParam: 1,
    // 다음 페이지를 요청할 때(첫 번째 페칭 이후) 사용할 파라미터(pageParam)을 결정하는 역할
    // lastPage 파라미터는 마지막으로 받아온 데이터를 의미
    // allPages는 지금까지 받아온 모든 데이터를 의미 즉, 이를 통해 모든 데이터를 참조하고, 길이 등을 참조 할 수 있다.
    // 이 getNextPageParam은 다음 페이지 요청 시 사용할 파라미터를 결정하는 역할을 하므로, 다음 파라미터를 리턴하면 됨.
    // 이 getNextPageParam에 의해 hasNextPage가 결정된다. undefined나 null을 반환하면 false, 아니면 true
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === POST_SIZE) {
        const totalPosts = allPages.reduce((acc, page) => acc + page.length, 0);

        return totalPosts + 1;
      }

      return undefined;
    },
    gcTime: 0,
  });
};
