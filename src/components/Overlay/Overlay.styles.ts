import { styled, keyframes, css } from 'styled-components';

const unfold = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const OverlayContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.spacing8};
  padding-top: ${({ theme }) => theme.spacing.spacing10};
  font-size: ${({ theme }) => theme.heading.lg.fontSize};
  animation: ${unfold} 0.5s ease forwards;
  background-color: ${({ theme }) => theme.color.orange50};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.heading.md.fontSize};
  }
`;

export const OverlayContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing10};
`;

export const OverlayLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing8};
`;

export const NavLinkWrapper = styled.div`
  a {
    &.active {
      border-bottom: 3px solid ${({ theme }) => theme.color.orange600};
      color: ${({ theme }) => theme.color.orange600};
    }
  }
`;

export const IconLink = styled.a``;

export const IconWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing4};
  margin-top: ${(props) => props.theme.spacing.spacing2};
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export const CloseCustomCss = {
  wrapper: css`
    cursor: pointer;
  `,
};

export const ButtonLink = styled.a``;

export const ButtonCustomCss = css`
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 12px 35px;
  }
`;
