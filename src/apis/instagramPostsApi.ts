import { http } from './http';
import { InstagramPosts } from '@/types/InstagramPostsType';

export const fetchGalleryPosts = (postSizeCount?: number, startPost?: number) => {
  return http.get<InstagramPosts[]>(
    // production
    `${process.env.FETCH_INSTAGRAM_POSTS_URL}?postSize=${postSizeCount}&startPost=${startPost}`,

    // development
  );
};

export const fetchSelectedPosts = () => {
  return http.get<InstagramPosts[]>(
    // production
    `${process.env.FETCH_SELECTED_INSTAGRAM_POSTS_URL}`,

    // development
  );
};

export const fetchPostsForStorybook = () => {
  return http.get<InstagramPosts[]>('/mockup/gridPostsForStorybook.json');
};
