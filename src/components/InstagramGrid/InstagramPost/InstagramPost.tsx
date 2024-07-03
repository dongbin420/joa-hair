import * as S from './InstagramPost.styles';
import { useState } from 'react';
import { InstagramPosts } from '@/types/InstagramPostsType';
import instagramIcon from '@/assets/imgs/svg/instagram.svg';
import slideIcon from '@/assets/imgs/svg/slide.svg';
import playIcon from '@/assets/imgs/svg/play.svg';
import clockWhiteIcon from '@/assets/imgs/svg/clock-white.svg';
import videoIcon from '@/assets/imgs/svg/video.svg';
import { formatDateForInstaPost } from '@/utils/dateFormatter';
import type { CSSProp } from 'styled-components';

interface InstagramPostProps {
  post: InstagramPosts;
  customCss?: {
    post?: CSSProp;
  };
}

function InstagramPost({ post, customCss }: InstagramPostProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <a href={post.permalink} target="_blank" rel="noreferrer">
      <S.PostWrapper customCss={customCss?.post} loaded={loaded}>
        <S.thumbnailImg
          src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
          onLoad={() => setLoaded(true)}
          alt="instagram post"
        />
        {post.media_type === 'VIDEO' && (
          <>
            <S.PlayIcon src={playIcon} alt="play icon" />
            <S.VideoIcon src={videoIcon} alt="video icon" />
          </>
        )}
        {post.media_type === 'CAROUSEL_ALBUM' && <S.SlideIcon src={slideIcon} alt="slide icon" />}
        <S.InstagramIcon src={instagramIcon} alt="instagram icon" />
        <S.ClockWrapper>
          <S.ClockIcon src={clockWhiteIcon} alt="clock icon" />
          <S.ClockText>{formatDateForInstaPost(post.timestamp)}</S.ClockText>
        </S.ClockWrapper>
        <S.InstagramUsername>{post.username}</S.InstagramUsername>
      </S.PostWrapper>
    </a>
  );
}

export default InstagramPost;
