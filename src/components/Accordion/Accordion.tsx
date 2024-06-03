import * as S from './Accordion.styles';
import AccordionProvider from './AccordionProvider/AccordionProvider';
import AccordionItem from './AccordionItem/AccordionItem';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionBody from './AccordionBody/AccordionBody';
import type { PropsWithChildren } from 'react';
import type { CSSProp } from 'styled-components';

export interface AccordionProps {
  width?: string;
  customCss?: CSSProp;
}

function Accordion({ children, width, customCss }: PropsWithChildren<AccordionProps>) {
  return (
    <AccordionProvider>
      <S.AccordionContainer width={width} customCss={customCss}>
        {children}
      </S.AccordionContainer>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
