import { styled, css } from 'styled-components';

export const MainPageContainer = styled.div`
  max-width: 1600px;
  padding: 0 ${(props) => props.theme.spacing.spacing8};
  margin: 0 auto;
`;

export const FirstSection = styled.section`
  display: flex;
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing.spacing10};
`;

export const MainContentWrapper = styled.div`
  position: absolute;
  font-family: 'Themunday', sans-serif;
  padding: ${({ theme }) => `${theme.spacing.spacing10} 0`};
  color: ${({ theme }) => `${theme.color.orange600}`};
  z-index: 1;
`;

export const MainTitleWrapper = styled.div`
  font-size: 200px;
  line-height: 200px;
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing7}`};
`;

export const MainTitle = styled.p`
  overflow: hidden;
`;

export const MainTextWrapper = styled.div`
  font-size: ${({ theme }) => `${theme.heading.xl.fontSize}`};
  line-height: ${({ theme }) => `${theme.heading.xxl.lineHeight}`};
`;

export const MainText = styled.p``;

export const ImgWrapperCumstomCss = {
  wrapper: css`
    margin-left: auto;
  `,

  img: css`
    border-radius: 20px;
  `,

  gradient: css`
    border-radius: 20px;
  `,
};

export const SecondSection = styled.section``;

export const IntroContentWrapper = styled.div``;
