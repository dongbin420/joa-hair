import { styled } from 'styled-components';
import { Circle } from '@/assets/imgs/svg/index';

export const ReviewCarouselIndicatorContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;

  top: 0;
`;

export const StyledCircleIcon = styled(Circle).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  fill: ${({ isActive, theme }) => (isActive ? 'black' : theme.color.gray400)};
  width: 10px;
  height: 10px;
  cursor: pointer;
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 10px;
    height: 10px;
  }
`;
