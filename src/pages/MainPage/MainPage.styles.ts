import { styled, css } from 'styled-components';

interface IntroTextTitle {
  margin?: string;
}

interface IntroTextContent extends IntroTextTitle {}

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

export const MainImgCustomCss = {
  wrapper: css`
    margin-left: auto;
  `,
};

export const SecondSection = styled.section`
  padding-top: ${(props) => props.theme.spacing.spacing10};
`;

export const IntroContentWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing10};
  border: 2px solid ${({ theme }) => `${theme.color.orange500}`};
  border-bottom: none;
  padding: ${(props) => props.theme.spacing.spacing7};
  padding-bottom: ${(props) => props.theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing12}`};
`;

export const IntroTextWrapper = styled.div`
  color: ${({ theme }) => `${theme.color.orange600}`};
`;

export const IntroTextHeading = styled.h4`
  font-weight: 400;
  font-size: ${({ theme }) => `${theme.heading.sm.fontSize}`};
  margin-left: ${({ theme }) => `${theme.spacing.spacing2}`};
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing4}`};
`;

export const IntroTextTitle = styled.h3<IntroTextTitle>`
  font-weight: 100;
  font-family: 'Themunday', sans-serif;
  font-size: ${({ theme }) => `${theme.heading.xxl.fontSize}`};
  line-height: ${({ theme }) => `${theme.heading.xl.lineHeight}`};
  display: inline-block;

  ${({ margin }) => {
    if (margin === 'right') {
      return css`
        margin-right: ${({ theme }) => `${theme.spacing.spacing5}`};
      `;
    } else if (margin === 'bottom') {
      return css`
        margin-bottom: ${({ theme }) => `${theme.spacing.spacing8}`};
      `;
    }
  }};
`;

export const IntroTextContent = styled.p<IntroTextContent>`
  font-size: ${({ theme }) => `${theme.text.xl.fontSize}`};
  font-weight: 300;

  ${({ margin }) => {
    if (margin === 'bottom') {
      return css`
        margin-bottom: ${({ theme }) => `${theme.spacing.spacing5}`};
      `;
    }
  }};
`;

export const IntroImgCustomCss = {
  wrapper: css`
    margin-top: ${({ theme }) => `${theme.spacing.spacing4}`};
  `,
};
