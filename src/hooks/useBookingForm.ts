import { useForm } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '@/apis/bookingApi';
import type { BookingFormData } from '@/types/bookingType';

const useBookingForm = () => {
  const navigate = useNavigate();
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

  const onSubmit = async (data: BookingFormData) => {
    try {
      const booking = await createBooking(data);
      navigate('/booking/confirmation', { state: { booking } });
    } catch (error) {
      console.error('Failed to create booking', error);
    }
  };

  const onInvalid = (errors: FieldErrors<BookingFormData>) => {
    console.log('Invalid booking form submission', errors);
  };

  const selectStartTime = (selected: string) => {
    methods.setValue('startTime', selected, { shouldValidate: true });
  };

  return { methods, onSubmit, addService, removeService, selectStartTime, onInvalid };
};

export default useBookingForm;
