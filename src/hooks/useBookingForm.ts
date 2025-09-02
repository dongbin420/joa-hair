import { useForm } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';

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
        note: '',
      },
    },
  });

  const addService = (service: string) => {
    const currentServices = methods.getValues('serviceIds');

    if (!currentServices.includes(service)) {
      methods.setValue('serviceIds', [...currentServices, service], { shouldValidate: true });
    }
  };

  const removeService = (service: string) => {
    const currentServices = methods.getValues('serviceIds');

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

  return { methods, onSubmit, addService, removeService };
};

export default useBookingForm;
