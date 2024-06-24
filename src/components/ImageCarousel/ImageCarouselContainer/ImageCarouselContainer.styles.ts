import { styled } from 'styled-components';

export const ImageCarouselContainer = styled.div<{ width?: string; height?: string }>`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
