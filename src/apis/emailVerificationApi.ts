import { http } from './http';

export type VerifyEmailCodeErrorType = 'expired' | 'code_not_sent' | 'invalid';

export type VerifyEmailCodeErrorResponse = {
  error?: VerifyEmailCodeErrorType | string;
};

export const requestEmailCode = async (email: string): Promise<{ expiresInSec: number }> => {
  const { data } = await http.post<{ expiresInSec: number }>('/api/auth/email/send-code', {
    email,
  });

  return {
    expiresInSec: Number(data?.expiresInSec) || 300,
  };
};

export const requestVerifyEmailCode = async (email: string, code: string): Promise<void> => {
  return http.post('/api/auth/email/verify-code', { email, code }).then(() => undefined);
};
