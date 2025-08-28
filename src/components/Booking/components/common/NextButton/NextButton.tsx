import * as S from './NextButton.styles';
import { useFormContext } from 'react-hook-form';
import { useBookingContext } from '@/hooks/useBookingContext';

// 다른 셀렉션 컴포넌트에서도 쓸 수 있게 조정
function NextButton() {
  const { formState } = useFormContext();
  const { handleNextStep } = useBookingContext();

  return (
    <S.ButtonContainer>
      <S.NextButton
        type="button"
        onClick={handleNextStep}
        disabled={!formState.isValid}
        isActive={formState.isValid}
      >
        NEXT STEP
      </S.NextButton>
    </S.ButtonContainer>
  );
}

export default NextButton;
