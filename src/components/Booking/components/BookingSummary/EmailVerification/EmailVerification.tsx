import { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { BookingFormData } from '@/types/bookingType';
import * as S from '../UserInfo/UserInfo.styles';
import { EMAIL_PATTERN } from '@/utils/regex';
import { formatSeconds, normalizeEmail } from '@/utils/emailVerificationUtils';
import { VerificationStatus } from '@/types/emailVerificationType';
import { useEmailVerifiedField } from '@/hooks/useEmailVerifiedField';
import { useEmailCountdown } from '@/hooks/useEmailCountdown';
import {
  requestEmailCode,
  requestVerifyEmailCode,
  VerifyEmailCodeErrorType,
} from '@/apis/emailVerificationApi';
import axios from 'axios';

function EmailVerification() {
  const {
    register,
    watch,
    trigger,
    setValue,
    clearErrors,
    setError,
    unregister,
    formState: { errors },
  } = useFormContext<BookingFormData>();

  const email = watch('customer.email');
  const code = watch('customer.emailVerificationCode');
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const isIdle = status === 'idle';
  const isSending = status === 'sending';
  const isCodeSent = status === 'codeSent';
  const isVerifying = status === 'verifying';
  const isVerified = status === 'verified';
  const isExpired = status === 'expired';

  useEmailVerifiedField({ register, unregister, setValue, status });

  const { remainingSeconds, setRemainingSeconds } = useEmailCountdown({
    isActive: isCodeSent || isVerifying,
    onExpire: () => setStatus('expired'),
  });

  const isCodeFormatValid = /^[0-9]{6}$/.test(code?.trim() ?? '');
  const normalizedEmail = normalizeEmail(email);
  const emailPatternValid = EMAIL_PATTERN.test(normalizedEmail);
  const canChangeEmail = isCodeSent || isExpired;
  const showCodeInput = !isVerified && !isIdle && !isSending;
  const showTimer = (isCodeSent || isVerifying) && remainingSeconds > 0;

  const sendButtonDisabled =
    isSending ||
    isVerifying ||
    isVerified ||
    (isCodeSent && remainingSeconds > 0) ||
    !emailPatternValid;

  const verifyButtonDisabled =
    isSending || isExpired || isVerified || isIdle || !emailPatternValid || !isCodeFormatValid;

  let sendButtonLabel = 'Send code';

  if (isVerified) {
    sendButtonLabel = 'Verified';
  } else if (isSending) {
    sendButtonLabel = 'Sending...';
  } else if (showTimer) {
    sendButtonLabel = 'Code sent';
  }

  const emailError = errors.customer?.email?.message;
  const verifiedError = errors.customer?.emailVerified?.message;
  const codeError = errors.customer?.emailVerificationCode?.message;
  const emailErrorType = errors.customer?.email?.type;

  const handleUnlockEmail = useCallback(() => {
    setStatus('idle');
    setRemainingSeconds(0);
    setValue('customer.emailVerificationCode', '', { shouldValidate: true });
    clearErrors(['customer.email', 'customer.emailVerificationCode', 'customer.emailVerified']);
  }, [clearErrors, setValue, setRemainingSeconds]);

  const handleSendCode = useCallback(async () => {
    const emailValid = await trigger('customer.email', { shouldFocus: true });
    if (!emailValid) return;

    try {
      setStatus('sending');
      const { expiresInSec } = await requestEmailCode(normalizedEmail);
      setRemainingSeconds(expiresInSec);
      setStatus('codeSent');
      setValue('customer.emailVerificationCode', '', { shouldValidate: true });
      clearErrors(['customer.emailVerificationCode', 'customer.emailVerified']);
    } catch (error) {
      setStatus('idle');
      setError('customer.email', {
        type: 'manual',
        message: 'Failed to send verification code. Please try again.',
      });
    }
  }, [clearErrors, normalizedEmail, setValue, trigger, setError, setRemainingSeconds]);

  const handleVerifyCode = useCallback(async () => {
    if (isVerifying) return;
    const codeValid = await trigger('customer.emailVerificationCode', { shouldFocus: true });
    if (!codeValid) return;

    if (isExpired) {
      setError('customer.emailVerificationCode', {
        type: 'manual',
        message: 'The code has expired. Please resend.',
      });

      return;
    }

    try {
      setStatus('verifying');
      const normalizedEmail = normalizeEmail(email);
      const trimmedCode = (code ?? '').trim();

      await requestVerifyEmailCode(normalizedEmail, trimmedCode);

      setStatus('verified');
      clearErrors(['customer.emailVerificationCode', 'customer.emailVerified']);
    } catch (err) {
      const raw = axios.isAxiosError(err) ? err.response?.data?.error : undefined;
      const errorType: VerifyEmailCodeErrorType =
        raw === 'expired' || raw === 'code_not_sent' ? raw : 'invalid';

      let message = 'Invalid verification code. Please try again.';
      let nextStatus: VerificationStatus = 'codeSent';

      if (errorType === 'expired') {
        message = 'The code has expired. Please resend.';
        nextStatus = 'expired';
      } else if (errorType === 'code_not_sent') {
        message = 'Send the verification code first.';
        nextStatus = 'codeSent';
      }

      setStatus(nextStatus);
      setError('customer.emailVerificationCode', { type: 'manual', message });
    }
  }, [clearErrors, code, email, isVerifying, isExpired, setError, setStatus, trigger]);

  return (
    <S.Field>
      <S.Label htmlFor="customer-email">Email address</S.Label>
      <S.InlineFieldRow>
        <S.Input
          id="customer-email"
          type="email"
          placeholder="Email address (required)"
          autoComplete="email"
          disabled={!isIdle}
          {...register('customer.email', {
            required: 'Please enter your email address.',
            validate: (value) => {
              const normalized = normalizeEmail(value);
              if (!normalized) return 'Please enter your email address.';
              if (!EMAIL_PATTERN.test(normalized)) return 'Please enter a valid email address.';
              return true;
            },
          })}
        />
        {!isVerified && (
          <>
            <S.SecondaryButton type="button" onClick={handleSendCode} disabled={sendButtonDisabled}>
              {sendButtonLabel}
            </S.SecondaryButton>
            {canChangeEmail && (
              <S.SecondaryButton type="button" onClick={handleUnlockEmail}>
                Change email
              </S.SecondaryButton>
            )}
          </>
        )}
      </S.InlineFieldRow>
      {emailError && <S.ErrorText>{emailError}</S.ErrorText>}
      {verifiedError && isIdle && emailErrorType !== 'manual' && (
        <S.ErrorText>{verifiedError}</S.ErrorText>
      )}
      {isVerified && <S.SuccessText>Email verified.</S.SuccessText>}

      {showCodeInput && (
        <>
          <S.CodeRow>
            <S.Input
              id="customer-email-code"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="Enter the 6-digit code"
              maxLength={6}
              disabled={false}
              {...register('customer.emailVerificationCode', {
                validate: (value) => {
                  const trimmed = value?.trim();
                  if (!trimmed) return 'Enter the verification code.';
                  if (!/^[0-9]{6}$/.test(trimmed)) return 'Enter a 6-digit code.';
                  return true;
                },
              })}
            />
            <S.SecondaryButton
              type="button"
              onClick={handleVerifyCode}
              disabled={verifyButtonDisabled}
            >
              Verify code
            </S.SecondaryButton>
          </S.CodeRow>
          <S.HelperStack>
            {isExpired ? (
              <S.ErrorText>The code has expired. Please resend.</S.ErrorText>
            ) : (
              <>
                {showTimer && (
                  <S.TimerRow>
                    <S.TimerText>Expires in {formatSeconds(remainingSeconds)}</S.TimerText>
                    <S.HelperText>{'(demo code: 123456)'}</S.HelperText>
                  </S.TimerRow>
                )}
                {codeError && <S.ErrorText>{codeError}</S.ErrorText>}
              </>
            )}
          </S.HelperStack>
        </>
      )}
    </S.Field>
  );
}

export default EmailVerification;
