import { styled } from 'styled-components';
import { Scissors, Products, UserHeart, TwoHearts } from '@/assets/imgs/svg/index';
import { ComponentType } from 'react';

export const PromiseBoxContainerContainer = styled.div`
  background-color: white;
  padding-top: ${(props) => props.theme.spacing.spacing10};
`;

export const PromiseBoxTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.heading.lg.fontSize};
  font-weight: 500;

  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.heading.md.fontSize};
  }
`;

export const PromiseBoxContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: ${(props) => props.theme.spacing.spacing10} ${(props) => props.theme.spacing.spacing8};
  gap: ${({ theme }) => theme.spacing.spacing6};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.spacing8};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.spacing10};
  }
`;

export const InformationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-basis: calc(50% - ${({ theme }) => theme.spacing.spacing8} / 2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: 80%;
  }
`;

export const InformationTitle = styled.p`
  font-size: ${({ theme }) => theme.text.lg.fontSize};
  font-weight: 500;
  margin: ${({ theme }) => theme.spacing.spacing6} 0;
  text-align: center;
`;

export const InformationText = styled.p`
  font-weight: 200;
  font-size: ${({ theme }) => theme.text.sm.fontSize};
  line-height: ${({ theme }) => theme.text.sm.lineHeight};
  text-align: center;
`;

const withStyledIcon = <P extends object>(svg: ComponentType<P>) => styled(svg)<P>`
  width: 50px;
  height: 50px;
`;

export const StyledScissorsIcon = withStyledIcon(Scissors);
export const StyledProductsIcon = withStyledIcon(Products);
export const StyledUserHeartIcon = withStyledIcon(UserHeart);
export const StyledTwoHeartsIcon = withStyledIcon(TwoHearts);
