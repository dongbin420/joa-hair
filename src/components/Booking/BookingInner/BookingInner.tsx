import * as S from './BookingInner.styles';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useFormContext } from 'react-hook-form';
import ServiceSelection from '../components/ServiceSelection/ServiceSelection';
import DateSelection from '../components/DateSelection/DateSelection';
import BookingSummary from '../components/BookingSummary/BookingSummary';
import { BookingFormData } from '@/types/bookingType';

function BookingInner() {
  const { handleSubmit } = useFormContext<BookingFormData>();
  const { onSubmit } = useBookingContext();

  return (
    <S.BookingContainer onSubmit={handleSubmit(onSubmit)}>
      <ServiceSelection />
      <DateSelection />
      <BookingSummary />
    </S.BookingContainer>
  );
}

export default BookingInner;
