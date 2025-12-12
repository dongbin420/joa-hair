import { useForm } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';
import { FieldErrors } from 'react-hook-form';

const useBookingForm = () => {
  const methods = useForm<BookingFormData>({
    defaultValues: {
      serviceIds: [],
      date: '',
      startTime: '',
      customer: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        emailVerificationCode: '',
        emailVerified: false,
        note: '',
      },
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const addService = (service: string) => {
    const currentServices = methods.getValues('serviceIds');

    if (!currentServices.includes(service)) {
      methods.setValue('serviceIds', [...currentServices, service], { shouldValidate: true });
    }
  };

  const removeService = (service: string) => {
    const currentServices = methods.getValues('serviceIds');

    if (!currentServices.includes(service)) {
      return;
    }

    methods.setValue(
      'serviceIds',
      currentServices.filter((item) => item !== service),
      { shouldValidate: true },
    );
  };

  const onSubmit = (data: BookingFormData) => {
    console.log('제출!!');
    console.log(data);
  };

  const onInvalid = (errors: FieldErrors<BookingFormData>) => {
    console.log('폼 제출시 필드값 검증 에러', errors);
  };

  const selectStartTime = (selected: string) => {
    methods.setValue('startTime', selected, { shouldValidate: true });
  };

  return { methods, onSubmit, addService, removeService, selectStartTime, onInvalid };
};

export default useBookingForm;
