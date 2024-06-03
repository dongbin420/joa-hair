import { styled } from 'styled-components';
import { AccordionProps } from './Accordion';

export const AccordionContainer = styled.div<AccordionProps>`
  width: ${({ width = 'auto' }) => width};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }

  ${(props) => props.customCss}
`;
