import * as S from './ConfirmBookingModal.styles';

interface ConfirmBookingModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function ConfirmBookingModal({ open, onClose, onConfirm }: ConfirmBookingModalProps) {
  if (!open) return null;

  return (
    <S.Backdrop onClick={onClose}>
      <S.Container onClick={(event) => event.stopPropagation()}>
        <S.Eyebrow>When you confirm your booking</S.Eyebrow>
        <S.List>
          <li>Same-day cancellations may incur a penalty.</li>
          <li>Please arrive 10 minutes before your appointment.</li>
        </S.List>
        <S.Question>Would you like to confirm your booking?</S.Question>
        <S.Actions>
          <S.SecondaryButton type="button" onClick={onClose}>
            Review details
          </S.SecondaryButton>
          <S.PrimaryButton type="button" onClick={onConfirm}>
            Confirm booking
          </S.PrimaryButton>
        </S.Actions>
      </S.Container>
    </S.Backdrop>
  );
}

export default ConfirmBookingModal;
