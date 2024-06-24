import { styled } from 'styled-components';

export const ImageCarouselInnerContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'activeIndex',
})<{ activeIndex: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;
