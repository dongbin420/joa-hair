import { styled } from 'styled-components';

export const ReviewCarouselItemContainer = styled.div`
  flex: 0 0 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewProfile = styled.img`
  width: 80px;
  height: 80px;
  text-align: center;
`;

export const ReviewText = styled.p`
  font-size: ${({ theme }) => `${theme.text.lg.fontSize}`};
  text-align: center;
  font-weight: 300;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => `${theme.text.md.fontSize}`};
  }
`;

export const ReviewName = styled.p`
  text-align: center;
  font-family: 'Themunday', 'customArial', Helvetica, sans-serif;
  font-weight: 700;
  font-size: ${({ theme }) => `${theme.text.lg.fontSize}`};
  font-style: italic;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing6};
  padding: 0 ${({ theme }) => theme.spacing.spacing14};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.spacing13};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.spacing12};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.spacing10};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 ${({ theme }) => theme.spacing.spacing8};
  }
`;
