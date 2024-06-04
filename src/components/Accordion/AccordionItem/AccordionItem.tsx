import * as S from './AccordionItem.styles';
import type { PropsWithChildren } from 'react';

function AccordionItem({ children }: PropsWithChildren) {
  return <S.AccordionItemContainer>{children}</S.AccordionItemContainer>;
}

export default AccordionItem;
