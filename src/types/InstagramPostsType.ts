export interface InstagramPosts {
  databaseId?: number;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
  caption: string;
  children?: {
    data: InstagramPostsChildren[];
  };
  thumbnail_url?: string;
  is_shared_to_feed?: boolean;
}

export interface InstagramPostsChildren {
  id: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
}
