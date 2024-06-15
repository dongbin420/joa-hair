import * as S from './InstagramPost.styles';
import { InstagramPosts } from '@/types/InstagramPostsType';
import instagramIcon from '@/assets/imgs/svg/instagram.svg';
import slideIcon from '@/assets/imgs/svg/slide.svg';
import playIcon from '@/assets/imgs/svg/play.svg';
import clockWhiteIcon from '@/assets/imgs/svg/clock-white.svg';
import videoIcon from '@/assets/imgs/svg/video.svg';
import { formatDateForInstaPost } from '@/utils/dateFormatter';

interface InstagramPostProps {
  post: InstagramPosts;
}

function InstagramPost({ post }: InstagramPostProps) {
  return (
    <S.PostWrapper>
      <S.thumbnailImg src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url} />
      {post.media_type === 'VIDEO' && (
        <>
          <S.PlayIcon src={playIcon} />
          <S.VideoIcon src={videoIcon} />
        </>
      )}
      {post.media_type === 'CAROUSEL_ALBUM' && <S.SlideIcon src={slideIcon} />}
      <S.InstagramIcon src={instagramIcon} />
      <S.ClockWrapper>
        <S.ClockIcon src={clockWhiteIcon} />
        <S.ClockText>{formatDateForInstaPost(post.timestamp)}</S.ClockText>
      </S.ClockWrapper>
      <S.InstagramUsername>{post.username}</S.InstagramUsername>
    </S.PostWrapper>
  );
}

export default InstagramPost;
