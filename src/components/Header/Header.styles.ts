import { styled, css } from 'styled-components';

export const HeaderBigContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSticky',
})<{ isSticky: boolean }>`
  width: 100%;
  top: 0;
  position: sticky;
  top: ${({ isSticky }) => (isSticky ? '0' : '-150px')};

  z-index: 10;
  background-color: ${({ isSticky, theme }) =>
    isSticky ? 'rgba(255, 246, 237, 0.9)' : theme.color.orange50};
  box-shadow: ${({ isSticky }) => (isSticky ? '0 0.0625em 0.5em rgba(0, 0, 0, 0.2)' : 'none')};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    top: ${({ isSticky }) => (isSticky ? '0' : '-200px')};
  }
`;

export const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSticky',
})<{ isSticky: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding: ${({ theme, isSticky }) =>
    isSticky
      ? `${theme.spacing.spacing1} ${theme.spacing.spacing8}`
      : `${theme.spacing.spacing7} ${theme.spacing.spacing8} ${theme.spacing.spacing6}`};
  margin: 0 auto;

  // prettier-ignore
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ isSticky, theme }) =>
    isSticky
      ? `${theme.spacing.spacing2} ${theme.spacing.spacing2}`
      : `${theme.spacing.spacing8} ${theme.spacing.spacing8}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ isSticky, theme }) =>
      isSticky
        ? `${theme.spacing.spacing2} ${theme.spacing.spacing2}`
        : `${theme.spacing.spacing8} ${theme.spacing.spacing8}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ isSticky, theme }) =>
      isSticky
        ? `${theme.spacing.spacing2} ${theme.spacing.spacing2}`
        : `${theme.spacing.spacing8} ${theme.spacing.spacing4}`};
  }
`;

export const HeaderFirst = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing9};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${(props) => props.theme.spacing.spacing7};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto;
  }
`;

export const LogoWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSticky',
})<{ isSticky: boolean }>`
  font-family: 'Themunday', 'customArial', Helvetica, sans-serif;
  color: ${(props) => props.theme.color.black};
  margin-right: ${(props) => props.theme.spacing.spacing2};
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;

  font-size: ${({ isSticky, theme }) =>
    isSticky ? theme.heading.md.fontSize : theme.heading.lg.fontSize};

  line-height: ${({ isSticky, theme }) =>
    isSticky ? theme.text.sm.lineHeight : theme.text.xl.lineHeight};

  display: ${({ isSticky }) => (isSticky ? 'flex' : 'block')};

  gap: ${({ isSticky, theme }) => (isSticky ? `${theme.spacing.spacing2}` : '0px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow: visible;
    margin-left: ${(props) => props.theme.spacing.spacing8};

    display: ${({ isSticky }) => (isSticky ? 'flex' : 'block')};

    gap: ${({ isSticky, theme }) => (isSticky ? `${theme.spacing.spacing2}` : '0px')};

    font-size: ${({ isSticky, theme }) =>
      isSticky ? theme.heading.md.fontSize : theme.heading.xl.fontSize};

    line-height: ${({ isSticky, theme }) =>
      isSticky ? theme.text.sm.lineHeight : theme.heading.sm.lineHeight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ isSticky, theme }) =>
      isSticky ? theme.heading.md.fontSize : theme.heading.lg.fontSize};

    line-height: ${({ isSticky, theme }) =>
      isSticky ? theme.text.sm.lineHeight : theme.text.lg.lineHeight};
  }
`;

export const LogoTop = styled.p`
  padding-top: ${(props) => props.theme.spacing.spacing2};
`;

export const LogoBottom = styled.p`
  padding-top: ${(props) => props.theme.spacing.spacing2};
`;

export const NavElement = styled.div`
  color: ${({ theme }) => `${theme.color.orange600}`};
  font-size: ${(props) => props.theme.text.lg.fontSize};

  &:hover {
    color: ${(props) => props.theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HeaderSecond = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing6};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${(props) => props.theme.spacing.spacing3};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const IconLink = styled.a``;

export const Icon = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSticky',
})<{ isSticky: boolean }>`
  cursor: pointer;
  width: 50px;
  height: 50px;

  width: ${({ isSticky }) => (isSticky ? '40px' : '50px')};
  height: ${({ isSticky }) => (isSticky ? '40px' : '50px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 40px;
    height: 40px;
  }
`;

export const ButtonLink = styled.a`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const ButtonCustomCss = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 8px 25px;
    font-size: ${(props) => props.theme.text.md.fontSize};
  }
`;

export const HamburgerCustomCss = {
  wrapper: css`
    display: none;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  `,
};
