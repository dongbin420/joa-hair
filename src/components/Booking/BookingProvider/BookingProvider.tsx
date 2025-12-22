import { useState, createContext } from 'react';
import type { PropsWithChildren } from 'react';
import useBookingForm from '@/hooks/useBookingForm';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';
import { selectionConfig, TOTAL_STEPS } from './../Booking.config';
import { FieldErrors } from 'react-hook-form';

interface BookingContextValue {
  onSubmit: SubmitHandler<BookingFormData>;
  onInvalid: (errors: FieldErrors<BookingFormData>) => void;
  addService: (serviceId: string) => void;
  removeService: (serviceId: string) => void;
  handleNextStep: (active: number) => void;
  handleBackStep: () => void;
  activeStep: number;
  selected: Date | undefined;
  showTime: boolean;
  setSelected: (date: Date | undefined) => void;
  setShowTime: (isShowTime: boolean) => void;
  selectStartTime: (selected: string) => void;
}

export const BookingContext = createContext<BookingContextValue | null>(null);

function BookingProvider({ children }: PropsWithChildren) {
  // (임시#1)
  // activeStep을 개발하는 동안 편의를 위해 초기 값을 2로 바꿈. 개발 후에는 꼭 1로 다시 바꿔야 함.
  // => 바꿨음
  const [activeStep, setActiveStep] = useState(1);
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [showTime, setShowTime] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false); // 중복 클릭 방지(trigger 비동기)
  const { methods, onSubmit, addService, removeService, selectStartTime, onInvalid } =
    useBookingForm();

  const handleNextStep = async (active: number) => {
    if (isAdvancing) return;

    setIsAdvancing(true);
    const formData = selectionConfig[active - 1].formData;

    try {
      const valid = await methods.trigger(formData, { shouldFocus: true });
      if (!valid) return;
      setActiveStep((prev) => (prev < TOTAL_STEPS ? prev + 1 : prev));
    } finally {
      setIsAdvancing(false);
    }
  };

  const handleBackStep = () => {
    if (activeStep === 2) {
      methods.setValue('startTime', '', { shouldValidate: true });
    }

    setActiveStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <FormProvider {...methods}>
      <BookingContext.Provider
        value={{
          onSubmit,
          onInvalid,
          addService,
          removeService,
          handleNextStep,
          handleBackStep,
          activeStep,
          selected,
          setSelected,
          showTime,
          setShowTime,
          selectStartTime,
        }}
      >
        {children}
      </BookingContext.Provider>
    </FormProvider>
  );
}

export default BookingProvider;
