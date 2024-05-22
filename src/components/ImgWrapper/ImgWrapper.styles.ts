import { styled } from 'styled-components';
import type { CSSProp } from 'styled-components';

interface WrapperProps {
  width?: number;
  height?: number;
  customCss?: CSSProp;
}

interface ImgProps {
  customCss?: CSSProp;
}

interface GradientProps {
  customCss?: CSSProp;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  ${({ customCss }) => customCss && customCss};
`;

export const GradientBox = styled.div<GradientProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
  opacity: 0.2;
  ${({ customCss }) => customCss && customCss};
`;

export const Img = styled.img<ImgProps>`
  width: 100%;
  height: 100%;
  ${({ customCss }) => customCss && customCss};
`;
