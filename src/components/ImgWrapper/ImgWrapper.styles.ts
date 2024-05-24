import { styled } from 'styled-components';
import type { CSSProp } from 'styled-components';

interface WrapperProps {
  width?: string;
  height?: string;
  customCss?: CSSProp;
}

interface ImgProps {
  borderRadius?: number;
  customCss?: CSSProp;
}

interface GradientProps {
  borderRadius?: number;
  customCss?: CSSProp;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};

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
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};

  ${({ customCss }) => customCss && customCss};
`;

export const Img = styled.img<ImgProps>`
  width: inherit;
  height: inherit;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};

  ${({ customCss }) => customCss && customCss};
`;
