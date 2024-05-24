import { styled, css } from 'styled-components';

interface IntroTextTitle {
  margin?: string;
}

interface IntroTextContent extends IntroTextTitle {}

export const MainPageContainer = styled.div`
  max-width: 1600px;
  padding: 0 ${(props) => props.theme.spacing.spacing8};
  padding-bottom: ${(props) => props.theme.spacing.spacing10};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
`;

export const FirstSection = styled.section`
  display: flex;
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing.spacing10};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

export const MainContentWrapper = styled.div`
  position: absolute;
  font-family: 'Themunday', sans-serif;
  padding: ${({ theme }) => `${theme.spacing.spacing10} 0`};
  color: ${({ theme }) => `${theme.color.orange600}`};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: ${({ theme }) => theme.spacing.spacing5};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    margin-top: 0;
  }
`;

export const MainTitleWrapper = styled.div`
  font-size: 200px;
  line-height: 200px;
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing7}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 170px;
    line-height: 170px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: ${({ theme }) => `${theme.spacing.spacing8}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 140px;
    line-height: 140px;
    margin-top: ${({ theme }) => `${theme.spacing.spacing12}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 115px;
    line-height: 115px;
    margin-top: ${({ theme }) => `${theme.spacing.spacing13}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 100px;
    line-height: 100px;
    margin-top: ${({ theme }) => `${theme.spacing.spacing14}`};
  }
`;

export const MainTitleInlineWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.spacing.spacing9}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const MainTitle = styled.p<{ inlineBlock?: boolean }>`
  overflow: hidden;
`;

export const MainTextWrapper = styled.div`
  font-size: ${({ theme }) => `${theme.heading.xl.fontSize}`};
  line-height: ${({ theme }) => `${theme.heading.xxl.lineHeight}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => `${theme.heading.lg.fontSize}`};
    line-height: ${({ theme }) => `${theme.heading.xl.lineHeight}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MainText = styled.p``;

export const MainImgCustomCss = {
  wrapper: css`
    margin-left: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      width: 500px;
      height: 700px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin-left: 0;
      width: 100%;
      max-width: 550px;
    }
  `,
  gradient: css`
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      opacity: 0.4;
    }
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

export const ButtonCustomCss = css`
  align-self: center;
`;
