import * as S from './BookingInner.styles';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useFormContext } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';
import { selectionConfig } from '../Booking.config';
import Selection from '../components/common/Selection/Selection';
import SelectionTitle from '../components/common/SelectionTitle/SelectionTitle';
import InputContent from '../components/common/InputContent/InputContent';
import ServiceAccordion from '../components/ServiceSelection/ServiceAccordion/ServiceAccordion';
import NextButton from '../components/common/NextButton/NextButton';
import BackButton from '../components/common/BackButton/BackButton';

function BookingInner() {
  const { handleSubmit, register } = useFormContext<BookingFormData>();
  const { onSubmit } = useBookingContext();

  return (
    <S.BookingContainer onSubmit={handleSubmit(onSubmit)}>
      {selectionConfig.map(({ step, title, showSelectedServices }) => (
        <Selection key={step}>
          <SelectionTitle step={step} title={title} showSelectedServices={showSelectedServices} />
          <InputContent step={step}>
            {step === 1 && (
              <>
                <ServiceAccordion />
                <NextButton step={step} />
              </>
            )}
            {step === 2 && (
              <>
                hi
                {/* 아래 인풋은 step2 컴포넌트를 만든 후, 거기에 삽입되어야 함. */}
                <input
                  type="hidden"
                  {...register('date', {
                    validate: () => {
                      console.log('date!!');
                      return true;
                    },
                  })}
                />
                <input
                  type="hidden"
                  {...register('startTime', {
                    validate: () => {
                      console.log('startTime!!');
                      return true;
                    },
                  })}
                />
                <S.StepButtonContainer>
                  <NextButton step={step} />
                  <BackButton />
                </S.StepButtonContainer>
              </>
            )}
            {step === 3 && (
              <>
                bye
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
