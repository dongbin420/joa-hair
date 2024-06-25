import { styled } from 'styled-components';

export const AboutPageContainer = styled.div`
  max-width: 1440px;
  padding: 0 ${(props) => props.theme.spacing.spacing14};
  margin: 0 auto;
  margin-top: ${(props) => props.theme.spacing.spacing12};
  margin-bottom: ${(props) => props.theme.spacing.spacing10};
  padding-bottom: ${(props) => props.theme.spacing.spacing10};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${(props) => props.theme.spacing.spacing7};
    padding-bottom: ${(props) => props.theme.spacing.spacing10};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.spacing9};
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing2};
  font-family: 'Themunday', sans-serif;
  color: ${(props) => props.theme.color.orange600};
  font-weight: 500;
  overflow: visible;
  font-size: 90px;
  line-height: ${({ theme }) => theme.heading.sm.lineHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.heading.xxl.fontSize};
  }
`;

export const LogoTop = styled.p`
  padding-top: ${(props) => props.theme.spacing.spacing2};
`;

export const LogoBottom = styled.p`
  padding-top: ${(props) => props.theme.spacing.spacing2};
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing6};
  margin-bottom: ${(props) => props.theme.spacing.spacing10};
  text-align: center;
`;

export const TitleFirst = styled.p`
  font-weight: 100;
  font-size: ${({ theme }) => theme.heading.xl.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.heading.lg.fontSize};
  }
`;

export const TitleSecond = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.heading.md.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.heading.sm.fontSize};
  }
`;

export const IntroduceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.spacing6};
  font-weight: 300;
  font-size: ${({ theme }) => theme.text.lg.fontSize};
  line-height: ${({ theme }) => theme.text.md.lineHeight};
`;

export const IntroduceText = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== 'index',
})<{ index?: number }>`
  font-weight: ${({ index }) => (index === 3 ? '600' : '300')};
  margin-bottom: ${({ index, theme }) => (index === 2 ? theme.spacing.spacing6 : '0px')};
  font-family: sans-serif;
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.spacing.spacing10};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    margin-left: -${(props) => props.theme.spacing.spacing6};
    margin-right: -${(props) => props.theme.spacing.spacing6};
  }
`;
