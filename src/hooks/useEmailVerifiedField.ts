import { useEffect } from 'react';
import type { UseFormRegister, UseFormSetValue, UseFormUnregister } from 'react-hook-form';
import type { BookingFormData } from '@/types/bookingType';
import type { VerificationStatus } from '@/types/emailVerificationType';

type Params = {
  register: UseFormRegister<BookingFormData>;
  unregister: UseFormUnregister<BookingFormData>;
  setValue: UseFormSetValue<BookingFormData>;
  status: VerificationStatus;
};

export const useEmailVerifiedField = ({ register, unregister, setValue, status }: Params) => {
  useEffect(() => {
    register('customer.emailVerified', {
      validate: (value) => value === true || 'Please verify your email.',
    });

    return () => unregister('customer.emailVerified');
  }, [register, unregister]);

  useEffect(() => {
    setValue('customer.emailVerified', status === 'verified', { shouldValidate: true });
  }, [setValue, status]);
};
