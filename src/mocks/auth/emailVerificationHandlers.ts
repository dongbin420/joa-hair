import { http, HttpResponse } from 'msw';

const FIXED_CODE = '123456';
const EXPIRES_IN_SEC = 300;

const expiresAtByEmail = new Map<string, number>();

const normalizeEmail = (email: string | undefined) =>
  typeof email === 'string' ? email.trim().toLowerCase() : '';

export const emailVerificationHandlers = [
  http.post('/api/auth/email/send-code', async ({ request }) => {
    const body = await request.json();
    const email = normalizeEmail((body as { email?: string })?.email);

    if (!email) {
      return HttpResponse.json({ error: 'missing_email' }, { status: 400 });
    }

    const expiresAt = Date.now() + EXPIRES_IN_SEC * 1000;
    expiresAtByEmail.set(email, expiresAt);

    return HttpResponse.json(
      {
        success: true,
        expiresInSec: EXPIRES_IN_SEC,
      },
      { status: 200 },
    );
  }),
  http.post('/api/auth/email/verify-code', async ({ request }) => {
    const body = await request.json();
    const email = normalizeEmail((body as { email?: string })?.email);
    const rawCode = (body as { code?: string })?.code;
    const code = typeof rawCode === 'string' ? rawCode.trim() : '';

    console.log(expiresAtByEmail);

    if (!email) {
      return HttpResponse.json({ error: 'missing_email' }, { status: 400 });
    }

    const expiresAt = expiresAtByEmail.get(email);

    if (!expiresAt) {
      return HttpResponse.json({ error: 'code_not_sent' }, { status: 400 });
    }

    if (Date.now() > expiresAt) {
      return HttpResponse.json({ error: 'expired' }, { status: 400 });
    }

    if (code !== FIXED_CODE) {
      return HttpResponse.json({ error: 'invalid_code' }, { status: 400 });
    }

    return HttpResponse.json({ success: true }, { status: 200 });
  }),
];
