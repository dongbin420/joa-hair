import styled from 'styled-components';

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
