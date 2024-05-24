import { styled, css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.orange50};
  max-width: 1600px;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing7} ${theme.spacing.spacing8} ${theme.spacing.spacing6}`};
  margin: 0 auto;

  // prettier-ignore
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${(props) => props.theme.spacing.spacing8} ${(props) => props.theme.spacing.spacing8};
  }
`;

export const HeaderFirst = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing9};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin: 0 auto;
  }
`;

export const LogoWrapper = styled.div`
  font-family: 'Themunday', sans-serif;
  font-size: ${(props) => props.theme.heading.lg.fontSize};
  line-height: ${(props) => props.theme.text.xl.lineHeight};
  color: ${(props) => props.theme.color.black};
  margin-right: ${(props) => props.theme.spacing.spacing2};
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${(props) => props.theme.heading.xl.fontSize};
    overflow: visible;
    line-height: ${(props) => props.theme.heading.sm.lineHeight};
    margin-left: ${(props) => props.theme.spacing.spacing8};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${(props) => props.theme.heading.lg.fontSize};
    line-height: ${(props) => props.theme.text.lg.lineHeight};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`;

export const HeaderSecond = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing6};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`;

export const IconLink = styled.a``;

export const Icon = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export const ButtonLink = styled.a`
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`;

export const HamburgerCustomCss = {
  wrapper: css`
    display: none;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      display: block;
    }
  `,
};
