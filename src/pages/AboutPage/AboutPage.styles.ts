import { styled } from 'styled-components';

export const AboutPageContainer = styled.div`
  max-width: 1440px;
  padding: 0 ${(props) => props.theme.spacing.spacing8};
  padding-bottom: ${(props) => props.theme.spacing.spacing10};
  margin: ${({ theme }) => theme.spacing.spacing12} auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.spacing10};
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
  gap: ${(props) => props.theme.spacing.spacing7};
  margin-bottom: ${(props) => props.theme.spacing.spacing10};
  text-align: center;
`;

export const TitleFirst = styled.p`
  font-weight: 100;
  font-size: ${({ theme }) => theme.heading.xl.fontSize};
`;

export const TitleSecond = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.heading.md.fontSize};
`;

export const IntroduceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.spacing8};
  font-weight: 300;
  font-size: ${({ theme }) => theme.text.lg.fontSize};
  line-height: ${({ theme }) => theme.text.lg.lineHeight};
  padding-left: ${(props) => props.theme.spacing.spacing12};
  padding-right: ${(props) => props.theme.spacing.spacing12};
`;

export const IntroduceText = styled.p<{ index?: number }>`
  font-weight: ${({ index }) => (index === 3 ? '600' : '300')};
  font-family: sans-serif;
`;
