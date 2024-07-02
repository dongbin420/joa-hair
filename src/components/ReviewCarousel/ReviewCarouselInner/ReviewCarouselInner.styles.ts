import { styled } from 'styled-components';

export const ReviewCarouselInnerContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'activeIndex' && prop !== 'isTransition',
})<{ activeIndex: number; isTransition: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: ${({ isTransition }) => (isTransition ? 'transform 0.8s ease-in-out' : 'none')};
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;
