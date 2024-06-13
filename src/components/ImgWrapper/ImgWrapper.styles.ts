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
  loaded: boolean;
}

export interface GradientProps {
  borderRadius?: number;
  customCss?: CSSProp;
  loaded: boolean;
}

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'customCss',
})<WrapperProps>`
  position: relative;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};

  ${({ customCss }) => customCss && customCss};
`;

export const GradientBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'customCss' && prop !== 'loaded' && prop !== 'borderRadius',
})<GradientProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
  opacity: ${({ loaded }) => (loaded ? 0.2 : 0)};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  transition: opacity 0.5s ease-in-out;

  ${({ customCss }) => customCss && customCss};
`;

export const Img = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'customCss' && prop !== 'loaded' && prop !== 'borderRadius',
})<ImgProps>`
  width: inherit;
  height: inherit;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  ${({ customCss }) => customCss && customCss};
`;
