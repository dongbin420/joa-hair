import * as S from './PageBanner.styles';
import ImgWrapper from '@/components/ImgWrapper/ImgWrapper';

export interface PageBannerProps {
  img: string;
  content: {
    title: string;
    text: string;
  };
}

function PageBanner({ img, content }: PageBannerProps) {
  return (
    <S.PageBannerContainer>
      <ImgWrapper
        img={img}
        width={'100%'}
        height={'100%'}
        showGradient={true}
        customCss={S.ImgWrapperCustomCss}
        description={'page banner image'}
      />
      <S.TextWrapper>
        <S.PageTitle>{content.title}</S.PageTitle>
        <S.PageText>{content.text}</S.PageText>
      </S.TextWrapper>
    </S.PageBannerContainer>
  );
}

export default PageBanner;
