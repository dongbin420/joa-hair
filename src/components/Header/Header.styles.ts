import { styled, css } from 'styled-components';

export const HeaderBigContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSticky',
})<{ isSticky: boolean }>`
  width: 100%;

  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'static')};
  top: 0;

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

export const ButtonLink = styled.div`
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
