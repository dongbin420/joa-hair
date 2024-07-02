import { styled } from 'styled-components';
import { PreviousIcon, NextIcon } from '@/assets/imgs/svg/index';

export const ReviewCarouselButtonContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  top: 0;
`;

export const CarouselPrevButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.spacing5} ${({ theme }) => theme.spacing.spacing5};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    padding-left: ${({ theme }) => theme.spacing.spacing2};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0;
  }
`;

export const CarouselNextButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.spacing5} ${({ theme }) => theme.spacing.spacing5};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    padding-right: ${({ theme }) => theme.spacing.spacing2};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0;
  }
`;

export const StyledPreviousIcon = styled(PreviousIcon)`
  fill: black;
  width: 50px;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 35px;
    height: 35px;
  }
`;

export const StyledNextIcon = styled(NextIcon)`
  fill: black;
  width: 50px;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 35px;
    height: 35px;
  }
`;
