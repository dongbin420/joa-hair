import { styled, css } from 'styled-components';
import { GradientProps } from '@/components/ImgWrapper/ImgWrapper.styles';
import { QuotesUp, QuotesDown } from '@/assets/imgs/svg/index';

interface IntroTextTitle {
  margin?: string;
}

interface IntroTextContent extends IntroTextTitle {}

export const MainPageContainer = styled.div`
  max-width: 1440px;
  padding: 0 ${(props) => props.theme.spacing.spacing8};
  padding-bottom: ${(props) => props.theme.spacing.spacing10};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing.spacing10};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 ${(props) => props.theme.spacing.spacing4};
    padding-bottom: ${(props) => props.theme.spacing.spacing10};
  }
`;

export const FirstSection = styled.section`
  display: flex;
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing.spacing10};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
    order: 0;
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
    margin-bottom: 125px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 140px;
    line-height: 140px;
    margin-top: ${({ theme }) => `${theme.spacing.spacing12}`};
    margin-bottom: 155px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 115px;
    line-height: 115px;
    margin-top: ${({ theme }) => `${theme.spacing.spacing13}`};
    margin-bottom: 198px;
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
    line-height: ${({ theme }) => `${theme.heading.lg.lineHeight}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => `${theme.heading.md.fontSize}`};
    line-height: ${({ theme }) => `${theme.heading.md.lineHeight}`};
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
  gradient: css<GradientProps>`
    transition: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      opacity: ${({ loaded }) => (loaded ? 0.3 : 0)};
    }
  `,
  img: css`
    transition: none;
  `,
};

export const SecondSection = styled.section`
  padding-top: ${(props) => props.theme.spacing.spacing10};
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing10}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: ${({ theme }) => theme.spacing.spacing7};
    order: 2;
  }
`;

export const IntroContentWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing10};
  border: 2px solid ${({ theme }) => `${theme.color.orange500}`};
  border-bottom: none;
  padding: ${(props) => props.theme.spacing.spacing7};
  padding-bottom: ${(props) => props.theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing12}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.spacing5};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.spacing2};
  }
`;

export const IntroTextWrapper = styled.div`
  color: ${({ theme }) => `${theme.color.orange600}`};
  flex: 1;
`;

export const IntroTextHeading = styled.h4`
  font-weight: 400;
  font-size: ${({ theme }) => `${theme.heading.sm.fontSize}`};
  margin-left: ${({ theme }) => `${theme.spacing.spacing2}`};
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing4}`};
`;

export const IntroTextTitle = styled.h3.withConfig({
  shouldForwardProp: (prop) => prop !== 'margin',
})<IntroTextTitle>`
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

export const IntroTextContent = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== 'margin',
})<IntroTextContent>`
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
    flex: 1;
  `,

  img: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};

export const ButtonCustomCss = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: ${({ theme }) => theme.spacing.spacing15};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 16px 45px;
    margin-top: ${({ theme }) => theme.spacing.spacing17};
  }
`;

export const ButtonLink = styled.a`
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

export const ThirdSection = styled.section`
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing14}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
    order: 3;
  }
`;

export const InstagramGridContainer = styled.div``;

export const InstagramGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => `${theme.color.orange500}`};
  border-bottom: none;
  padding: ${(props) => props.theme.spacing.spacing7} ${(props) => props.theme.spacing.spacing10};
  padding-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${(props) => props.theme.spacing.spacing7} ${(props) => props.theme.spacing.spacing5};
    padding-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacing.spacing7} ${(props) => props.theme.spacing.spacing3};
    padding-bottom: 0;
  }
`;

export const InstagramGridTitle = styled.h3`
  font-weight: 400;
  color: ${({ theme }) => `${theme.color.orange600}`};
  font-size: ${({ theme }) => `${theme.heading.xl.fontSize}`};
  margin-bottom: ${(props) => props.theme.spacing.spacing8};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => `${theme.heading.md.fontSize}`};
  }
`;

export const InstagramGridCustomCss = {
  post: css`
    aspect-ratio: 1 / 1;
  `,

  grid: css`
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
};

export const FourthSection = styled.section`
  margin-bottom: ${({ theme }) => `${theme.spacing.spacing12}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 4;
  }
`;

export const ReviewCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => `${theme.color.orange500}`};
  border-bottom: none;
  padding: ${(props) => props.theme.spacing.spacing10} 0;
  padding-bottom: 0;
  position: relative;
`;

export const ReviewTitle = styled.p`
  font-size: ${({ theme }) => `${theme.text.xl.fontSize}`};
  font-weight: 600;
  text-align: center;
`;

export const StyledQuotesUp = styled(QuotesUp)`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 25%;
  left: 12%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledQuotesDown = styled(QuotesDown)`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 8%;
  right: 12%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 60px;
    height: 60px;
  }
`;
