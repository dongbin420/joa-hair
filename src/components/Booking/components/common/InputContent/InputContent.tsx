import * as S from './InputContent.styles';
import { useBookingContext } from '@/hooks/useBookingContext';
import type { PropsWithChildren } from 'react';

interface InputContentProp extends PropsWithChildren {
  step: number;
}

function InputContent({ step, children }: InputContentProp) {
  const { activeStep } = useBookingContext();

  return (
    <S.ServiceContentWrapper isActive={activeStep === step}>{children}</S.ServiceContentWrapper>
  );
}

export default InputContent;
