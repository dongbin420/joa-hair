import { http, HttpResponse } from 'msw';
import type { BookingFormData, BookingResponse } from '@/types/bookingType';

const generateId = () => Math.random().toString(36).slice(2, 10);

export const bookingHandlers = [
  http.post('/reservations', async ({ request }) => {
    const body = (await request.json()) as BookingFormData;

    if (!body?.serviceIds?.length || !body.date || !body.startTime || !body.customer) {
      return HttpResponse.json({ error: 'invalid_payload' }, { status: 400 });
    }

    const response: BookingResponse = {
      id: generateId(),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      serviceIds: body.serviceIds,
      date: body.date,
      startTime: body.startTime,
      customer: {
        firstName: body.customer.firstName,
        lastName: body.customer.lastName,
        email: body.customer.email,
        phone: body.customer.phone,
        note: body.customer.note,
      },
    };

    return HttpResponse.json(response, { status: 201 });
  }),
];
