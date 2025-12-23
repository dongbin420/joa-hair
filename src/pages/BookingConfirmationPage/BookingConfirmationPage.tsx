import { useLocation, useNavigate } from 'react-router-dom';
import type { BookingResponse } from '@/types/bookingType';
import * as S from './BookingConfirmationPage.styles';

type LocationState = {
  booking?: BookingResponse;
};

function BookingConfirmationPage() {
  const { state } = useLocation() as { state?: LocationState };
  const navigate = useNavigate();
  const booking = state?.booking;

  if (!booking) {
    return (
      <S.Container>
        <S.Title>Reservation not found</S.Title>
        <S.Description>예약 정보가 없습니다. 다시 예약을 진행해주세요.</S.Description>
        <S.Actions>
          <S.PrimaryButton type="button" onClick={() => navigate('/booking')}>
            Go to booking
          </S.PrimaryButton>
        </S.Actions>
      </S.Container>
    );
  }

  const { customer, serviceIds, date, startTime, status } = booking;

  return (
    <S.Container>
      <S.Badge>{status}</S.Badge>
      <S.Title>Reservation confirmed</S.Title>
      <S.Description>
        Thank you, {customer.firstName}! Your appointment is confirmed. A confirmation has been sent
        to {customer.email}.
      </S.Description>

      <S.Section>
        <S.SectionTitle>Appointment</S.SectionTitle>
        <S.Row>
          <S.Label>Date</S.Label>
          <S.Value>{date}</S.Value>
        </S.Row>
        <S.Row>
          <S.Label>Time</S.Label>
          <S.Value>{startTime}</S.Value>
        </S.Row>
        <S.Row>
          <S.Label>Services</S.Label>
          <S.Value>{serviceIds.join(', ')}</S.Value>
        </S.Row>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Contact</S.SectionTitle>
        <S.Row>
          <S.Label>Name</S.Label>
          <S.Value>
            {customer.firstName} {customer.lastName}
          </S.Value>
        </S.Row>
        <S.Row>
          <S.Label>Email</S.Label>
          <S.Value>{customer.email}</S.Value>
        </S.Row>
        <S.Row>
          <S.Label>Phone</S.Label>
          <S.Value>{customer.phone}</S.Value>
        </S.Row>
        {customer.note && (
          <S.Row>
            <S.Label>Note</S.Label>
            <S.Value>{customer.note}</S.Value>
          </S.Row>
        )}
      </S.Section>

      <S.Actions>
        <S.PrimaryButton type="button" onClick={() => navigate('/')}>
          Back to home
        </S.PrimaryButton>
        <S.SecondaryButton type="button" onClick={() => navigate('/booking')}>
          Make another booking
        </S.SecondaryButton>
      </S.Actions>
    </S.Container>
  );
}

export default BookingConfirmationPage;
