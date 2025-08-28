import { useState, createContext } from 'react';
import type { PropsWithChildren } from 'react';
import useBookingForm from '@/hooks/useBookingForm';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';

interface BookingContextValue {
  onSubmit: SubmitHandler<BookingFormData>;
  addService: (serviceId: string) => void;
  removeService: (serviceId: string) => void;
  handleNextStep: () => void;
  activeStep: number;
}

export const BookingContext = createContext<BookingContextValue | null>(null);

function BookingProvider({ children }: PropsWithChildren) {
  const [activeStep, setActiveStep] = useState(1);
  const [isAdvancing, setIsAdvancing] = useState(false); // 중복 클릭 방지(trigger 비동기)
  const { methods, onSubmit, addService, removeService } = useBookingForm();

  // 다른 컴포넌트에서도 사용할 수 있게 수정(지금은 serviceIds에 대해서만 가능)
  const handleNextStep = async () => {
    if (isAdvancing) return;
    setIsAdvancing(true);

    try {
      const valid = await methods.trigger('serviceIds');
      if (!valid) return;
      setActiveStep((prev) => (prev < 3 ? prev + 1 : prev));
    } finally {
      setIsAdvancing(false);
    }
  };

  // back 버튼 구현시, 위 handleNextStep 참고해서 좀 더 디테일하게 수정
  const handleBackStep = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <BookingContext.Provider
        value={{ onSubmit, addService, removeService, handleNextStep, activeStep }}
      >
        {children}
      </BookingContext.Provider>
    </FormProvider>
  );
}

export default BookingProvider;
