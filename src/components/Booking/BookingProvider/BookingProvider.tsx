import { useState, createContext } from 'react';
import type { PropsWithChildren } from 'react';
import useBookingForm from '@/hooks/useBookingForm';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';
import { selectionConfig, TOTAL_STEPS } from './../Booking.config';

interface BookingContextValue {
  onSubmit: SubmitHandler<BookingFormData>;
  addService: (serviceId: string) => void;
  removeService: (serviceId: string) => void;
  handleNextStep: (active: number) => void;
  handleBackStep: () => void;
  activeStep: number;
}

export const BookingContext = createContext<BookingContextValue | null>(null);

function BookingProvider({ children }: PropsWithChildren) {
  const [activeStep, setActiveStep] = useState(1);
  const [isAdvancing, setIsAdvancing] = useState(false); // 중복 클릭 방지(trigger 비동기)
  const { methods, onSubmit, addService, removeService } = useBookingForm();

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
    setActiveStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <FormProvider {...methods}>
      <BookingContext.Provider
        value={{ onSubmit, addService, removeService, handleNextStep, handleBackStep, activeStep }}
      >
        {children}
      </BookingContext.Provider>
    </FormProvider>
  );
}

export default BookingProvider;
