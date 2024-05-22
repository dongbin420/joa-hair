import * as S from './ImgWrapper.styles';
import type { CSSProp } from 'styled-components';

export interface ImgWrapperProps {
  img: string;
  width?: number;
  height?: number;
  /**
   * wrapper: wrapper를 위한 css룰(div)
   *
   * img: img를 위한 css룰(img)
   *
   * gradient: gradient를 위한 css룰(div)
   */
  customCss?: {
    wrapper?: CSSProp;
    img?: CSSProp;
    gradient?: CSSProp;
  };
  showGradient?: boolean;
}

function ImgWrapper({ img, width, height, customCss, showGradient }: ImgWrapperProps) {
  return (
    <S.Wrapper width={width} height={height} customCss={customCss?.wrapper}>
      {showGradient && <S.GradientBox customCss={customCss?.gradient} />}
      <S.Img src={img} customCss={customCss?.img} />
    </S.Wrapper>
  );
}

export default ImgWrapper;
