import { styled, css } from 'styled-components';
import { GradientProps } from '@/components/ImgWrapper/ImgWrapper.styles';

export const PageBannerContainer = styled.div`
  width: 100%;
  height: 370px;
  position: relative;
`;

export const ImgWrapperCustomCss = {
  img: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  gradient: css<GradientProps>`
    opacity: ${({ loaded }) => (loaded ? 0.3 : 0)};
  `,
};

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing6};
`;

export const PageTitle = styled.h3`
  font-size: ${({ theme }) => theme.heading.xxl.fontSize};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.heading.xl.fontSize};
  }
`;

export const PageText = styled.p`
  font-size: ${({ theme }) => theme.text.xl.fontSize};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.text.lg.fontSize};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.text.md.fontSize};
  }
`;
