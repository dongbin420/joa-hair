import { http, HttpResponse } from 'msw';
import {
  BUSINESS_CLOSE_HOUR,
  BUSINESS_OPEN_HOUR,
  SLOT_INTERVAL_MINUTES,
} from './../constants/timeSlot';
import { buildTimeCells } from '../data/mockCalendarData';

const toHourString = (hour: number) => `${hour.toString().padStart(2, '0')}:00`;

export const timeSlotHandlers = [
  http.get('/calendar/time-slots', ({ request }) => {
    console.info('[MSW HIT]', request.url);
    const url = new URL(request.url);
    const dateParam = url.searchParams.get('date');
    const serviceIds = url.searchParams.getAll('serviceIds');

    const durationParam = url.searchParams.get('durationMinutes');

    if (!dateParam) {
      return HttpResponse.json({ error: 'Missing date query parameter' }, { status: 400 });
    }

    if (!serviceIds || serviceIds.length === 0) {
      return HttpResponse.json({ error: 'Missing serviceIds query parameter' }, { status: 400 });
    }

    if (!durationParam) {
      return HttpResponse.json(
        { error: 'Missing durationMinutes query parameter' },
        { status: 400 },
      );
    }

    const durationMinutes = Number(durationParam);

    if (!Number.isFinite(durationMinutes) || durationMinutes <= 0) {
      return HttpResponse.json(
        { error: 'Invalid durationMinutes query parameter' },
        { status: 400 },
      );
    }

    const serverNow = new Date();

    const timeCells = buildTimeCells({
      date: dateParam,
      durationMinutes,
      serverNow,
    });

    const timeSlotData = {
      date: dateParam,
      grid: {
        businessOpen: toHourString(BUSINESS_OPEN_HOUR),
        businessClose: toHourString(BUSINESS_CLOSE_HOUR),
        slotIntervalMinutes: SLOT_INTERVAL_MINUTES,
      },
      timeCells,
    };

    return HttpResponse.json(timeSlotData);
  }),
];
