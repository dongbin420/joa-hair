import { styled } from 'styled-components';

export const ReviewCarouselContainer = styled.div<{ width?: string; height?: string }>`
  position: relative;
  overflow: hidden;
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  padding: ${({ theme }) => theme.spacing.spacing12} 0;
`;
