import * as S from './BookingInner.styles';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useFormContext } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';
import { selectionConfig } from '../Booking.config';
import Selection from '../components/common/Selection/Selection';
import SelectionTitle from '../components/common/SelectionTitle/SelectionTitle';
import InputContent from '../components/common/InputContent/InputContent';
import ServiceAccordion from '../components/ServiceSelection/ServiceAccordion/ServiceAccordion';
import BookingSummary from '../components/BookingSummary/BookingSummary';
import NextButton from '../components/common/NextButton/NextButton';
import BackButton from '../components/common/BackButton/BackButton';
import DateSelection from '../components/DateSelection/DateSelection';

function BookingInner() {
  const { handleSubmit } = useFormContext<BookingFormData>();
  const { onSubmit, onInvalid } = useBookingContext();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <S.BookingContainer
      noValidate
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      onKeyDown={handleKeyDown}
    >
      {selectionConfig.map(({ step, title, showSelectedServices, showSelectedDateAndTime }) => (
        <Selection key={step}>
          <SelectionTitle
            step={step}
            title={title}
            showSelectedServices={showSelectedServices}
            showSelectedDateAndTime={showSelectedDateAndTime}
          />
          <InputContent step={step}>
            {step === 1 && (
              <>
                <ServiceAccordion />
                <NextButton step={step} />
              </>
            )}
            {step === 2 && (
              <>
                <DateSelection />
                <S.StepButtonContainer>
                  <NextButton step={step} />
                  <BackButton />
                </S.StepButtonContainer>
              </>
            )}
            {step === 3 && (
              <>
                <BookingSummary />
                <S.StepButtonContainer>
                  <BackButton />
                </S.StepButtonContainer>
              </>
            )}
          </InputContent>
        </Selection>
      ))}
    </S.BookingContainer>
  );
}

export default BookingInner;
