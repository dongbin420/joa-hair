import * as S from './AccordionHeader.styles';
import { useAccordionContext } from '@/hooks/useAccordionContext';
import type { PropsWithChildren } from 'react';
import triangleUpIcon from '@/assets/imgs/svg/triangleUp.svg';

interface AccordionHeaderProps {
  idx: number;
}

function AccordionHeader({ children, idx }: PropsWithChildren<AccordionHeaderProps>) {
  const { activeIndex, toggleAccordion } = useAccordionContext();

  return (
    <S.AccordionHeaderContainer isOpen={idx === activeIndex}>
      <S.ClickAreaButton
        isOpen={idx === activeIndex}
        onClick={() => toggleAccordion(idx)}
        aria-expanded={idx === activeIndex}
      >
        <img src={triangleUpIcon} alt="triangle icon in Accordion" />
        {children}
      </S.ClickAreaButton>
    </S.AccordionHeaderContainer>
  );
}

export default AccordionHeader;
