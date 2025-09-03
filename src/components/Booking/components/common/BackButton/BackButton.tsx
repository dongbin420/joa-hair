import * as S from './BackButton.styles';
import { useBookingContext } from '@/hooks/useBookingContext';

function BackButton() {
  const { handleBackStep } = useBookingContext();

  return (
    <S.ButtonContainer>
      <S.BackButton type="button" onClick={handleBackStep}>
        BACK
      </S.BackButton>
    </S.ButtonContainer>
  );
}

export default BackButton;
