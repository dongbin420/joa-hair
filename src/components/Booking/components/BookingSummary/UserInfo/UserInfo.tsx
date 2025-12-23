import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { BookingFormData } from '@/types/bookingType';
import * as S from './UserInfo.styles';
import EmailVerification from '../EmailVerification/EmailVerification';
import { useBookingContext } from '@/hooks/useBookingContext';
import ConfirmBookingModal from '../ConfirmBookingModal/ConfirmBookingModal';

function UserInfo() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const {
    register,
    trigger,
    handleSubmit,
    formState: { isValid, errors },
  } = useFormContext<BookingFormData>();
  const { onSubmit, onInvalid } = useBookingContext();

  const handleOpenConfirm = async () => {
    const valid = await trigger();
    if (!valid) return;
    setIsConfirmOpen(true);
  };

  const handleCloseConfirm = () => setIsConfirmOpen(false);

  const handleConfirmBooking = () => {
    handleSubmit(
      (data) => {
        onSubmit(data);
        setIsConfirmOpen(false);
      },
      (submitErrors) => {
        onInvalid(submitErrors);
        setIsConfirmOpen(false);
      },
    )();
  };

  return (
    <S.Card>
      <S.Header>
        <S.Title>Your details</S.Title>
        <S.Subtitle>We&apos;ll use this information to confirm and update your booking.</S.Subtitle>
      </S.Header>

      <S.FieldsGrid>
        <S.Field>
          <S.Label htmlFor="customer-firstName">First name</S.Label>
          <S.Input
            id="customer-firstName"
            placeholder="First name (required)"
            {...register('customer.firstName', { required: 'Please enter your first name.' })}
          />
          {errors.customer?.firstName?.message && (
            <S.ErrorText>{errors.customer?.firstName?.message}</S.ErrorText>
          )}
        </S.Field>
        <S.Field>
          <S.Label htmlFor="customer-lastName">Last name</S.Label>
          <S.Input
            id="customer-lastName"
            placeholder="Last name (required)"
            {...register('customer.lastName', { required: 'Please enter your last name.' })}
          />
          {errors.customer?.lastName?.message && (
            <S.ErrorText>{errors.customer?.lastName?.message}</S.ErrorText>
          )}
        </S.Field>
        <EmailVerification />
        <S.Field>
          <S.Label htmlFor="customer-phone">Mobile number</S.Label>
          <S.Input
            id="customer-phone"
            type="tel"
            placeholder="Mobile number (required)"
            autoComplete="tel"
            {...register('customer.phone', {
              required: 'Please enter your mobile number.',
              pattern: {
                value: /^[0-9+()\s-]{8,20}$/,
                message: 'Enter a valid phone number (8-20 digits).',
              },
            })}
          />
          {errors.customer?.phone?.message && (
            <S.ErrorText>{errors.customer?.phone?.message}</S.ErrorText>
          )}
        </S.Field>
      </S.FieldsGrid>

      <S.Field>
        <S.Label htmlFor="customer-note">Note to your stylist</S.Label>
        <S.TextArea
          id="customer-note"
          placeholder="Share any preferences or notes (optional)"
          {...register('customer.note')}
        />
      </S.Field>

      <S.SubmitButtonRow>
        <S.SubmitButton
          type="button"
          isActive={isValid}
          disabled={!isValid}
          onClick={handleOpenConfirm}
        >
          BOOK APPOINTMENT
        </S.SubmitButton>
      </S.SubmitButtonRow>

      <ConfirmBookingModal
        open={isConfirmOpen}
        onClose={handleCloseConfirm}
        onConfirm={handleConfirmBooking}
      />
    </S.Card>
  );
}

export default UserInfo;
