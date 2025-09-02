import styled from 'styled-components';

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
