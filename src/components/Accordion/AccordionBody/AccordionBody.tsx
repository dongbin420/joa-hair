import { useState, useEffect, useRef } from 'react';
import * as S from './AccordionBody.styles';
import { useAccordionContext } from '@/hooks/useAccordionContext';
import { PropsWithChildren } from 'react';

interface AccordionBodyProps {
  idx: number;
}

function AccordionBody({ children, idx }: PropsWithChildren<AccordionBodyProps>) {
  const { activeIndex } = useAccordionContext();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setHeight(idx === activeIndex ? ref.current.scrollHeight : 0);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [idx, activeIndex]);

  return (
    <S.AccordionBodyContainer isOpen={idx === activeIndex} height={height}>
      <div ref={ref}>{children}</div>
    </S.AccordionBodyContainer>
  );
}

export default AccordionBody;
