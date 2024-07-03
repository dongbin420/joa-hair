import { useState } from 'react';
import * as S from './ImgWrapper.styles';
import type { CSSProp } from 'styled-components';

export interface ImgWrapperProps {
  img: string;
  width?: string;
  height?: string;
  borderRadius?: number;
  showGradient?: boolean;
  onClick?: () => void;
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

  isSticky?: boolean;
  description: string;
}

function ImgWrapper({
  img,
  width,
  height,
  borderRadius,
  customCss,
  showGradient,
  onClick,
  isSticky,
  description,
}: ImgWrapperProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <S.Wrapper
      width={width}
      height={height}
      customCss={customCss?.wrapper}
      onClick={onClick}
      isSticky={isSticky}
    >
      {showGradient && (
        <S.GradientBox
          borderRadius={borderRadius}
          customCss={customCss?.gradient}
          loaded={loaded}
        />
      )}
      <S.Img
        src={img}
        borderRadius={borderRadius}
        customCss={customCss?.img}
        onLoad={() => setLoaded(true)}
        loaded={loaded}
        alt={description}
      />
    </S.Wrapper>
  );
}

export default ImgWrapper;
