import { styled } from 'styled-components';

export const AccordionBodyContainer = styled.div<{ isOpen: boolean; height: number }>`
  overflow: hidden;
  height: ${({ isOpen, height }) => (isOpen ? height + 22 : 0)}px;
  transition: height 0.4s ease;
  padding: 0 6px;
  font-size: ${({ theme }) => theme.text.md.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.text.sm.fontSize};
  }
`;
