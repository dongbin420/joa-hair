import * as S from './NextButton.styles';
import { useEffect, useState } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import { useBookingContext } from '@/hooks/useBookingContext';
import { selectionConfig } from './../../../Booking.config';

interface NextButtonProps {
  step: number;
}

function NextButton({ step }: NextButtonProps) {
  const { getFieldState, trigger, control } = useFormContext();
  const { handleNextStep, activeStep } = useBookingContext();
  const [buttonReady, setButtonReady] = useState(false);
  const formData = selectionConfig[step - 1].formData;
  const fs = useFormState({ control, name: formData });
  const anyInvalid = formData.some((field) => getFieldState(field, fs).invalid);
  const buttonDisabled = !buttonReady || anyInvalid;

  // 초기 검증 강제 실행 용.(invalid 초기 값이 false인 것을 대비)
  useEffect(() => {
    (async () => {
      await trigger(formData, { shouldFocus: false });
      setButtonReady(true);
    })();
  }, [trigger, formData]);

  return (
    <S.ButtonContainer>
      <S.NextButton
        type="button"
        onClick={() => handleNextStep(activeStep)}
        disabled={buttonDisabled}
        isActive={!buttonDisabled}
      >
        NEXT STEP
      </S.NextButton>
    </S.ButtonContainer>
  );
}

export default NextButton;
